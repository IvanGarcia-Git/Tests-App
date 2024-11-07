import { type FormEvent, useState } from 'react'
import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { useForm } from '@inertiajs/react'
import {
	Input,
	Button,
	ButtonGroup,
	Checkbox,
	Divider,
	Switch,
} from '@nextui-org/react'
import { toast } from 'react-toastify'
import { useGeneratePassword } from '@/hooks'

import type { PageProps, User, InertiaResponse } from '@/types'

interface Props extends PageProps {
	user: User
}

export const Page = ({ user }: Props) => {
	const [pwdVisibility, setPwdVisibility] = useState(false)
	const { generatePassword } = useGeneratePassword(16)

	const fillPassword = () => {
		const val = generatePassword()
		setData('password', val)
	}

	const { data, setData, post, processing, errors, clearErrors } = useForm({
		name: '',
		lastname: '',
		username: '',
		email: '',
		password: '',
		role: 3,
		status: 'enabled',
		send_details: true,
		basic_information: true,
	})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		post(route('dashboard.user.store', { user }), {
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
			<PageHeader title={user ? t('Edit user') : t('Create user')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						variant="flat"
						startContent={<i className="ri-arrow-left-line" />}
						onPress={() => window.history.back()}
					>
						{t('Back')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<form onSubmit={submit}>
					<div className="max-w-md space-y-10 lg:max-w-3xl">
						<section className="space-y-3">
							<div className="font-medium flex gap-5 items-center">
								{t('Basic information')}
								<Divider className="flex-1" />
							</div>

							<div className="grid gap-x-6 gap-y-5 lg:grid-cols-2">
								<fieldset className="space-y-1">
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

								<fieldset></fieldset>

								<fieldset className='space-y-1'>
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

								<fieldset className='space-y-1'>
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

								<fieldset className='space-y-1'>
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

								<fieldset>
									<label className="text-small text-foreground-500 select-none">
										{t('Role')}
									</label>
									<ButtonGroup fullWidth isDisabled={processing}>
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
							</div>
						</section>

						<section className="space-y-3">
							<div className="font-medium flex gap-5 items-center">
								{t(`Security & status`)}
								<Divider className="flex-1" />
							</div>

							<div className="grid gap-x-6 lg:grid-cols-2">
								<fieldset className='space-y-1'>
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

								<div className="flex flex-col gap-y-1 pt-6">
									<label className="text-small text-foreground-500 select-none">
										{t('User status')}
									</label>

									<Switch
										size="sm"
										aria-label="Remember me"
										value={'1'}
										isDisabled={processing}
										isSelected={data.status === 'enabled'}
										onValueChange={(val) =>
											setData('status', val ? 'enabled' : 'disabled')
										}
										className="mx-2"
									>
										{t('Is the user enabled?')}
									</Switch>
								</div>
							</div>
						</section>

						<div className="flex flex-col justify-between gap-4 pt-5 md:flex-row lg:gap-10">
							<Checkbox
								size="sm"
								isSelected={data.send_details}
								onValueChange={(val) => setData('send_details', val)}
								classNames={{
									base: 'items-start',
									label: '-top-1 relative lg:-top-0.5',
								}}
								isDisabled={processing}
							>
								<div className="text-sm text-ellipsis">
									{t(
										'Would you like to send the new user their account details via email?'
									)}
								</div>
							</Checkbox>

							<Button
								type="submit"
								color="primary"
								className="w-40"
								isLoading={processing}
							>
								{t('Save')}
							</Button>
						</div>
					</div>
				</form>
			</PageContent>

			<div className="h-20"></div>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout
		{...{
			children: page,
			pageTitle: `${t('User')} ${page.props.user && page.props.user.username}`,
		}}
	/>
)

export default Page
