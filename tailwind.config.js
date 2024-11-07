import defaultTheme from 'tailwindcss/defaultTheme'
const { nextui } = require('@nextui-org/react')

import { theme, colors as themeColors } from './config/settings'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx',
		// NextUI
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		// Configuration
		'./config/settings/**/*.{js,ts,jsx,tsx}',
	],

	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},

	plugins: [
		nextui({
			// Common colors, like TailwindCSS colors, remain consistent regardless of the theme.
			// To prevent conflicts with TailwindCSS colors, common colors are initially disabled
			// but can be activated with the addCommonColors option.
			addCommonColors: true,
			layout: {
				dividerWeight: '1px', // h-divider the default height applied to the divider component
				disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
				fontSize: theme.fontSize,
				lineHeight: theme.lineHeight,
				radius: theme.radius,
				borderWidth: theme.borderWidth,
			},

			themes: {
				light: {
					colors: themeColors.light,
					layout: {
						hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							// shadow-small
							small:
								'0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-medium
							medium:
								'0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-large
							large:
								'0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
						},
					},
				},
				dark: {
					colors: themeColors.dark,
					// colors: { foreground: { 50: 'red' } },
					layout: {
						hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							// shadow-small
							small:
								'0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
							// shadow-medium
							medium:
								'0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
							// shadow-large
							large:
								'0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
						},
					},
				},
			},
		}),
		require('tailwind-scrollbar')({
			nocompatible: true,
			preferredStrategy: 'pseudoelements',
		}),
	],
}
