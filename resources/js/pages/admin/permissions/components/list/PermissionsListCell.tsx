import { type Dispatch } from 'react'
import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react'
import { t } from '@/i18n'

import type { Permission } from '@/types/permissions'

interface Props {
	item: Permission
	key: string
	dispatch: Dispatch<any>
	onOpen: () => void
	protected_permissions: string[]
}

export const PermissionsListCell = ({
	item,
	key,
	dispatch,
	onOpen,
	protected_permissions,
}: Props) => {
	switch (key) {
		case 'name':
			return <span className="font-medium">{item.name}</span>
		case 'guard_name':
			return item.guard_name
		case 'actions':
			return (
				!protected_permissions.includes(item.name) && (
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
										case 'edit': {
											dispatch({ type: 'setSelectedPermission', payload: item })
											dispatch({ type: 'openDrawer' })
											break
										}
										case 'delete': {
											dispatch({ type: 'setSelectedPermission', payload: item })
											onOpen()
											break
										}
									}
								}}
							>
								<DropdownItem key="edit">{t('Edit')}</DropdownItem>
								<DropdownItem
									key="delete"
									className="text-danger"
									color="danger"
								>
									{t('Delete')}
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				)
			)

		default:
			return null
	}
}
