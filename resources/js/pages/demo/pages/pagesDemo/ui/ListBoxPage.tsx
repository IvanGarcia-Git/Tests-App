import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicListbox,
	SemanticListbox,
	SelectableListbox,
	IconsAndDescriptionsListbox,
	SectionsListbox,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const ListBoxPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('ListBox')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Effortless Action Selection with a Dynamic Listbox
				</p>
				<p className="text-sm mt-2">
					A listbox is a user interface component that presents a list of
					options, allowing users to select one or more items. It provides a
					clean and efficient way to handle multiple actions in a compact space.
					In this example, a Listbox is implemented using NextUI, featuring
					options such as creating a new file, copying a link, editing, or
					deleting a file. This setup improves usability by streamlining the
					selection process for common actions.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicListbox', label: 'Basic listbox' },
								{ key: 'semanticListbox', label: 'Semantic listbox' },
								{ key: 'selectableListbox', label: 'Selectable' },
								{
									key: 'iconsAndDescriptionsListbox',
									label: 'Icons and descriptions',
								},
								{ key: 'groupedListbox', label: 'Grouped' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicListbox />
					<SemanticListbox />
					<SelectableListbox />
					<IconsAndDescriptionsListbox />
					<SectionsListbox />
				</div>
			</PageContent>
		</>
	)
}
