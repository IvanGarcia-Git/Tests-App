import { Divider, Tabs, Tab } from '@nextui-org/react'

export const TabsBasic = () => {
	return (
		<div className="space-y-6" id="tabsBasic">
			<h3 className="font-semibold">Basic tabs</h3>

			<div className="flex w-full flex-col">
				<Tabs aria-label="Options" color="primary">
					{content.map((e) => (
						<Tab
							key={e.key}
							title={
								<div className="flex items-center gap-2">
									<i className={`${e.icon} ri-xl`} />
									<span>{e.title}</span>
								</div>
							}
						>
							<div className="text-sm">{e.content}</div>
						</Tab>
					))}
				</Tabs>
			</div>

			<p className="text-xs">
				Experience seamless navigation with our Basic Tabs component, designed
				for clarity and efficiency. Its sleek, intuitive interface keeps users
				engaged, delivering content effortlessly with style and simplicity.
			</p>
		</div>
	)
}

export const TabsBordered = () => {
	return (
		<div className="space-y-6" id="tabsBordered">
			<h3 className="font-semibold">Bordered tabs</h3>

			<div className="flex w-full flex-col">
				<Tabs aria-label="Options" color="primary" variant="bordered">
					{content.map((e) => (
						<Tab
							key={e.key}
							title={
								<div className="flex items-center gap-2">
									<i className={`${e.icon} ri-xl`} />
									<span>{e.title}</span>
								</div>
							}
						>
							<div className="text-sm">{e.content}</div>
						</Tab>
					))}
				</Tabs>
			</div>

			<p className="text-xs">
				Elevate your interface with our Bordered Tabs component. The clean,
				defined borders create a refined look, while the intuitive design
				ensures effortless content navigation with a touch of sophistication.”
			</p>
		</div>
	)
}

export const TabsLight = () => {
	return (
		<div className="space-y-6" id="tabsLight">
			<h3 className="font-semibold">Light tabs</h3>

			<div className="flex w-full flex-col">
				<Tabs aria-label="Options" color="primary" variant="light">
					{content.map((e) => (
						<Tab
							key={e.key}
							title={
								<div className="flex items-center gap-2">
									<i className={`${e.icon} ri-xl`} />
									<span>{e.title}</span>
								</div>
							}
						>
							<div className="text-sm">{e.content}</div>
						</Tab>
					))}
				</Tabs>
			</div>

			<p className="text-xs">
				Discover the elegance of our Light Tabs component. With a minimalist
				design and soft, subtle tones, it offers a clean, modern interface that
				keeps the focus on content while ensuring a smooth and intuitive user
				experience.
			</p>
		</div>
	)
}

export const TabsUnderlined = () => {
	return (
		<div className="space-y-6" id="tabsUnderlined">
			<h3 className="font-semibold">Underlined tabs</h3>

			<div className="flex w-full flex-col">
				<Tabs aria-label="Options" color="primary" variant="underlined">
					{content.map((e) => (
						<Tab
							key={e.key}
							title={
								<div className="flex items-center gap-2">
									<i className={`${e.icon} ri-xl`} />
									<span>{e.title}</span>
								</div>
							}
						>
							<div className="text-sm">{e.content}</div>
						</Tab>
					))}
				</Tabs>
			</div>

			<p className="text-xs">
				Enhance your user interface with our Underlined Tabs component. The
				sleek underline accent adds a modern touch, guiding users through
				content with clarity and precision, while keeping the design clean and
				stylish.
			</p>
		</div>
	)
}

export const PlacementForTabs = () => {
	return (
		<div className="space-y-6" id="placement">
			<h3 className="font-semibold">Placement</h3>

			<h3 className="font-semibold text-sm">Left tabs</h3>

			<div className="flex w-full flex-col">
				<Tabs
					aria-label="Options"
					color="primary"
					variant="light"
					placement="start"
				>
					{content.map((e) => (
						<Tab
							key={e.key}
							title={
								<div className="flex items-center gap-2">
									<i className={`${e.icon} ri-xl`} />
									<span>{e.title}</span>
								</div>
							}
						>
							<div className="text-sm h-16">{e.content}</div>
						</Tab>
					))}
				</Tabs>
			</div>

			<Divider />

			<h3 className="font-semibold text-sm">Bottom tabs</h3>

			<div className="flex w-full flex-col">
				<Tabs
					aria-label="Options"
					color="primary"
					variant="light"
					placement="bottom"
				>
					{content.map((e) => (
						<Tab
							key={e.key}
							title={
								<div className="flex items-center gap-2">
									<i className={`${e.icon} ri-xl`} />
									<span>{e.title}</span>
								</div>
							}
						>
							<div className="text-sm h-16">{e.content}</div>
						</Tab>
					))}
				</Tabs>
			</div>

			<Divider />

			<h3 className="font-semibold text-sm">Right tabs</h3>

			<div className="flex w-full flex-col">
				<Tabs
					aria-label="Options"
					color="primary"
					variant="light"
					placement="end"
				>
					{content.map((e) => (
						<Tab
							key={e.key}
							title={
								<div className="flex items-center gap-2">
									<i className={`${e.icon} ri-xl`} />
									<span>{e.title}</span>
								</div>
							}
						>
							<div className="text-sm h-16">{e.content}</div>
						</Tab>
					))}
				</Tabs>
			</div>

			<p className="text-xs">
				Explore the versatility of our Tabs Placement component. With options
				for left, right, or bottom placement, you can tailor the layout to fit
				any design. The intuitive positioning ensures smooth navigation while
				maintaining a clean, balanced interface.
			</p>
		</div>
	)
}

const content = [
	{
		key: 'photos',
		title: 'Photos',
		icon: 'ri-camera-2-line',
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.`,
	},
	{
		key: 'music',
		title: 'Music',
		icon: 'ri-headphone-line',
		content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.`,
	},
	{
		key: 'videos',
		title: 'Videos',
		icon: 'ri-movie-line',
		content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.`,
	},
]
