import { useContext } from 'react'
import { Layout } from '@/layouts/admin/Layout'
import { PageHeader, PageContent } from '@/components'
import { Button } from '@nextui-org/react'
import { t } from '@/i18n'
import { NotificationsList, CreateEditForm } from './components'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {
	NotificationProvider,
	NotificationContext,
} from './providers/NotificationProvider'

import { NotificationContextProps } from '@/types/notifications'

const Page = () => {
	const { state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	return (
		<>
			<PageHeader title={t('Notifications')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						className="px-6"
						variant="flat"
						onPress={() => {
							dispatch({ type: 'setSelectedNotification', payload: null })
							dispatch({ type: 'openDrawer' })
						}}
					>
						{t('New notification')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<NotificationsList />
			</PageContent>

			<div className="h-20" />

			<Drawer
				{...{
					open: state.drawerOpen,
					direction: 'bottom',
					size: '85%',
					duration: 250,
				}}
			>
				<CreateEditForm />
			</Drawer>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<NotificationProvider>
		<Layout {...{ children: page, pageTitle: String(t('Notifications')) }} />
	</NotificationProvider>
)

export default Page
