<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use Illuminate\Support\Facades\Auth;
use App\Providers\AdminNavbarProvider;


class HandleInertiaRequests extends Middleware
{
	/**
	 * The root template that is loaded on the first page visit.
	 *
	 * @var string
	 */
	protected $rootView = 'app';

	/**
	 * Determine the current asset version.
	 */
	public function version(Request $request): string|null
	{
		return parent::version($request);
	}

	/**
	 * Define the props that are shared by default.
	 *
	 * @return array<string, mixed>
	 */
	public function share(Request $request): array
	{

		$user = $request->user();
		$role = $user ? $user->roles->first()->name : null;
		$permissions = $user ? $user->permissions->toArray() : null;
		$user ? $user->preferences : null;

		return [
			...parent::share($request),
			'auth' => [
				'user' => $user,
				'permissions' => $permissions,
				'role' => $role,
				'preferences' => $user ? $user->preferences : null
			],
			'adminNavbar' => app(AdminNavbarProvider::class)->getMenu($user, $role, $permissions),
			'adminLayout' => config('settings.general.admin_layout'),
			'authLayout' => config('settings.general.auth_layout'),
			'colorMode' => config('settings.general.colormode'),
			'adminCanImpersonate' => config('settings.general.admin_can_impersonate'),
			'ziggy' => fn() => [
				...(new Ziggy)->toArray(),
				'location' => $request->url(),
			],
			'flash' => [
				'success' => fn() => $request->session()->get('success'),
				'error' => fn() => $request->session()->get('error'),
				'info' => fn() => $request->session()->get('info'),
			]
		];
	}
}
