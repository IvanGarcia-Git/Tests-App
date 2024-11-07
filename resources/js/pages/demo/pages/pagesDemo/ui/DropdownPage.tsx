import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicDropdown,
	SemanticDropdown,
	SingleSelectionDropdown,
	SectionsDropdown,
	OrientatedMenuDropdown,
	DescriptionsDropdown,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const DropdownPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Dropdown')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">Simplifying User Choices</p>
				<p className="text-sm mt-2">
					A dropdown is a user interface element that displays a list of actions
					or options when clicked. It allows users to make a selection from a
					list, offering a compact way to present multiple choices. Dropdowns
					are commonly used in forms, navigation menus, and settings panels to
					enhance user experience by reducing clutter and organizing content
					efficiently.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicDropdown', label: 'Basic dropdown' },
								{ key: 'semanticDropdown', label: 'Semantic colors' },
								{ key: 'singleSelectionDropdown', label: 'Single selection' },
								{ key: 'groupedItems', label: 'Grouped items' },
								{ key: 'orientated', label: 'Orientations' },
								{ key: 'descriptions', label: 'Menu items with descriptions' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicDropdown />
					<SemanticDropdown />
					<SingleSelectionDropdown />
					<SectionsDropdown />
					<OrientatedMenuDropdown />
					<DescriptionsDropdown />
				</div>
			</PageContent>
		</>
	)
}
