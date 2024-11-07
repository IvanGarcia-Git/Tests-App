import { type Dispatch } from 'react'
import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Chip,
	cn,
} from '@nextui-org/react'
import { t } from '@/i18n'

import type { Role } from '@/types/roles'

interface Props {
	item: Role
	key: string
	dispatch: Dispatch<any>
	onOpen: () => void
	protected_roles: string[]
}

export const RolesListCell = ({
	item,
	key,
	dispatch,
	onOpen,
	protected_roles,
}: Props) => {
	switch (key) {
		case 'id':
			return item.id

		case 'name':
			return (
				<>
					<span
						className={cn(
							'font-medium',
							protected_roles.includes(item.name) && 'opacity-50'
						)}
					>
						{item.name}{' '}
					</span>
					{protected_roles.includes(item.name) && (
						<small className="text-xs text-danger pl-1">{t('Protected')}</small>
					)}
				</>
			)

		case 'guard_name':
			return (
				<span
					className={cn(protected_roles.includes(item.name) && 'opacity-50')}
				>
					{item.guard_name}
				</span>
			)

		case 'actions':
			return !protected_roles.includes(item.name) ? (
				<div className="flex justify-end">
					<Dropdown placement="bottom-end">
						<DropdownTrigger>
							<Button isIconOnly size="sm" radius="lg" variant="light">
								<i className="ri-more-2-line ri-xl" />
							</Button>
						</DropdownTrigger>
						<DropdownMenu
							aria-label="Static Actions"
							onAction={(key) => {
								switch (key) {
									case 'edit':
										{
											dispatch({ type: 'setSelectedRole', payload: item })
											dispatch({ type: 'openDrawer' })
										}
										break
									case 'delete':
										dispatch({ type: 'setSelectedRole', payload: item })
										onOpen()

										break
								}
							}}
						>
							<DropdownItem key="edit">{t('Edit')}</DropdownItem>

							<DropdownItem
								key="delete"
								className={cn(
									'text-danger',
									protected_roles.includes(item.name) && 'opacity-20'
								)}
								color="danger"
								variant={
									protected_roles.includes(item.name) ? 'light' : 'solid'
								}
							>
								{t('Delete')}
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			) : (
				<></>
			)

		case 'permissions':
			return (
				<div className="flex gap-2">
					{item.permissions.map((permission) => (
						<Chip key={permission.id} size="sm" color="primary" variant="flat">
							{permission.name}
						</Chip>
					))}
				</div>
			)

		case 'users_count':
			return item.users_count

		default:
			return null
	}
}
