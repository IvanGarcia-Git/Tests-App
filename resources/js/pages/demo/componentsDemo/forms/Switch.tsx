import {
	Switch,
	cn,
	useSwitch,
	VisuallyHidden,
	Button,
} from '@nextui-org/react'

/**
 * BasicSwitch
 *
 * A basic switch component.
 *
 * This component can be used as a simple on/off toggle.
 *
 * @example
 * <BasicSwitch />
 */
export const BasicSwitch = () => {
	return (
		<div className="space-y-6" id="basicSwitch">
			<div className="space-y-2">
				<h3 className="font-semibold">Basic switch</h3>
			</div>

			<p>
				<Switch defaultSelected aria-label="Automatic updates" />
			</p>

			<p>
				<Switch defaultSelected aria-label="Automatic updates">
					Automatic updates
				</Switch>
			</p>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SwitchSizing
 *
 * A component that shows how to use the `size` prop to control the size of the switch component.
 *
 * This component can be used to create a switch component with a small, medium, or large size.
 *
 * @example
 * <SwitchSizing />
 */
export const SwitchSizing = () => {
	return (
		<div className="space-y-6" id="switchSizing">
			<div className="space-y-2">
				<h3 className="font-semibold">Sizes</h3>
			</div>

			<p>
				<Switch defaultSelected aria-label="Small" size="sm">
					Small
				</Switch>
			</p>

			<p>
				<Switch defaultSelected aria-label="Medium" size="md">
					Medium
				</Switch>
			</p>

			<p>
				<Switch defaultSelected aria-label="Large" size="lg">
					Large
				</Switch>
			</p>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SwitchColors
 *
 * A component that shows how to use the `color` prop to control the semantic color of the switch component.
 *
 * This component can be used to create a switch component with a default, primary, secondary, success, warning, or danger color.
 *
 * @example
 * <SwitchColors />
 */
export const SwitchColors = () => {
	return (
		<div className="space-y-6" id="switchColors">
			<div className="space-y-2">
				<h3 className="font-semibold">Semantic colors</h3>
			</div>

			<p>
				<Switch
					defaultSelected
					aria-label="Default color"
					color="default"
					size="sm"
				>
					Default color
				</Switch>
			</p>

			<p>
				<Switch
					defaultSelected
					aria-label="Primary color"
					color="primary"
					size="sm"
				>
					Primary color
				</Switch>
			</p>

			<p>
				<Switch
					defaultSelected
					aria-label="Secondary color"
					color="secondary"
					size="sm"
				>
					Secondary color
				</Switch>
			</p>

			<p>
				<Switch
					defaultSelected
					aria-label="Success color"
					color="success"
					size="sm"
				>
					Success color
				</Switch>
			</p>

			<p>
				<Switch
					defaultSelected
					aria-label="Warning color"
					color="warning"
					size="sm"
				>
					Warning color
				</Switch>
			</p>

			<p>
				<Switch
					defaultSelected
					aria-label="Danger color"
					color="danger"
					size="sm"
				>
					Danger color
				</Switch>
			</p>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * CustomLabelsSwitch
 *
 * A component that shows how to use the `startContent` and `endContent` props to customize the content of the switch component.
 *
 * This component shows a switch component with a custom start content and end content.
 *
 * @example
 * <CustomLabelsSwitch />
 */
export const CustomLabelsSwitch = () => {
	return (
		<div className="space-y-6" id="customLabelsSwitch">
			<div className="space-y-2">
				<h3 className="font-semibold">Custom labels</h3>
			</div>

			<p>
				<Switch
					defaultSelected
					aria-label="Automatic updates"
					startContent={<span>Start content</span>}
					endContent={<span>End content</span>}
					classNames={{
						wrapper: 'm-0 w-32',
						thumb: 'group-data-[selected=true]:ml-[6.2rem]',
					}}
				/>
			</p>

			<p>
				<Switch
					defaultSelected
					aria-label="Automatic updates"
					classNames={{
						base: 'items-center flex-row-reverse',
						wrapper: 'm-0 ml-2',
						label: 'text-sm',
					}}
				>
					Automatic updates
				</Switch>
			</p>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SwitchWithIcons
 *
 * A component that shows how to use the `thumbIcon` prop to create a custom thumb icon for the switch component,
 * and the `startContent` and `endContent` props to add custom content to the start and end of the switch component.
 *
 * This component can be used to create a switch component with a custom icon, and a custom content at the start and end of the switch.
 *
 * @example
 * <SwitchWithIcons />
 */
export const SwitchWithIcons = () => {
	return (
		<div className="space-y-6" id="switchWithIcons">
			<div className="space-y-2">
				<h3 className="font-semibold">Icons</h3>
			</div>

			<p>
				<Switch
					defaultSelected
					aria-label="Automatic updates"
					size="lg"
					thumbIcon={({ isSelected, className }) =>
						isSelected ? (
							<i className={cn('ri-moon-fill', className)} />
						) : (
							<i className={cn('ri-sun-fill', className)} />
						)
					}
				/>
			</p>

			<p>
				<Switch
					defaultSelected
					aria-label="Automatic updates"
					size="lg"
					startContent={
						<>
							<i className="ri-moon-fill absolute" />
						</>
					}
					endContent={
						<>
							<i className="ri-sun-fill right-1.5 absolute" />
						</>
					}
				/>
			</p>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * CustomSwitch
 *
 * A component that shows how to use the `useSwitch` hook to create a custom switch component.
 *
 * This component uses the `useSwitch` hook to create a custom switch component with a custom design.
 *
 * @example
 * <CustomSwitch />
 */
export const CustomSwitch = () => {
	const {
		Component,
		isSelected,
		getBaseProps,
		getInputProps,
	} = useSwitch({ defaultSelected: true })

	return (
		<div className="space-y-6" id="customSwitch">
			<div className="space-y-2">
				<h3 className="font-semibold">Custom implementation</h3>
			</div>

			<p>
				<Component {...getBaseProps()}>
					<VisuallyHidden>
						<input {...getInputProps()} />
					</VisuallyHidden>

					<Button
						color={isSelected ? 'success' : 'primary'}
						isDisabled
						className="opacity-100"
					>
						{isSelected ? 'Turned on' : 'Turned off'}
					</Button>
				</Component>
			</p>

			<p>
				<Switch
					classNames={{
						base: cn(
							'inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center',
							'justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
							'data-[selected=true]:border-primary'
						),
						wrapper: 'p-0 h-4 overflow-visible',
						thumb: cn(
							'w-6 h-6 border-2 shadow-lg',
							'group-data-[hover=true]:border-primary',
							//selected
							'group-data-[selected=true]:ml-6',
							// pressed
							'group-data-[pressed=true]:w-7',
							'group-data-[selected]:group-data-[pressed]:ml-4'
						),
					}}
				>
					<div className="flex flex-col gap-1">
						<p className="text-medium">Enable early access</p>
						<p className="text-tiny text-default-400">
							Get access to new features before they are released.
						</p>
					</div>
				</Switch>
			</p>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}
