import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { PageProps } from '@/types'
import {
	ProfileCard,
	FormBasicInformation,
	FormPersonalInformation,
	FormProfessionalInformation,
	FormPassword,
	DeleteAccount,
} from './components'
import { Link, router } from '@inertiajs/react'

import { User } from '@/types'
import { Button, Card, CardBody } from '@nextui-org/react'

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
	auth: { user: User }
}

const sendEmailAccountConfirmation = () => {
	router.post(route('verification.send'))
}

const Page = ({ auth: { user }, mustVerifyEmail, status }: Props) => {
	return (
		<>
			<PageHeader title={t('My account')} />

			<PageContent>
				<div className="grid grid-cols-3 gap-6 lg:gap-12">
					<div className="col-span-1 space-y-8">
						<ProfileCard />
					</div>

					<div className="col-span-2 space-y-12">
						{mustVerifyEmail && user.email_verified_at === null && (
							<>
								{status !== 'verification-link-sent' ? (
									<Card
										shadow="none"
										className="bg-danger-50 text-danger-500 pl-14 pr-6 py-6"
									>
										<i className="ri-mail-unread-line ri-2x left-3 top-4 absolute" />
										<CardBody className="p-0">
											<div className="flex justify-between items-center">
												<p className="text-danger font-light">
													{t('Your email address is unverified')}
												</p>

												<div>
													<Button
														size="sm"
														color="danger"
														onPress={sendEmailAccountConfirmation}
													>
														{t('email-verify-link')}
													</Button>
												</div>
											</div>
										</CardBody>
									</Card>
								) : (
									<>
										<Card
											shadow="none"
											className="bg-success-50 text-success-500 pl-14 pr-6 py-6"
										>
											<i className="ri-mail-check-line ri-2x left-3 top-3 absolute" />
											<CardBody className="text-sm font-light p-0">
												{t('verification-link-sent-notice')}
											</CardBody>
										</Card>
									</>
								)}
							</>
						)}

						<FormBasicInformation />
						<FormPersonalInformation />
						<FormProfessionalInformation />
						<FormPassword />
						<DeleteAccount />
					</div>
				</div>
			</PageContent>

			<div className="h-20" />
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('My account')) }} />
)

export default Page
