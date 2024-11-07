<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PasswordConfirmationTest extends TestCase
{
	use RefreshDatabase;

	protected $user;

	protected function setUp(): void
	{
		parent::setUp();

		// Create a user with roles and permissions
		$this->user = User::factory()->create();
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
		$this->user->assignRole('User');
	}

	public function test_confirm_password_screen_can_be_rendered(): void
	{
		$response = $this->actingAs($this->user)->get('/confirm-password');
		$response->assertStatus(200);
	}

	public function test_password_can_be_confirmed(): void
	{
		$response = $this->actingAs($this->user)->post('/confirm-password', [
			'password' => 'password',
		]);

		$response->assertRedirect();
		$response->assertSessionHasNoErrors();
	}

	public function test_password_is_not_confirmed_with_invalid_password(): void
	{
		$response = $this->actingAs($this->user)->post('/confirm-password', [
			'password' => 'wrong-password',
		]);

		$response->assertSessionHasErrors();
	}
}
