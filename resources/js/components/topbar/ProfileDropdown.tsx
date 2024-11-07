import { useRef } from 'react'
import {
	cn,
	User,
	Avatar,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	DropdownSection,
	useDisclosure,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { usePage, router } from '@inertiajs/react'
import { ModalImpersonate } from './ModalImpersonate'

import type { PageProps } from '@/types'

interface Props {
	showName?: boolean
	showOnlyName?: boolean
	showNameInDropdown?: boolean
}

let can_impersonate = false

export const ProfileDropdown = ({
	showName,
	showOnlyName,
	showNameInDropdown = true,
}: Props) => {
	const { onOpen, isOpen, onOpenChange } = useDisclosure()
	const user = usePage<PageProps>().props.auth.user
	const props = usePage<PageProps>().props

	const is_superadmin = useRef(
		user.roles && user.roles.filter((e) => e.name === 'Super Admin').length > 0
	)
	const is_admin = useRef(
		user.roles && user.roles.filter((e) => e.name === 'Admin').length > 0
	)

	if (
		(is_admin.current && props.adminCanImpersonate) ||
		is_superadmin.current
	) {
		can_impersonate = true
	}

	return (
		<>
			<Dropdown radius="none" placement="bottom-end">
				<DropdownTrigger className="cursor-pointer select-none">
					{showOnlyName ? (
						<div>{`${user.username}`}</div>
					) : showName ? (
						<User
							isFocusable
							name={user.username}
							description={user.company}
							avatarProps={{
								size: 'sm',
								color: 'primary',
								name: user.username[0] + user.username[1],
								src: user.profile_picture
									? `/storage/img/users/avatars/${user.profile_picture}`
									: '',
							}}
							classNames={{
								base: 'rounded-none flex-row-reverse',
								name: 'text-foreground-600 leading-tight truncate w-24',
								description: 'text-foreground-400 leading-tight truncate w-24',
							}}
						/>
					) : (
						<Avatar
							{...{
								size: 'sm',
								color: 'primary',
								name: user.username[0] + user.username[1],
								src: user.profile_picture
									? `/storage/img/users/avatars/${user.profile_picture}`
									: '',
							}}
						/>
					)}
				</DropdownTrigger>

				<DropdownMenu
					aria-label="Profile dropdown"
					color="primary"
					variant="light"
				>
					<DropdownSection showDivider>
						{showNameInDropdown ? (
							<DropdownItem
								textValue={String(t('My account'))}
								isReadOnly
								className="select-none cursor-default"
							>
								<span className="text-xs text-foreground-500 font-medium">
									{user.name && user.lastname
										? `${user.name} ${user.lastname}`
										: user.username}
								</span>
							</DropdownItem>
						) : (
							<></>
						)}

						<DropdownItem
							textValue={String(t('My account'))}
							onClick={() => router.visit(route('profile.edit'))}
							startContent={<i className="ri-profile-line ri-lg" />}
						>
							{t('My account')}
						</DropdownItem>

						<DropdownItem
							children={can_impersonate ? t('Impersonate') : <></>}
							startContent={
								can_impersonate && <i className="ri-user-received-line ri-lg" />
							}
							className={cn(!can_impersonate && 'hidden')}
							onPress={() => can_impersonate && onOpen()}
						/>
					</DropdownSection>

					<DropdownSection>
						<DropdownItem
							textValue={String(t('Log out'))}
							onClick={() => router.post(route('logout'))}
							startContent={
								<i className="ri-logout-circle-r-line ri-lg text-danger" />
							}
						>
							{t('Log out')}
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>

			<ModalImpersonate {...{ onOpen, isOpen, onOpenChange }} />
		</>
	)
}
