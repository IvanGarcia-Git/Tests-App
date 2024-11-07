import { Accordion, AccordionItem } from '@nextui-org/react'
import { OrientatedMenuDropdown } from './Dropdowns'

export const BasicAccordion = () => {
	return (
		<div className="space-y-6" id="basicAccordion">
			<h3 className="font-semibold">Basic accordion</h3>

			<Accordion>
				<AccordionItem key="1" aria-label={title[0]} title={title[0]}>
					{content[0]}
				</AccordionItem>
				<AccordionItem key="2" aria-label={title[1]} title={title[1]}>
					{content[1]}
				</AccordionItem>
				<AccordionItem key="3" aria-label={title[2]} title={title[2]}>
					{content[1]}
				</AccordionItem>
			</Accordion>

			<p className="text-xs">
				The accordion component is a user-friendly UI element that organizes
				content efficiently. It allows users to expand and collapse sections,
				reducing clutter and improving navigation. With clear titles and
				accessible ARIA labels, it enhances both usability and accessibility.
				Ideal for applications needing a clean way to manage grouped content.
			</p>
		</div>
	)
}

export const WithSubtitlesAccordion = () => {
	return (
		<div className="space-y-6" id="withSubtitles">
			<h3 className="font-semibold">With subtitles</h3>

			<Accordion>
				<AccordionItem
					key="1"
					aria-label={title[0]}
					title={title[0]}
					subtitle={<span>{subtitle[0]}</span>}
				>
					{content[0]}
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label={title[1]}
					title={title[1]}
					subtitle={<span>{subtitle[1]}</span>}
				>
					{content[1]}
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label={title[2]}
					title={title[2]}
					subtitle={<span>{subtitle[2]}</span>}
				>
					{content[1]}
				</AccordionItem>
			</Accordion>

			<p className="text-xs">
				Discover the benefits of our WithSubtitlesAccordion component! This
				dynamic feature enhances user experience by organizing content into
				easily accessible sections with clear subtitles. Perfect for keeping
				your information structured and engaging, it ensures your audience finds
				what they need quickly and effortlessly. Elevate your content
				presentation with this intuitive and stylish solution!
			</p>
		</div>
	)
}

export const MultipleItemsAccordion = () => {
	return (
		<div className="space-y-6" id="multipleItems">
			<h3 className="font-semibold">Multiple items</h3>

			<Accordion>
				<AccordionItem key="1" aria-label={title[0]} title={title[0]}>
					{content[0]}
				</AccordionItem>
				<AccordionItem key="2" aria-label={title[1]} title={title[1]}>
					{content[1]}
				</AccordionItem>
				<AccordionItem key="3" aria-label={title[2]} title={title[2]}>
					{content[1]}
				</AccordionItem>
			</Accordion>

			<p className="text-xs">
				Enhance your user experience with our Multiple Items Accordion. Organize
				content effortlessly, improve navigation, and keep your audience engaged
				with a sleek, space-saving design. Perfect for showcasing multiple
				pieces of information in a compact, stylish format.
			</p>
		</div>
	)
}

export const CompactAccordion = () => {
	return (
		<div className="space-y-6" id="compactAccordion">
			<h3 className="font-semibold">Compact accordion</h3>

			<Accordion isCompact>
				<AccordionItem key="1" aria-label={title[0]} title={title[0]}>
					{content[0]}
				</AccordionItem>
				<AccordionItem key="2" aria-label={title[1]} title={title[1]}>
					{content[1]}
				</AccordionItem>
				<AccordionItem key="3" aria-label={title[2]} title={title[2]}>
					{content[1]}
				</AccordionItem>
			</Accordion>

			<p className="text-xs">
				Discover the Compact Accordion: a sleek, space-saving solution for
				organizing multiple items effortlessly. Perfect for enhancing user
				experience with its elegant design and easy navigation. Transform your
				content display today!
			</p>
		</div>
	)
}

export const SplittedAccordion = () => {
	return (
		<div className="space-y-6" id="splittedAccordion">
			<h3 className="font-semibold">Splitted accordion</h3>

			<Accordion variant="splitted" itemClasses={{ base: 'mt-2' }}>
				<AccordionItem key="1" aria-label={title[0]} title={title[0]}>
					{content[0]}
				</AccordionItem>
				<AccordionItem key="2" aria-label={title[1]} title={title[1]}>
					{content[1]}
				</AccordionItem>
				<AccordionItem key="3" aria-label={title[2]} title={title[2]}>
					{content[1]}
				</AccordionItem>
			</Accordion>

			<p className="text-xs">
				Experience seamless content organization with our Splitted Accordion.
				Effortlessly navigate through sections, reduce clutter, and enhance user
				engagement with clear titles and a sleek design. Perfect for a clean,
				efficient user interface.
			</p>
		</div>
	)
}

export const CustomIndicatorsAccordion = () => {
	return (
		<div className="space-y-6" id="customIndicators">
			<h3 className="font-semibold">Custom indicators</h3>

			<Accordion>
				<AccordionItem
					key="1"
					aria-label={title[0]}
					title={title[0]}
					indicator={<i className="ri-add-line ri-xl" />}
				>
					{content[0]}
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label={title[1]}
					title={title[1]}
					indicator={<i className="ri-add-line ri-xl" />}
				>
					{content[1]}
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label={title[2]}
					title={title[2]}
					indicator={<i className="ri-add-line ri-xl" />}
				>
					{content[1]}
				</AccordionItem>
			</Accordion>

			<p className="text-xs">
				Enhance your user experience with our Accordion component featuring
				custom indicators. It organizes content seamlessly, making navigation
				intuitive and efficient. Perfect for decluttering your interface and
				improving accessibility.
			</p>
		</div>
	)
}

const title = [
	'Payment and pricing',
	'Returns and refunds',
	'Shipping and delivery',
]

const subtitle = [
	'View pricing details',
	'Return items and get refund',
	"Track your order's progress",
]

const content = [
	'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.',
	'Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.',
	'Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake dragée caramels. Ice cream wafer danish cookie caramels muffin.',
]
