import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	Chips,
	ChipsRadius,
	ChipsVariants,
	ChipsWithContent,
	ChipsDismissible,
	ChipsPressable,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const ChipsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Chips')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					A Chip is a small block of essential information representing an
					input, attribute, or action.
				</p>
				<p className="text-sm mt-2">
					Chips are often used to display content that is dynamic or
					interactive, such as tags, selected items, or categories. They provide
					a compact way to manage or highlight elements in a user interface,
					enhancing the user's experience by visually organizing related data.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'semanticChips', label: 'Semantic colors' },
								{ key: 'chipsRadius', label: 'Radius and sizing' },
								{ key: 'chipsVariants', label: 'Variants' },
								{ key: 'chipsWithContent', label: 'Icons and avatars' },
								{ key: 'chipsDismissible', label: 'Dismissible' },
								{ key: 'chipsPressable', label: 'Pressable' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<Chips />
					<ChipsRadius />
					<ChipsVariants />
					<ChipsWithContent />
					<ChipsDismissible />
					<ChipsPressable />
				</div>
			</PageContent>
		</>
	)
}
