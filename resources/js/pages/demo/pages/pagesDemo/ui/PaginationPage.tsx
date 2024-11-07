import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicPagination,
	PaginationVariants,
	PaginationControls,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const PaginationPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Pagination')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Navigate Large Datasets with User-Friendly Pagination
				</p>
				<p className="text-sm mt-2">
					Pagination is a crucial UI component for dividing large datasets or
					content into manageable sections across multiple pages. It enhances
					user experience by allowing easy navigation through extensive
					information, reducing load times, and improving the overall layout.
					With pagination, users can quickly access specific data while keeping
					the interface clean and organized.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'paginationSizes', label: 'Pagination sizes' },
								{ key: 'paginationVariants', label: 'Pagination variants' },
								{ key: 'paginationControls', label: 'With controls' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicPagination />
					<PaginationVariants />
					<PaginationControls />
				</div>
			</PageContent>
		</>
	)
}
