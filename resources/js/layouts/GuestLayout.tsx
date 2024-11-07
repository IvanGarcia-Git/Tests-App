import { PropsWithChildren } from 'react'
import { Head } from '@inertiajs/react'

type PropsLayout = {
	pageTitle: string
} & PropsWithChildren

export const GuestLayout = ({ children, pageTitle }: PropsLayout) => {
	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background w-full min-h-svh">{children}</main>
		</>
	)
}
