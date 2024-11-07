import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { UsersList } from './components/UsersList'
import { Button } from '@nextui-org/react'
import { Link } from '@inertiajs/react'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Users')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						className="px-6"
						variant="flat"
						as={Link}
						href={route('dashboard.user.create')}
					>
						{t('New user')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<UsersList />
			</PageContent>

			<div className="h-20" />
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Users')) }} />
)

export default Page
