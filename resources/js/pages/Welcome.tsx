import { GuestLayout } from '@/layouts'
import { t } from '@/i18n'
import { router } from '@inertiajs/react'
import { PageProps } from '@/types'
import { Button } from '@nextui-org/react'
import { useColorMode } from '@/hooks'

const Welcome = ({
	auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
	useColorMode()

	return (
		<div className="container mx-auto">
			<div className="flex justify-center items-center min-h-screen">
				<div className="max-w-md space-y-20">
					<h1 className="text-primary text-3xl font-semibold text-center">
						Welcome to Laravel
					</h1>

					{auth.user ? (
						<>
							<div className="flex justify-center">
								<Button
									color="primary"
									variant="flat"
									onPress={() => router.visit(route('login'))}
								>
									{t('Enter dashboard')}
								</Button>
							</div>
						</>
					) : (
						<div className="flex justify-center gap-x-5">
							<Button
								fullWidth
								color="primary"
								variant="flat"
								onPress={() => router.visit(route('login'))}
							>
								{t('Log in')}
							</Button>

							<Button
								fullWidth
								color="primary"
								variant="flat"
								onPress={() => router.visit(route('register'))}
							>
								{t('Register')}
							</Button>
						</div>
					)}

					<div className="text-gray-400 text-center">
						<h3 className="font-semibold">What is this?</h3>
						<p className="leading-tight">
							An authentication interface built in Laravel implementing Laravel
							Breeze, NextUi and Inertia with React.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

Welcome.layout = (page: JSX.Element) => (
	<GuestLayout {...{ children: page, pageTitle: String(t('Welcome')) }} />
)

export default Welcome
