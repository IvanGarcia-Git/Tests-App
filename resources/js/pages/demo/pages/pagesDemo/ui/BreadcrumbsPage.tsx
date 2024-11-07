import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicBreadcrumbs,
	BreadcrumbVariants,
	ControlledBreadcrumbs
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const BreadcrumbsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Breadcrumbs')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Enhance Navigation with Intuitive Breadcrumbs
				</p>
				<p className="text-sm mt-2">
					Breadcrumbs are a navigation aid that helps users understand their
					location within a website or application. By displaying a trail of
					links, breadcrumbs allow users to easily backtrack through previous
					pages or sections, improving the overall user experience and making
					site navigation more intuitive and efficient.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicBreadcrumbs', label: 'Basic breadcrumbs' },
								{ key: 'breadcrumbVariants', label: 'Breadcrumb variants' },
								{ key: 'controlledBreadcrumbs', label: 'Controlled breadcrumbs' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicBreadcrumbs />
					<BreadcrumbVariants />
					<ControlledBreadcrumbs />
				</div>
			</PageContent>
		</>
	)
}
