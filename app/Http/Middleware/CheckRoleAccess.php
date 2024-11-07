<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Symfony\Component\HttpKernel\Exception\HttpException;

class CheckRoleAccess
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response
	{
		$user = Auth::user();
		$targetUser = $request->route('user');

		if ($user->roles->pluck('name')->contains('Super Admin')) {
			return $next($request);
		}

		// Check if the authenticated user is trying to edit another admin
		if ($user->id !== $targetUser->id && $user->roles->pluck('name')->contains('Admin') && $targetUser->hasRole('Admin')) {
			throw new HttpException(403, 'You do not have permission to edit this user.');
		}

		return $next($request);
	}
}
