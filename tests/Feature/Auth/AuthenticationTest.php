<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class AuthenticationTest extends TestCase
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

	public function test_login_screen_can_be_rendered(): void
	{
		$response = $this->get('/login');

		$response->assertStatus(200);
	}

	public function test_user_can_authenticate_using_email(): void
	{
		$this->post('/login', [
			'login' => $this->user->email,
			'password' => 'password',
		]);

		$this->assertAuthenticatedAs($this->user);
	}

	public function test_user_can_authenticate_using_username(): void
	{
		$this->post('/login', [
			'login' => $this->user->username,
			'password' => 'password',
		]);

		$this->assertAuthenticatedAs($this->user);
	}

	public function test_users_can_not_authenticate_with_invalid_password(): void
	{
		$this->post('/login', [
			'login' => $this->user->email,
			'password' => 'wrong-password',
		]);

		$this->assertGuest();
	}

	public function test_users_can_not_authenticate_with_invalid_email(): void
	{
		$this->post('/login', [
			'login' => 'wrong-email@example.com',
			'password' => 'password',
		]);

		$this->assertGuest();
	}

	public function test_users_can_not_authenticate_with_invalid_username(): void
	{
		$this->post('/login', [
			'login' => 'wrong-username',
			'password' => 'password',
		]);

		$this->assertGuest();
	}

	public function test_after_login_the_user_is_redirected_to_the_dashboard(): void
	{
		$response = $this->post('/login', [
			'login' => $this->user->email,
			'password' => 'password',
		]);

		$response->assertRedirect('/dashboard');
	}

	public function test_users_can_logout(): void
	{
		$response = $this->actingAs($this->user)->post('/logout');

		$this->assertGuest();
		$response->assertRedirect('/');
	}
}
