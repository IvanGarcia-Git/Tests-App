import './bootstrap'
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'
import '../css/app.css'

import { createRoot, hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { NextUIProvider } from '@nextui-org/react'
import { semanticColors } from '@nextui-org/theme'
import { SessionAware } from './SessionAware'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./pages/${name}.tsx`,
			import.meta.glob('./pages/**/*.tsx')
		),
	setup({ el, App, props }) {
		const auth = props.initialPage.props.auth as { user: any }

		if (import.meta.env.DEV) {
			createRoot(el).render(
				<NextUIProvider>
					<App {...props} />
					{auth && <SessionAware {...{ user: auth.user }} />}
				</NextUIProvider>
			)
			return
		}

		hydrateRoot(el, <App {...props} />)
	},
	progress: {
		delay: 0,
		color: semanticColors.dark.primary[500],
		includeCSS: true,
		showSpinner: true,
	},
}).then(() => {
	document.getElementById('app')?.removeAttribute('data-page')
})
