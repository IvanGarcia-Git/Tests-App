<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use App\Models\InAppNotification;

class NotificationTest extends TestCase
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
		$userRole = Role::create(['name' => 'Admin']);
		$adminAccess = Permission::create(['name' => 'Admin Access']);
		$userRole->givePermissionTo($adminAccess);

		$this->user->assignRole('Admin');
	}

	/**
	 * Test that the notification list can be rendered
	 *
	 * @return void
	 */
	public function test_notification_list_can_be_redered()
	{
		$response = $this
			->actingAs($this->user)
			->get(route('dashboard.notification.list'));

		$response->assertOk();
	}

	/**
	 * Test that a notification can be created
	 *
	 * @return void
	 */
	public function test_notification_can_be_created()
	{
		$response = $this
			->actingAs($this->user)
			->post(route('dashboard.notification.store'), [
				'title' => 'Test Notification',
				'body' => 'This is a test notification',
			]);

		$response->assertStatus(302);
	}

	/**
	 * Test that a notification can be edited
	 *
	 * @return void
	 */
	public function test_notification_can_be_edited()
	{
		$notification = InAppNotification::factory()->create();

		$response = $this
			->actingAs($this->user)
			->put(route('dashboard.notification.update', $notification), [
				'title' => 'Test Notification',
				'body' => 'This is a test notification',
			]);

		$response->assertStatus(302);
	}

	/**
	 * Test that a notification can be deleted
	 *
	 * @return void
	 */
	public function test_notification_can_be_deleted()
	{
		$notification = InAppNotification::factory()->create();

		$response = $this
			->actingAs($this->user)
			->delete(route('dashboard.notification.destroy', $notification));

		$response->assertStatus(302);
	}
}
