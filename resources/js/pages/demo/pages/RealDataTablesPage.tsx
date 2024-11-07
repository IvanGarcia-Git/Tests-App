import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { RealDataTable } from '@/pages/demo/componentsDemo'
import type { ProductsProps } from '@/pages/demo/types'
import type { PageProps } from '@/types'

interface Props extends PageProps {
	products: ProductsProps
}

export const Page = ({ products }: Props) => {
	return (
		<>
			<PageHeader title={t('Real data table')}>
				<p className="text-sm">
					This table uses Inertia.js to fetch data from the database, presenting
					real-world information in an effective and fast manner. Inertia.js
					acts as a bridge between the front-end and back-end, seamlessly
					loading data without the need for full-page reloads. This results in a
					smooth user experience, where data is retrieved and displayed quickly.
					The table's design focuses on clarity and efficiency, ensuring that
					users can easily access and understand the information presented. By
					leveraging Inertia.js, the table provides a responsive and up-to-date
					view of the data, making it a powerful tool for decision-making and
					analysis.
				</p>
			</PageHeader>

			<PageContent>
				<div className="flex-1">
					<RealDataTable {...{ data: products }} />

					<div className="h-20" />
				</div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Real data table')) }} />
)

export default Page
