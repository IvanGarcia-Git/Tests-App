import { useContext } from 'react'
import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { RolesList, CreateEditForm } from './components'
import { Button } from '@nextui-org/react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { RoleProvider, RoleContext } from './providers/RoleProvider'

import type { RoleContextProps } from '@/types/roles'

export const Page = () => {
	const { state, dispatch } = useContext(RoleContext) as RoleContextProps

	return (
		<>
			<PageHeader title={t('Roles')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						className="px-6"
						variant="flat"
						onPress={() => {
							dispatch({ type: 'setSelectedRole', payload: null })
							dispatch({ type: 'openDrawer' })
						}}
					>
						{t('Add new role')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<RolesList />
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
	<RoleProvider>
		<Layout {...{ children: page, pageTitle: String(t('Roles')) }} />
	</RoleProvider>
)

export default Page
