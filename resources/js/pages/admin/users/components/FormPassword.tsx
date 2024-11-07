import { FormEvent, useState } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Input, Button, Divider } from '@nextui-org/react'
import { toast } from 'react-toastify'
import { useGeneratePassword } from '@/hooks'

import type { PageProps, User, InertiaResponse } from '@/types'

export const FormPassword = () => {
	const { user } = usePage<PageProps<{ user: User }>>().props

	const [pwdVisibility, setPwdVisibility] = useState(false)
	const { generatePassword } = useGeneratePassword(16)

	const fillPassword = () => {
		const val = generatePassword()
		setData('password', val)
	}

	const { data, setData, put, processing, errors, clearErrors, isDirty } =
		useForm({
			id: user.id ?? null,
			password: '',
			security_information: true,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		put(route('dashboard.user.update', { user }), {
			preserveScroll: true,
			// @ts-ignore
			onSuccess: (resp: InertiaResponse) => {
				if (resp.props.flash && resp.props.flash.success) {
					toast.success(t(resp.props.flash.success))
				}
			},
			onError: (errors) => console.log(errors),
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

					<div className="grid gap-x-6 lg:grid-cols-2">
						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Password')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.password}
								errorMessage={errors.password}
								type={pwdVisibility ? 'text' : 'password'}
								isInvalid={errors.password ? true : false}
								onKeyUp={() => clearErrors('password')}
								description={t(
									'The password must be at least 8 characters long'
								)}
								endContent={
									<button
										type="button"
										tabIndex={-1}
										onClick={() => setPwdVisibility(!pwdVisibility)}
									>
										{pwdVisibility ? (
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

						<div className="pt-2 lg:pt-6">
							<Button
								size="sm"
								color="primary"
								variant="ghost"
								className="h-10 px-5"
								radius="md"
								onPress={fillPassword}
								isDisabled={processing}
							>
								Generate password
							</Button>
						</div>
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
