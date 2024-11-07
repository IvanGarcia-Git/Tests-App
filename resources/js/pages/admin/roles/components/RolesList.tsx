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
import { RolesListCell, RolesListPager } from './list'
import { DeleteRole } from './DeleteRole'
import { RoleContext } from '../providers/RoleProvider'

import type { PageProps } from '@/types'
import type { Roles, Role, RoleContextProps } from '@/types/roles'

export const RolesList = () => {
	const {
		props: { roles, protected_roles },
	} = usePage<PageProps>()

	const { links, current_page, data } = roles as Roles
	const undeletableRoles = protected_roles as string[]

	const { state, onOpen, dispatch } = useContext(
		RoleContext
	) as RoleContextProps

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
				bottomContent={<RolesListPager {...{ links, current_page }} />}
				onSortChange={(sortDescriptor) => {
					const sd = sort({ sortDescriptor, only: ['roles'] })
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
					{(item: Role) => (
						<TableRow key={item.id}>
							{(key) => (
								<TableCell>
									{RolesListCell({
										...{
											item,
											key: String(key),
											dispatch,
											onOpen,
											protected_roles: undeletableRoles,
										},
									})}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<DeleteRole />
		</>
	)
}

const columns = [
	{ key: 'id', label: '#', allowsSorting: true },
	{ key: 'name', label: t('Name'), allowsSorting: true },
	{ key: 'guard_name', label: t('Guard'), allowsSorting: true },
	{ key: 'permissions', label: t('Permissions'), allowsSorting: true },
	{ key: 'users_count', label: t('Associated users'), allowsSorting: true },
	{ key: 'actions', label: '' },
] as { key: string; label: string; allowsSorting?: boolean }[]
