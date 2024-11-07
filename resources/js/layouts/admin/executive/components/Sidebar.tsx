import {
	Sidebar as SidebarNav,
	Menu,
	MenuItem,
	SubMenu,
} from 'react-pro-sidebar'
import { useWindowWidth } from '@/hooks'
import { useMainStore } from '@/store'
import { motion } from 'framer-motion'
import { Link, usePage } from '@inertiajs/react'
import { templates } from '@/config'
import { cn } from '@nextui-org/react'
import { Fragment } from 'react/jsx-runtime'

import { PageProps } from '@/types'
import type { NavbarProps } from '@/types/navbar'
import { useEffect } from 'react'

const { executive: template } = templates

export const Sidebar = () => {
	const { sidebarOpen, setSidebarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()

	const {
		props: { demoExecutiveAdminNavbar },
	} = usePage<PageProps>()

	const adminNavbar = demoExecutiveAdminNavbar as NavbarProps

	useEffect(() => {
		setSidebarOpen(false)
	}, [demoExecutiveAdminNavbar])

	if (windowWidth >= template.sidebar.breakpoint) {
		return <></>
	}

	return (
		<>
			<div className="left-0 inset-y-0 mt-px fixed overflow-hidden z-30">
				<SidebarNav
					transitionDuration={400}
					id="navbar"
					width={template.sidebar.width}
					collapsedWidth={template.sidebar.collapsedWidth}
					collapsed={windowWidth <= template.sidebar.breakpoint && !sidebarOpen}
					rootStyles={{ height: '100%' }}
					className={cn(
						template.sidebar.cn.base,
						'[&.ps-collapsed_.ps-submenu-content]:!hidden'
					)}
					style={{ paddingTop: template.topbar.height }}
				>
					{/* Top spacer */}
					<div className={template.sidebar.cn.topSpacer}></div>

					{adminNavbar &&
						adminNavbar.map((nav) => (
							<Fragment key={nav.key}>
								{nav.title && nav.menu.length > 0 && (
									<div
										className={cn(
											'text-xs font-medium px-7 mb-1 mt-2 whitespace-nowrap',
											template.sidebar.cn.menuTitle
										)}
									>
										{nav.title}
									</div>
								)}

								<Menu closeOnClick className={template.sidebar.cn.menuItem}>
									{nav.menu.map(({ label, route: path, icon, submenu }) => {
										if (submenu) {
											return (
												<SubMenu
													key={label + path}
													label={label}
													icon={
														<i
															className={cn(icon, template.sidebar.cn.menuIcon)}
														/>
													}
												>
													{submenu.map(({ label, route: path }) => (
														<Fragment key={path}>
															<MenuItem
																component={<Link href={route(path || '')} />}
																active={location.href === route(path || '')}
																className={template.sidebar.cn.subMenu}
															>
																{label}
															</MenuItem>
														</Fragment>
													))}
												</SubMenu>
											)
										}

										return (
											<Fragment key={path}>
												<MenuItem
													component={<Link href={route(path || '')} />}
													icon={
														<i
															className={cn(icon, template.sidebar.cn.menuIcon)}
														/>
													}
													active={location.href === route(path || '')}
												>
													{label}
												</MenuItem>
											</Fragment>
										)
									})}
								</Menu>
							</Fragment>
						))}
				</SidebarNav>

				{sidebarOpen && windowWidth <= 768 && (
					<motion.div
						className="bg-black/10 inset-0 fixed"
						animate={{ opacity: sidebarOpen ? 1 : 0 }}
						onClick={() => setSidebarOpen(false)}
					/>
				)}
			</div>

			<div
				className="hidden flex-[0_0_auto] md:block"
				style={{ width: template.sidebar.width }}
			></div>
		</>
	)
}
