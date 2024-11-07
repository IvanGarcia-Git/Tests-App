<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Session extends Model
{
	use HasFactory;

	protected $table = 'sessions';

	protected $primaryKey = 'id';

	public $incrementing = false;

	protected $keyType = 'string';

	public $timestamps = false;

	protected $fillable = [
		'id',
		'user_id',
		'ip_address',
		'user_agent',
		'payload',
		'last_activity'
	];

	protected $casts = [
		'last_activity' => 'datetime',
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
