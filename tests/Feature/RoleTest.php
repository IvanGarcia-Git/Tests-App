<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use App\Models\User;

class RoleTest extends TestCase
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
		Role::create(['name' => 'Super Admin']);

		$this->user->assignRole('Super Admin');
	}


	/**
	 * Test that the roles list can be rendered
	 *
	 * @return void
	 */
	public function test_roles_list_can_be_rendered()
	{
		$response = $this->actingAs($this->user)->get(route('dashboard.role.list'));
		$response->assertStatus(200);
	}

	public function test_role_can_be_created()
	{
		$response = $this
			->actingAs($this->user)
			->post(route('dashboard.role.store'), [
				'name' => 'Test Role',
			]);

		$response->assertStatus(302);
	}


	/**
	 * Test that a role can be edited
	 *
	 * @return void
	 */
	public function test_role_can_be_edited()
	{
		$role = Role::create(['name' => 'Test Role']);

		$response = $this
			->actingAs($this->user)
			->put(route('dashboard.role.update', $role));

		$response->assertStatus(302);
	}

	/**
	 * Test that a role can be deleted
	 *
	 * @return void
	 */
	public function test_role_can_be_deleted()
	{
		$role = Role::create(['name' => 'Test Role']);

		$response = $this
			->actingAs($this->user)
			->delete(route('dashboard.role.destroy', $role));

		$response->assertStatus(302);
	}


	/**
	 * Test that a role can't be edited if is protected
	 *
	 * @return void
	 */
	public function test_protected_role_can_not_be_edited()
	{
		$role = Role::where('name', config('settings.auth.protected_roles')[0])->firstOrFail();

		$response = $this
			->actingAs($this->user)
			->put(route('dashboard.role.update', $role));

		$response->assertRedirect(route('dashboard.role.list'));
		$response->assertSessionHas('error');
	}

	/**
	 * Test that a role can't be deleted if is protected
	 *
	 * @return void
	 */
	public function test_protected_role_can_not_be_deleted()
	{
		$role = Role::where('name', config('settings.auth.protected_roles')[0])->firstOrFail();

		$response = $this
			->actingAs($this->user)
			->delete(route('dashboard.role.destroy', $role));

		$response->assertRedirect(route('dashboard.role.list'));
		$response->assertSessionHas('error');
	}
}
