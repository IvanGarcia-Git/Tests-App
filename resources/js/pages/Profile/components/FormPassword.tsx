import { FormEvent, useRef, useState } from 'react'
import { t } from '@/i18n'
import { useForm } from '@inertiajs/react'
import { Input, Button, Divider } from '@nextui-org/react'
import { toast } from 'react-toastify'

import type { InertiaResponse } from '@/types'

export const FormPassword = () => {
	const [currentPasswordVisibility, setCurrentPasswordVisibility] =
		useState(false)
	const [newPasswordVisibility, setNewPasswordVisibility] = useState(false)
	const passwordInput = useRef<HTMLInputElement>(null)
	const currentPasswordInput = useRef<HTMLInputElement>(null)

	const {
		data,
		setData,
		put,
		reset,
		processing,
		errors,
		clearErrors,
		isDirty,
	} = useForm({
		current_password: '',
		password: '',
		password_confirmation: '',
	})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		put(route('password.update'), {
			preserveScroll: true,
			// @ts-ignore
			onSuccess: (resp: InertiaResponse) => {
				reset()
				if (resp.props.flash && resp.props.flash.success) {
					toast.success(t(resp.props.flash.success))
				}
			},
			onError: (errors) => {
				console.log(errors)

				if (errors.password) {
					reset('password', 'password_confirmation')
					passwordInput.current?.focus()
				}

				if (errors.current_password) {
					reset('current_password')
					currentPasswordInput.current?.focus()
				}
			},
		})
	}

	return (
		<>
			<form onSubmit={submit}>
				<section className="space-y-5">
					<div className="font-medium flex gap-5 items-center">
						{t('Security')}
						<Divider className="flex-1" />
					</div>

					<div className="grid gap-x-6 gap-y-5 lg:grid-cols-2">
						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Current Password')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								ref={currentPasswordInput}
								variant="faded"
								value={data.current_password}
								errorMessage={errors.current_password}
								type={currentPasswordVisibility ? 'text' : 'password'}
								isInvalid={errors.current_password ? true : false}
								onKeyUp={() => clearErrors('current_password')}
								description={t(
									'The password must be at least 8 characters long'
								)}
								endContent={
									<button
										type="button"
										tabIndex={-1}
										onClick={() =>
											setCurrentPasswordVisibility(!currentPasswordVisibility)
										}
									>
										{currentPasswordVisibility ? (
											<i className="ri-eye-fill ri-lg text-primary" />
										) : (
											<i className="ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" />
										)}
									</button>
								}
								isDisabled={processing}
								onValueChange={(e) => setData('current_password', e)}
							/>
						</fieldset>

						<fieldset></fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('New Password')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								ref={passwordInput}
								variant="faded"
								value={data.password}
								errorMessage={errors.password}
								type={newPasswordVisibility ? 'text' : 'password'}
								isInvalid={errors.password ? true : false}
								onKeyUp={() => clearErrors('password')}
								description={t(
									'The password must be at least 8 characters long'
								)}
								endContent={
									<button
										type="button"
										tabIndex={-1}
										onClick={() =>
											setNewPasswordVisibility(!newPasswordVisibility)
										}
									>
										{newPasswordVisibility ? (
											<i className="ri-eye-fill ri-lg text-primary" />
										) : (
											<i className="ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600" />
										)}
									</button>
								}
								isDisabled={processing}
								onValueChange={(e) => setData('password', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Confirm Password')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.password_confirmation}
								errorMessage={errors.password_confirmation}
								type={newPasswordVisibility ? 'text' : 'password'}
								isInvalid={errors.password_confirmation ? true : false}
								onKeyUp={() => clearErrors('password_confirmation')}
								isDisabled={processing}
								onValueChange={(e) => setData('password_confirmation', e)}
							/>
						</fieldset>
					</div>

					<div className="flex justify-end">
						<Button
							type="submit"
							color="primary"
							className="w-40"
							isLoading={processing}
							isDisabled={!isDirty}
						>
							{t('Save')}
						</Button>
					</div>
				</section>
			</form>
		</>
	)
}
