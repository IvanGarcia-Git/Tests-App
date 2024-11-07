import { useContext, useRef } from 'react'
import {
	Input,
	Button,
	Divider,
	cn,
	Spinner,
	Select,
	SelectItem,
	Chip,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { RoleContext } from '../providers/RoleProvider'
import { useActions } from '../hooks/useActions'
import { usePage } from '@inertiajs/react'

import type { PageProps } from '@/types'
import type { Role, RoleContextProps, WebPermissions } from '@/types/roles'
import { Permission } from '@/types/permissions'

export const CreateEditForm = () => {
	const { state, dispatch } = useContext(RoleContext) as RoleContextProps

	const {
		props: { protected_roles, permissions },
	} = usePage<PageProps>()

	const { web: webPermissions } = permissions as WebPermissions

	const undeletableRoles = protected_roles as string[]

	const isProtected = useRef(
		(state.selectedRole &&
			undeletableRoles.includes(state.selectedRole.name)) ??
			false
	)

	const {
		data,
		errors,
		setData,
		processing,
		clearErrors,
		reset,
		inputName,
		submit,
	} = useActions()

	return (
		<div
			className={cn(
				'bg-background border border-divider border-b-none h-full relative overflow-hidden',
				'w-full flex justify-center items-center'
			)}
		>
			<div className="p-6 lg:px-10">
				<div className="text-lg">
					{state.selectedRole ? t('Edit role') : t('New role')}
				</div>

				<Divider className="my-4" />

				<form
					onSubmit={submit}
					className="pb-10 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4 lg:space-y-0"
				>
					<fieldset className="space-y-1">
						<label htmlFor="" className="text-sm">
							{t('Role name')}{' '}
							<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
						</label>

						<Input
							isRequired
							ref={inputName}
							variant="faded"
							value={data.name}
							isInvalid={errors.name ? true : false}
							errorMessage={errors.name}
							onKeyUp={() => clearErrors('name')}
							isDisabled={isProtected.current || processing}
							onValueChange={(e) => setData('name', e)}
						/>
					</fieldset>

					<>
						{webPermissions && (
							<fieldset className="space-y-1">
								<label htmlFor="" className="text-sm">
									{t('Permissions')}
								</label>

								<Select
									aria-label="Permissions"
									selectionMode="multiple"
									selectedKeys={data.permissions}
									isMultiline={true}
									onSelectionChange={(values) => {
										setData(
											'permissions',
											Array.from(values).map((e) => e.toString())
										)
									}}
									description={`${data.permissions.length} ${t(
										'items selected'
									)}`}
								>
									{webPermissions.map((e: Permission) => {
										return <SelectItem key={e.name}>{e.name}</SelectItem>
									})}
								</Select>
							</fieldset>
						)}
					</>

					<div className="flex justify-end gap-5">
						<Button
							isDisabled={processing}
							onPress={() => {
								dispatch({ type: 'closeDrawer' })
								dispatch({ type: 'setSelectedRole', payload: null })
								reset()
							}}
							className="w-32"
						>
							{t('Cancel')}
						</Button>

						<Button
							type="submit"
							color="primary"
							className="w-32"
							isLoading={processing}
						>
							{t('Save')}
						</Button>
					</div>
				</form>
			</div>

			{processing && (
				<div className="bg-white/70 inset-0 absolute grid place-content-center z-30 dark:bg-black/80">
					<Spinner />
				</div>
			)}
		</div>
	)
}
