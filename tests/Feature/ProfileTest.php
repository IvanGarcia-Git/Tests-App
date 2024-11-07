<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class ProfileTest extends TestCase
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

	public function test_profile_page_is_displayed(): void
	{
		$response = $this
			->actingAs($this->user)
			->get('/profile');

		$response->assertOk();
	}

	public function test_profile_information_can_be_updated(): void
	{
		$response = $this
			->actingAs($this->user)
			->patch('/profile', [
				'name' => 'Test User',
				'email' => 'test@example.com',
			]);

		$response
			->assertSessionHasNoErrors()
			->assertRedirect('/profile');

		$this->user->refresh();

		$this->assertSame('Test User', $this->user->name);
		$this->assertSame('test@example.com', $this->user->email);
		$this->assertNull($this->user->email_verified_at);
	}

	public function test_email_verification_status_is_unchanged_when_the_email_address_is_unchanged(): void
	{
		$response = $this
			->actingAs($this->user)
			->patch('/profile', [
				'name' => 'Test User',
				'email' => $this->user->email,
			]);

		$response
			->assertSessionHasNoErrors()
			->assertRedirect('/profile');

		$this->assertNotNull($this->user->refresh()->email_verified_at);
	}

	public function test_user_can_delete_their_account(): void
	{
		$response = $this
			->actingAs($this->user)
			->delete('/profile', [
				'password' => 'password',
			]);

		$response
			->assertSessionHasNoErrors()
			->assertRedirect('/');

		$this->assertGuest();
		$this->assertNull($this->user->fresh());
	}

	public function test_correct_password_must_be_provided_to_delete_account(): void
	{
		$response = $this
			->actingAs($this->user)
			->from('/profile')
			->delete('/profile', [
				'password' => 'wrong-password',
			]);

		$response
			->assertSessionHasErrors('password')
			->assertRedirect('/profile');

		$this->assertNotNull($this->user->fresh());
	}
}
