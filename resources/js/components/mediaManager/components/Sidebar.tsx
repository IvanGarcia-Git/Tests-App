import { useEffect, useState, useContext } from 'react'
import { cn, Input, Textarea, Button, Divider } from '@nextui-org/react'
import { MediaManagerContext } from '../providers/MediaManagerProvider'
import { t } from '@/i18n'
import { toast } from 'react-toastify'
import { useMediaManager } from '../hooks/useMediaManager'
import dayjs from 'dayjs'
import { useForm } from '@inertiajs/react'

const handleCopy = (url: string) => {
	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(url)
			.then(() => {
				toast.success(t('Text copied to clipboard'))
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err)
			})
	} else {
		toast.error(t('Clipboard API not supported'))
	}
}

const inputStyle = {
	base: 'gap-2 items-start',
	label: 'w-20',
	mainWrapper: 'flex-1',
}

export const Sidebar = () => {
	const { filesSelected } = useContext(MediaManagerContext)
	const { updateFile, deleteFile, formatSize } = useMediaManager()
	const [editable, setEditable] = useState(false)
	const { data, setData } = useForm({ ...filesSelected[0] })

	useEffect(() => {
		setEditable(false)
		setData({ ...filesSelected[0] })
	}, [filesSelected])

	const content = () => {
		if (!filesSelected.length) return null

		const {
			name,
			file_name,
			original_url,
			size,
			created_at,
			id,
			uuid,
			custom_properties,
		} = filesSelected[0]

		return (
			<div className="h-full overflow-auto">
				<div className="text-sm px-6 pt-4 pb-10">
					<div className="text-foreground-500 text-base font-semibold">
						{t('Attachment details')}
					</div>

					<div className="mt-1 space-y-5">
						<div className="space-y-2">
							<div className="text-base font-semibold truncate">{name}</div>

							<div className="flex justify-between gap-4 pt-3">
								<span className="w-24">{t('File name')}:</span>
								<span className="truncate flex-1">
									{file_name} {file_name} {file_name} {file_name}
								</span>
							</div>
							<Divider />

							<div className="flex justify-between gap-4">
								<span className="w-24">{t('Size')}:</span>
								<span className="truncate flex-1">{formatSize(size)}</span>
							</div>
							<Divider />

							<div className="flex justify-between gap-4">
								<span className="w-24">{t('Date')}:</span>
								<span className="truncate flex-1">
									{dayjs(created_at).format('MMM DD, YYYY')}
								</span>
							</div>
							<Divider />

							<div className="flex justify-between gap-4">
								<span className="w-24">{t('uuid')}:</span>
								<span className="truncate flex-1">{uuid}</span>
							</div>
							<Divider />
						</div>

						{data && (
							<div className="space-y-3">
								{!editable && (
									<div className="flex justify-end">
										<Button
											color="primary"
											size="sm"
											variant="light"
											startContent={<i className="ri-image-edit-line ri-xl" />}
											onPress={() => setEditable(true)}
										>
											{t('Edit')}
										</Button>
									</div>
								)}

								<Input
									size="sm"
									value={data.name ?? ''}
									label={t('Name')}
									labelPlacement="outside-left"
									classNames={inputStyle}
									isReadOnly={!editable}
									onValueChange={(val) => setData('name', val)}
								/>

								{data.custom_properties && (
									<>
										<Textarea
											size="sm"
											value={data.custom_properties.altText ?? ''}
											label={t('Alt text')}
											labelPlacement="outside-left"
											classNames={inputStyle}
											isReadOnly={!editable}
											onValueChange={(val) =>
												setData('custom_properties', {
													...data.custom_properties,
													altText: val,
												})
											}
										/>

										<Textarea
											size="sm"
											value={data.custom_properties.caption ?? ''}
											label={t('Caption')}
											labelPlacement="outside-left"
											classNames={inputStyle}
											isReadOnly={!editable}
											onValueChange={(val) =>
												setData('custom_properties', {
													...data.custom_properties,
													caption: val,
												})
											}
										/>

										<Textarea
											size="sm"
											value={data.custom_properties.description ?? ''}
											label={t('Description')}
											labelPlacement="outside-left"
											classNames={inputStyle}
											isReadOnly={!editable}
											onValueChange={(val) =>
												setData('custom_properties', {
													...data.custom_properties,
													description: val,
												})
											}
										/>
									</>
								)}

								{editable && (
									<div className="pt-1 pb-3 flex gap-3">
										<Button
											variant="faded"
											className="flex-1"
											onPress={() => setEditable(false)}
										>
											{t('Cancel')}
										</Button>

										<Button
											color="primary"
											className="flex-1"
											onPress={() => {
												setData({
													...data,
													name: data.name,
													custom_properties: data.custom_properties,
												})
												setEditable(false)
											}}
										>
											{t('Save')}
										</Button>
									</div>
								)}

								<div className="flex gap-3">
									<Input
										isReadOnly
										value={original_url}
										label={t('File URL')}
										size="sm"
										labelPlacement="outside-left"
										classNames={inputStyle}
									/>

									<Button
										isIconOnly
										size="sm"
										radius="lg"
										onPress={() => handleCopy(original_url)}
									>
										<i className="ri-file-copy-line"></i>
									</Button>
								</div>
							</div>
						)}

						<div className="flex justify-end">
							<a href={original_url} target="_blank">
								<Button
									color="primary"
									variant="light"
									size="sm"
									startContent={<i className="ri-image-circle-line ri-2x" />}
								>
									{t('Open image in new tab')}
								</Button>
							</a>
						</div>
					</div>

					<div className="mt-8 flex justify-end">
						<Button
							color="danger"
							variant="light"
							startContent={<i className="ri-close-line ri-xl" />}
							onPress={() => deleteFile(id)}
						>
							{t('Delete permanently')}
						</Button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<aside
			className={cn(
				'bg-content1 border-left-100 border-l w-60 hidden inset-y-0 right-0 absolute',
				'lg:block lg:w-96',
				'dark:border-gray-800'
			)}
		>
			{content()}
		</aside>
	)
}
