import { useRef, useEffect, FormEventHandler } from 'react'
import { Link, useForm } from '@inertiajs/react'
import { t } from '@/i18n'
import { Input, Button } from '@nextui-org/react'
import { AuthLayout1, AuthLayout2, AuthLayout3 } from '@/layouts/auth'
import { StatusMessage } from './components'

interface Props {
	status: string
	layout: string
}

const pageTitle = t('Forgot your password?').toString()

const Page = ({ status, layout }: Props) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
	})

	const inputEmail = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputEmail.current?.focus()
	}, [])

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route('password.email'), {
			onSuccess: () => reset(),
		})
	}

	return (
		<>
			<div className="w-72 space-y-7">
				<div className="text-sm leading-tight">
					{t('forgot-password-message')}
				</div>

				{status && <StatusMessage {...{ status }} />}

				<form onSubmit={submit}>
					<div className="space-y-4">
						<fieldset className="space-y-1">
							<Input
								id="email"
								type="email"
								name="email"
								label="Email"
								value={data.email}
								isDisabled={processing}
								ref={inputEmail}
								isInvalid={errors.email ? true : false}
								errorMessage={errors.email}
								onValueChange={(e) => setData('email', e)}
							/>
						</fieldset>

						<Button
							color="primary"
							fullWidth
							type="submit"
							spinner={<i className="ri-loader-line ri-lg animate-spin"></i>}
							isLoading={processing}
						>
							{t('Email password reset link')}
						</Button>
					</div>
				</form>

				<div className="space-y-3">
					<div>
						<Button
							as={Link}
							disableRipple
							color="primary"
							variant="light"
							className="p-0 h-auto hover:!bg-transparent"
							href={route('login')}
						>
							{t('Already registered?')}
						</Button>
					</div>

					<div>
						<Button
							as={Link}
							disableRipple
							color="primary"
							variant="light"
							className="p-0 h-auto hover:!bg-transparent"
							href={route('register')}
						>
							{t("Don't have an Account?")}
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

Page.layout = (page: JSX.Element) => {
	switch (page.props.layout) {
		case 'layout1':
			return <AuthLayout1 {...{ children: page, pageTitle }} />
		case 'layout2':
			return <AuthLayout2 {...{ children: page, pageTitle }} />
		case 'layout3':
			return <AuthLayout3 {...{ children: page, pageTitle }} />
		default:
			return <AuthLayout1 {...{ children: page, pageTitle }} />
	}
}

export default Page
