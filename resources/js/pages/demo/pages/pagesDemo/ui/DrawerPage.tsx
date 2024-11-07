import { useState } from 'react'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Card, CardBody, cn } from '@nextui-org/react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

type DirectionProps = 'left' | 'right' | 'top' | 'bottom'

interface Props {
	template?: Template
}

export const DrawerPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	const [isOpen, setIsOpen] = useState(false)
	const [direction, setDirection] = useState<DirectionProps>('left')

	const toggleDrawer = (direction = 'left' as DirectionProps) => {
		setDirection(direction)

		setTimeout(() => {
			setIsOpen((prevState) => !prevState)
		}, 500)
	}

	return (
		<>
			<PageHeader
				title={t('Drawer')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="text-sm leading-tight">
					A drawer in UI is a panel that slides in from the side or bottom of
					the screen to display additional information or options without
					disrupting the main content. It’s a great way to provide navigation,
					filters, or settings in a compact and accessible way, keeping the
					interface clean and organized. Drawers improve user experience by
					offering easy access to features while maintaining focus on the
					primary content.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'leftDrawer', label: 'Left Drawer' },
								{ key: 'bottomDrawer', label: 'Bottom Drawer' },
								{ key: 'rightDrawer', label: 'Right Drawer' },
								{ key: 'topDrawer', label: 'Top Drawer' },
							],
						}}
					/>
				}
			>
				<div className="max-w-2xl space-y-20">
					<div id="leftDrawer">
						<Card
							isPressable
							onPress={() => toggleDrawer('left')}
							className="w-60 aspect-video"
							shadow="none"
						>
							<CardBody></CardBody>
						</Card>
						<div className="text-sm mt-2">Left Drawer</div>
					</div>

					<div id="bottomDrawer">
						<Card
							isPressable
							onPress={() => toggleDrawer('bottom')}
							className="w-60 aspect-video"
							shadow="none"
						>
							<CardBody></CardBody>
						</Card>
						<div className="text-sm mt-2">Bottom Drawer</div>
					</div>

					<div id="rightDrawer">
						<Card
							isPressable
							onPress={() => toggleDrawer('right')}
							className="w-60 aspect-video"
							shadow="none"
						>
							<CardBody></CardBody>
						</Card>
						<div className="text-sm mt-2">Right Drawer</div>
					</div>

					<div id="topDrawer">
						<Card
							isPressable
							onPress={() => toggleDrawer('top')}
							className="w-60 aspect-video"
							shadow="none"
						>
							<CardBody></CardBody>
						</Card>
						<div className="text-sm mt-2">Top Drawer</div>
					</div>
				</div>

				<div className="h-20"></div>
			</PageContent>

			<Drawer
				{...{
					open: isOpen,
					onClose: () => setIsOpen(false),
					direction,
					size: 300,
					duration: 250,
					className: '!bg-transparent flex',
					lockBackgroundScroll: true,
				}}
			>
				<div className="bg-background flex-1">
					<div
						className={cn(
							'max-w-3xl p-6',
							['top', 'bottom'].includes(direction)
								? 'flex gap-5 md:p-10'
								: 'space-y-6'
						)}
					>
						<div
							className={cn(
								'bg-default3 rounded-lg overflow-hidden',
								['top', 'bottom'].includes(direction)
									? 'w-1/2 h-40 md:w-1/3'
									: 'w-full'
							)}
						>
							<video
								autoPlay
								loop
								muted
								className="w-full h-full object-cover object-top"
								src="https://cdn.dribbble.com/userupload/15496669/file/original-d32056e80a646cfbd9659ba6717343b6.mp4"
							/>
						</div>

						<div className="flex-1">
							<p className="text-xs">
								A drawer in UI is a panel that slides in from the side or bottom
								of the screen to display additional information or options
								without disrupting the main content. It’s a great way to provide
								navigation, filters, or settings in a compact and accessible
								way, keeping the interface clean and organized. Drawers improve
								user experience by offering easy access to features while
								maintaining focus on the primary content.
							</p>
						</div>
					</div>
				</div>
			</Drawer>
		</>
	)
}
