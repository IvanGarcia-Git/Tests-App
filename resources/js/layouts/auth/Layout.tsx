import { PropsWithChildren } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { useColorMode } from '@/hooks'
import { Toastify } from '@/components'
import { theme } from '@/config'
import { AuthLayout1, AuthLayout2, AuthLayout3 } from '@/layouts/auth'

import type { PageProps } from '@/types'

interface PropsLayout extends PropsWithChildren {
	pageTitle: string
}

export const Layout = ({ children, pageTitle }: PropsLayout) => {
	const { colorMode } = useColorMode()
	const { authLayout } = usePage().props as unknown as PageProps

	switch (authLayout) {
		case 'layout2':
			return (
				<>
					<AuthLayout2 {...{ children, pageTitle }} />
					<Toastify {...{ colorMode }} />
				</>
			)
		case 'layout3':
			return (
				<>
					<AuthLayout3 {...{ children, pageTitle }} />
					<Toastify {...{ colorMode }} />
				</>
			)
		default:
			return (
				<>
					<AuthLayout1 {...{ children, pageTitle }} />
					<Toastify {...{ colorMode }} />
				</>
			)
	}
}
