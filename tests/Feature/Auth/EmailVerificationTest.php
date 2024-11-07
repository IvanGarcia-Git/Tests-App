<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\URL;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class EmailVerificationTest extends TestCase
{
	use RefreshDatabase;

	protected $user;

	protected function setUp(): void
	{
		parent::setUp();

		// Create a user with roles and permissions
		$this->user = User::factory()->unverified()->create();
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
		$this->user->assignRole('User');
	}

	public function test_email_verification_screen_can_be_rendered(): void
	{
		$response = $this->actingAs($this->user)->get('/verify-email');

		$response->assertStatus(200);
	}

	public function test_email_can_be_verified(): void
	{
		Event::fake();

		$verificationUrl = URL::temporarySignedRoute(
			'verification.verify',
			now()->addMinutes(60),
			['id' => $this->user->id, 'hash' => sha1($this->user->email)]
		);

		$response = $this->actingAs($this->user)->get($verificationUrl);

		Event::assertDispatched(Verified::class);
		$this->assertTrue($this->user->fresh()->hasVerifiedEmail());
		$response->assertRedirect(route('dashboard', absolute: false) . '?verified=1');
	}

	public function test_email_is_not_verified_with_invalid_hash(): void
	{
		$verificationUrl = URL::temporarySignedRoute(
			'verification.verify',
			now()->addMinutes(60),
			['id' => $this->user->id, 'hash' => sha1('wrong-email')]
		);

		$this->actingAs($this->user)->get($verificationUrl);

		$this->assertFalse($this->user->fresh()->hasVerifiedEmail());
	}
}
