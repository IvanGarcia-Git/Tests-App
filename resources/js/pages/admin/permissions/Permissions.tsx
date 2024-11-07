import { useContext } from 'react'
import { Layout } from '@/layouts/admin/Layout'
import { PageHeader, PageContent } from '@/components'
import { Button } from '@nextui-org/react'
import { t } from '@/i18n'
import { PermissionsList, CreateEditForm } from './components'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {
	PermissionProvider,
	PermissionContext,
} from './providers/PermissionProvider'

import type { PermissionContextProps } from '@/types/permissions'

const Page = () => {
	const { state, dispatch } = useContext(
		PermissionContext
	) as PermissionContextProps

	return (
		<>
			<PageHeader title={t('Permissions')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						className="px-6"
						variant="flat"
						onPress={() => {
							dispatch({ type: 'setSelectedPermission', payload: null })
							dispatch({ type: 'openDrawer' })
						}}
					>
						{t('Add new permission')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<PermissionsList />
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
	<PermissionProvider>
		<Layout {...{ children: page, pageTitle: String(t('Permissions')) }} />
	</PermissionProvider>
)

export default Page
