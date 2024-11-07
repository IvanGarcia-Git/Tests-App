import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicAccordion,
	CompactAccordion,
	WithSubtitlesAccordion,
	MultipleItemsAccordion,
	SplittedAccordion,
	CustomIndicatorsAccordion,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const AccordionPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Accordion')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Organize Content Efficiently with Interactive Accordions
				</p>
				<p className="text-sm mt-2">
					Accordions are versatile UI components that allow users to expand and
					collapse sections of content. This space-saving feature helps manage
					large amounts of information by showing only the most relevant
					sections at a time. Accordions enhance user experience by providing a
					clear, organized way to navigate through detailed content without
					overwhelming the interface.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicAccordion', label: 'Basic accordion' },
								{ key: 'compactAccordion', label: 'Compact accordion' },
								{ key: 'withSubtitles', label: 'With subtitles' },
								{ key: 'multipleItems', label: 'Multiple items' },
								{ key: 'splittedAccordion', label: 'Splitted accordion' },
								{ key: 'customIndicators', label: 'Custom indicators' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicAccordion />
					<CompactAccordion />
					<WithSubtitlesAccordion />
					<MultipleItemsAccordion />
					<SplittedAccordion />
					<CustomIndicatorsAccordion />
				</div>
			</PageContent>
		</>
	)
}
