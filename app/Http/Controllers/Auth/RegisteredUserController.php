<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
	/**
	 * Display the registration view.
	 */
	public function create(): Response
	{
		$layout = config('settings.general.auth_layout');

		return Inertia::render('auth/Register', compact('layout'));
	}

	/**
	 * Handle an incoming registration request.
	 *
	 * @throws \Illuminate\Validation\ValidationException
	 */
	public function store(Request $request): RedirectResponse
	{
		$request->validate([
			'username' => 'required|string|max:255|unique:' . User::class,
			'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
			'password' => ['required', 'confirmed', Rules\Password::defaults()],
		]);

		$user = User::create([
			'username' => $request->username,
			'email' => $request->email,
			'password' => Hash::make($request->password),
		]);

		$user->assignRole('User');

		event(new Registered($user));

		Auth::login($user);

		return redirect(route('dashboard', absolute: false));
	}
}
