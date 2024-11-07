import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicProgress,
	IndeterminateProgress,
	ProgressWithLabelAndValues,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const ProgressPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Progress')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Visualize Task Completion with Dynamic Progress Indicators
				</p>
				<p className="text-sm mt-2">
					Progress indicators are essential UI components that visually
					represent the completion status of a task or process. Whether it’s a
					loading bar, a percentage tracker, or a circular indicator, progress
					components help users understand how much of a task remains. They
					improve user experience by setting clear expectations and reducing
					uncertainty during wait times or multi-step processes.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicProgress', label: 'Basic progress' },
								{ key: 'indeterminateProgress', label: 'Indeterminate' },
								{ key: 'labelAndValues', label: 'Labels and values' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicProgress />
					<IndeterminateProgress />
					<ProgressWithLabelAndValues />
				</div>
			</PageContent>
		</>
	)
}
