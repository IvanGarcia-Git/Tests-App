import { PropsWithChildren } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { useColorMode } from '@/hooks'
import { Toastify } from '@/components'
import { theme } from '@/config'
import { cn } from '@nextui-org/react'

import Image from '@/assets/img/pexels-pramodtiwari-14127564.jpg'

import type { PageProps } from '@/types'

interface PropsLayout extends PropsWithChildren {
	pageTitle: string
}

export const AuthLayout3 = ({ children, pageTitle }: PropsLayout) => {
	const { colorMode, changeColorMode } = useColorMode()
	const {
		props: { settings },
	} = usePage<PageProps>()

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background w-full h-full min-h-screen grid place-content-center px-6 2xl:px-0">
				<div
					className={cn(
						'w-full flex overflow-hidden',
						'md:max-w-6xl md:grid md:grid-cols-2 md:border md:border-default md:rounded-2xl',
						'xl:grid-cols-5'
					)}
				>
					<section className="h-full hidden md:flex xl:col-span-3">
						<img
							src={Image}
							alt="Background image"
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</section>

					<section className="flex-1 flex justify-center p-14 xl:col-span-2">
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
				</div>
			</main>
		</>
	)
}
