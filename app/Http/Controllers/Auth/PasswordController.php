<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
	/**
	 * Update the user's password.
	 */
	public function update(Request $request): RedirectResponse
	{
		$validated = $request->validate([
			'current_password' => ['required', 'current_password'],
			'password' => ['required', Password::defaults(), 'confirmed'],
		], [
			'current_password.required' => 'The current password is required.',
			'current_password.current_password' => 'The current password is incorrect.',
			'password.required' => 'A new password is required.',
			'password.confirmed' => 'The password confirmation does not match.',
		]);

		$request->user()->update([
			'password' => Hash::make($validated['password']),
		]);

		return back()->with('success', 'Password updated successfully.');
	}
}
