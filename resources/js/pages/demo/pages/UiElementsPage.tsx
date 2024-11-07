import { Layout } from '@/layouts/admin/Layout'
import {
	AccordionPage,
	AlertsPage,
	AvatarPage,
	BreadcrumbsPage,
	ButtonsPage,
	CardsPage,
	ChipsPage,
	DrawerPage,
	DropdownPage,
	ImagePage,
	ListBoxPage,
	LoadingIndicatorsPage,
	ModalPage,
	PaginationPage,
	PopoverPage,
	ProgressPage,
	TabsPage,
	ToastPage,
	TooltipsPage,
} from '@/pages/demo/pages/pagesDemo/ui'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Accordion':
			return <AccordionPage {...{ template: 'corporate' }} />
		case 'Alerts':
			return <AlertsPage {...{ template: 'corporate' }} />
		case 'Avatar':
			return <AvatarPage {...{ template: 'corporate' }} />
		case 'Breadcrumbs':
			return <BreadcrumbsPage {...{ template: 'corporate' }} />
		case 'Buttons':
			return <ButtonsPage {...{ template: 'corporate' }} />
		case 'Cards':
			return <CardsPage {...{ template: 'corporate' }} />
		case 'Chips':
			return <ChipsPage {...{ template: 'corporate' }} />
		case 'Drawer':
			return <DrawerPage {...{ template: 'corporate' }} />
		case 'Dropdown':
			return <DropdownPage {...{ template: 'corporate' }} />
		case 'Image':
			return <ImagePage {...{ template: 'corporate' }} />
		case 'ListBox':
			return <ListBoxPage {...{ template: 'corporate' }} />
		case 'Loading indicators':
			return <LoadingIndicatorsPage {...{ template: 'corporate' }} />
		case 'Modal':
			return <ModalPage {...{ template: 'corporate' }} />
		case 'Pagination':
			return <PaginationPage {...{ template: 'corporate' }} />
		case 'Popovers':
			return <PopoverPage {...{ template: 'corporate' }} />
		case 'Progress':
			return <ProgressPage {...{ template: 'corporate' }} />
		case 'Tabs':
			return <TabsPage {...{ template: 'corporate' }} />
		case 'Toasts':
			return <ToastPage {...{ template: 'corporate' }} />
		case 'Tooltips':
			return <TooltipsPage {...{ template: 'corporate' }} />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page
