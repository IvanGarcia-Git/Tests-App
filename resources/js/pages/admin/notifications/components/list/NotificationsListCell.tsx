import { type Dispatch } from 'react'
import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react'
import dayjs from 'dayjs'
import { t } from '@/i18n'

import type { Notification } from '@/types/notifications'

interface Props {
	item: Notification
	key: string
	dispatch: Dispatch<any>
	onOpen: () => void
}

export const NotificationsListCell = ({
	item,
	key,
	dispatch,
	onOpen,
}: Props) => {
	switch (key) {
		case 'id':
			return item.id
		case 'title':
			return <span className="font-semibold">{item.title}</span>
		case 'body':
			return <div className="w-96 truncate">{item.body}</div>
		case 'created_at':
			return dayjs(item.created_at).format('MM/DD/YYYY')
		case 'actions':
			return (
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
										dispatch({ type: 'setSelectedNotification', payload: item })
										dispatch({ type: 'openDrawer' })
										break
									}
									case 'delete': {
										dispatch({ type: 'setSelectedNotification', payload: item })
										onOpen()
										break
									}
								}
							}}
						>
							<DropdownItem key="edit">{t('Edit')}</DropdownItem>
							<DropdownItem key="delete" className="text-danger" color="danger">
								{t('Delete')}
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			)

		default:
			return null
	}
}
