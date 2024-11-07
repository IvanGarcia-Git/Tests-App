import { useContext } from 'react'
import {
	Input,
	Textarea,
	Button,
	Divider,
	Spinner,
	cn,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { NotificationContext } from '../providers/NotificationProvider'
import { useActions } from '../hooks/useActions'

import type { NotificationContextProps } from '@/types/notifications'

export const CreateEditForm = () => {
	const { state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	const {
		data,
		post,
		patch,
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
			<div className="w-full max-w-3xl p-6 lg:px-10">
				<div className="text-lg">
					{state.selectedNotification
						? t('Edit notification')
						: t('New notification')}
				</div>

				<Divider className="my-4" />

				<form onSubmit={submit} className="pb-10 space-y-5">
					<fieldset className="space-y-1">
						<label htmlFor="" className="text-sm">
							{t('Title')}
						</label>

						<Input
							variant="faded"
							ref={inputName}
							value={data.title}
							isInvalid={errors.title ? true : false}
							placeholder={t('What are you notifying about?').toString()}
							errorMessage={errors.title}
							onKeyUp={() => clearErrors('title')}
							isDisabled={processing}
							onValueChange={(val) => setData('title', val)}
						/>
					</fieldset>

					<fieldset className="space-y-1">
						<label htmlFor="" className="text-sm">
							{t('Body')}{' '}
							<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
						</label>

						<Textarea
							isRequired
							variant="faded"
							value={data.body}
							errorMessage={errors.body}
							isInvalid={errors.body ? true : false}
							onValueChange={(val) => setData('body', val)}
							isDisabled={processing}
							placeholder={t("Describe what's happening").toString()}
						/>
					</fieldset>

					{/* <fieldset>
						<Checkbox
							isDisabled={processing}
							defaultSelected
							isSelected={data.notify_all_users}
							onValueChange={(e) => setData('notify_all_users', e)}
							className="items-start"
						>
							<div className="flex flex-col leading-tight">
								<span className="text-sm">{t('Notify all users')}</span>
								<small className="text-foreground-700">
									{t('Uncheck it if you want to notify only selected users')}
								</small>
							</div>
						</Checkbox>
					</fieldset> */}

					{/* <fieldset className="opacity-30">
						<Checkbox
							isDisabled={processing}
							defaultSelected
							className="items-start"
						>
							<div className="flex flex-col leading-tight">
								<span className="text-sm">{t('Email notification')}</span>
								<small className="text-foreground-700">
									{t('Send email notification about the activity')}
								</small>
							</div>
						</Checkbox>
					</fieldset> */}

					<div className="flex justify-end gap-5">
						<Button
							isDisabled={processing}
							onPress={() => {
								dispatch({ type: 'closeDrawer' })
								dispatch({ type: 'setSelectedNotification', payload: null })
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
