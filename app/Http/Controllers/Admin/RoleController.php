<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

use App\Models\User;

class RoleController extends Controller
{

	/**
	 * getPermissionsByGuard
	 */
	protected function getPermissionsByGuard()
	{
		$guards = config('settings.auth.guard_permissions');
		$permissions = [];

		foreach ($guards as $guard_name) {
			$permissions[$guard_name] = Permission::where('guard_name', $guard_name)->get();
		}

		return $permissions;
	}

	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index(Request $request)
	{
		$per_page = 15;

		$roles = Role::with('permissions')
			->withCount('users')
			->orderBy($request->order ?? 'created_at', $request->dir === 'ascending' ? 'asc' : 'desc')
			->paginate($per_page);
		$protected_roles = config('settings.auth.protected_roles');
		$permissions = $this->getPermissionsByGuard();

		return Inertia::render(
			'admin/roles/Roles',
			compact(
				'roles',
				'protected_roles',
				'permissions'
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
			'name' => 'required|unique:roles,name',
		], [
			'name.required' => 'Role name is required.',
			'name.unique' => 'Role name already exists.'
		]);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		$role = Role::create([
			'name' => trim($name)
		]);
		$role->givePermissionTo($request->permissions);

		return redirect()->route('dashboard.role.list')->with('success', 'Role created successfully.');
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, string $id): RedirectResponse
	{

		$request->validate([
			'name' => 'required|unique:roles,name,' . $id,
		], [
			'name.required' => 'Role name is required.',
			'name.unique' => 'Role name already exists.',
		]);

		$role = Role::find($id);

		$name = preg_replace('/\s+/', ' ', $request->name);
		$name = preg_replace('/[^A-Za-z0-9\s]/', '', $name);

		$role->update(['name' => trim($name)]);
		$role->syncPermissions($request->permissions);

		return redirect()->route('dashboard.role.list')->with('success', 'Role updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(string $id): RedirectResponse
	{
		$role = Role::find($id);
		$role->delete();
		return redirect()->route('dashboard.role.list')->with('success', 'Role deleted successfully.');
	}
}
