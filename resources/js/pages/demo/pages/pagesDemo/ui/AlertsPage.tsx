import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { SemanticAlerts, SolidAlerts } from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const AlertsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Alerts')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Capture Attention with Engaging Alerts
				</p>
				<p className="text-sm mt-2">
					Alerts are essential UI components used to notify users of important
					information, warnings, or confirmations. They help capture attention
					and guide users through critical actions or updates, ensuring that key
					messages are conveyed effectively. Alerts can be styled to indicate
					success, errors, or general information, improving communication
					within an application.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'semanticAlerts', label: 'Semantic alerts' },
								{ key: 'solidAlerts', label: 'Solid alerts' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-lg space-y-14">
					<SemanticAlerts />
					<SolidAlerts />
				</div>
			</PageContent>
		</>
	)
}
