import { useState } from 'react'
import { Input, Divider, Chip, Button, Tabs, Tab } from '@nextui-org/react'

/**
 * BasicInput
 *
 * Demos a basic modern input component with different variants.
 *
 * @example
 *
 */
export const BasicInput = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="basicInput">
			<div className="space-y-2">
				<h3 className="font-semibold">Basic input</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Input
				label="Modern"
				description="The most basic input component"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			/>

			<Input
				label="With placeholder value"
				placeholder="Enter your name"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * ClassicInput
 *
 * Demos a classic style input component with different variants.
 *
 * @example
 *
 */
export const ClassicInput = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="classicInput">
			<div className="space-y-2">
				<h3 className="font-semibold">Classic style</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<fieldset className="space-y-1">
				<label className="text-xs">Classic input</label>
				<Input
					placeholder="Enter your name"
					description="Nostalgic input style for classic forms"
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * InputSizes
 *
 * Demos a modern and classic input component with different sizes.
 *
 * @example
 *
 */
export const InputSizes = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-10" id="inputSizes">
			<div className="space-y-2">
				<h3 className="font-semibold">Sizing</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Modern small input"
						size="sm"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Classic small input</label>
						<Input
							size="sm"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Modern large input"
						size="lg"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Classic large input</label>
						<Input
							size="lg"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * InputRounded
 *
 * Demos an input component with different border radiuses.
 *
 * @example
 *
 */
export const InputRounded = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="inputRounded">
			<div className="space-y-2">
				<h3 className="font-semibold">Border radius</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Input sharp"
						radius="none"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Input sharp</label>
						<Input
							radius="none"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Small radius input"
						radius="sm"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Small radius input</label>
						<Input
							radius="sm"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Large radius input"
						radius="lg"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Large radius input</label>
						<Input
							radius="lg"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Rounded input"
						radius="full"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Rounded input</label>
						<Input
							radius="full"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>
			</div>
		</div>
	)
}

/**
 * InputRequired
 *
 * Demos a modern and classic input component with a required prop.
 *
 * @example
 *
 */
export const InputRequired = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="inputRequired">
			<div className="space-y-2">
				<h3 className="font-semibold">Required</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Input
				isRequired
				label="Modern required"
				description="Please don't forget to complete this field"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			/>

			<fieldset className="space-y-1">
				<label className="text-xs">
					Classic required{' '}
					<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
				</label>

				<Input
					isRequired
					description="Please don't forget to complete this field"
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * InputValidationStyles
 *
 * Demos a modern and classic input component with different validation states.
 *
 * @example
 *
 */
export const InputValidationStyles = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="validationStyles">
			<div className="space-y-2">
				<h3 className="font-semibold">Validation styles</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-3">
				<Input
					isRequired
					label="Modern invalid"
					className="max-w-sm"
					isInvalid={true}
					errorMessage="You must fill this to continue"
					// @ts-ignore
					variant={variant}
				/>

				<fieldset className="space-y-1">
					<label className="text-xs">
						Classic required{' '}
						<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
					</label>

					<Input
						isRequired
						className="max-w-sm"
						isInvalid={true}
						errorMessage="You must fill this to continue"
						// @ts-ignore
						variant={variant}
					/>
				</fieldset>
			</div>

			<Divider />

			<div className="space-y-3">
				<Input
					isRequired
					label="Modern valid"
					className="max-w-sm"
					color="success"
					description="The content has been validated"
					classNames={{ description: 'text-success' }}
					// @ts-ignore
					variant={variant}
				/>

				<fieldset className="space-y-1">
					<label className="text-xs">
						Classic valid{' '}
						<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
					</label>
					<Input
						isRequired
						className="max-w-sm"
						color="success"
						description="The content has been validated"
						classNames={{ description: 'text-success' }}
						// @ts-ignore
						variant={variant}
					/>
				</fieldset>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * InputWithAccessories
 *
 * Demos input components with different accessories.
 *
 * @example
 *
 */
