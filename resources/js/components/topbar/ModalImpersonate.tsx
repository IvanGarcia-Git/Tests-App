import { FormEvent, useState } from 'react'
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalContent,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { router } from '@inertiajs/react'

interface Props {
	onOpen: () => void
	isOpen: boolean
	onOpenChange: () => void
}

export const ModalImpersonate = ({ onOpen, isOpen, onOpenChange }: Props) => {
	const [id, setId] = useState<number | null>(null)

	const submitImpersonate = (e: FormEvent) => {
		e.preventDefault()

		if (id) router.visit(route('impersonate', { id }))
	}

	return (
		<Modal {...{ isOpen, onOpenChange }}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>{t('Impersonate')}</ModalHeader>
						<ModalBody className="text-sm">
							<p>
								You can use the impersonate feature to simulate another user’s
								session. Simply enter the user’s ID in the field below and click
								the corresponding button. This will allow you to navigate the
								system as if you were that user, but keep in mind that any
								actions you take will be recorded as if they were done by the
								impersonated user.
							</p>
						</ModalBody>
						<ModalFooter>
							<form onSubmit={submitImpersonate}>
								<div className="grid grid-cols-2 gap-6">
									<div>
										<Input
											type="number"
											label={t('User ID')}
											labelPlacement="outside-left"
											onValueChange={(value) => setId(Number(value))}
											classNames={{ label: 'w-28' }}
										/>
									</div>

									<div>
										<Button
											fullWidth
											color="primary"
											type="submit"
											isDisabled={!id}
										>
											{t('Impersonate')}
										</Button>
									</div>
								</div>
							</form>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
