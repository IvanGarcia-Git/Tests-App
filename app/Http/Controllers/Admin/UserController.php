<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Session;
use Illuminate\Http\Request;
use App\Mail\SendUserDetails;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Http\Requests\Admin\CreateUserRequest;
use Intervention\Image\Laravel\Facades\Image;


class UserController extends Controller
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

		$users = User::role('User')->with('sessions')->paginate($per_page);
		$total = User::count();
		return Inertia::render('admin/users/UsersList', compact('users', 'total'));
	}

	/**
	 * CREATE
	 * 
	 * 
	 * 
	 */
	public function create()
	{
		return Inertia::render('admin/users/Create');
	}

	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(CreateUserRequest $request)
	{
		$user = User::create($request->validated());

		// Assign a role for the user
		$role = Role::findById($request->role);
		$user->assignRole($role);

		// Send email with user details if send_details is true
		if ($request->has('send_details') && $request->send_details) {
			Mail::to($user->email)->send(new SendUserDetails($user, $request->password));
		}

		// Redirect to the user's profile page
		return redirect()->route('dashboard.user.show', $user);
	}

	/**
	 * SHOW
	 * 
	 * 
	 * 
	 */
	public function show(User $user)
	{
		return redirect()->route('dashboard.user.edit', ['user' => $user]);
	}

	/**
	 * EDIT
	 * 
	 * 
	 * 
	 */
	public function edit(User $user)
	{

		$auth = Auth::user();
		$permission = $auth->getPermissionsViaRoles()->pluck('name')->first();

		$user['role'] = $user->roles->pluck('name')->first();

		$sessions = $user->sessions;

		return Inertia::render('admin/users/Edit', compact('user', 'sessions', 'permission'));
	}

	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(UpdateUserRequest $request, User $user): RedirectResponse
	{
		$data = $request->validated();

		// Encrypt password if it's provided
		if (!empty($data['password'])) {
			$data['password'] = bcrypt($data['password']);
		}

		$user->update($data);

		// Assign a role for the user
		if (!empty($data['role'])) {
			$role = Role::findById($data['role']);
			$user->syncRoles([$role]);
		}

		return back()->with('success', 'User updated successfully.');
	}

	/**
	 * UPDATE IMAGE PROFILE
	 * 
	 * 
	 * 
	 */
	public function update_image_profile(User $user, Request $request)
	{
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
	public function remove_image_profile(User $user)
	{

		$imagePath = '/public/img/users/avatars/' . $user->profile_picture;

		if (Storage::exists($imagePath)) {
			Storage::delete($imagePath);
		}

		$user->update(['profile_picture' => null]);
		return back()->with('success', 'Image removed successfully.');
	}

	/**
	 * TERMINATE SESSION
	 * 
	 * 
	 * 
	 */
	public function invalidate_session($id)
	{
		Session::findOrFail($id)->delete();
		return back()->with('success', 'The session was closed.');
	}

	/**
	 * DELETE ACCOUNT
	 * 
	 * 
	 * 
	 */
	public function destroy(User $user)
	{
		$this->remove_image_profile($user);
		$user->delete();
		return redirect()
			->route('dashboard.users.list')
			->with('success', 'The account was deleted.');
	}
}
