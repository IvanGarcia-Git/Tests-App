<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


class MediaManager extends Model implements HasMedia
{
	use HasFactory, InteractsWithMedia;

	protected $table = 'media_manager';
	protected $guarded = [];

	/**
	 * Media collections
	 */
	public function registerMediaCollections(): void
	{
		$this->addMediaCollection('images');
		$this->addMediaCollection('files');
	}



	/**
	 * Media convetions
	 */
	public function registerMediaConversions(?Media $media = null): void
	{
		$this
			->addMediaConversion('preview')
			->fit(Fit::Contain, 300, 300)
			->nonQueued();
	}
}
