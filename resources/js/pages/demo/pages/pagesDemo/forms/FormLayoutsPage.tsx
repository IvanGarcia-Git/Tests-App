import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	VerticalFormLayout,
	HorizontalFormLayout,
	TwoColumnsFormLayout,
	GroupedFormLayout,
	ClassicFormLayout,
	ComfortableFormLayout,
	CompactFormLayout,
} from '@/pages/demo/componentsDemo'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const FormLayoutsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={`${t('Form Layouts')}`}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Forms are essential components of a dashboard, enabling users to
					manage data efficiently within a maximum content width.
				</p>
				<p className="text-sm mt-2">
					Their design maximizes space usage and ensures that interactions are
					straightforward and effective, enhancing the overall user experience
					by keeping data entry and management streamlined and accessible.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<ul>
						<li>Solid button</li>
						<li>Small button</li>
						<li>Large button</li>
					</ul>
				}
			>
				<div className="space-y-10">
					<VerticalFormLayout />
					<ClassicFormLayout />

					<div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
						<HorizontalFormLayout />
						<div className="lg:col-span-2">
							<TwoColumnsFormLayout />
						</div>
					</div>

					<GroupedFormLayout />

					<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
						<ComfortableFormLayout />
						<CompactFormLayout />
					</div>
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}
