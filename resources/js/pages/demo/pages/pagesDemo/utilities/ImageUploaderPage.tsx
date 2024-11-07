import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	SingleImageUploader,
	MediaManagerImageUpload,
	GalleryMediaManager,
} from '@/pages/demo/componentsDemo'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const ImageUploaderPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Image uploader')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-medium leading-tight md:text-lg">
					A well-designed image uploaders that enhances user experience and
					functionality.
				</p>
				<p className="text-sm mt-2">
					The uploaders are intuitive and responsive, allowing users to easily
					upload and manage images. It strikes the perfect balance between
					simplicity and performance, ensuring efficient and seamless
					interaction.
				</p>
			</PageHeader>

			<PageContent className={contentClassName}>
				<div className="grid gap-6 xl:grid-cols-2 lg:gap-10">
					<SingleImageUploader />
					<MediaManagerImageUpload />
					<GalleryMediaManager />
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}
