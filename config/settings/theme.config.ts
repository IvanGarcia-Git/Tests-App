import { cn } from '@nextui-org/react'

export const theme = {
	/**
	 *
	 *
	 * Light mode
	 * ........................................................................
	 */
	light: {
		logo: '/img/brand.svg',
	},

	/**
	 *
	 *
	 * Dark mode
	 * ........................................................................
	 */
	dark: {
		logo: '/img/brand.svg',
	},

	/**
	 *
	 *
	 * Fonts
	 * ........................................................................
	 */
	fontSize: {
		tiny: '0.75rem', // text-tiny
		small: '0.875rem', // text-small
		medium: '1rem', // text-medium
		large: '1.125rem', // text-large
	},

	lineHeight: {
		tiny: '1rem', // text-tiny
		small: '1.25rem', // text-small
		medium: '1.5rem', // text-medium
		large: '1.75rem', // text-large
	},

	/**
	 *
	 *
	 * Border radius
	 * ........................................................................
	 */
	radius: {
		small: '4px', // rounded-small
		medium: '6px', // rounded-medium
		large: '8px', // rounded-large
	},

	/**
	 *
	 *
	 * Border width
	 * ........................................................................
	 */
	borderWidth: {
		small: '0.7px', // border-small
		medium: '1.5px', // border-medium (default)
		large: '3px', // border-large
	},

	/**
	 *
	 *
	 * Form components
	 * ........................................................................
	 */
	form: {
		field: {
			variant: 'flat',
			classicStyle: true,
		},
	},

	topbar: {
		height: '56px',
		// Class names used for coloring
		cn: {
			base: 'bg-default-50 border-divider',
		},
	},
} as { [key: string]: { [key: string]: string | any } }
