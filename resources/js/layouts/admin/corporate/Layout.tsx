import { type PropsWithChildren, useEffect } from 'react'
import { Head } from '@inertiajs/react'
import { useMainStore } from '@/store'
import { useWindowWidth } from '@/hooks'
import { Sidebar, Header } from './components'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const LayoutCorporate = ({ children, pageTitle }: Props) => {
	const { sidebarOpen, setSidebarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()

	useEffect(() => {
		if (windowWidth > 768 && !sidebarOpen) {
			setSidebarOpen(true)
		} else {
			setSidebarOpen(false)
		}
	}, [windowWidth])

	return (
		<>
			<Head title={pageTitle} />

			<Header />

			<div className="flex min-h-svh">
				<Sidebar />

				<div className="flex-1">{children}</div>
			</div>
		</>
	)
}
