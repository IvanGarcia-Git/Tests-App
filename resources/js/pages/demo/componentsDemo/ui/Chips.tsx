import { Chip, Avatar } from '@nextui-org/react'

export const Chips = () => {
	return (
		<div className="space-y-6" id="semanticChips">
			<h3 className="font-semibold">Semantic Chips</h3>
			<div className="flex gap-3">
				<Chip>Default</Chip>
				<Chip color="primary">Primary</Chip>
				<Chip color="secondary">Secondary</Chip>
				<Chip color="success">Success</Chip>
				<Chip color="warning">Warning</Chip>
				<Chip color="danger">Danger</Chip>
			</div>
		</div>
	)
}

export const ChipsRadius = () => {
	return (
		<div className="space-y-6" id="chipsRadius">
			<h3 className="font-semibold">Radius and sizing</h3>

			<div className="flex gap-7">
				<div className="flex flex-col gap-2">
					<Chip color="primary" radius="none">
						Sharp
					</Chip>
					<Chip color="primary" radius="none" size="sm">
						Sharp
					</Chip>
					<Chip color="primary" radius="none" size="lg">
						Sharp
					</Chip>
				</div>

				<div className="flex flex-col gap-2">
					<Chip color="primary" radius="sm">
						Small
					</Chip>
					<Chip color="primary" radius="sm" size="sm">
						Small
					</Chip>
					<Chip color="primary" radius="sm" size="lg">
						Small
					</Chip>
				</div>

				<div className="flex flex-col gap-2">
					<Chip color="primary" radius="md">
						Medium
					</Chip>
					<Chip color="primary" radius="md" size="sm">
						Medium
					</Chip>
					<Chip color="primary" radius="sm" size="lg">
						Medium
					</Chip>
				</div>

				<div className="flex flex-col gap-2">
					<Chip color="primary" radius="lg">
						Large
					</Chip>
					<Chip color="primary" radius="lg" size="sm">
						Large
					</Chip>
					<Chip color="primary" radius="lg" size="lg">
						Large
					</Chip>
				</div>

				<div className="flex flex-col gap-2">
					<Chip color="primary" radius="full">
						Full
					</Chip>
					<Chip color="primary" radius="full" size="sm">
						Full
					</Chip>
					<Chip color="primary" radius="full" size="lg">
						Full
					</Chip>
				</div>
			</div>
		</div>
	)
}

export const ChipsVariants = () => {
	return (
		<div className="space-y-6" id="chipsVariants">
			<h3 className="font-semibold">Variants</h3>

			<div className="flex gap-3">
				<Chip color="primary" variant="solid">
					Solid
				</Chip>
				<Chip color="primary" variant="bordered">
					Bordered
				</Chip>
				<Chip color="primary" variant="light">
					Light
				</Chip>
				<Chip color="primary" variant="flat">
					Flat
				</Chip>
				<Chip color="primary" variant="faded">
					Faded
				</Chip>
				<Chip color="primary" variant="shadow">
					Shadow
				</Chip>
				<Chip color="primary" variant="dot">
					Dot
				</Chip>
			</div>
		</div>
	)
}

export const ChipsWithContent = () => {
	return (
		<div className="space-y-6" id="chipsWithContent">
			<h3 className="font-semibold">Start, end content & avatars</h3>

			<div className="flex gap-5">
				<Chip
					color="success"
					variant="flat"
					startContent={<i className="ri-checkbox-circle-fill ri-lg" />}
				>
					Success
				</Chip>

				<Chip
					color="primary"
					variant="flat"
					endContent={<i className="ri-fingerprint-2-line ri-lg" />}
				>
					Security
				</Chip>

				<Chip
					color="primary"
					variant="faded"
					avatar={<Avatar name="JW" src="https://i.pravatar.cc/80?img=15" />}
				>
					Avatar
				</Chip>

				<Chip
					color="primary"
					variant="flat"
					avatar={<Avatar name="JW" size="sm" />}
				>
					Avatar
				</Chip>
			</div>
		</div>
	)
}

export const ChipsDismissible = () => {
	return (
		<div className="space-y-6" id="chipsDismissible">
			<h3 className="font-semibold">Dismissible</h3>

			<div className="flex gap-3">
				<Chip color="primary" variant="solid" onClose={() => {}}>
					Solid
				</Chip>
				<Chip color="primary" variant="bordered" onClose={() => {}}>
					Bordered
				</Chip>
				<Chip color="primary" variant="light" onClose={() => {}}>
					Light
				</Chip>
				<Chip color="primary" variant="flat" onClose={() => {}}>
					Flat
				</Chip>
			</div>

			<div className="flex gap-3">
				<Chip color="primary" variant="faded" onClose={() => {}}>
					Faded
				</Chip>
				<Chip color="primary" variant="shadow" onClose={() => {}}>
					Shadow
				</Chip>
				<Chip color="primary" variant="dot" onClose={() => {}}>
					Dot
				</Chip>
			</div>
		</div>
	)
}

export const ChipsPressable = () => {
	const pressabelClass =
		'cursor-pointer select-none hover:opacity-90 focus:opacity-50 active:opacity-disabled'

	return (
		<div className="space-y-6" id="chipsPressable">
			<h3 className="font-semibold">Pressable</h3>

			<div className="flex gap-3">
				<Chip color="primary" variant="solid" className={pressabelClass}>
					Solid
				</Chip>
				<Chip color="primary" variant="bordered" className={pressabelClass}>
					Bordered
				</Chip>
				<Chip color="primary" variant="light" className={pressabelClass}>
					Light
				</Chip>
				<Chip color="primary" variant="flat" className={pressabelClass}>
					Flat
				</Chip>
			</div>

			<div className="flex gap-3">
				<Chip color="primary" variant="faded" className={pressabelClass}>
					Faded
				</Chip>
				<Chip color="primary" variant="shadow" className={pressabelClass}>
					Shadow
				</Chip>
				<Chip color="primary" variant="dot" className={pressabelClass}>
					Dot
				</Chip>
			</div>
		</div>
	)
}
