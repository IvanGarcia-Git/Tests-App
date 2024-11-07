import { type PropsWithChildren, useEffect } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { useMainStore } from '@/store'
import { useWindowWidth } from '@/hooks'
import { Header, Sidebar } from './components'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const LayoutExecutive = ({ children, pageTitle }: Props) => {
	const { sidebarOpen, setSidebarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()

	useEffect(() => {
		if (windowWidth > 768 && !sidebarOpen) {
			setSidebarOpen(true)
		}
	}, [windowWidth])

	return (
		<>
			<Head title={pageTitle} />

			<Header />

			<div className="flex justify-center min-h-svh">
				<Sidebar />

				<div className="flex-1">{children}</div>
			</div>
		</>
	)
}