export const InputWithAccessories = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="inputWithAccessories">
			<div className="space-y-2">
				<h3 className="font-semibold">Accessories</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Left icon accessory"
						startContent={<i className="ri-instagram-line ri-lg" />}
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Left icon accessory</label>
						<Input
							startContent={<i className="ri-user-6-fill ri-lg" />}
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Input
						label="Right icon accessory"
						endContent={<i className="ri-shield-check-line ri-lg" />}
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Right icon accessory</label>
						<Input
							endContent={<i className="ri-lock-line ri-lg" />}
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-x-10 gap-y-6">
					<Input
						label="Chip left"
						startContent={
							<Chip size="sm" color="primary" className="h-5">
								EUR
							</Chip>
						}
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Chip left</label>
						<Input
							startContent={
								<Chip size="sm" color="primary" className="h-5">
									EUR
								</Chip>
							}
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>

					<Input
						label="Chip right"
						endContent={
							<Chip size="sm" color="primary" className="h-5">
								USD
							</Chip>
						}
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Chip right</label>
						<Input
							endContent={
								<Chip size="sm" color="primary" className="h-5">
									USD
								</Chip>
							}
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-x-10 gap-y-6">
					<Input
						label="Button accessory"
						endContent={
							<Button color="primary" size="sm">
								Send
							</Button>
						}
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Button accessory</label>
						<Input
							endContent={
								<Button color="primary" size="sm">
									Send
								</Button>
							}
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * HorizontalInput
 *
 * Demos a modern input component with a horizontal layout.
 *
 * @example
 *
 */
export const HorizontalInput = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="horizontalInput">
			<div className="space-y-2">
				<h3 className="font-semibold">Horizontal input</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div>
				<Input
					label="Horizontal input"
					description="Input fields can already be placed horizontally"
					labelPlacement="outside-left"
					classNames={{
						inputWrapper: 'max-w-sm',
						label: 'w-40 pr-6',
					}}
					// @ts-ignore
					variant={variant}
				/>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * PasswordInput
 *
 * Demos a modern password input component with a toggleable visibility button.
 *
 * @example
 *
 */
export const PasswordInput = () => {
	const [variant, setVariant] = useState('flat')
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<div className="space-y-6" id="passwordInput">
			<div className="space-y-2">
				<h3 className="font-semibold">Password input</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Input
				label="Password"
				placeholder="Enter your password"
				endContent={
					<button
						className="focus:outline-none"
						type="button"
						onClick={toggleVisibility}
						aria-label="toggle password visibility"
					>
						{isVisible ? (
							<i className="ri-eye-line ri-xl pointer-events-none" />
						) : (
							<i className="ri-eye-off-line ri-xl pointer-events-none" />
						)}
					</button>
				}
				type={isVisible ? 'text' : 'password'}
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			/>

			<fieldset className="space-y-1">
				<label className="text-xs">Password</label>
				<Input
					placeholder="Enter your password"
					endContent={
						<button
							className="focus:outline-none"
							type="button"
							onClick={toggleVisibility}
							aria-label="toggle password visibility"
						>
							{isVisible ? (
								<i className="ri-eye-line ri-xl pointer-events-none" />
							) : (
								<i className="ri-eye-off-line ri-xl pointer-events-none" />
							)}
						</button>
					}
					type={isVisible ? 'text' : 'password'}
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

export const InputTypes = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="inputTypes">
			<div className="space-y-2">
				<h3 className="font-semibold">Input types</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<h4 className="text-sm font-semibold">Number</h4>

			<Input
				type="number"
				label="Number"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			/>

			<fieldset className="space-y-1">
				<label className="text-xs">Number</label>
				<Input
					type="number"
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

const flavors = {
	flat: 'Flat',
	bordered: 'Bordered',
	faded: 'Faded',
	underlined: 'Underlined',
}

/**
 * FlavorSelector
 *
 * A component that displays a set of flavors as buttons.
 *
 * @example
 *
 * @param {Object} props
 * @param {Function} props.setVariant - A function to set the selected flavor.
 * @returns {ReactElement}
 */
const FlavorSelector = ({ setVariant }: { setVariant: (v: any) => void }) => {
	return (
		<div className="flex items-center gap-x-3">
			<span className="text-xs font-medium text-foreground-700">Flavors:</span>

			<Tabs
				aria-label="Options"
				color="primary"
				variant="underlined"
				size="sm"
				onSelectionChange={(key) => setVariant(key)}
			>
				{Object.entries(flavors).map((item) => (
					<Tab
						key={item[0]}
						title={
							<div className="flex items-center gap-2">
								<span>{item[1]}</span>
							</div>
						}
					/>
				))}
			</Tabs>
		</div>
	)
}
