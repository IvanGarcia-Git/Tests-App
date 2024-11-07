import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicCheckbox,
	CheckboxSizing,
	CheckboxRounded,
	GroupCheckbox,
	CheckboxValidationStyles,
	CustomCheckbox,
	CustomCheckboxGroup,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const CheckboxPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Checkbox')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Well-designed checkboxes that ensure clarity and ease of selection.
				</p>
				<p className="text-sm mt-2">
					Each checkbox is simple and efficient, providing clear visual cues for
					user actions. These components are crafted to balance aesthetics and
					practicality, enhancing the overall usability of your forms.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicCheckbox', label: 'Basic checkbox' },
								{ key: 'checkboxSizing', label: 'Sizing' },
								{ key: 'checkboxRounded', label: 'Border radius' },
								{ key: 'checkboxGroup', label: 'Checkbox group' },
								{ key: 'validationStyles', label: 'Validation styles' },
								{ key: 'customCheckbox', label: 'Custom checkbox' },
								{ key: 'customCheckboxGroup', label: 'Custom checkbox group' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicCheckbox />
					<CheckboxSizing />
					<CheckboxRounded />
					<GroupCheckbox />
					<CheckboxValidationStyles />
					<CustomCheckbox />
					<CustomCheckboxGroup />
				</div>
			</PageContent>
		</>
	)
}
