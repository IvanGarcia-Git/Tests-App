import { useContext, useEffect } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Spinner,
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'
import { t } from '@/i18n'
import { usePage } from '@inertiajs/react'
import { PermissionsListCell, PermissionsListPager } from './list'
import { DeletePermission } from './DeletePermission'
import { PermissionContext } from '../providers/PermissionProvider'

import type { PageProps } from '@/types'
import type {
	Permissions,
	Permission,
	PermissionContextProps,
} from '@/types/permissions'

export const PermissionsList = () => {
	const {
		props: { permissions, protected_permissions },
	} = usePage<PageProps>()

	const { links, current_page, data } = permissions as Permissions
	const undeletablePermissions = protected_permissions as string[]

	const { state, onOpen, dispatch } = useContext(
		PermissionContext
	) as PermissionContextProps

	const sort = useTableSorting()

	useEffect(() => {
		if (data) dispatch({ type: 'setListLoading', payload: false })
	}, [data])

	return (
		<>
			<Table
				removeWrapper
				aria-label="Table"
				classNames={{
					th: '[&]:first:rounded-none [&]:last:rounded-none',
					td: 'border-t border-content3',
				}}
				bottomContent={<PermissionsListPager {...{ links, current_page }} />}
				onSortChange={(sortDescriptor) => {
					const sd = sort({ sortDescriptor, only: ['permissions'] })
					dispatch({ type: 'setSortDescriptor', payload: sd })
					dispatch({ type: 'setListLoading', payload: true })
				}}
				sortDescriptor={state.sortDescriptor}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn
							key={column.key}
							allowsSorting={column.allowsSorting ?? false}
						>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>

				<TableBody
					items={data}
					loadingContent={
						<div className="bg-white/80 inset-0 absolute grid place-content-center z-10 dark:bg-black/80">
							<Spinner label={t('loading').toString()} />
						</div>
					}
					isLoading={state.listLoading}
				>
					{(item: Permission) => (
						<TableRow key={item.id}>
							{(key) => (
								<TableCell>
									{PermissionsListCell({
										...{
											item,
											key: String(key),
											dispatch,
											onOpen,
											protected_permissions: undeletablePermissions,
										},
									})}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<DeletePermission />
		</>
	)
}

const columns = [
	{ key: 'name', label: t('Name'), allowsSorting: true },
	{ key: 'guard_name', label: t('Guard') },
	{ key: 'actions', label: '' },
] as {
	key: string
	label: string
	allowsSorting?: boolean
	width: number | null
}[]
