import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicTextarea,
	ClassicTextarea,
	TextareaAutosize,
	TextareaRounded,
	RequiredTextarea,
	TextareaValidationStyles,
	HorizontalTextarea,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const TextareaPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Textarea')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					User-friendly text areas that encourage clear and efficient input.
				</p>
				<p className="text-sm mt-2">
					Each textarea is spacious and responsive, allowing users to provide
					detailed input without hassle. These components are designed with both
					form and function in mind, ensuring a comfortable user experience.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicTextarea', label: 'Basic textarea' },
								{ key: 'classicTextarea', label: 'Classic style' },
								{ key: 'textareaAutosize', label: 'Autosize' },
								{ key: 'textareaRounded', label: 'Border radius' },
								{ key: 'requiredTextarea', label: 'Required' },
								{ key: 'validationStyles', label: 'Validation styles' },
								{ key: 'horizontalTextarea', label: 'Horizontal textarea' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicTextarea />
					<ClassicTextarea />
					<TextareaAutosize />
					<TextareaRounded />
					<RequiredTextarea />
					<TextareaValidationStyles />
					<HorizontalTextarea />
				</div>
			</PageContent>
		</>
	)
}
