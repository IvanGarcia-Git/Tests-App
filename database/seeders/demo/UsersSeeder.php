<?php

namespace Database\Seeders\demo;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		/**
		 * Remove old images
		 */
		$dir = storage_path('app/public/img/users/avatars');

		if (is_dir($dir)) {
			$files = scandir($dir);
			foreach ($files as $file) {
				if ($file != '.' && $file != '..') {
					unlink($dir . '/' . $file);
				}
			}
			rmdir($dir);
		}


		/**
		 * Copy new images
		 */
		$dir = resource_path('js/assets/img/users/avatars');
		$destination = storage_path('app/public/img/users/avatars');

		if (!is_dir($destination)) {
			mkdir($destination, 0775, true);
		}

		$files = scandir($dir);
		foreach ($files as $file) {
			if ($file != '.' && $file != '..') {
				copy($dir . '/' . $file, $destination . '/' . $file);
			}
		}


		User::factory()->create([
			'name' => 'John',
			'lastname' => 'Doe',
			'username' => 'johndoe',
			'email' => 'user@local.com'
		])->assignRole('User');

		User::factory(9)->create()->each(function ($user) {
			$user->assignRole('Admin');
		});

		User::factory(30)->create()->each(function ($user) {
			$user->assignRole('User');
		});
	}
}
