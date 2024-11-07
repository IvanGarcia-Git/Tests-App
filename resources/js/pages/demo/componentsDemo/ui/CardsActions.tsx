import {
	Card,
	CardBody,
	CardHeader,
	CircularProgress,
	Button,
	cn,
	Checkbox,
} from '@nextui-org/react'
import { useState } from 'react'

const contents = [
	`This feature is particularly useful for dynamic
								content, such as live data feeds, notifications, or status
								updates. By providing a refresh option, users can stay
								up-to-date with the latest information, enhancing the card's
								functionality and improving the overall user experience.`,
	`Reloadable cards enhance user experience by maintaining up-to-date information without requiring a full page refresh, providing a seamless and efficient interaction within the application.`,
]

export const CardActions = () => {
	const [dismisableVisible, setDismisableVisible] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const [textIndex, setTextIndex] = useState(0)
	const [isResized, setIsResized] = useState(false)

	const hideDismissableCard = () => {
		setDismisableVisible(false)

		setTimeout(() => {
			setDismisableVisible(true)
		}, 3000)
	}

	const reloadCard = () => {
		setIsLoading(true)

		setTimeout(() => {
			setTextIndex((idx) => (idx === 0 ? 1 : 0))
			setIsLoading(false)
		}, 2000)
	}

	const toggleSizeCard = () => {
		setIsResized(!isResized)
	}

	return (
		<div>
			<h3 className="font-semibold">Actions</h3>

			<div className="space-y-7 mt-6">
				<div className="w-72" id="pressable">
					<Card isPressable fullWidth shadow="md" className="h-52">
						<CardHeader className="font-semibold">Pressable card</CardHeader>
						<CardBody className="font-light leading-tight pt-0 pb-5">
							Incorporating touch or click actions enhances the card's usability
							and provides a more dynamic and engaging experience, encouraging
							user interaction and exploration within the application.
						</CardBody>
					</Card>
				</div>

				<div className="w-72" id="dismisable">
					{dismisableVisible && (
						<Card className="h-52">
							<CardHeader className="justify-between">
								<p className="font-semibold">Dismisable</p>

								<Button
									isIconOnly
									radius="lg"
									size="sm"
									variant="light"
									onPress={hideDismissableCard}
								>
									<i className="ri-close-large-line ri-xl" />
								</Button>
							</CardHeader>

							<CardBody className="font-light leading-tight pt-0 pb-6">
								A card can be dismissible, allowing users to remove or hide it
								from view. This feature typically includes a close button or
								swipe gesture, giving users control over managing the displayed
								content.
							</CardBody>
						</Card>
					)}
				</div>

				<div className="w-72" id="updateContent">
					<Card
						className={cn(
							'h-52',
							isLoading && 'opacity-40 pointer-events-none select-none'
						)}
					>
						<CardHeader className="justify-between">
							<p className="font-semibold">Update content</p>

							<Button
								isIconOnly
								radius="lg"
								size="sm"
								variant="light"
								onPress={reloadCard}
							>
								<i className="ri-reset-right-line ri-xl" />
							</Button>
						</CardHeader>

						<CardBody className="text-sm leading-tight pt-0 pb-8">
							{textIndex < 2 && contents[textIndex]}
						</CardBody>

						{isLoading && (
							<CircularProgress
								className="inset-1/2 absolute"
								aria-label="Loading indicator"
							/>
						)}
					</Card>
				</div>

				<div className="w-72" id="resizable">
					<Card
						radius={isResized === true ? 'none' : 'md'}
						className={cn(
							'h-52',
							isResized && 'h-screen inset-0 fixed z-[100]'
						)}
					>
						<CardHeader className="justify-between">
							<p className="font-semibold">Resizable</p>

							<Button
								isIconOnly
								radius="lg"
								size="sm"
								variant="light"
								onPress={toggleSizeCard}
							>
								<i
									className={cn(
										'ri-xl',
										isResized ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line'
									)}
								/>
							</Button>
						</CardHeader>

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
