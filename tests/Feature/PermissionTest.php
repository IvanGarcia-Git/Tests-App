<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class PermissionTest extends TestCase
{
	use RefreshDatabase;

	protected $user;

	/**
	 * Setup the test environment
	 *
	 * Create a user with roles and permissions
	 */
	protected function setUp(): void
	{
		parent::setUp();

		// Create a user with roles and permissions
		$this->user = User::factory()->create();
		$userRole = Role::create(['name' => 'Super Admin']);

		$this->user->assignRole('Super Admin');
	}

	/**
	 * Test that the permissions list can be rendered
	 *
	 * @return void
	 */
	public function test_permissions_list_can_be_rendered()
	{
		$response = $this->actingAs($this->user)->get(route('dashboard.permission.list'));
		$response->assertStatus(200);
	}

	/**
	 * Test that a permission can be created
	 *
	 * @return void
	 */
	public function test_permission_can_be_created()
	{
		$response = $this
			->actingAs($this->user)
			->post(route('dashboard.permission.store'), [
				'name' => 'Test Permission',
			]);

		$response->assertStatus(302);
	}

	/**
	 * Test that a permission can be edited
	 *
	 * @return void
	 */
	public function test_permission_can_be_edited()
	{
		$permission = Permission::create(['name' => 'Test Permission']);

		$response = $this
			->actingAs($this->user)
			->put(route('dashboard.permission.update', $permission));

		$response->assertStatus(302);
	}

	/**
	 * Test that a permission can be deleted
	 *
	 * @return void
	 */
	public function test_permission_can_be_deleted()
	{
		$permission = Permission::create(['name' => 'Test Permission']);

		$response = $this
			->actingAs($this->user)
			->delete(route('dashboard.permission.destroy', $permission));

		$response->assertStatus(302);
	}
}
