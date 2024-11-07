import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	TabsBasic,
	TabsBordered,
	TabsLight,
	TabsUnderlined,
	PlacementForTabs,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const TabsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Tabs')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Organize Content Seamlessly with Interactive Tabs
				</p>
				<p className="text-sm mt-2">
					Tabs are a powerful UI component that allows users to switch between
					different content sections without leaving the page. By organizing
					information into distinct, clickable sections, tabs improve navigation
					and streamline the user experience. They are ideal for presenting
					related content in a compact, accessible format, helping users explore
					information efficiently.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'tabsBasic', label: 'Basic tabs' },
								{ key: 'tabsBordered', label: 'Bordered tabs' },
								{ key: 'tabsLight', label: 'Light tabs' },
								{ key: 'tabsUnderlined', label: 'Underlined tabs' },
								{ key: 'placement', label: 'Placement' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<TabsBasic />
					<TabsBordered />
					<TabsLight />
					<TabsUnderlined />
					<PlacementForTabs />
				</div>
			</PageContent>
		</>
	)
}
