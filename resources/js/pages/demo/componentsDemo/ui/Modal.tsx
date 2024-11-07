import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'

type Props = {
	onOpen: () => void
	setModalPlacement: (val: any) => void
	setModalSize: (val: any) => void
}

export const ModalPosition = ({
	onOpen,
	setModalPlacement,
	setModalSize,
}: Props) => {
	return (
		<div className="space-y-6" id="modalPositions">
			<h3 className="font-semibold">Positions</h3>

			<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
				{positions.map((e) => (
					<div key={e.title}>
						<Button
							fullWidth
							color="primary"
							variant="flat"
							size="lg"
							onPress={() => {
								setModalPlacement(e.placement)
								setModalSize('sm')
								onOpen()
							}}
						>
							{e.title}
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

export const ModalSizing = ({
	onOpen,
	setModalPlacement,
	setModalSize,
}: Props) => {
	return (
		<div className="space-y-6" id="modalSizing">
			<h3 className="font-semibold">Sizing</h3>

			<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
				{sizing.map((e) => (
					<div key={e.title}>
						<Button
							fullWidth
							color="primary"
							variant="flat"
							size="lg"
							onPress={() => {
								setModalPlacement('auto')
								setModalSize(e.size)
								onOpen()
							}}
						>
							{e.title}
						</Button>
					</div>
				))}
			</div>
		</div>
	)
}

const positions = [
	{ title: 'Auto', placement: 'auto' },
	{ title: 'Top', placement: 'top' },
	{ title: 'Bottom', placement: 'bottom' },
	{ title: 'Center', placement: 'center' },
]

const sizing = [
	{ title: 'Modal XS', size: 'xs' },
	{ title: 'Modal SM', size: 'sm' },
	{ title: 'Modal MD', size: 'md' },
	{ title: 'Modal LG', size: 'lg' },
	{ title: 'Modal XL', size: 'xl' },
	{ title: 'Modal 2XL', size: '2xl' },
	{ title: 'Modal 3XL', size: '3xl' },
	{ title: 'Modal 4XL', size: '4xl' },
	{ title: 'Modal 5XL', size: '5xl' },
	{ title: 'Modal FULL', size: 'full' },
]
