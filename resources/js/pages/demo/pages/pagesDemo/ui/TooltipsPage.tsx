import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { BasicTooltip } from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const TooltipsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Tooltips')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Enhance Usability with Informative Tooltips
				</p>
				<p className="text-sm mt-2">
					Tooltips are small, contextual pop-ups that provide additional
					information when users hover over or focus on an element. They offer a
					concise way to deliver hints, descriptions, or tips without cluttering
					the interface. Tooltips improve user experience by offering instant,
					relevant information, making interactions more intuitive and
					efficient.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicTooltip', label: 'Basic tooltip' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicTooltip />
				</div>
			</PageContent>
		</>
	)
}
