import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Input, Button, ButtonGroup, Divider, Switch } from '@nextui-org/react'
import { toast } from 'react-toastify'

import type { PageProps, User, InertiaResponse } from '@/types'

export const FormBasicInformation = () => {
	const { user, permission } = usePage<PageProps<{ user: User }>>().props

	const { data, setData, patch, processing, errors, clearErrors, isDirty } =
		useForm({
			id: user.id,
			name: user.name,
			lastname: user.lastname,
			username: user.username,
			email: user.email,
			role: user.roles ? user.roles[0].id : null,
			status: user.status ?? 'disabled',
			basic_information: true,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		patch(route('dashboard.user.update', { user }), {
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
						{t('Basic information')}
						<Divider className="flex-1" />
					</div>

					<div className="grid grid-cols-2 gap-x-6 gap-y-5">
						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Name')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.name}
								isInvalid={errors.name ? true : false}
								errorMessage={errors.name}
								onKeyUp={() => clearErrors('name')}
								isDisabled={processing}
								onValueChange={(e) => setData('name', e)}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Lastname')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.lastname}
								isInvalid={errors.lastname ? true : false}
								errorMessage={errors.lastname}
								onKeyUp={() => clearErrors('lastname')}
								isDisabled={processing}
								onValueChange={(e) => setData('lastname', e)}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Username')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.username}
								isInvalid={errors.username ? true : false}
								errorMessage={errors.username}
								onKeyUp={() => clearErrors('username')}
								isDisabled={processing}
								onValueChange={(e) => setData('username', e)}
							/>
						</fieldset>

						<fieldset>
							<label htmlFor="" className="text-sm">
								{t('Email')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.email}
								isInvalid={errors.email ? true : false}
								errorMessage={errors.email}
								onKeyUp={() => clearErrors('email')}
								isDisabled={processing}
								onValueChange={(e) => setData('email', e)}
							/>
						</fieldset>

						{'Super Admin Access' === permission && (
							<fieldset className="space-y-1">
								<label className="text-small text-foreground select-none">
									{t('Role')}
								</label>
								<ButtonGroup fullWidth size="sm" isDisabled={processing}>
									<Button
										color="primary"
										className="text-xs"
										onPress={() => setData('role', 3)}
										variant={data.role === 3 ? 'solid' : 'flat'}
									>
										User
									</Button>
									<Button
										color="primary"
										className="text-xs"
										onPress={() => setData('role', 2)}
										variant={data.role === 2 ? 'solid' : 'flat'}
									>
										Admin
									</Button>
									<Button
										color="primary"
										className="text-xs"
										onPress={() => setData('role', 1)}
										variant={data.role === 1 ? 'solid' : 'flat'}
									>
										Super Admin
									</Button>
								</ButtonGroup>
							</fieldset>
						)}

						<div className="flex flex-col gap-y-1">
							<label className="text-small text-foreground select-none">
								{t('User status')}
							</label>

							<Switch
								size="sm"
								aria-label="Remember me"
								value={'1'}
								isDisabled={processing}
								isSelected={data.status === 'enabled'}
								onValueChange={(val) => {
									setData('status', val ? 'enabled' : 'disabled')
									clearErrors('status')
								}}
								className="mx-2"
							>
								{t('Is the user enabled?')}
							</Switch>

							{errors.status && (
								<span className="text-tiny text-danger">{errors.status}</span>
							)}
						</div>
					</div>

					<div className="pt-5 flex justify-end">
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
