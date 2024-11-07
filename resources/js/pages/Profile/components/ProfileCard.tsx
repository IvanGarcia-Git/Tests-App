import { useRef } from 'react'
import { Image, Card, CardHeader, CardBody, Chip, cn } from '@nextui-org/react'
import { useUser } from '@/hooks'
import { t } from '@/i18n'
import { router, usePage } from '@inertiajs/react'
import { toast } from 'react-toastify'

import userBlank from '@/assets/img/blank-462x265.webp'

import type { PageProps, User, InertiaResponse } from '@/types'

export const ProfileCard = () => {
	const user = usePage<PageProps<{ user: User }>>().props.auth.user

	const { fullName } = useUser(user)
	const imgField = useRef<HTMLInputElement>(null)

	const removeImage = () => {
		router.delete(route('profile.remove_image'), {
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
				route('profile.update_image'),
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
			<Card shadow="none">
				<CardHeader className="pb-4 flex-col p-0 relative group">
					<Image
						width="100%"
						height={350}
						removeWrapper
						classNames={{
							img: cn(
								'w-full h-full rounded-b-none rounded-t-lg object-cover object-top'
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
						{user.roles && (
							<li>
								<span className="text-foreground-500">{t('Role')}</span>
								<Chip
									size="sm"
									color="primary"
									variant="flat"
									className="h-5 px-1.5"
								>
									{user.roles[0].name}
								</Chip>
							</li>
						)}
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
		</>
	)
}
