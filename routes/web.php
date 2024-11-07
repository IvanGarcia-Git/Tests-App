<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MediaManagerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
	return Inertia::render('Welcome', [
		'canLogin' => Route::has('login'),
		'canRegister' => Route::has('register'),
		'laravelVersion' => Application::VERSION,
		'phpVersion' => PHP_VERSION,
	]);
});


Route::middleware(['auth', 'verified'])->group(function () {
	Route::get('dashboard', function () {
		return Inertia::render('Dashboard');
	})
	->name('dashboard');

	Route::get('profile', [ProfileController::class, 'edit'])
		->name('profile.edit');

	Route::match(['put', 'patch'], 'profile', [ProfileController::class, 'update'])
		->name('profile.update');

	Route::delete('profile', [ProfileController::class, 'destroy'])
		->name('profile.destroy');

	Route::post('profile/image-profile', [ProfileController::class, 'update_image'])
		->name('profile.update_image');

	Route::delete('profile/image-profile', [ProfileController::class, 'remove_image'])
		->name('profile.remove_image');

	// Image uploader
	Route::post('media', [MediaManagerController::class, 'store'])->name('media.upload');
	Route::get('media', [MediaManagerController::class, 'index'])->name('media.list');
	Route::patch('media/{id}', [MediaManagerController::class, 'update'])->name('media.update');
	Route::delete('media/{id}', [MediaManagerController::class, 'destroy'])->name('media.delete');
});



require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/demo.php';
