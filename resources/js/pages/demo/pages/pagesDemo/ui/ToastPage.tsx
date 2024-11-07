import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const ToastPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Toasts')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Deliver Timely Notifications with Pop-up Toasts
				</p>
				<p className="text-sm mt-2">
					Toasts are transient UI elements that provide brief, non-intrusive
					notifications to users. They appear briefly and automatically
					disappear after a set time, making them ideal for delivering updates,
					success messages, or alerts without interrupting the user’s workflow.
					Toasts enhance user interaction by keeping users informed in a subtle
					yet effective manner.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								// { key: 'solidButton', label: 'Solid button' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-14"></div>
			</PageContent>
		</>
	)
}
