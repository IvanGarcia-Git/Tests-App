import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Link } from '@inertiajs/react'

const Page = () => {
	return (
		<>
			<PageHeader title={t('Dashboard')}></PageHeader>
			<PageContent>Dashboard corporate</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Dashboard')) }} />
)

export default Page
