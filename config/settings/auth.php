<?php
return [
	// Allow "remember me"
	// 'allow_remember_me' => env('SETTINGS_AUTH_ALLOW_REMEMBER_ME', true),

	// Allow "forgot password"
	// 'allow_forgot_password' => env('SETTINGS_AUTH_ALLOW_FORGOT_PASSWORD', true),

	// Allow "registration"
	// 'allow_registration' => env('SETTINGS_AUTH_ALLOW_REGISTRATION', true),

	// Allow "login"
	// 'allow_login' => env('SETTINGS_AUTH_ALLOW_LOGIN', true),

	// Allow "social login"
	// 'allow_social_login' => env('SETTINGS_AUTH_ALLOW_SOCIAL_LOGIN', true),

	// Allow "social registration"
	// 'allow_social_registration' => env('SETTINGS_AUTH_ALLOW_SOCIAL_REGISTRATION', true),
	'guard_permissions' => array_keys(config('auth.guards')),
	'protected_roles' => [
		'Super Admin',
		'Admin',
		'User'
	],
	'protected_permissions' => [
		'Super Admin Access',
		'Admin Access',
		'Private Access'
	],
];
