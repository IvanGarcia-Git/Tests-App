import { useEffect, useState } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue,
	Spinner,
	type SortDescriptor,
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'
import { t } from '@/i18n'
import { Pager, Filters } from './componentes'

import type { ProductsProps } from '@/pages/demo/types'

export const RealDataTable = ({ data }: { data: ProductsProps }) => {
	const [selectedKeys, setSelectedKeys] = useState(
		new Set(data.data.length > 2 ? [data.data[3].sku] : [])
	)
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({})
	const [isLoading, setIsLoading] = useState(true)

	const sort = useTableSorting()
	const { links, current_page } = data

	useEffect(() => {
		if (data.data) setIsLoading(false)
	}, [data])

	return (
		<>
			<div className="w-full space-y-6">
				<Filters />

				<Table
					removeWrapper
					radius="none"
					shadow="none"
					aria-label="Table"
					color="primary"
					selectionMode="multiple"
					selectedKeys={selectedKeys}
					// @ts-ignore
					onSelectionChange={setSelectedKeys}
					onSortChange={(sortDescriptor) => {
						const sd = sort({ sortDescriptor, only: ['products'] })
						setSortDescriptor(sd)
						setIsLoading(true)
					}}
					sortDescriptor={sortDescriptor}
					bottomContent={links && <Pager {...{ links, current_page }} />}
					classNames={{
						base: 'w-full',
						th: '[&]:first:rounded-none [&]:last:rounded-none [&]:first:before:!rounded-none [&]:last:before:!rounded-none',
						td: '[&]:first:rounded-none [&]:last:rounded-none [&]:first:before:!rounded-none [&]:last:before:!rounded-none',
						tbody: 'rounded-none',
					}}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key} allowsSorting width={column.width}>
								{column.label}
							</TableColumn>
						)}
					</TableHeader>

					<TableBody
						items={data.data}
						loadingContent={<Spinner label={String(t('loading'))} />}
						isLoading={isLoading}
						emptyContent={t('There are no results for this view')}
					>
						{(item) => (
							<TableRow key={item.sku}>
								{(key) => (
									<TableCell>
										<span className="text-sm font-light">
											{getKeyValue(item, key)}
										</span>
									</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</>
	)
}

const columns = [
	{ key: 'name', label: 'Name', width: 550 },
	{ key: 'category', label: 'Category', width: 200 },
	{ key: 'price', label: 'Price', width: 200 },
	{ key: 'sku', label: 'SKU', width: 150 },
]
