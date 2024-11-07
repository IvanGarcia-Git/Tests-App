import { Avatar, AvatarGroup, Divider } from '@nextui-org/react'

import User1 from '@/assets/img/users/avatars/1.jpg'
import User2 from '@/assets/img/users/avatars/2.jpg'
import User3 from '@/assets/img/users/avatars/3.jpg'
import User4 from '@/assets/img/users/avatars/4.jpg'
import User5 from '@/assets/img/users/avatars/5.jpg'
import User6 from '@/assets/img/users/avatars/6.jpg'

export const BasicAvatar = () => {
	return (
		<div className="space-y-6" id="basicAvatar">
			<h3 className="font-semibold">Basic avatar</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Image avatar</span>
					<Avatar src={User1} />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Name avatar</span>
					<Avatar name="John Doe" />
				</div>
			</div>

			<p className="text-xs">
				Enhance user profiles with our versatile Avatar component! Display
				images or names effortlessly, adding a personal touch to your interface.
				Perfect for creating engaging and recognizable user experiences.
				Transform your app today!
			</p>
		</div>
	)
}

export const BorderedAvatar = () => {
	return (
		<div className="space-y-6" id="borderedAvatar">
			<h3 className="font-semibold">Bordered avatar</h3>

			<div className="flex gap-4 items-center">
				<Avatar isBordered color="default" src={User1} />
				<Avatar isBordered color="primary" src={User2} />
				<Avatar isBordered color="secondary" src={User3} />
				<Avatar isBordered color="success" src={User4} />
				<Avatar isBordered color="warning" src={User5} />
				<Avatar isBordered color="danger" src={User6} />
			</div>

			<p className="text-xs">
				Transform user interactions with our versatile Avatar component. Whether
				using images or names, it adds a personal touch to profiles, chats, and
				notifications, making every interaction more engaging and memorable.
			</p>
		</div>
	)
}

export const BorderRadiusAvatar = () => {
	return (
		<div className="space-y-6" id="borderRadiusAvatar">
			<h3 className="font-semibold">Border radius avatar</h3>

			<div className="flex gap-4 items-center">
				<Avatar isBordered radius="full" src={User1} />
				<Avatar isBordered radius="lg" src={User2} />
				<Avatar isBordered radius="md" src={User3} />
				<Avatar isBordered radius="sm" src={User4} />
				<Avatar isBordered radius="none" src={User5} />
			</div>

			<p className="text-xs">
				Transform user interactions with our versatile Avatar component. Whether
				using images or names, it adds a personal touch to profiles, chats, and
				notifications, making every interaction more engaging and memorable.
			</p>
		</div>
	)
}

export const AvatarFallback = () => {
	return (
		<div className="space-y-6" id="avatarFallback">
			<h3 className="font-semibold">Avatar fallback</h3>

			<div className="flex gap-4 items-center">
				<Avatar showFallback src="https://images.unsplash.com/broken" />
				<Avatar name="Joe" src="https://images.unsplash.com/broken" />
				<Avatar
					showFallback
					src="https://images.unsplash.com/broken"
					fallback={<i className="ri-camera-off-line ri-xl" />}
				/>
			</div>

			<p className="text-xs">
				This versatile Avatar component ensures a seamless user experience by
				displaying fallback options when images are broken, while also offering
				customizable icons for a personalized touch. Enhance your interface with
				reliable and visually appealing user profiles.
			</p>
		</div>
	)
}

export const GroupedAvatars = () => {
	return (
		<div className="space-y-6" id="groupedAvatars">
			<h3 className="font-semibold">Grouped avatars</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Group max count</span>

					<AvatarGroup isBordered max={3}>
						<Avatar src={User1} />
						<Avatar src={User2} />
						<Avatar src={User3} />
						<Avatar src={User4} />
						<Avatar src={User5} />
						<Avatar src={User6} />
					</AvatarGroup>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Group total count</span>

					<AvatarGroup isBordered max={3} total={10}>
						<Avatar src={User1} />
						<Avatar src={User2} />
						<Avatar src={User3} />
						<Avatar src={User4} />
						<Avatar src={User5} />
						<Avatar src={User6} />
					</AvatarGroup>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Group custom count</span>

					<AvatarGroup
						isBordered
						max={3}
						total={10}
						renderCount={(count) => (
							<p className="text-small text-foreground font-medium ms-2">
								+{count} others
							</p>
						)}
					>
						<Avatar src={User1} />
						<Avatar src={User2} />
						<Avatar src={User3} />
						<Avatar src={User4} />
						<Avatar src={User5} />
						<Avatar src={User6} />
					</AvatarGroup>
				</div>
			</div>

			<p className="text-xs">
				The AvatarGroup component elegantly displays multiple user profiles
				while maintaining a clean, organized look. Perfect for team displays or
				social interactions, it creates a visually engaging experience,
				showcasing key individuals without overwhelming your interface.
			</p>
		</div>
	)
}
