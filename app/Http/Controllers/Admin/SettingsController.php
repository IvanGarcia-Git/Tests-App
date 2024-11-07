<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{

	// create an index funtion

	public function index()
	{

		$settings = [
			'general' => config('settings.general')
		];

		return Inertia::render('admin/Settings', compact('settings'));
	}
}
