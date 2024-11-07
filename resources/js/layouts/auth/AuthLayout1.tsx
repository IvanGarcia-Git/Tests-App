import { PropsWithChildren } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { useColorMode } from '@/hooks'
import { Toastify } from '@/components'
import { theme } from '@/config'

import type { PageProps } from '@/types'

interface PropsLayout extends PropsWithChildren {
	pageTitle: string
}

export const AuthLayout1 = ({ children, pageTitle }: PropsLayout) => {
	const { colorMode, changeColorMode } = useColorMode()
	const {
		props: { settings },
	} = usePage<PageProps>()

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background w-full min-h-screen flex justify-center items-center">
				<section className="max-w-lg">
					<img
						src={theme[colorMode].logo}
						alt="Logo"
						className="w-32 mx-auto"
					/>

					<div className="space-y-2 mt-10">
						<h2 className="font-bold">{pageTitle}</h2>
						{children}
					</div>
				</section>
			</main>
		</>
	)
}
