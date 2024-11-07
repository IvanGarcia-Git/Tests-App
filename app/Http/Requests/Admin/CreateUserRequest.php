<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
	 */
	public function rules(): array
	{
		$rules = [
			'username' => 'required|string|max:255|unique:users,username',
			'name' => 'required|string|max:255',
			'lastname' => 'required|string|max:255',
			'email' => 'required|email|lowercase|unique:users,email',
			'role' => 'required|integer|exists:roles,id',
			'password' => 'required|string|min:8|regex:/^\S*$/u',
		];

		return $rules;
	}


	public function messages(): array
	{
		return [
			'name.required' => 'Name is required',
			'name.string' => 'Name must be a string',
			'name.max' => 'Name must not exceed 255 characters',
			'lastname.required' => 'Name is required',
			'lastname.string' => 'Name must be a string',
			'lastname.max' => 'Name must not exceed 255 characters',
			'username.required' => 'Username is required',
			'username.string' => 'Username must be a string',
			'username.max' => 'Username must not exceed 255 characters',
			'username.unique' => 'Username already exists',
			'email.required' => 'Email is required',
			'email.email' => 'Email must be a valid email address',
			'email.lowercase' => 'Email must be lowercase',
			'email.unique' => 'Email already exists',
			'role.required' => 'Role is required',
			'role.integer' => 'Role must be an integer',
			'role.exists' => 'Role does not exist',
			'password.required' => 'Password is required',
			'password.string' => 'Password must be a string',
			'password.min' => 'Password must be at least 8 characters',
			'password.regex' => 'Password must contain only letters and numbers',
		];
	}
}
