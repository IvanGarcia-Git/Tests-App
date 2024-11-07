import { useState } from 'react'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { cn, Image } from '@nextui-org/react'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

import img01 from '@/assets/img/cards/01.jpg'
import img02 from '@/assets/img/cards/02.jpg'
import img03 from '@/assets/img/cards/03.jpg'
import img04 from '@/assets/img/cards/04.jpg'

interface Props {
	template?: Template
}

export const ImagePage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	const [imgLoaded, setImgLoaded] = useState(false)
	const [carouselSrc, setCarouselSrc] = useState(img01)

	return (
		<>
			<PageHeader
				title={t('Image')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				{/* <p className="text-lg font-medium leading-tight">
					Beautifully designed buttons that enhance visual appeal and usability.
				</p>
				<p className="font-light leading-tight mt-2">
					Each button is intuitive and responsive, providing efficient access to
					key functions. These buttons offer a perfect blend of aesthetics and
					practicality, ensuring a seamless user experience.
				</p> */}
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basic', label: 'Basic image' },
								{ key: 'onLoad', label: 'On image load' },
								{ key: 'zoomed', label: 'Zoomed effect' },
								{ key: 'carousel', label: 'Carousel' },
								{ key: 'rounded', label: 'Rounded' },
								{ key: 'shadow', label: 'Shadow' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<div className="space-y-6" id="basic">
						<h3 className="font-semibold">Basic image</h3>

						<Image
							width={250}
							height={300}
							alt="Image demo"
							src={img01}
							classNames={{ img: 'object-cover' }}
						/>
					</div>

					<div className="space-y-6" id="onLoad">
						<h3 className="font-semibold">On image load</h3>

						<div className="space-y-4">
							<Image
								width={250}
								height={300}
								alt="Image demo"
								src={`https://app.requestly.io/delay/2000/https://images.pexels.com/photos/27402086/pexels-photo-27402086/free-photo-of-a-large-fish-swimming-in-the-water.jpeg`}
								onLoad={() => setTimeout(() => setImgLoaded(true), 1000)}
								classNames={{ img: 'object-cover aspect-video' }}
							/>

							<div
								className={cn(
									'text-success text-sm transition-opacity flex items-center gap-2',
									imgLoaded ? 'opacity-100' : 'opacity-0'
								)}
							>
								<i className="ri-image-circle-line ri-2x" />
								Image loaded!
							</div>
						</div>
					</div>

					<div className="space-y-6" id="zoomed">
						<h3 className="font-semibold">Zoomed effect</h3>

						<Image
							isZoomed
							width={250}
							height={300}
							alt="Image demo"
							src={img02}
							classNames={{ wrapper: 'overflow-hidden', img: 'object-cover' }}
						/>
					</div>

					<div className="space-y-6" id="carousel">
						<h3 className="font-semibold">Carousel</h3>

						<div className="w-[250px] flex flex-col justify-between gap-3 h-full">
							<Image
								width={250}
								height={300}
								alt="Image demo"
								src={carouselSrc}
								classNames={{ img: 'object-cover' }}
							/>

							<div className="flex justify-center gap-5">
								{[img01, img02, img03, img04].map((src) => {
									return (
										<Image
											width={40}
											src={src}
											alt={`pic ${src}`}
											onClick={() => setCarouselSrc(src)}
											classNames={{
												wrapper: cn(
													'cursor-pointer transition-opacity',
													carouselSrc === src &&
														'opacity-30 pointer-events-none'
												),
											}}
										/>
									)
								})}
							</div>
						</div>
					</div>

					<div className="space-y-6" id="rounded">
						<h3 className="font-semibold">Rounded</h3>

						<div className="grid grid-cols-3 gap-5 sm:flex lg:gap-10">
							{['none', 'sm', 'md', 'lg', 'full'].map((radius, idx) => (
								<div key={`rounded-${idx}`}>
									<Image
										width={120}
										alt="Image demo"
										// @ts-ignore
										radius={radius}
										src={img04}
										classNames={{ img: 'object-cover aspect-square' }}
									/>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-6" id="shadow">
						<h3 className="font-semibold">Shadow</h3>

						<div className="grid grid-cols-3 gap-5 sm:flex lg:gap-10">
							{['sm', 'md', 'lg'].map((radius, idx) => (
								<div key={`rounded-${idx}`}>
									<Image
										width={120}
										alt="Image demo"
										// @ts-ignore
										shadow={radius}
										src={img03}
										classNames={{ img: 'object-cover aspect-square' }}
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}
