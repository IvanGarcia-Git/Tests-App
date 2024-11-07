import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Wysiwyg } from '@/components/form'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const TipTapPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Wysiwyg')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Powerful rich text editor designed for flexibility and ease of use.
				</p>
				<p className="text-sm mt-2">
					Tiptap provides an intuitive editing experience, allowing users to
					create and format content effortlessly. This component balances a
					sleek design with robust functionality, ensuring a smooth and dynamic
					writing experience.
				</p>
			</PageHeader>

			<PageContent className={contentClassName} aside={<></>}>
				<div className="flex-1 max-w-xl space-y-14">
					<Wysiwyg
						{...{
							charactersLimit: 500,
							code: true,
							blockquote: true,
							headings: true,
							separator: true,
							lists: true,
							colorSelector: true,
						}}
					/>
				</div>
			</PageContent>
		</>
	)
}
