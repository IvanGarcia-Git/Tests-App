import { ProfileDropdown } from '@/components'
import {
	Button,
	cn,
	Divider,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	ScrollShadow,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react'
import { templates, theme } from '@/config'
import { useMainStore } from '@/store'
import { Link, usePage } from '@inertiajs/react'
import { Fragment } from 'react/jsx-runtime'

import type { PageProps } from '@/types'
import type { NavbarProps } from '@/types/navbar'

const { executive: template } = templates

export const Header = () => {
	const { sidebarOpen, setSidebarOpen, colorMode } = useMainStore()

	const {
		props: { adminNavbar },
	} = usePage<PageProps>()

	// const adminNavbar = demoExecutiveAdminNavbar as NavbarProps

	return (
		<Navbar
			isMenuOpen={true}
			shouldHideOnScroll
			maxWidth="xl"
			height="auto"
			classNames={{
				base: template.topbar.cn.base,
				wrapper: 'gap-0 md:flex-col',
				content: 'w-full',
			}}
		>
			<div
				className="w-full py-2 flex justify-between items-center"
				style={{ height: template.topbar.height }}
			>
				<div>
					<img
						src={theme[colorMode].logo}
						alt="Logo"
						className="w-20 md:w-24"
					/>
				</div>

				<div className="flex items-center gap-x-3 h-full">
					{/* <Divider orientation="vertical" className="h-5" /> */}
					<ProfileDropdown />

					<Button
						isIconOnly
						size="sm"
						radius="lg"
						variant="light"
						className={template.topbar.navbar.cn.toggler}
						onPress={() => setSidebarOpen(!sidebarOpen)}
					>
						<i
							className={cn(
								'ri-xl',
								sidebarOpen ? 'ri-close-large-line' : 'ri-menu-line'
							)}
						/>
					</Button>
				</div>
			</div>

			<Divider className="opacity-30 hidden md:flex dark:opacity-100" />

			<div
				className={cn(
					template.topbar.navbar.cn.navbar,
					'w-full scrollbar-thumb-transparent scrollbar-track-transparent'
				)}
			>
				<div className="scrollbar-thin overflow-x-scroll">
					<NavbarContent>
						{adminNavbar &&
							adminNavbar.map((nav) => (
								<Fragment key={nav.key}>
									{nav.menu.length > 0 &&
										nav.menu.map(({ label, route: path, submenu }) =>
											submenu && submenu.length > 0 ? (
												<Dropdown key={label + path}>
													<NavbarItem>
														<DropdownTrigger>
															<Button
																disableRipple
																className={cn(
																	template.topbar.navbar.cn.navbarItem
																)}
																endContent={
																	<i className="ri-arrow-down-s-line" />
																}
																radius="none"
																variant="light"
															>
																{label}
															</Button>
														</DropdownTrigger>
													</NavbarItem>

													<DropdownMenu
														items={submenu}
														hideEmptyContent
														aria-label="Sub menu"
														className={template.topbar.navbar.cn.subMenu}
														style={{
															width: `${template.topbar.subMenuWidth}px`,
															maxHeight: `${template.topbar.subMenuMaxHeight}px`,
														}}
														itemClasses={{
															base: 'gap-4',
														}}
													>
														{(item) => (
															<DropdownItem
																key={item.label}
																textValue={item.label}
																className={
																	template.topbar.navbar.cn.subMenuItem
																}
															>
																<Link
																	href={route(item.route || '')}
																	className="p-2 flex"
																>
																	{item.label}
																</Link>
															</DropdownItem>
														)}
													</DropdownMenu>
												</Dropdown>
											) : (
												<NavbarItem
													key={label + path}
													className={template.topbar.navbar.cn.navbarItem}
												>
													<Link href={route(path || '')} className="flex">
														{label}
													</Link>
												</NavbarItem>
											)
										)}
								</Fragment>
							))}
					</NavbarContent>
				</div>
			</div>
		</Navbar>
	)
}
