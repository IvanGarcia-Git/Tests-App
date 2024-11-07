import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Image,
	Button,
} from '@nextui-org/react'

import img01 from '@/assets/img/cards/01.jpg'
import img02 from '@/assets/img/cards/02.jpg'
import img03 from '@/assets/img/cards/03.jpg'
import img04 from '@/assets/img/cards/04.jpg'

export const CardImage = () => {
	return (
		<div id="images">
			<h3 className="font-semibold">Images & card styles</h3>

			<div className="space-y-7 mt-6">
				<div className="w-72">
					<Card radius="lg">
						<CardHeader className="text-sm leading-tight">
							<p>
								The project highlights our expertise in UX/UI design, featuring
								a clean and intuitive interface with a nature-inspired color
								palette. We focused on user-friendly navigation and clear
								categorization of sustainable options.
							</p>
						</CardHeader>

						<CardBody>
							<Image
								src={img01}
								height={240}
								removeWrapper
								className="object-cover"
							/>
						</CardBody>
					</Card>
				</div>

				<div className="w-72">
					<Card radius="lg">
						<CardBody className="p-0">
							<Image
								src={img02}
								height={215}
								removeWrapper
								className="object-cover"
							/>
						</CardBody>

						<CardFooter className="text-sm leading=tight p-6">
							<p>
								This project showcases our skills in wireframing, prototyping,
								and user testing, demonstrating our commitment to delivering
								seamless and visually appealing digital experiences for
								eco-conscious consumers.
							</p>
						</CardFooter>
					</Card>
				</div>

				<div className="w-72">
					<Card isFooterBlurred radius="lg">
						<CardBody className="p-0">
							<Image
								src={img03}
								height={368}
								removeWrapper
								className="object-cover"
							/>
						</CardBody>

						<CardFooter className="text-white justify-end items-end gap-5 bottom-0 absolute z-10">
							<div>
								<div className="text-lg font-medium">Footer blurred</div>
								<p className="text-sm font-light leading-tight">
									An app designed to help users locate eco-friendly stores and
									products.
								</p>
							</div>
							<Button size="sm" color="primary" radius="full" className="px-6">
								Buy now
							</Button>
						</CardFooter>
					</Card>
				</div>

				<div className="relative">
					<Image
						src={img04}
						width="100%"
						height={368}
						radius="none"
						removeWrapper
						className="object-cover"
					/>

					<Card
						isBlurred
						className="bg-black/30 text-white left-4 right-6 top-1/2 -translate-y-1/2 absolute z-10"
					>
						<CardHeader className="pb-0">
							<div className="bg-content1-foreground/20 w-10 h-10 grid place-content-center rounded-xl">
								<i className="ri-lightbulb-flash-line ri-2x"></i>
							</div>
						</CardHeader>
						<CardBody className="text-sm leading-tight p-5">
							A card can be blurred to create a visually distinct effect, often
							used to indicate that the content is temporarily inaccessible or
							to draw attention to a particular action, like unlocking or
							logging in.
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	)
}
