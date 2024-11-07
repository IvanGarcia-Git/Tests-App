<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class DemoRoutesTest extends TestCase
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

	/**
	 * Corporate
	 */
	// Accordion
	public function test_corporate_ui_accordion_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'accordion', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'accordion');
	}
	// Alerts
	public function test_corporate_ui_alerts_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'alerts', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'alerts');
	}
	// Avatar
	public function test_corporate_ui_avatar_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'avatar', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'avatar');
	}
	// Breadcrumbs
	public function test_corporate_ui_breadcrumb_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'breadcrumbs', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'breadcrumbs');
	}
	// Buttons
	public function test_corporate_ui_buttons_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'buttons', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'buttons');
	}
	// Cards
	public function test_corporate_ui_cards_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'cards', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'cards');
	}
	// Chips
	public function test_corporate_ui_chips_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'chips', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'chips');
	}
	// Drawer
	public function test_corporate_ui_drawer_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'drawer', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'drawer');
	}
	// Dropdown
	public function test_corporate_ui_dropdown_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'dropdown', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'dropdown');
	}
	// Image
	public function test_corporate_ui_image_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'image', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'image');
	}
	// Listbox
	public function test_corporate_ui_listbox_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'listbox', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'listbox');
	}
	// Loading
	public function test_corporate_ui_loading_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'loading', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'loading');
	}
	// Modal
	public function test_corporate_ui_modal_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'modal', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'modal');
	}
	// Pagination
	public function test_corporate_ui_pagination_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'pagination', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'pagination');
	}
	// Popover
	public function test_corporate_ui_popover_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'popover', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'popover');
	}
	// Progress
	public function test_corporate_ui_progress_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'progress', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'progress');
	}
	// Tabs
	public function test_corporate_ui_tabs_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'tabs', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'tabs');
	}
	// Toasts
	public function test_corporate_ui_toasts_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'toasts', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'toasts');
	}
	// Tooltips
	public function test_corporate_ui_tooltips_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'ui', 'tooltips', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'ui', 'tooltips');
	}
	// Input
	public function test_corporate_form_input_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'input', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'input');
	}
	// Select
	public function test_corporate_form_select_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'select', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'select');
	}
	// Textarea
	public function test_corporate_form_textarea_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'textarea', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'textarea');
	}
	// Checkbox
	public function test_corporate_form_checkbox_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'checkbox', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'checkbox');
	}
	// Radio Button
	public function test_corporate_form_radio_button_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'radio', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'radio');
	}
	// Switch
	public function test_corporate_form_switch_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'switch', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'switch');
	}
	// Slider
	public function test_corporate_form_slider_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'slider', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'slider');
	}
	// Date Picker
	public function test_corporate_form_date_picker_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'datepicker', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'datepicker');
	}
	// WYSIWYG
	public function test_corporate_form_wysiwyg_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'form', 'wysiwyg', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'form', 'wysiwyg');
	}
	// Color
	public function test_corporate_utilities_color_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'utilities', 'color', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'utilities', 'color');
	}
	// Image uploader
	public function test_corporate_utilities_image_uploader_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'utilities', 'image-uploader', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'utilities', 'image-uploader');
	}
	// Icons
	public function test_corporate_utilities_icons_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'utilities', 'icons', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'utilities', 'icons');
	}
	// Charts
	public function test_corporate_apex_charts_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('corporate', 'charts', 'apexcharts', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('corporate', 'charts', 'apexcharts');
	}



	/**
	 * Executive
	 */
	// Accordion
	public function test_executive_ui_accordion_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'accordion', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'accordion');
	}
	// Alerts
	public function test_executive_ui_alerts_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'alerts', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'alerts');
	}
	// Avatar
	public function test_executive_ui_avatar_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'avatar', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'avatar');
	}
	// Breadcrumbs
	public function test_executive_ui_breadcrumb_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'breadcrumbs', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'breadcrumbs');
	}
	// Buttons
	public function test_executive_ui_buttons_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'buttons', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'buttons');
	}
	// Cards
	public function test_executive_ui_cards_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'cards', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'cards');
	}
	// Chips
	public function test_executive_ui_chips_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'chips', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'chips');
	}
	// Drawer
	public function test_executive_ui_drawer_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'drawer', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'drawer');
	}
	// Dropdown
	public function test_executive_ui_dropdown_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'dropdown', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'dropdown');
	}
	// Image
	public function test_executive_ui_image_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'image', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'image');
	}
	// Listbox
	public function test_executive_ui_listbox_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'listbox', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'listbox');
	}
	// Loading
	public function test_executive_ui_loading_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'loading', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'loading');
	}
	// Modal
	public function test_executive_ui_modal_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'modal', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'modal');
	}
	// Pagination
	public function test_executive_ui_pagination_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'pagination', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'pagination');
	}
	// Popover
	public function test_executive_ui_popover_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'popover', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'popover');
	}
	// Progress
	public function test_executive_ui_progress_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'progress', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'progress');
	}
	// Tabs
	public function test_executive_ui_tabs_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'tabs', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'tabs');
	}
	// Toasts
	public function test_executive_ui_toasts_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'toasts', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'toasts');
	}
	// Tooltips
	public function test_executive_ui_tooltips_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'ui', 'tooltips', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'ui', 'tooltips');
	}
	// Input
	public function test_executive_form_input_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'input', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'input');
	}
	// Select
	public function test_executive_form_select_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'select', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'select');
	}
	// Textarea
	public function test_executive_form_textarea_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'textarea', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'textarea');
	}
	// Checkbox
	public function test_executive_form_checkbox_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'checkbox', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'checkbox');
	}
	// Radio Button
	public function test_executive_form_radio_button_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'radio', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'radio');
	}
	// Switch
	public function test_executive_form_switch_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'switch', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'switch');
	}
	// Slider
	public function test_executive_form_slider_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'slider', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'slider');
	}
	// Date Picker
	public function test_executive_form_date_picker_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'datepicker', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'datepicker');
	}
	// WYSIWYG
	public function test_executive_form_wysiwyg_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'form', 'wysiwyg', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'form', 'wysiwyg');
	}
	// Color
	public function test_executive_utilities_color_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'utilities',  'color', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'utilities', 'color');
	}
	// Image uploader
	public function test_executive_utilities_image_uploader_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'utilities',  'image-uploader', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'utilities', 'image-uploader');
	}
	// Icons
	public function test_executive_utilities_icons_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'utilities',  'icons', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'utilities', 'icons');
	}
	// Charts
	public function test_executive_apex_charts_screen_can_be_rendered(): void
	{
		$this->assertScreenRequiresAuth('executive', 'charts', 'apexcharts', 302);
		$this->assertScreenCanBeAccessedByAuthenticatedUser('executive', 'charts', 'apexcharts');
	}


	private function assertScreenRequiresAuth(string $template, string $group, string $screen, int $statuscode)
	{
		$response = $this->get("/dashboard/{$template}/{$group}/{$screen}");
		$response->assertStatus($statuscode);
		$response->assertRedirect('/login');
	}

	private function assertScreenCanBeAccessedByAuthenticatedUser(string $template, string $group, string $screen): void
	{
		$this->post('/login', ['login' => $this->user->username, 'password' => 'password']);
		$response = $this->get("/dashboard/{$template}/{$group}/{$screen}");
		$response->assertStatus(200);
	}
}
