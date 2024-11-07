<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Notifications\VerifyEmail;
use App\Notifications\NewUserRegisteredNotification;

class RegistrationTest extends TestCase
{
	use RefreshDatabase;
	protected $superadmin;

	protected function setUp(): void
	{
		parent::setUp();

		// Create roles and permissions
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);

		// Create a user with roles and permissions
		$this->superadmin = User::factory()->create();
		Role::create(['name' => 'Super Admin']);

		$this->superadmin->assignRole('Super Admin');
	}

	public function test_registration_screen_can_be_rendered(): void
	{
		$response = $this->get(route('register'));

		$response->assertStatus(200);
	}

	public function test_new_users_can_register(): void
	{
		$response = $this->post('/register', [
			'username' => 'testuser',
			'email' => 'test@example.com',
			'password' => 'password',
			'password_confirmation' => 'password',
		]);

		$user = User::where('email', 'test@example.com')->first();
		$user->markEmailAsVerified();

		$this->assertAuthenticatedAs($user);
		$response->assertRedirect(route('dashboard'));
	}

	public function test_new_users_must_receive_a_verification_email(): void
	{
		Notification::fake();

		$this->post('/register', [
			'username' => 'testuser',
			'email' => 'test@example.com',
			'password' => 'password',
			'password_confirmation' => 'password',
		]);

		$this->assertAuthenticated();

		$user = User::where('email', 'test@example.com')->first();
		Notification::assertSentTo($user, VerifyEmail::class);
	}

	// Super Admin must receive a notification email when registering a new user
	public function test_super_admin_must_receive_a_notification_email_when_registering_a_new_user(): void
	{
		if (!config('new_user_superadmin_notification')) return;

		Notification::fake();

		$this->post('/register', [
			'username' => 'testuser',
			'email' => 'test@example.com',
			'password' => 'password',
			'password_confirmation' => 'password',
		]);

		$this->assertAuthenticated();
		Notification::assertSentTo($this->superadmin, NewUserRegisteredNotification::class);
	}
}
