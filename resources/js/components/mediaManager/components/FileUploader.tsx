import { useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@nextui-org/react'
import { t } from '@/i18n'
import { router } from '@inertiajs/react'
import { toast } from 'react-toastify'
import { tabsMapper } from '../helpers/mappers/tabs.mapper'
import { MediaManagerContext } from '../providers/MediaManagerProvider'

const defaultAcceptedFormats = {
	'image/jpeg': ['.jpeg', '.jpg'],
	'image/png': ['.png'],
	'image/webp': ['.webp'],
	'image/svg+xml': ['.svg'],
	'image/avif': ['.avif'],
}

export const FileUploader = () => {
	const { enableTabs, disableTabs, setSelectedTab } =
		useContext(MediaManagerContext)

	const upload = (files: any) => {
		router.post(
			route('media.upload'),
			{ files: files },
			{
				forceFormData: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					setSelectedTab && setSelectedTab(tabsMapper('TAB_LIBRARY'))
					enableTabs && enableTabs()

					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}
				},
				onError: (errors) => {
					console.log('Error uploading files', errors)
					enableTabs && enableTabs()

					toast.error(
						t('An error occurred while uploading files. Please try again.')
					)
				},
			}
		)
	}

	const { open, getRootProps, getInputProps } = useDropzone({
		accept: defaultAcceptedFormats,
		onDrop: (acceptedFiles) => {
			disableTabs && disableTabs()
		},
		onDropAccepted: (files) => {
			upload(files)
		},
		onDropRejected: (err) => {
			console.log('Drop rejected', err)
		},
	})

	return (
		<div
			{...getRootProps({
				className:
					'dropzone w-full grid place-content-center cursor-pointer select-none',
			})}
		>
			<input {...getInputProps()} type="hidden" />

			<div className="space-y-2 text-center">
				<p className="font-semibold">{t('Drop files to upload')}</p>
				<p className="text-foreground-500 text-xs">{t('or')}</p>
				<Button
					color="primary"
					variant="faded"
					className="px-10"
					onPress={open}
				>
					{t('Select files')}
				</Button>
				<p className="text-foreground-500 text-xs font-medium pt-5">
					{t('Maximum upload file size')} 300 MB
				</p>
			</div>
		</div>
	)
}
