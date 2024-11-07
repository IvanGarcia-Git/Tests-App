<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index(Request $request)
	{
		$per_page = 15;

		$permissions = Permission::orderBy($request->order ?? 'created_at', $request->dir === 'ascending' ? 'asc' : 'desc')->paginate($per_page);
		$guards = config('settings.auth.guard_permissions');
		$protected_permissions = config('settings.auth.protected_permissions');

		return Inertia::render(
			'admin/permissions/Permissions',
			compact(
				'permissions',
				'guards',
				'protected_permissions'
			)
		);
	}

	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request): RedirectResponse
	{

		$request->validate([
			'name' => 'required|unique:permissions,name'
		], [
			'name.required' => 'Permission name is required.',
			'name.unique' => 'Permission name already exists.',
		]);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		Permission::create(['name' => $name]);

		return back()->with('success', 'Permission created successfully.');
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, Permission $permission): RedirectResponse
	{

		$request->validate([
			'name' => 'required|unique:permissions,name',
		], [
			'name.required' => 'Permission name is required.',
			'name.unique' => 'Permission name already exists.'
		]);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		$permission->update([
			'name' => $name,
		]);

		return back()->with('success', 'Permission updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(Permission $permission): RedirectResponse
	{
		$permission->delete();
		return back()->with('success', 'Permission deleted successfully.');
	}
}
