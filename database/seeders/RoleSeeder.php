<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;



class RoleSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		/**
		 * Reset permissions
		 */
		app()[PermissionRegistrar::class]->forgetCachedPermissions();


		$superAdmin = Role::create(['name' => 'Super Admin']);
		$admin = Role::create(['name' => 'Admin']);
		$user = Role::create(['name' => 'User']);

		// Create permission
		$superAdminAccess = Permission::create(['name' => 'Super Admin Access']);
		$adminAcces = Permission::create(['name' => 'Admin Access']);
		$privateAccess = Permission::create(['name' => 'Private Access']);

		// Assign permissions to roles
		$superAdmin->givePermissionTo($superAdminAccess, $adminAcces);
		$admin->givePermissionTo($adminAcces);
		$user->givePermissionTo($privateAccess);
	}
}
