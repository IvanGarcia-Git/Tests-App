import { useEffect, useState, type ReactNode } from 'react'
import { Button, cn, tv } from '@nextui-org/react'
import { useDropzone } from 'react-dropzone'

interface Props {
	defaultImageSrc?: string | null
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
	classNames?: {
		base?: string
		image?: string
	}
	icon?: ReactNode | boolean
	disableButton?: boolean
	accept?: { [key: string]: string[] }
	onFileUpload?: (file: any) => void
}

const options = tv({
	slots: {
		base: 'bg-background border border-foreground-200 w-44 h-44 group',
		image: 'w-full h-full object-cover',
	},
	variants: {
		radius: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full',
		},
	},
	defaultVariants: {
		radius: 'md',
	},
})

const defaultAcceptedFormats = {
	'image/jpeg': ['.jpeg', '.jpg'],
	'image/png': ['.png'],
	'image/webp': ['.webp'],
	'image/svg+xml': ['.svg'],
	'image/avif': ['.avif'],
}

export const ImageUploader = ({
	onFileUpload,
	defaultImageSrc,
	radius,
	classNames,
	icon,
	disableButton,
	accept = defaultAcceptedFormats,
}: Props) => {
	const [srcPreview, setSrcPreview] = useState<string | null>(
		defaultImageSrc ?? null
	)

	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		accept,
		onDrop: (acceptedFiles) => {
			const file = acceptedFiles[0]
			const previewUrl = URL.createObjectURL(file)
			setSrcPreview(previewUrl)
			onFileUpload && onFileUpload(file)
			return () => URL.revokeObjectURL(previewUrl)
		},
	})

	const { base, image } = options({ radius })

	useEffect(() => {
		if (defaultImageSrc) setSrcPreview(defaultImageSrc)
	}, [defaultImageSrc])

	return (
		<>
			<div className={cn(base(), classNames?.base)}>
				<div
					{...getRootProps({
						className: cn(
							'dropzone w-full h-full cursor-pointer rounded-[inherit] overflow-hidden',
							'relative'
						),
					})}
				>
					<input {...getInputProps()} />

					{srcPreview ? (
						<>
							<img
								src={srcPreview}
								alt="Sample image"
								className={cn(
									image(),
									'transition-opacity group-hover:opacity-80',
									classNames?.image
								)}
							/>

							{!disableButton && (
								<Button
									isIconOnly
									size="sm"
									radius="full"
									color="danger"
									className="bg-opacity-50 top-1 right-1 absolute transition-opacity opacity-0 group-hover:opacity-100"
									onPress={() => {
										onFileUpload && onFileUpload(null)
										setSrcPreview(null)
									}}
								>
									<i className="text-white ri-close-line ri-2x" />
								</Button>
							)}
						</>
					) : (
						<div className="w-full h-full grid place-content-center">
							{icon ?? (
								<i className="ri-image-add-line ri-2x text-foreground-300" />
							)}
						</div>
					)}
				</div>
			</div>
		</>
	)
}
