import { useEffect, useState } from 'react'
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Button,
} from '@nextui-org/react'
import { ImageUploader } from '@/components/uploaders'
import { MediaManager } from '@/components'
import { t } from '@/i18n'

import img01 from '@/assets/img/cards/01.jpg'

export const SingleImageUploader = () => {
	const [image, setImage] = useState<string | null>(img01)

	return (
		<Card>
			<CardHeader>Single image uploader</CardHeader>

			<CardBody>
				<div className="grid gap-6 md:grid-cols-2">
					<div>
						<ImageUploader
							onFileUpload={(file) => {
								if (file) {
									const previewUrl = URL.createObjectURL(file)
									setImage(previewUrl)
								} else {
									setImage(null)
								}
							}}
							defaultImageSrc={image ?? null}
						/>
					</div>

					<div className="text-foreground-500 text-sm space-y-3">
						<p>
							The uploader component simplifies file handling by allowing users
							to easily upload images directly from the interface. It also
							offers flexibility for managing where and how files are stored,
							improving the overall user experience and reducing backend
							workload.
						</p>
						<p>
							This image isn’t being saved; it’s only displayed in the browser
							for demonstration purposes. However, you can use a component prop
							to store the file wherever needed.
						</p>
					</div>
				</div>
			</CardBody>
			<CardFooter />
		</Card>
	)
}

export const MediaManagerImageUpload = () => {
	const [image, setImage] = useState<Image | null>(null)

	return (
		<Card>
			<CardHeader>Upload image from Media Manager</CardHeader>

			<CardBody>
				<div className="grid gap-6 md:grid-cols-2">
					<div>
						{image && image.preview_url ? (
							<img
								src={image.preview_url}
								alt="Uploaded image"
								className="w-44 h-44 object-cover rounded-md"
							/>
						) : (
							<div className="bg-background border border-foreground-200 w-44 h-44 grid place-content-center rounded-md">
								<i className="ri-image-add-line ri-2x text-foreground-300" />
							</div>
						)}

						<div className="w-44 grid mt-6 space-y-4">
							<MediaManager
								{...{
									onFilesSelected: (files) => setImage(files[0]),
									button: {
										props: { fullWidth: true },
									},
									collection: image ? [image] : null,
								}}
							/>

							{image && (
								<Button
									fullWidth
									color="danger"
									size="sm"
									variant="flat"
									onPress={() => setImage(null)}
								>
									{t('Remove image')}
								</Button>
							)}
						</div>
					</div>

					<div className="text-foreground-500 text-sm space-y-3">
						<p>
							The Media Manager component allows users to upload, manage, and
							embed images easily. It includes an image uploader, a gallery of
							saved images, and the ability to select and insert images wherever
							needed.
						</p>
						<p></p>
					</div>
				</div>
			</CardBody>
			<CardFooter />
		</Card>
	)
}

export const GalleryMediaManager = () => {
	const [images, setImages] = useState<any[] | null>(null)

	return (
		<>
			<Card>
				<CardHeader>Media Gallery</CardHeader>

				<CardBody>
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<div className="grid grid-cols-3 gap-3">
								{images && images.length > 0 ? (
									images.map((image) => (
										<div key={image.id}>
											<img
												src={image.preview_url}
												alt="Uploaded image"
												className="w-full aspect-square object-cover rounded-md"
											/>
										</div>
									))
								) : (
									<div className="bg-background border border-foreground-200 h-28 col-span-3 grid place-content-center rounded-md">
										<i className="ri-image-add-line ri-2x text-foreground-300" />
									</div>
								)}
							</div>

							<div className="mt-5">
								<MediaManager
									{...{
										onFilesSelected: (files) => setImages(files),
										selectMultiple: true,
										button: {
											text: images ? 'Update images' : 'Add images',
											props: { fullWidth: true },
										},
									}}
								/>
							</div>
						</div>

						<div className="text-foreground-500 text-sm space-y-3">
							{/* <pre className="text-xs">{JSON.stringify(images, null, 2)}</pre> */}
						</div>
					</div>
				</CardBody>
				<CardFooter />
			</Card>
		</>
	)
}

export type Image = {
	id: number
	model_type: string
	model_id: number
	uuid: string
	collection_name: string
	name: string
	file_name: string
	mime_type: string
	disk: string
	conversions_disk: string
	size: number
	manipulations: any[]
	custom_properties: {
		altText?: string
		caption?: string
		description?: string
	}
	generated_conversions: any
	responsive_images: any[]
	order_column: number
	original_url: string
	preview_url: string
	created_at: string
	updated_at: string
}
