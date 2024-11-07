import { Layout } from '@/layouts/admin/Layout'
import { TableStylesPage } from '@/pages/demo/pages/pagesDemo/tables'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Tables styles':
			return <TableStylesPage {...{ template: 'corporate' }} />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page
