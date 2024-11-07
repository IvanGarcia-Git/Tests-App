<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Intervention\Image\Laravel\Facades\Image;
use Illuminate\Contracts\Auth\MustVerifyEmail;


class ProfileController extends Controller
{
	/**
	 * EDIT
	 * 
	 * 
	 * 
	 */
	public function edit(Request $request): Response
	{
		return Inertia::render('profile/Edit', [
			'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
			'status' => session('status'),
		]);
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(ProfileUpdateRequest $request): RedirectResponse
	{
		$request->user()->fill($request->validated());

		if ($request->user()->isDirty('email')) {
			$request->user()->email_verified_at = null;
		}

		$request->user()->save();
		return back()->with('success', 'Your profile was updated successfully.');
	}

	/**
	 * UPDATE IMAGE PROFILE
	 * 
	 * 
	 * 
	 */
	public function update_image(Request $request)
	{
		$user = $request->user();

		if ($request->hasFile('profile_picture')) {
			$currentImagePath = '/public/img/users/avatars/' . $user->profile_picture;
			if (Storage::exists($currentImagePath)) {
				Storage::delete($currentImagePath);
			}


			$file = $request->file('profile_picture');
			$filename = time() . '.webp';
			$image = Image::read($file);
			$image
				->resize(256, 256)
				->toWebp(100)
				->save("storage/img/users/avatars/$filename");

			if ($filename) {
				$user->update(['profile_picture' => $filename]);
			}
		}
	}

	/**
	 * REMOVE IMAGE PROFILE
	 * 
	 * 
	 * 
	 */
	public function remove_image(Request $request)
	{
		$user = $request->user();

		$imagePath = '/public/img/users/avatars/' . $user->profile_picture;

		if (Storage::exists($imagePath)) {
			Storage::delete($imagePath);
		}

		$user->update(['profile_picture' => null]);
		return back()->with('success', 'Image removed successfully.');
	}

	/**
	 * DELETE ACCOUNT
	 * 
	 * 
	 * 
	 */
	public function destroy(Request $request): RedirectResponse
	{
		$request->validate([
			'password' => ['required', 'current_password'],
		]);

		$user = $request->user();

		Auth::logout();

		$user->delete();

		$request->session()->invalidate();
		$request->session()->regenerateToken();

		return Redirect::to('/');
	}
}
