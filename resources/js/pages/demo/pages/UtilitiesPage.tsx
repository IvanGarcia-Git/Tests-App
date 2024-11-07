import { Layout } from '@/layouts/admin/Layout'
import {
	ImageUploaderPage,
	IconsPage,
	ColorsPage,
} from '@/pages/demo/pages/pagesDemo/utilities'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Image uploader':
			return <ImageUploaderPage />
		case 'Icons':
			return <IconsPage />
		case 'Color':
			return <ColorsPage />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page
