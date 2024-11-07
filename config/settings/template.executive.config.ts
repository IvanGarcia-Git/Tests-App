import { cn } from '@nextui-org/react'

export const template = {
	/**
	 *
	 *
	 * Sidebar settings
	 * ........................................................................
	 */
	sidebar: {
		width: '230px',
		collapsedWidth: '0px',

		breakpoint: 768,

		item: {
			hover: {
				backgroundColor: '#374151',
				color: 'white',
			},
		},

		cn: {
			base: cn('bg-default-50 !border-divider', '[&>div]:bg-transparent'),
			menuTitle: 'text-foreground-600',
			menuItem: cn(
				'font-medium select-none',
				'has-[.ps-menu-button]:text-sm',
				'[&>*]:transition-colors',

				'[&>*>li>.ps-menu-button]:h-9',
				'[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button]:h-9',

				// Default color
				'text-foreground-800',

				// Active item color:
				'[&>ul>li>.ps-active]:text-primary',
				'[&>ul>li>.ps-submenu-content>ul>.ps-active]:text-primary',

				// Hover colors
				'[&>*>li>.ps-menu-button:hover]:bg-content3',
				'[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button:hover]:bg-content3'
			),
			menuIcon: 'text-base',
			subMenu: 'bg-content2',
			topSpacer: 'h-4'
		},
	},

	/**
	 *
	 *
	 * Application topbar
	 * ........................................................................
	 */
	topbar: {
		height: '70px',
		subMenuWidth: 280,
		subMenuMaxHeight: 330,

		// Class names used for coloring
		cn: {
			base: 'bg-stone-800 dark:bg-default-100',
		},
		navbar: {
			cn: {
				// This class sets the navbar to be hidden in mobile view:
				navbar: 'hidden md:flex',
				toggler: 'md:hidden',
				navbarItem: cn(
					'bg-transparent text-default-200 text-sm',
					'pt-5 pb-3 px-2',
					'select-none cursor-pointer',
					'dark:text-foreground',
					'data-[hover=true]:bg-transparent'
				),
				subMenuItem: 'min-h-8 p-0 rounded-lg select-none',
				subMenu: 'overflow-y-auto rounded-lg',
			},
		},
	},
}
