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
import { PermissionContext } from '../providers/PermissionProvider'

import type { PermissionContextProps } from '@/types/permissions'

export const DeletePermission = () => {
	const { delete: destroy } = useForm()

	const { isOpen, onOpenChange, state, dispatch } = useContext(
		PermissionContext
	) as PermissionContextProps

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
							{t('Confirm permission deletion')}
						</ModalHeader>

						<ModalBody className="pt-0">
							<p className="text-sm">{t('This action may not be undone.')}</p>
						</ModalBody>

						<ModalFooter className="gap-x-4">
							<Button fullWidth variant="ghost" onPress={onClose}>
								{t('Cancel')}
							</Button>

							<Button
								fullWidth
								color="danger"
								onPress={() => {
									destroy(
										route('dashboard.permission.destroy', {
											permission: state.selectedPermission,
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
