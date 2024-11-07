import {
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Divider,
	User,
} from '@nextui-org/react'
import { Fragment } from 'react/jsx-runtime'

export const BasicPopover = () => {
	return (
		<div className="space-y-6" id="basicPopover">
			<h3 className="font-semibold">Basic popover</h3>

			<Popover showArrow offset={10} placement="right">
				<PopoverTrigger>
					<Button color="primary">Open Popover</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className="px-3 py-2">
						<div className="text-small font-medium">Popover Content</div>
						<div className="text-tiny">This is the popover content</div>
					</div>
				</PopoverContent>
			</Popover>

			<p className="text-xs">
				The solid button is a perfect blend of beauty, simplicity, and
				functionality. Its bold and consistent color makes it visually striking
				and easy to recognize, instantly drawing attention to the most important
				actions on the screen.
			</p>
		</div>
	)
}

const placements = [
	{ key: 'top-start', title: 'Top start' },
	{ key: 'top', title: 'Top' },
	{ key: 'top-end', title: 'Top end' },
	{ key: 'bottom-start', title: 'Bottom start' },
	{ key: 'bottom', title: 'Bottom' },
	{ key: 'bottom-end', title: 'Bottom end' },
	{ key: 'right-start', title: 'Right start' },
	{ key: 'right', title: 'Right' },
	{ key: 'right-end', title: 'Right end' },
	{ key: 'left-start', title: 'Left start' },
	{ key: 'left', title: 'Left' },
	{ key: 'left-end', title: 'Left end' },
] as {
	key:
		| 'top-start'
		| 'top'
		| 'top-end'
		| 'bottom-start'
		| 'bottom'
		| 'bottom-end'
		| 'right-start'
		| 'right'
		| 'right-end'
		| 'left-start'
		| 'left'
		| 'left-end'
	title: string
}[]

export const PopoverPlacements = () => {
	return (
		<div className="space-y-6" id="popoverPlacements">
			<h3 className="font-semibold">Placements</h3>

			<div className="space-y-4 max-w-sm">
				{placements.map((e) => (
					<Fragment key={e.key}>
						<div className="flex justify-between items-center">
							<span className="text-sm font-medium">{e.title}</span>

							<Popover placement={e.key}>
								<PopoverTrigger>
									<Button color="primary" size="sm">
										Open Popover
									</Button>
								</PopoverTrigger>
								<PopoverContent>
									<div className="px-2 py-2">
										<User
											as="button"
											name="Diane Lane"
											description="Product Designer"
											className="transition-transform"
											avatarProps={{
												src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
											}}
										/>
									</div>
								</PopoverContent>
							</Popover>
						</div>

						<Divider />
					</Fragment>
				))}
			</div>

			<p className="text-xs">
				The solid button is a perfect blend of beauty, simplicity, and
				functionality. Its bold and consistent color makes it visually striking
				and easy to recognize, instantly drawing attention to the most important
				actions on the screen.
			</p>
		</div>
	)
}

export const PopoverBackdrop = () => {
	return (
		<div className="space-y-6" id="popoverBackdrop">
			<h3 className="font-semibold">Backdrops</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Opaque</span>

					<Popover backdrop="opaque">
						<PopoverTrigger>
							<Button color="primary">Open Popover</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-3 py-2">
								<div className="text-small font-medium">Popover Content</div>
								<div className="text-tiny">This is the popover content</div>
							</div>
						</PopoverContent>
					</Popover>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Blur</span>

					<Popover backdrop="blur">
						<PopoverTrigger>
							<Button color="primary">Open Popover</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-3 py-2">
								<div className="text-small font-medium">Popover Content</div>
								<div className="text-tiny">This is the popover content</div>
							</div>
						</PopoverContent>
					</Popover>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Transparent</span>

					<Popover backdrop="transparent">
						<PopoverTrigger>
							<Button color="primary">Open Popover</Button>
						</PopoverTrigger>
						<PopoverContent>
							<div className="px-3 py-2">
								<div className="text-small font-medium">Popover Content</div>
								<div className="text-tiny">This is the popover content</div>
							</div>
						</PopoverContent>
					</Popover>
				</div>

				<Divider />
			</div>

			<p className="text-xs">
				The solid button is a perfect blend of beauty, simplicity, and
				functionality. Its bold and consistent color makes it visually striking
				and easy to recognize, instantly drawing attention to the most important
				actions on the screen.
			</p>
		</div>
	)
}
