import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicAvatar,
	BorderedAvatar,
	BorderRadiusAvatar,
	AvatarFallback,
	GroupedAvatars,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const AvatarPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Avatar')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Personalize User Experience with Custom Avatars
				</p>
				<p className="text-sm mt-2">
					Avatars are graphical representations of users, typically displayed as
					images, icons, or initials, and are commonly used in profiles, chat
					applications, and notifications. They help create a personal touch in
					user interfaces by visually representing individuals or accounts.
					Avatars enhance user recognition, making interactions more engaging
					and familiar.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicAvatar', label: 'Basic avatar' },
								{ key: 'borderedAvatar', label: 'Bordered avatar' },
								{ key: 'borderRadiusAvatar', label: 'Border radius avatar' },
								{ key: 'avatarFallback', label: 'Avatar fallback' },
								{ key: 'groupedAvatars', label: 'Grouped avatars' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicAvatar />
					<BorderedAvatar />
					<BorderRadiusAvatar />
					<AvatarFallback />
					<GroupedAvatars />
				</div>
			</PageContent>
		</>
	)
}
