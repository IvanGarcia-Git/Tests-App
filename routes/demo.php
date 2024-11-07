<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Demo\TablesController;

/**
 * Demo pages
 */
$pages = [
	'ui' => [
		'accordion' => 'Accordion',
		'alerts' => 'Alerts',
		'avatar' => 'Avatar',
		'breadcrumbs' => 'Breadcrumbs',
		'buttons' => 'Buttons',
		'cards' => 'Cards',
		'chips' => 'Chips',
		'drawer' => 'Drawer',
		'dropdown' => 'Dropdown',
		'image' => 'Image',
		'listbox' => 'ListBox',
		'loading' => 'Loading indicators',
		'modal' => 'Modal',
		'pagination' => 'Pagination',
		'popover' => 'Popovers',
		'progress' => 'Progress',
		'tabs' => 'Tabs',
		'toasts' => 'Toasts',
		'tooltips' => 'Tooltips',
	],
	'utilities' => [
		'color' => 'Color',
		'image-uploader' => 'Image uploader',
		'icons' => 'Icons',
	],
	'form' => [
		'input' => 'Input',
		'select' => 'Select',
		'textarea' => 'Textarea',
		'checkbox' => 'Checkbox',
		'radio' => 'Radio Button',
		'switch' => 'Switch',
		'slider' => 'Slider',
		'datepicker' => 'Date Picker',
		'layouts' => 'Form layouts',
		'wysiwyg' => 'Wysiwyg',
	],
	'tables' => [
		'styles' => 'Tables styles',
		// 'real-data' => 'Real data table',
	],
	'charts' => [
		'apexcharts' => 'Apex charts'
	]
];




/**
 * Corporate
 */
Route::middleware(['auth', 'verified'])
	->prefix('dashboard')
	->name('dashboard.')
	->group(function () use ($pages) {


		foreach ($pages as $group => $page_group) {
			if ($group === 'ui') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/UiElementsPage", ['title' => $title])
						->name("$group.$page");
				}
			}

			if ($group === 'form') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/FormsPage", ['title' => $title])
						->name("$group.$page");
				}
			}

			if ($group === 'utilities') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/UtilitiesPage", ['title' => $title])
						->name("$group.$page");
				}
			}

			if ($group === 'tables') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/TablesPage", ['title' => $title])
						->name("$group.$page");
				}
			}

			if ($group === 'charts') {
				foreach ($page_group as $page => $title) {
					Route::inertia("/$group/$page", "demo/pages/ChartsPage", ['title' => $title])
						->name("$group.$page");
				}
			}
		}

		Route::get("/tables/real-data", [TablesController::class, 'index'])
			->name('tables.real-data')
			->defaults('template', 'corporate');
	});
