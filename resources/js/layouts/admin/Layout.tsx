import { type PropsWithChildren } from 'react'
import { usePage } from '@inertiajs/react'
import { useColorMode } from '@/hooks'
import { LayoutCorporate } from './corporate/Layout'
import { LayoutExecutive } from './executive/Layout'
import { Toastify } from '@/components'

import type { PageProps } from '@/types'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const Layout = ({ children, pageTitle }: Props) => {
	const { adminLayout } = usePage().props as unknown as PageProps
	const { colorMode } = useColorMode()

	switch (adminLayout) {
		case 'executive':
			return (
				<>
					<main className="bg-background min-h-screen">
						<LayoutExecutive {...{ children, pageTitle }} />
					</main>
					<Toastify {...{ colorMode }} />
				</>
			)

		default:
			return (
				<>
					<main className="bg-background min-h-screen">
						<LayoutCorporate {...{ children, pageTitle }} />
					</main>
					<Toastify {...{ colorMode }} />
				</>
			)
	}
}
