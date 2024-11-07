import { useState } from 'react'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ModalPosition, ModalSizing } from '@/pages/demo/componentsDemo'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const ModalPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [modalPlacement, setModalPlacement] = useState<placement>('auto')
	const [modalSize, setModalSize] = useState<sizing>('sm')

	return (
		<>
			<PageHeader
				title={t('Modal')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="text-sm leading-tight">
					A modal is a pop-up window that appears on top of a webpage,
					temporarily blocking the main content to focus the user’s attention on
					a specific action or information. It’s often used for tasks like
					signing in, displaying important messages, or confirming actions.
					Modals enhance user experience by keeping everything in one place
					without navigating away from the current page.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'modalPositions', label: 'Positions' },
								{ key: 'modalSizing', label: 'Sizing' },
							],
						}}
					/>
				}
			>
				<div className="w-full max-w-xl space-y-28">
					<ModalPosition {...{ onOpen, setModalPlacement, setModalSize }} />
					<ModalSizing {...{ onOpen, setModalPlacement, setModalSize }} />
				</div>
			</PageContent>

			<Modal
				{...{
					isOpen,
					placement: modalPlacement,
					onOpenChange,
					size: modalSize,
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>Modal header</ModalHeader>
							<ModalBody className="text-sm">
								<p>
									A modal window enhances user experience by allowing focused
									interaction without leaving the current page. It’s perfect for
									capturing attention, displaying critical information, or
									prompting users to take action.
								</p>
								<p>
									Modals are also versatile; they can be used for forms,
									notifications, or confirmation dialogs, making them a powerful
									tool in UI design. Moreover, they help maintain context,
									reducing unnecessary navigation and improving usability.
								</p>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

type sizing =
	| 'sm'
	| 'xs'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| 'full'

type placement =
	| 'auto'
	| 'center'
	| 'top'
	| 'top-center'
	| 'bottom'
	| 'bottom-center'
