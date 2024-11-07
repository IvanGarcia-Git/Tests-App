import { ProfileDropdown } from '@/components'
import { Button, cn, Navbar } from '@nextui-org/react'
import { templates, theme } from '@/config'
import { useMainStore } from '@/store'
import { useColorMode } from '@/hooks'

const { corporate: template } = templates

export const Header = () => {
	const { sidebarOpen, setSidebarOpen } = useMainStore()
	const { colorMode } = useColorMode()

	return (
		<Navbar
			isBordered
			maxWidth="full"
			height={template.topbar.height}
			classNames={{
				base: template.topbar.cn.base,
			}}
		>
			<div className="flex-1">
				<div className={cn('flex justify-between items-center')}>
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
							className="md:hidden"
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
			</div>
		</Navbar>
	)
}
