import { Pagination, Divider } from '@nextui-org/react'

export const BasicPagination = () => {
	return (
		<div className="space-y-6" id="paginationSizes">
			<h3 className="font-semibold">Pagination sizes</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Small</span>
					<Pagination total={10} initialPage={1} size="sm" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Medium</span>
					<Pagination total={10} initialPage={1} />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Large</span>
					<Pagination total={10} initialPage={1} size="lg" />
				</div>
			</div>

			<p className="text-xs">
				The pagination component provides a clean and intuitive way to navigate
				through pages. Its flexible design adapts to different sizes, ensuring
				consistency and ease of use. Whether small, medium, or large, the
				buttons remain accessible and responsive, making it simple for users to
				explore content without distractions.
			</p>
		</div>
	)
}

export const PaginationVariants = () => {
	return (
		<div className="space-y-6" id="paginationVariants">
			<h3 className="font-semibold">Pagination variants</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Flat</span>
					<Pagination total={10} initialPage={1} variant="flat" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Bordered</span>
					<Pagination total={10} initialPage={1} variant="bordered" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Faded</span>
					<Pagination total={10} initialPage={1} variant="faded" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Light</span>
					<Pagination total={10} initialPage={1} variant="light" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Compact</span>
					<Pagination isCompact total={10} initialPage={1} />
				</div>
			</div>

			<p className="text-xs">
				Variants offer flexibility in style, from flat to compact, ensuring
				smooth navigation while adapting to different design preferences.
			</p>
		</div>
	)
}

export const PaginationControls = () => {
	return (
		<div className="space-y-6" id="paginationControls">
			<h3 className="font-semibold">With controls</h3>
			<Pagination showControls total={10} initialPage={1} variant="flat" />

			<p className="text-xs">
				Controls bring a dynamic edge, guiding users seamlessly through content
				with straightforward, intuitive navigation. Every interaction feels
				natural, keeping users focused and engaged without missing a beat.
			</p>
		</div>
	)
}
