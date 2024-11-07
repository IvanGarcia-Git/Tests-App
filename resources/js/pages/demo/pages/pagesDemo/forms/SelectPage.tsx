import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicSelect,
	ClassicSelect,
	SelectSizes,
	SelectRounded,
	SelectRequired,
	SelectValidationStyles,
	SelectWithAccessories,
	HorizontalSelect,
	MultipleSelection,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const SelectPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Select')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Stylish select menus that simplify choices and enhance usability.
				</p>
				<p className="text-sm mt-2">
					Each select menu is crafted for seamless interaction, making it easy
					to navigate through options. These components offer a refined balance
					of design and functionality, ensuring a smooth and intuitive user
					experience.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicSelect', label: 'Basic select' },
								{ key: 'classicSelect', label: 'Classic style' },
								{ key: 'selectSizes', label: 'Sizing' },
								{ key: 'selectRounded', label: 'Border radius' },
								{ key: 'selectRequired', label: 'Required' },
								{ key: 'validationStyles', label: 'Validation styles' },
								{ key: 'selectWithAccessories', label: 'Accessories' },
								{ key: 'horizontalSelect', label: 'Horizontal select' },
								{ key: 'multipleSelection', label: 'Multiple selection' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicSelect />
					<ClassicSelect />
					<SelectSizes />
					<SelectRounded />
					<SelectRequired />
					<SelectValidationStyles />
					<SelectWithAccessories />
					<HorizontalSelect />
					<MultipleSelection />
				</div>
			</PageContent>
		</>
	)
}
