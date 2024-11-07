<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Spatie\Permission\Models\Role;

class CheckProtectedRole
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response
	{

		$roleId = $request->route('role');
		$role = Role::findOrFail($roleId);
		// dd($role);

		$protectedRoles = config('settings.auth.protected_roles', []);

		if (in_array($role->name, $protectedRoles)) {
			return redirect()
				->route('dashboard.role.list')
				->with('error', 'This role is protected and can not be edited or deleted.');
		}

		return $next($request);
	}
}
