<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\InAppNotification;
use Inertia\Response;

class NotificationController extends Controller
{
	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index(Request $request): Response
	{
		$per_page = 15;

		$notifications = InAppNotification::orderBy($request->order ?? 'id', $request->dir === 'ascending' ? 'asc' : 'desc')
			->paginate($per_page);

		return Inertia::render('admin/notifications/Notifications', compact('notifications'));
	}


	/**
	 * STORE
	 * 
	 * 
	 * 
	 */
	public function store(Request $request)
	{

		$request->validate([
			'body' => 'required',
		], [
			'body.required' => 'Notification body is required.',
		]);

		InAppNotification::create($request->all());

		return back()->with('success', 'Notification created successfully.');

		// if ($request->notification_for_all) {
		// 	$users = User::all();

		// 	foreach ($users as $user) {
		// 		$user->notify(new InAppNotification($title, $request->body));
		// 	}

		// 	return back()->with('success', 'Notifications sent successfully.');
		// } else {
		// 	dd($request->all());
		// 	$notification = new InAppNotification($title, $request->body, $request->user);
		// }
	}


	/**
	 * UPDATE
	 * 
	 * 
	 * 
	 */
	public function update(Request $request, InAppNotification $notification)
	{
		$request->validate([
			'body' => 'required',
		], [
			'body.required' => 'Notification body is required.',
		]);

		$notification->update($request->all());

		return back()->with('success', 'Notification updated successfully.');
	}

	/**
	 * DELETE
	 * 
	 * 
	 * 
	 */
	public function destroy(InAppNotification $notification)
	{
		$notification->delete();
		return back()->with('success', 'Notification deleted successfully.');
	}
}
