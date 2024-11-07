<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Lab404\Impersonate\Models\Impersonate;

class User extends Authenticatable implements MustVerifyEmail
{
	use HasFactory, Notifiable, HasRoles, Impersonate;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		// Basic information
		'name',
		'lastname',
		'username',
		'email',
		'password',
		'phone',

		// Personal information
		'birth_date',
		'address',
		'city',
		'country',
		'zip',

		// Professional information
		'job_title',
		'company',
		'bio',

		// Prefferences and settings
		'profile_picture',
		'status',
	];


	protected $hidden = [
		'password',
		'remember_token',
	];


	/**
	 * The attributes that should be cast to native types.
	 *
	 * @return array
	 */
	protected function casts(): array
	{
		return [
			'email_verified_at' => 'datetime',
			'password' => 'hashed',
		];
	}

	/**
	 * Get the sessions associated with the user.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function sessions()
	{
		return $this->hasMany(Session::class);
	}

	/**
	 * Get the user's permissions.
	 *
	 * @return \Illuminate\Support\Collection<int, string>
	 */
	public function getPermissionsAttribute()
	{
		if ($this->id) {
			return $this->getPermissionsViaRoles()->pluck('name');
		}

		return [];
	}


	/**
	 * Determine if the user can impersonate other users.
	 *
	 * @return bool True if the user has impersonation rights, false otherwise.
	 */
	public function canImpersonate(): bool
	{
		if (config('settings.general.admin_can_impersonate')) {
			return $this->hasRole(['Admin', 'Super Admin']);
		} else {
			return $this->hasRole('Super Admin');
		}
	}



	/**
	 * Get the user's preferences.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function preferences()
	{
		return $this->hasMany(UserPreference::class);
	}

	public function getPreferencesAttribute()
	{
		$modelPreferences = $this->load('preferences')->getRelation('preferences')->pluck('value', 'key')->toArray();
		return $modelPreferences;
	}
}
