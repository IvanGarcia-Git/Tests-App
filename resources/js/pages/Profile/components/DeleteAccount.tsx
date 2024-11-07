import { useRef, FormEventHandler } from 'react'
import { t } from '@/i18n'
import { useForm } from '@inertiajs/react'
import {
	Input,
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Divider,
} from '@nextui-org/react'

export const DeleteAccount = (): JSX.Element => {
	const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()
	const passwordInput = useRef<HTMLInputElement>(null)

	const {
		data,
		setData,
		delete: destroy,
		processing,
		reset,
		errors,
	} = useForm({
		password: '',
	})

	const submit: FormEventHandler = (e) => {
		e.preventDefault()

		destroy(route('profile.destroy'), {
			preserveScroll: true,
			onSuccess: () => onClose(),
			onError: () => passwordInput.current?.focus(),
			onFinish: () => reset(),
		})
	}

	return (
		<>
			<div className="space-y-3">
				<Divider />

				<Button color="danger" variant="light" onPress={onOpen}>
					{t('Delete account')}
				</Button>
			</div>

			<Modal
				size="sm"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				isDismissable={false}
				isKeyboardDismissDisabled={true}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="pb-0">
								<span className="leading-tight select-none">
									{t('delete-account-confirmation-title')}
								</span>
							</ModalHeader>

							<form onSubmit={submit}>
								<ModalBody>
									<p className="text-sm leading-tight select-none">
										{t('delete-account-confirmation-message')}
									</p>

									<div className="space-y-1 mt-3">
										<Input
											ref={passwordInput}
											id="password"
											type="password"
											name="password"
											label={t('Password')}
											value={data.password}
											errorMessage={errors.password}
											isInvalid={errors.password ? true : false}
											onValueChange={(e) => setData('password', e)}
										/>
									</div>
								</ModalBody>

								<ModalFooter className="gap-x-4">
									<Button
										fullWidth
										color="default"
										variant="ghost"
										onPress={onClose}
									>
										{t('Cancel')}
									</Button>

									<Button
										fullWidth
										color="danger"
										type="submit"
										spinner={
											<i className="ri-loader-line ri-lg animate-spin"></i>
										}
										isLoading={processing}
									>
										{t('Delete')}
									</Button>
								</ModalFooter>
							</form>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
