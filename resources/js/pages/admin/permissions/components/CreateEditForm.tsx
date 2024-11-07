import { useContext } from 'react'
import { Input, Button, Divider, cn, Spinner } from '@nextui-org/react'
import { t } from '@/i18n'
import { PermissionContext } from '../providers/PermissionProvider'
import { useActions } from '../hooks/useActions'

import type { PermissionContextProps } from '@/types/permissions'

export const CreateEditForm = () => {
	const { state, dispatch } = useContext(
		PermissionContext
	) as PermissionContextProps

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
					{state.selectedPermission
						? t('Edit permission')
						: t('New permission')}
				</div>
				<Divider className="my-4" />

				<form onSubmit={submit} className="pb-10 space-y-5">
					<fieldset className="space-y-1">
						<label className="text-sm">
							{t('Permission name')}{' '}
							<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
						</label>

						<Input
							isRequired
							variant="faded"
							ref={inputName}
							value={data.name}
							isInvalid={errors.name ? true : false}
							errorMessage={errors.name}
							onKeyUp={() => clearErrors('name')}
							isDisabled={processing}
							onValueChange={(e) => setData('name', e)}
						/>
					</fieldset>

					<div className="flex justify-end gap-5">
						<Button
							isDisabled={processing}
							onPress={() => {
								dispatch({ type: 'closeDrawer' })
								dispatch({ type: 'setSelectedPermission', payload: null })
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
