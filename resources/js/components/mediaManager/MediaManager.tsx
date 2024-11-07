import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button,
} from '@nextui-org/react'
import { Navbar, TabContent } from './components'
import { t } from '@/i18n'
import { MediaManagerProvider } from './providers/MediaManagerProvider'

import type { ComponentProps } from './types.d'

export const MediaManager = ({
	button,
	onFilesSelected,
	collection = null,
	selectMultiple = false,
}: ComponentProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Button
				{...(button?.props
					? {
							...button.props,
							color: button.props.color ?? 'primary',
							size: button.props.size ?? 'sm',
							variant: button.props.variant ?? 'flat',
					  }
					: {
							color: 'primary',
							variant: 'flat',
							size: 'sm',
					  })}
				onPress={onOpen}
			>
				{button?.text ?? t('Add media')}
			</Button>

			<MediaManagerProvider {...{ collection, selectMultiple }}>
				<Modal
					size="full"
					isOpen={isOpen}
					isDismissable={false}
					hideCloseButton={true}
					backdrop="opaque"
					onClose={onClose}
					className="max-w-[90vw] max-h-[90vh]"
				>
					<ModalContent className="bg-transparent">
						{() => (
							<>
								<ModalHeader className="bg-white border-b border-gray-100 rounded-t-2xl dark:bg-gray-900 dark:border-gray-800">
									<div className="w-full flex justify-between ">
										<span>{t('Media manager')}</span>

										<Button
											variant="ghost"
											size="sm"
											startContent={
												<svg viewBox="0 0 24 24" className="h-5 fill-white">
													<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
												</svg>
											}
											onPress={onClose}
										>
											{t('Cancel')}
										</Button>
									</div>
								</ModalHeader>

								<ModalBody className="bg-white h-full p-0 overflow-hidden dark:bg-gray-900">
									<TabContent />
								</ModalBody>

								<ModalFooter className="p-0">
									<Navbar {...{ onFilesSelected, onClose }} />
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</MediaManagerProvider>
		</>
	)
}
