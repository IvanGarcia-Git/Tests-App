import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicRadio,
	RadioSizing,
	RadioValidationStyles,
	CustomRadioGroup,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const RadioButtonPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Radio Button')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Intuitive radio buttons that streamline decision-making for users.
				</p>
				<p className="text-sm mt-2">
					Each radio button is thoughtfully designed for clarity, helping users
					make selections effortlessly. These components offer a perfect harmony
					of style and function, promoting a smooth interaction experience.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicRadio', label: 'Basic radio' },
								{ key: 'radioSizing', label: 'Sizing' },
								{ key: 'validationStyles', label: 'Validation styles' },
								{ key: 'customRadioGroup', label: 'Custom radio group' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicRadio />
					<RadioSizing />
					<RadioValidationStyles />
					<CustomRadioGroup />
				</div>
			</PageContent>
		</>
	)
}
