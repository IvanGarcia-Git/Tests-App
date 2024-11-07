import { Layout } from '@/layouts/admin/Layout'
import {
	InputPage,
	SelectPage,
	TextareaPage,
	CheckboxPage,
	RadioButtonPage,
	SwitchPage,
	SliderPage,
	DatePickerPage,
	FormLayoutsPage,
	TipTapPage,
} from '@/pages/demo/pages/pagesDemo/forms'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Input':
			return <InputPage {...{ template: 'corporate' }} />
		case 'Select':
			return <SelectPage {...{ template: 'corporate' }} />
		case 'Textarea':
			return <TextareaPage {...{ template: 'corporate' }} />
		case 'Checkbox':
			return <CheckboxPage {...{ template: 'corporate' }} />
		case 'Radio Button':
			return <RadioButtonPage {...{ template: 'corporate' }} />
		case 'Switch':
			return <SwitchPage {...{ template: 'corporate' }} />
		case 'Slider':
			return <SliderPage {...{ template: 'corporate' }} />
		case 'Date Picker':
			return <DatePickerPage {...{ template: 'corporate' }} />
		case 'Form layouts':
			return <FormLayoutsPage {...{ template: 'corporate' }} />
		case 'Wysiwyg':
			return <TipTapPage {...{ template: 'corporate' }} />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page
