import { useCallback, useEffect, useState } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Pagination,
	Avatar,
	Button,
	Badge,
	type SortDescriptor,
	Chip,
	cn,
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'
import { t } from '@/i18n'
import { Link, router, usePage } from '@inertiajs/react'
import type { PageProps, User, Users } from '@/types'

export const AdministratorsList = () => {
	const { users, total } = usePage<PageProps>().props as unknown as {
		users: Users
		total: number
	}

	// console.log(usePage())
	// const [selectedKeys, setSelectedKeys] = useState(new Set([data.data[3].sku]))
	// const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({})
	// const [isLoading, setIsLoading] = useState(true)

	// const sort = useTableSorting()
	const { links, current_page } = users

	// useEffect(() => {
	// 	if (data.data.length) setIsLoading(false)
	// }, [data])

	const renderCell = useCallback(
		(user: User, columnKey: string) =>
			({
				id: <>{user.id}</>,
				username: (
					<>
						<div className="flex gap-x-3 items-center">
							<Avatar
								src={`/storage/img/users/avatars/${user.profile_picture}`}
								name={user.name[0] + user.lastname[0]}
								radius="full"
								isBordered={user.sessions?.length ? true : false}
								color={user.sessions?.length ? 'success' : 'default'}
							/>
							{user.username}
						</div>
					</>
				),
				name: (
					<span className="font-medium">{`${user.name} ${user.lastname}`}</span>
				),
				company: user.company,
				status: (
					<>
						<Chip
							size="sm"
							color={user.status === 'enabled' ? 'success' : 'danger'}
							variant="dot"
						>
							{user.status}
						</Chip>
					</>
				),
				sessions: (
					<>
						<Chip
							size="sm"
							color={user.sessions?.length ? 'success' : 'default'}
							variant="flat"
							className={cn(!user.sessions?.length && 'text-opacity-60')}
						>
							{user.sessions?.length ? 'Active' : 'Inactive'}
						</Chip>
					</>
				),
				actions: (
					<div className="flex justify-end">
						<div className="space-x-2">
							<Button
								size="sm"
								color="primary"
								variant="flat"
								as={Link}
								href={route('dashboard.user.edit', { user })}
							>
								{t('Edit')}
							</Button>
						</div>
					</div>
				),
			}[columnKey]),
		[]
	)

	return (
		<>
			{users && (
				<Table
					removeWrapper
					aria-label="Table"
					classNames={{
						th: '[&]:first:rounded-none [&]:last:rounded-none',
						td: 'border-t border-content3',
					}}
					bottomContent={
						<div className="flex justify-between items-center">
							<div className="text-sm flex-1">
								<span className="whitespace-nowrap">
									{t('Total users: %', { total })}
								</span>
							</div>

							{links && (
								<div className="flex w-full justify-end">
									<Pagination
										size="sm"
										isCompact
										showControls
										showShadow
										variant="light"
										color="primary"
										page={current_page}
										total={links.length - 2 || 0}
										classNames={{ wrapper: 'shadow-none' }}
										onChange={(page) =>
											router.reload({
												data: { page },
												only: ['users'],
											})
										}
									/>
								</div>
							)}
						</div>
					}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn
								key={column.key}
								allowsSorting={column.allowsSorting ?? false}
								// width={column.width ?? 1}
							>
								{column.label}
							</TableColumn>
						)}
					</TableHeader>

					<TableBody
						items={users.data}
						// loadingContent={<Spinner label={t('loading')} />}
						// isLoading={isLoading}
					>
						{(item: User) => (
							<TableRow key={item.id}>
								{(key) => (
									<TableCell>{renderCell(item, String(key))}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			)}
		</>
	)
}

const columns = [
	{ key: 'id', label: '#' },
	{ key: 'username', label: t('Username') },
	{ key: 'name', label: t('Name') },
	{ key: 'company', label: t('Company') },
	{ key: 'status', label: t('Status') },
	{ key: 'sessions', label: t('Sessions') },
	{ key: 'actions', label: '' },
] as { key: string; label: string; allowsSorting?: boolean }[]
