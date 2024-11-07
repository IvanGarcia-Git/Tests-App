import { useForm, usePage } from '@inertiajs/react'
import {
	Button,
	Divider,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { toast } from 'react-toastify'

import type { PageProps, User, InertiaResponse } from '@/types'

export const DeleteAccount = () => {
	const { user } = usePage<PageProps<{ user: User }>>().props
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const { delete: destroy } = useForm()

	return (
		<>
			<div className="space-y-3">
				<Divider />
				<Button color="danger" variant="light" onPress={onOpen}>
					{t('Delete account')}
				</Button>
			</div>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				isDismissable={false}
				isKeyboardDismissDisabled={true}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 select-none">
								{t('Confirm account deletion')}
							</ModalHeader>

							<ModalBody className="pt-0">
								<p className="text-sm">
									{t('This account will be permanently deleted.')}
								</p>
							</ModalBody>

							<ModalFooter className="gap-x-4">
								<Button fullWidth variant="ghost" onPress={onClose}>
									{t('Cancel')}
								</Button>

								<Button
									fullWidth
									color="danger"
									onPress={() =>
										destroy(route('dashboard.user.destroy', { user }), {
											preserveScroll: true,
											// @ts-ignore
											onSuccess: (resp: InertiaResponse) => {
												if (resp.props.flash && resp.props.flash.success) {
													toast.success(t(resp.props.flash.success))
												}
											},
										})
									}
								>
									{t('Confirm')}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
