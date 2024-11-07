import { PropsWithChildren } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { useColorMode } from '@/hooks'
import { Toastify } from '@/components'
import { theme } from '@/config'

import Image from '@/assets/img/pexels-pramodtiwari-14127564.jpg'

import type { PageProps } from '@/types'

interface PropsLayout extends PropsWithChildren {
	pageTitle: string
}

export const AuthLayout2 = ({ children, pageTitle }: PropsLayout) => {
	const { colorMode, changeColorMode } = useColorMode()
	const {
		props: { settings },
	} = usePage<PageProps>()

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background w-full min-h-screen flex justify-center items-center">
				<section className="h-full min-h-screen hidden w-1/2 md:flex">
					<img
						src={Image}
						alt="Background image"
						loading="lazy"
						className="w-full h-auto object-cover"
					/>
				</section>

				<section className="flex-1 flex justify-center">
					<div className="max-w-lg">
						<img
							src={theme[colorMode].logo}
							alt="Logo"
							className="w-32 mx-auto"
						/>

						<div className="space-y-2 mt-10">
							<h2 className="font-bold">{pageTitle}</h2>
							{children}
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
