<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UserAdminController extends Controller
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

		$users = User::role('Admin')->paginate($per_page);
		$total = User::count();
		return Inertia::render('admin/users/AdministratorsList', compact('users', 'total'));
	}

	/**
	 * SHOW
	 * 
	 * 
	 * 
	 */
	public function show(User $user)
	{
		$user['role'] = $user->roles->pluck('name')->first();
		return Inertia::render('admin/users/Edit', compact('user'));
	}
}
