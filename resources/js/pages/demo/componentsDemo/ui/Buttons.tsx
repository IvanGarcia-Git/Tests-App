import { Button, ButtonGroup, Divider } from '@nextui-org/react'

export const SolidButton = () => {
	return (
		<div className="space-y-6" id="solidButton">
			<h3 className="font-semibold">Basic button</h3>
			<Button color="primary">Button</Button>

			<p className="text-xs">
				The solid button is a perfect blend of beauty, simplicity, and
				functionality. Its bold and consistent color makes it visually striking
				and easy to recognize, instantly drawing attention to the most important
				actions on the screen.
			</p>
		</div>
	)
}

export const ButtonSize = ({
	title = '',
	size = 'sm',
}: {
	size?: 'sm' | 'lg'
	title: string
}) => {
	return (
		<div
			className="space-y-6"
			id={size === 'sm' ? 'smallButtons' : 'largeButtons'}
		>
			<h3 className="font-semibold">
				{size === 'sm' ? 'Small buttons' : 'Large buttons'}
			</h3>

			<div className="flex flex-wrap gap-4">
				<Button {...{ size }}>Default</Button>
				<Button {...{ size }} color="primary">
					Primary
				</Button>
				<Button {...{ size }} color="secondary">
					Secondary
				</Button>
			</div>
		</div>
	)
}

export const ButtonVariants = () => {
	return (
		<div className="space-y-6" id="variants">
			<h3 className="font-semibold">Button variants</h3>

			<div className="flex flex-wrap gap-4">
				<Button color="primary" variant="bordered">
					Bordered
				</Button>
				<Button color="primary" variant="faded">
					Faded
				</Button>
				<Button color="primary" variant="flat">
					Flat
				</Button>
				<Button color="primary" variant="ghost">
					Ghost
				</Button>
				<Button color="primary" variant="shadow">
					Shadow
				</Button>
			</div>

			<p className="text-xs">
				These buttons showcase a range of design styles that enhance the visual
				appeal and usability of the interface. Each variant, from the bold lines
				of the bordered button to the understated elegance of the ghost button,
				brings a unique aesthetic quality. The faded button offers a soft,
				subtle touch, while the flat button embraces minimalism for a clean,
				unobtrusive look. The shadow button adds depth and dimension, creating a
				striking visual hierarchy. Together, these buttons not only provide
				functional diversity but also contribute to a cohesive and beautiful
				design language that elevates the overall user experience.
			</p>
		</div>
	)
}

export const LightButton = () => {
	return (
		<div className="space-y-6" id="lightButton">
			<h3 className="font-semibold">Light button</h3>

			<Button color="primary" variant="light">
				Light button
			</Button>

			<p className="text-xs">
				The light button offers a subtle design for less important actions,
				serving as a gentle alternative to links. Its understated look
				integrates seamlessly into the interface, balancing visibility and
				subtlety for secondary tasks.
			</p>
		</div>
	)
}

export const LoadingButton = () => {
	return (
		<div className="space-y-6" id="loadingState">
			<h3 className="font-semibold">Loading states</h3>

			<div className="flex flex-col gap-6 sm:flex-row">
				<div>
					<Button color="primary" isLoading>
						Sending
					</Button>
				</div>

				<div>
					<Button color="primary" isLoading variant="light">
						Sending
					</Button>
				</div>

				<div>
					<Button color="primary" isLoading variant="flat">
						Sending
					</Button>
				</div>
			</div>

			<p className="text-xs">
				The loading button features a spinner that activates with the isLoading
				attribute, clearly indicating that a process is underway. The spinner
				enhances user experience by providing feedback and maintaining clarity
				during loading states.
			</p>
		</div>
	)
}

export const IconizedButtons = () => {
	return (
		<div className="space-y-6" id="icons">
			<h3 className="font-semibold">Icons</h3>

			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Basic button</span>
					<Button
						color="primary"
						size="sm"
						startContent={<i className="ri-folder-5-line ri-xl" />}
					>
						Find files
					</Button>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Flat variant</span>
					<Button
						color="primary"
						size="sm"
						variant="flat"
						startContent={<i className="ri-camera-fill ri-xl" />}
					>
						Photos
					</Button>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Light variant</span>
					<Button
						color="primary"
						variant="light"
						startContent={
							<i className="ri-settings-2-line ri-xl motion-safe:animate-[spin_3s_linear_infinite] duration-700" />
						}
					>
						Settings
					</Button>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Rounded shdowed</span>
					<Button
						color="primary"
						size="sm"
						radius="full"
						variant="shadow"
						startContent={<i className="ri-search-2-line ri-xl" />}
					>
						Search
					</Button>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Icon button</span>
					<Button isIconOnly color="primary">
						<i className="ri-instagram-line ri-xl" />
					</Button>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Rounded icon</span>
					<Button isIconOnly color="primary" radius="full">
						<i className="ri-user-line ri-xl" />
					</Button>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Light variant</span>
					<Button isIconOnly color="primary" variant="light">
						<i className="ri-facebook-fill ri-xl" />
					</Button>
				</div>
			</div>

			<p className="text-xs">
				Buttons with icons enhance the UI by combining visual elements with
				functionality, making interactions more intuitive and efficient. Icons
				provide immediate visual cues that convey the button's purpose at a
				glance, improving user understanding and streamlining navigation. By
				incorporating recognizable symbols, these buttons help users quickly
				identify actions like saving, deleting, or navigating, thereby enhancing
				overall usability and reducing cognitive load. Their integration into
				the UI adds both clarity and aesthetic appeal, making the interface more
				engaging and user-friendly.
			</p>
		</div>
	)
}

export const ButtonVariantsRounded = () => {
	return (
		<div className="space-y-6" id="roundedVariants">
			<h3 className="font-semibold">Button rounded variants</h3>

			<div className="flex flex-wrap gap-4">
				<Button color="primary" variant="bordered" radius="full">
					Bordered
				</Button>
				<Button color="primary" variant="faded" radius="full">
					Faded
				</Button>
				<Button color="primary" variant="flat" radius="full">
					Flat
				</Button>
				<Button color="primary" variant="ghost" radius="full">
					Ghost
				</Button>
				<Button color="primary" variant="shadow" radius="full">
					Shadow
				</Button>
			</div>
		</div>
	)
}

export const GroupedButtons = () => {
	return (
		<div className="space-y-6" id="buttonGroup">
			<h3 className="font-semibold">Button group</h3>

			<div className="space-y-8">
				<div>
					<ButtonGroup>
						<Button color="primary">Option 1</Button>
						<Button color="primary">Option 2</Button>
						<Button color="primary">Option 3</Button>
					</ButtonGroup>
				</div>

				<div>
					<ButtonGroup size="sm" variant="flat">
						<Button color="primary">Create</Button>
						<Button color="primary">Edit</Button>
						<Button color="primary">Delete</Button>
					</ButtonGroup>
				</div>

				<div>
					<ButtonGroup variant="bordered">
						<Button color="primary">Bordered</Button>
						<Button color="primary">Bordered</Button>
						<Button color="primary">Bordered</Button>
					</ButtonGroup>
				</div>

				<div>
					<ButtonGroup radius="full">
						<Button color="primary">Bordered</Button>
						<Button color="primary">Bordered</Button>
						<Button color="primary">Bordered</Button>
					</ButtonGroup>
				</div>
			</div>
		</div>
	)
}
