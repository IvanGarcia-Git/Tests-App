import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Divider,
	Button,
	Checkbox,
} from '@nextui-org/react'

export const CardsBasic = () => {
	return (
		<div className="w-72" id="basicCard">
			<Card shadow="none">
				<CardHeader className="flex-col items-start">
					<p className="font-semibold">Basic card</p>
					<p className="text-default-400 text-sm">Card subtitle</p>
				</CardHeader>
				<CardBody className="font-light leading-tight">
					A card with a header and footer provides a structured and organized
					way to present content, enhancing both aesthetics and functionality.
				</CardBody>
				<CardFooter className="flex justify-end gap-4">
					<Button variant="light" color="primary">
						Card action
					</Button>
					<Button variant="light" color="primary">
						Card link
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export const CardBasicHeader = () => {
	return (
		<div className="w-72" id="cardHeader">
			<Card shadow="none">
				<CardHeader className="font-semibold">Card header</CardHeader>
				<CardBody className="font-light leading-tight pb-10">
					A card with only a header provides a simple and focused layout, with
					the header serving as the primary focal point.
				</CardBody>
			</Card>
		</div>
	)
}

export const CardBasicFooter = () => {
	return (
		<div className="w-72" id="cardFooter">
			<Card shadow="none">
				<CardBody className="font-light leading-tight">
					A card with only a footer provides a unique and minimalistic design,
					where the footer serves as the main point of interaction or
					information display.
				</CardBody>
				<CardFooter className="text-sm font-light italic pb-5">
					- Someone famous in Source Title
				</CardFooter>
			</Card>
		</div>
	)
}

export const CardBasicDivider = () => {
	return (
		<div className="w-72" id="cardWithDivider">
			<Card shadow="none">
				<CardHeader className="flex-col items-start">
					<p className="font-semibold">With divider</p>
				</CardHeader>
				<Divider />
				<CardBody className="font-light leading-tight">
					A card with a header and footer provides a structured and organized
					way to present content, enhancing both aesthetics and functionality.
				</CardBody>
				<Divider />
				<CardFooter className="flex justify-end gap-4">
					<Button variant="light">Cancel</Button>
					<Button variant="light" color="primary">
						Confirm
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

export const CardRadius = () => {
	return (
		<div id="borderRadius">
			<h3 className="font-semibold">Border radius</h3>

			<div className="space-y-7 mt-6">
				<div className="w-72">
					<Card
						shadow="none"
						radius="none"
						className="bg-primary text-primary-foreground h-44"
					>
						<CardHeader className="flex-col items-start">
							<div className="font-bold">Sharp</div>
							<div className="text-sm">None border radius</div>
						</CardHeader>
						<CardBody className="text-sm font-light">
							It's perfect for creating a strong visual impact and conveying a
							sense of formality and structure.
						</CardBody>
					</Card>
				</div>

				<div className="w-72">
					<Card
						shadow="none"
						radius="sm"
						className="bg-primary text-primary-foreground h-44"
					>
						<CardHeader className="flex-col items-start">Small</CardHeader>
						<CardBody className="text-sm font-light">
							This design balances modernity and approachability, making it
							suitable for interfaces where a slightly gentler aesthetic is
							desired, while still maintaining a professional look.
						</CardBody>
					</Card>
				</div>

				<div className="w-72">
					<Card
						shadow="none"
						className="bg-primary text-primary-foreground h-44"
					>
						<CardHeader className="flex-col items-start">Standard</CardHeader>
						<CardBody className="text-sm font-light">
							The standard border radius delivers a balanced rounding of the
							card's corners, offering a classic and widely accepted design.
						</CardBody>
					</Card>
				</div>

				<div className="w-72">
					<Card
						shadow="none"
						className="bg-primary text-primary-foreground h-44 rounded-xl"
					>
						<CardHeader className="flex-col items-start">Custom</CardHeader>
						<CardBody className="text-sm font-light">
							A large border radius gives the card a noticeably rounded
							appearance, creating a softer and more inviting look.
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export const CardShadow = () => {
	return (
		<div id="shadowElevation">
			<h3 className="font-semibold">Shadow elevation</h3>

			<div className="space-y-7 mt-6">
				<div className="w-72">
					<Card shadow="none" className="h-32">
						<CardBody className="text-sm leading-tight justify-center">
							<p>
								No shadow effect, giving the card a minimalistic, clean look.
							</p>
						</CardBody>
					</Card>
				</div>

				<div className="w-72">
					<Card shadow="sm" className="h-32">
						<CardBody className="text-sm leading-tight justify-center">
							<p>
								Adds a subtle shadow for a light depth effect, providing a
								slight elevation.
							</p>
						</CardBody>
					</Card>
				</div>

				<div className="w-72">
					<Card shadow="md" className="h-32">
						<CardBody className="text-sm leading-tight justify-center">
							<p>
								Offers moderate depth, enhancing the card's prominence and
								visual separation from the background.
							</p>
						</CardBody>
					</Card>
				</div>

				<div className="w-72">
					<Card shadow="lg" className="h-32">
						<CardBody className="text-sm leading-tight justify-center">
							<p>
								Creates a pronounced shadow for significant depth, making the
								card stand out with a bold, floating effect.
							</p>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}

export const CardExtraFeatures = () => {
	return (
		<div>
			<h3 className="font-semibold">Extra features</h3>

			<div className="space-y-7 mt-6">
				<div className="w-72" id="disabled">
					<Card isDisabled shadow="md" className="h-52">
						<CardHeader>Disabled card</CardHeader>
						<CardBody className="text-sm leading-tight pt-0">
							Disabling a card helps manage user expectations by clearly
							signaling that certain features or actions are not accessible at
							the moment, thereby preventing confusion and ensuring a smooth
							user experience.
						</CardBody>
					</Card>
				</div>

				<div className="w-72" id="scrolleableContent">
					<Card shadow="md" className="h-52">
						<CardHeader>Scrolleable content</CardHeader>
						<CardBody className="font-light leading-tight pt-0 pb-8">
							<div className="space-y-6">
								<p>
									A card with scrollable content allows users to navigate
									through larger amounts of information within a confined space.
									This design feature is particularly useful for displaying
									lengthy text, detailed lists, or multiple images without
									overwhelming the overall layout.
								</p>
								<p>
									By enabling scrolling within the card, users can access all
									the necessary content without leaving the current view,
									ensuring that the interface remains clean and organized.
								</p>
								<p>
									Scrollable cards enhance user experience by making navigation
									intuitive and efficient. They provide a convenient way to
									present comprehensive information while maintaining a compact
									design, crucial for mobile and responsive layouts.
								</p>
								<p>
									This functionality not only optimizes the use of screen real
									estate but also allows users to engage more deeply with the
									content, exploring additional details at their own pace.
								</p>

								<div className="flex justify-end">
									<Checkbox size="sm">Accept</Checkbox>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}
