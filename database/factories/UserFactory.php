<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
	/**
	 * The current password being used by the factory.
	 */
	protected static ?string $password;

	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		return [
			// Basic information
			'name' => fake()->name(),
			'lastname' => fake()->lastName(),
			'username' => fake()->userName(),
			'email' => fake()->unique()->safeEmail(),
			'email_verified_at' => now(),
			'password' => static::$password ??= Hash::make('password'),
			'phone' => fake()->phoneNumber(),

			// Personal information
			'birth_date' => fake()->date(),
			'address' => fake()->address(),
			'city' => fake()->city(),
			'country' => fake()->country(),
			'zip' => fake()->postcode(),

			// Professional information
			'job_title' => fake()->jobTitle(),
			'company' => fake()->company(),

			// Prefferences and settions
			'bio' => fake()->text(200),
			'profile_picture' => rand(1, 30) . '.jpg',
			'status' => fake()->randomElement(['enabled', 'disabled']),

			'remember_token' => Str::random(10),
		];
	}

	/**
	 * Indicate that the model's email address should be unverified.
	 */
	public function unverified(): static
	{
		return $this->state(fn (array $attributes) => [
			'email_verified_at' => null,
		]);
	}
}
