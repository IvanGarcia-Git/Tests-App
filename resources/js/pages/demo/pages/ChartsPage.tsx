import { Layout } from '@/layouts/admin/Layout'
import { ApexChartsPage } from '@/pages/demo/pages/pagesDemo/charts'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Apex charts':
			return <ApexChartsPage />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page
