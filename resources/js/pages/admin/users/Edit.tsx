import { useRef } from 'react'
import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { router, Link } from '@inertiajs/react'
import {
	Image,
	Button,
	Card,
	CardHeader,
	CardBody,
	Chip,
	cn,
} from '@nextui-org/react'
import { useUser } from '@/hooks'
import { toast } from 'react-toastify'
import {
	FormBasicInformation,
	FormPersonalInformation,
	FormProfessionalInformation,
	FormPassword,
	SessionsManager,
	DeleteAccount,
} from './components'

import userBlank from '@/assets/img/blank-462x265.webp'

import type { PageProps, User } from '@/types'

interface Props extends PageProps {
	user: User
}

export const Page = ({ user }: Props) => {
	const { fullName } = useUser(user)
	const imgField = useRef<HTMLInputElement>(null)

	const removeImage = () => {
		router.delete(route('dashboard.user.remove_image_profile', { user }), {
			// @ts-ignore
			onSuccess: (resp: InertiaResponse) => {
				if (resp.props.flash && resp.props.flash.success) {
					toast.success(t(resp.props.flash.success))
				}
			},
			onError: (errors) => console.log(errors),
		})
	}

	const uploadNewProfilePicture = () => {
		imgField.current && imgField.current.click()
	}

	const updateImage = (file: File) => {
		if (file) {
			router.post(
				route('dashboard.user.update_image_profile', { user }),
				{ profile_picture: file },
				{
					forceFormData: true,
					// @ts-ignore
					onSuccess: (resp: InertiaResponse) => {
						if (resp.props.flash && resp.props.flash.success) {
							toast.success(t(resp.props.flash.success))
						}
					},
					onError: (errors) => console.log(errors),
				}
			)
		} else {
			console.error('Attempted to update image with null file')
		}
	}

	return (
		<>
			<PageHeader title={t('Edit user')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						variant="flat"
						startContent={<i className="ri-arrow-left-line" />}
						as={Link}
						href={route('dashboard.users.list')}
					>
						{t('Back to users list')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<div className="grid grid-cols-3 gap-6 lg:gap-12">
					<div className="col-span-1 space-y-8">
						<Card shadow="none">
							<CardHeader className="pb-4 flex-col p-0 relative group">
								<Image
									width="100%"
									height={350}
									removeWrapper
									classNames={{
										img: cn(
											'w-full rounded-b-none rounded-t-lg object-cover object-top'
										),
									}}
									src={
										user.profile_picture
											? `/storage/img/users/avatars/${user.profile_picture}`
											: userBlank
									}
								/>

								<input
									ref={imgField}
									type="file"
									style={{ height: 0, visibility: 'hidden' }}
									onChange={(e) => {
										const target = e.target as HTMLInputElement
										if (target.files) {
											updateImage(target.files[0])
										}
									}}
								/>

								<div
									className={cn(
										'bg-gradient-to-t from-black/60 to-transparent',
										'flex-1 space-y-4 p-5 pt-20 inset-x-0 bottom-0 absolute z-10',
										'transition-opacity group-hover:opacity-100',
										user.profile_picture && 'opacity-0'
									)}
								>
									<div className="flex gap-x-3 justify-between">
										<Chip
											size="sm"
											color="primary"
											avatar={
												<>
													<i className="ri-image-line ri-lg ml-1 -top-px relative" />
												</>
											}
											className={cn(
												'cursor-pointer select-none md:order-2',
												'hover:opacity-90 focus:opacity-50 active:opacity-disabled'
											)}
											onClick={uploadNewProfilePicture}
										>
											{user.profile_picture
												? t('Change picture')
												: t('Add profile image')}
										</Chip>

										<div>
											{user.profile_picture && (
												<Chip
													size="sm"
													color="danger"
													avatar={
														<>
															<i className="ri-delete-bin-2-line ri-lg ml-1 -top-px relative" />
														</>
													}
													className="cursor-pointer select-none hover:opacity-90 focus:opacity-50 active:opacity-disabled"
													onClick={removeImage}
												>
													{t('Remove picture')}
												</Chip>
											)}
										</div>
									</div>
								</div>
							</CardHeader>

							<CardBody>
								<ul className="text-sm px-5 pt-6 pb-10 space-y-5 [&>li]:flex [&>li]:justify-between">
									<li>
										<span className="text-foreground-500">{t('Username')}</span>
										<span className="font-light">@{user.username}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Role')}</span>
										<Chip
											size="sm"
											color="primary"
											variant="flat"
											className="h-5 px-1.5"
										>
											{user.role}
										</Chip>
									</li>
									<li>
										<span className="text-foreground-500">{t('Status')}</span>
										<span>
											<Chip
												size="sm"
												variant="dot"
												color={user.status === 'enabled' ? 'success' : 'danger'}
											>
												{user.status}
											</Chip>
										</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Name')}</span>
										<span className="font-light">{fullName}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Email')}</span>
										<span className="font-light">{user.email}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Phone')}</span>
										<span className="font-light">{user.phone}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Company')}</span>
										<span className="font-light">{user.company}</span>
									</li>
								</ul>
							</CardBody>
						</Card>

						<SessionsManager />
					</div>

					<div className="col-span-2 space-y-12">
						<FormBasicInformation />
						<FormPersonalInformation />
						<FormProfessionalInformation />
						<FormPassword />
						<DeleteAccount />
					</div>
				</div>
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
