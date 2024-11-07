import { useContext } from 'react'
import { useForm } from '@inertiajs/react'
import {
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { toast } from 'react-toastify'
import { NotificationContext } from '../providers/NotificationProvider'

import type { NotificationContextProps } from '@/types/notifications'

export const DeleteNotification = () => {
	const { delete: destroy } = useForm()

	const { isOpen, onOpenChange, state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	return (
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
							{t('Confirm notification deletion')}
						</ModalHeader>

						<ModalBody className="pt-0">
							<p className="text-sm">{t('This action may not be undone.')}</p>
						</ModalBody>

						<ModalFooter className="gap-x-4">
							<Button
								fullWidth
								variant="ghost"
								onPress={() => {
									onClose()
									dispatch({ type: 'setSelectedNotification', payload: null })
								}}
							>
								{t('Cancel')}
							</Button>

							<Button
								fullWidth
								color="danger"
								onPress={() => {
									destroy(
										route('dashboard.notification.destroy', {
											notification: state.selectedNotification,
										}),
										{
											preserveScroll: true,
											// @ts-ignore
											onSuccess: (resp: InertiaResponse) => {
												if (resp.props.flash && resp.props.flash.success) {
													toast.success(t(resp.props.flash.success))
												}
												onClose()
											},
										}
									)
								}}
							>
								{t('Confirm')}
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
