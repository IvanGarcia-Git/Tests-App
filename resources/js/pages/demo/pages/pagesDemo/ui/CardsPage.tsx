import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	CardsBasic,
	CardBasicHeader,
	CardBasicFooter,
	CardBasicDivider,
	CardRadius,
	CardShadow,
	CardImage,
	CardActions,
	CardExtraFeatures,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const CardsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Cards')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Cards are versatile UI components that present information in a
					concise and visually appealing format.
				</p>
				<p className="text-sm mt-2">
					Each card is designed to be compact yet comprehensive, providing a
					snapshot of key details at a glance. The use of varied sizes allows
					for highlighting the most relevant information, ensuring that users
					can quickly identify important content.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicCard', label: 'Basic card' },
								{ key: 'cardHeader', label: 'Card header' },
								{ key: 'cardFooter', label: 'Card footer' },
								{ key: 'cardWithDivider', label: 'Card with dividers' },
								{ key: 'borderRadius', label: 'Border radius' },
								{ key: 'shadowElevation', label: 'Shadow elevation' },
								{ key: 'images', label: 'Images & card styles' },
								{ key: 'pressable', label: 'Pressable card' },
								{ key: 'dismisable', label: 'Dismisable card' },
								{ key: 'updateContent', label: 'Update content' },
								{ key: 'resizable', label: 'Resizable' },
								{ key: 'disabled', label: 'Disabled' },
								{ key: 'scrolleableContent', label: 'Scrolleable content' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-lg space-y-24">
					<CardsBasic />
					<CardBasicHeader />
					<CardBasicFooter />
					<CardBasicDivider />
					<CardRadius />
					<CardShadow />
					<CardImage />
					<CardActions />
					<CardExtraFeatures />
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}
