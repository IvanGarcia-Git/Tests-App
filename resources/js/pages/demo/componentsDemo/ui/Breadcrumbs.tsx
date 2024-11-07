import { Breadcrumbs, BreadcrumbItem, Divider, Code } from '@nextui-org/react'
import { useState } from 'react'

export const BasicBreadcrumbs = () => {
	return (
		<div className="space-y-6" id="basicBreadcrumbs">
			<h3 className="font-semibold">Basic breadcrumbs</h3>

			<Breadcrumbs>
				<BreadcrumbItem>Home</BreadcrumbItem>
				<BreadcrumbItem>Music</BreadcrumbItem>
				<BreadcrumbItem>Artist</BreadcrumbItem>
				<BreadcrumbItem>Album</BreadcrumbItem>
				<BreadcrumbItem>Song</BreadcrumbItem>
			</Breadcrumbs>

			<p className="text-xs">
				Guide users effortlessly through your site with the Breadcrumbs
				component. It creates a clear, intuitive navigation path, enhancing user
				experience by making it easy to backtrack and explore different sections
				of your content with just a glance.
			</p>
		</div>
	)
}

export const BreadcrumbVariants = () => {
	return (
		<div className="space-y-6" id="breadcrumbVariants">
			<h3 className="font-semibold">Breadcrumb variants</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Solid</span>
					<Breadcrumbs variant="solid">
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem>Music</BreadcrumbItem>
						<BreadcrumbItem>Artist</BreadcrumbItem>
						<BreadcrumbItem>Album</BreadcrumbItem>
						<BreadcrumbItem>Song</BreadcrumbItem>
					</Breadcrumbs>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Bordered</span>

					<Breadcrumbs variant="bordered">
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem>Music</BreadcrumbItem>
						<BreadcrumbItem>Artist</BreadcrumbItem>
						<BreadcrumbItem>Album</BreadcrumbItem>
						<BreadcrumbItem>Song</BreadcrumbItem>
					</Breadcrumbs>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Light</span>

					<Breadcrumbs variant="light">
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem>Music</BreadcrumbItem>
						<BreadcrumbItem>Artist</BreadcrumbItem>
						<BreadcrumbItem>Album</BreadcrumbItem>
						<BreadcrumbItem>Song</BreadcrumbItem>
					</Breadcrumbs>
				</div>
			</div>

			<p className="text-xs">
				Enhance navigation with the Breadcrumbs component, available in three
				unique styles: Solid, Bordered, and Light. Each variant ensures a sleek,
				customizable experience, helping users easily trace their steps while
				adding a touch of elegance to your interface.
			</p>
		</div>
	)
}

export const ControlledBreadcrumbs = () => {
	const [currentPage, setCurrentPage] = useState<React.Key>('song')
	const [currentMenuItem, setCurrentMenuItem] = useState<React.Key>('travel')

	return (
		<div className="space-y-6" id="controlledBreadcrumbs">
			<div>
				<h3 className="font-semibold">Controlled breadcrumbs</h3>
				<p className="text-sm">
					You can control the current/active item by using the{' '}
					<Code>isCurrent</Code> and <Code>onAction</Code> props.
				</p>
			</div>

			<Breadcrumbs underline="active" onAction={(key) => setCurrentPage(key)}>
				<BreadcrumbItem key="home" isCurrent={currentPage === 'home'}>
					Home
				</BreadcrumbItem>
				<BreadcrumbItem key="music" isCurrent={currentPage === 'music'}>
					Music
				</BreadcrumbItem>
				<BreadcrumbItem key="artist" isCurrent={currentPage === 'artist'}>
					Artist
				</BreadcrumbItem>
				<BreadcrumbItem key="album" isCurrent={currentPage === 'album'}>
					Album
				</BreadcrumbItem>
				<BreadcrumbItem key="song" isCurrent={currentPage === 'song'}>
					Song
				</BreadcrumbItem>
			</Breadcrumbs>

			<p className="text-sm">
				It is possible to use the <Code>Breadcrumbs</Code> component as a
				horizontal menu. This is useful when you want to display a list of
				possible navigations and let the user choose one of them.
			</p>

			<Breadcrumbs
				hideSeparator
				onAction={(key) => setCurrentMenuItem(key)}
				classNames={{
					list: 'gap-2',
				}}
				itemClasses={{
					item: [
						'px-2 py-0.5 border-small border-default-400 rounded-small',
						'data-[current=true]:border-default-800 data-[current=true]:bg-foreground data-[current=true]:text-background transition-colors',
						'data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100',
					],
				}}
			>
				<BreadcrumbItem
					key="technology"
					isCurrent={currentMenuItem === 'technology'}
				>
					Technology
				</BreadcrumbItem>
				<BreadcrumbItem key="movies" isCurrent={currentMenuItem === 'movies'}>
					Movies
				</BreadcrumbItem>
				<BreadcrumbItem key="health" isCurrent={currentMenuItem === 'health'}>
					Health
				</BreadcrumbItem>
				<BreadcrumbItem key="art" isCurrent={currentMenuItem === 'art'}>
					Art
				</BreadcrumbItem>
				<BreadcrumbItem key="travel" isCurrent={currentMenuItem === 'travel'}>
					Travel
				</BreadcrumbItem>
			</Breadcrumbs>

			<p className="text-xs">
				This Breadcrumbs component offers an interactive and customizable
				experience. Its dynamic styling and smooth transitions ensure an engaging
				user experience across various content areas.
			</p>
		</div>
	)
}
