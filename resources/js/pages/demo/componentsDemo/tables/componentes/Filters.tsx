import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { t } from '@/i18n'
import { usePage, router } from '@inertiajs/react'
import { useState } from 'react'

type Props = { categories: { category: string }[]; s: string; cat: string }

const filterSearch = (val: string | null) => {
	if (!val) {
		router.reload({
			data: { s: null },
			only: ['products', 's'],
		})
	} else if (val.length > 3) {
		router.reload({
			data: { s: val },
			only: ['products', 's'],
		})
	}
}

const filterCategory = (val: string | null) => {
	if (!val) {
		router.reload({
			data: { cat: null },
			only: ['products', 'cat'],
		})
	} else {
		router.reload({
			data: { cat: val },
			only: ['products', 'cat'],
		})
	}
}

export const Filters = () => {
	const {
		props: { categories, s, cat },
	} = usePage() as { props: Props }

	const [filters, setFilters] = useState({ s: s ?? '', cat: cat ?? '' })

	const handleSearch = (val: string | null) => {
		setFilters((prev) => ({ ...prev, s: val ?? '' }))
		filterSearch(val)
	}

	const handleFilter = (val: string | null) => {
		setFilters((prev) => ({ ...prev, cat: val ?? '' }))
		filterCategory(val)
	}

	const handleClear = () => {
		setFilters({ s: '', cat: '' })

		router.reload({
			data: { cat: null, s: null },
			only: ['products', 'cat', 's'],
		})
	}

	return (
		<div className="flex justify-end gap-5">
			<Input
				label={t('Search').toString()}
				size="sm"
				value={filters.s}
				endContent={
					<div className="flex gap-2 items-center">
						<i className="ri-search-line ri-lg" />
					</div>
				}
				onValueChange={(val) => handleSearch(val)}
				className="max-w-xs"
			/>

			<Select
				items={categories}
				label="Category"
				size="sm"
				selectedKeys={new Set([filters.cat])}
				className="max-w-xs"
				onSelectionChange={(e) => handleFilter(e.currentKey ?? '')}
			>
				{categories.map((e) => (
					<SelectItem key={e.category}>{e.category}</SelectItem>
				))}
			</Select>

			<Button
				color="primary"
				variant="flat"
				size="lg"
				radius="sm"
				isDisabled={!filters.cat && !filters.s ? true : false}
				onPress={() => handleClear()}
			>
				<span className="text-sm">{t('Clear')}</span>
			</Button>
		</div>
	)
}
