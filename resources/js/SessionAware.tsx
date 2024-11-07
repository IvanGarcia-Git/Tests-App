import { type PropsWithChildren, useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { t } from '@/i18n'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	useDisclosure,
} from '@nextui-org/react'
import { router } from '@inertiajs/react'

const promptBeforeIdle = 60 * 1000
const timeout = 120 * 60 * 1000

interface Props extends PropsWithChildren {
	user: any
}

export const SessionAware = ({ children, user }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [state, setState] = useState<string>('Active')
	const [remaining, setRemaining] = useState<number>(0)

	/**
	 * Called when the user is considered idle.
	 *
	 * Sets the application state to 'Idle' and logs the user out if they are
	 * authenticated.
	 */
	const onIdle = () => {
		setState('Idle')
		if (user) {
			router.post(route('logout'))
		}
	}

	/**
	 * Called when the user is considered active again.
	 *
	 * Sets the application state back to 'Active' and closes the modal.
	 */
	const onActive = () => {
		setState('Active')
		onClose()
	}

	/**
	 * Called when the user is prompted to confirm their session.
	 *
	 * Sets the application state to 'Prompted' and opens the modal if the user
	 * is authenticated.
	 */
	const onPrompt = () => {
		setState('Prompted')
		if (user) {
			onOpen()
		}
	}

	const { getRemainingTime, activate } = useIdleTimer({
		onIdle, // The user is considered idle
		onActive, // The user is considered active
		onPrompt, // The user is prompted to stay
		promptBeforeIdle, // The time in milliseconds before the user is considered idle
		timeout, // The time in milliseconds before the user is considered idle
		throttle: 500, // The time in milliseconds before the user is considered active
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining(Math.ceil(getRemainingTime() / 1000))
		}, 500)

		return () => {
			clearInterval(interval)
		}
	})

	/**
	 * Called when the user clicks the "I'm still here" button.
	 *
	 * Resets the idle timer by calling `activate`.
	 */
	const handleStillHere = () => {
		activate()
	}

	return (
		<>
			{children}

			<Modal
				isOpen={isOpen}
				backdrop="blur"
				isDismissable={false}
				isKeyboardDismissDisabled={false}
				hideCloseButton={true}
				size="lg"
				radius="sm"
			>
				<ModalContent>
					{() => (
						<ModalBody className="px-10 py-7">
							<div className="text-center space-y-2">
								<p className="font-semibold">
									{t("You're about to be signed out")}
								</p>
								<p className="text-sm">
									{t(
										`For security reasons, your connection times out after you've been inactive for a white. Click the button below to stay signed in.`
									)}
								</p>
							</div>

							<div className="mt-3 flex justify-center">
								<Button
									color="primary"
									className="px-10"
									onPress={handleStillHere}
								>
									{t(`I'm still here`)}
								</Button>
							</div>
						</ModalBody>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
