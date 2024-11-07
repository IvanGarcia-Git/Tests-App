import { useState } from 'react'
import { Textarea, Divider, Tabs, Tab } from '@nextui-org/react'

/**
 * BasicTextarea
 *
 * A basic textarea component with a modern style.
 *
 * This component can be used in forms where a modern textarea style is desired.
 *
 * @example
 * <BasicTextarea />
 */
export const BasicTextarea = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="basicTextarea">
			<div className="space-y-2">
				<h3 className="font-semibold">Basic textarea</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Textarea
				label="Modern textarea"
				className="max-w-md"
				description="The most basic textarea component"
				// @ts-ignore
				variant={variant}
			/>

			<Textarea
				label="With placeholder value"
				placeholder="With placeholder value"
				className="max-w-md"
				// @ts-ignore
				variant={variant}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * ClassicTextarea
 *
 * A textarea component with a classic style.
 *
 * This component can be used in forms where a classic textarea style is desired.
 *
 * @example
 * <ClassicTextarea />
 */
export const ClassicTextarea = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="classicTextarea">
			<div className="space-y-2">
				<h3 className="font-semibold">Classic style</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<fieldset className="space-y-1">
				<label className="text-xs">Classic textarea</label>

				<Textarea
					placeholder="Leave your message"
					className="max-w-md"
					description="Nostalgic textarea style for classic forms"
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * TextareaAutosize
 *
 * A textarea component with autosize enabled.
 *
 * @example
 * <TextareaAutosize />
 */
export const TextareaAutosize = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="textareaAutosize">
			<div className="space-y-2">
				<h3 className="font-semibold">Autosize</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Textarea
				label="Autosize (Default)"
				className="max-w-md"
				// @ts-ignore
				variant={variant}
			/>

			<Textarea
				label="Min rows"
				className="max-w-md"
				minRows={1}
				description="Min rows: 1"
				// @ts-ignore
				variant={variant}
			/>

			<Textarea
				label="Max rows"
				className="max-w-md"
				maxRows={3}
				description="Max rows: 3"
				// @ts-ignore
				variant={variant}
			/>

			<Textarea
				label="Autosize disabled"
				className="max-w-md"
				disableAutosize
				description="With the prop disableAutosize"
				// @ts-ignore
				variant={variant}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * TextareaRounded
 *
 * A textarea component with different border radius styles.
 *
 * This component can be used in forms where a custom border radius style is desired.
 *
 * @example
 * <TextareaRounded />
 */
export const TextareaRounded = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="textareaRounded">
			<div className="space-y-2">
				<h3 className="font-semibold">Border radius</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-10">
					<Textarea
						label="Textarea sharp"
						radius="none"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Textarea sharp</label>
						<Textarea
							radius="none"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Textarea
						label="Small radius textarea"
						radius="sm"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Small radius textarea</label>
						<Textarea
							radius="sm"
							// @ts-ignore
							variant={variant}
						/>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Textarea
						label="Large radius textarea"
						radius="lg"
						// @ts-ignore
						variant={variant}
					/>

					<fieldset className="space-y-1">
						<label className="text-xs">Large radius textarea</label>
						<Textarea
							radius="lg"
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
 * RequiredTextarea
 *
 * A textarea component with a required prop.
 *
 * This component shows a textarea component with a modern and classic style, and a required prop.
 *
 * @example
 * <RequiredTextarea />
 */
export const RequiredTextarea = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="requiredTextarea">
			<div className="space-y-2">
				<h3 className="font-semibold">Required</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Textarea
				isRequired
				label="Modern required"
				className="max-w-md"
				description="Please don't forget to leave your comment"
				// @ts-ignore
				variant={variant}
			/>

			<fieldset className="space-y-1">
				<label className="text-xs">
					Classic required{' '}
					<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
				</label>

				<Textarea
					isRequired
					className="max-w-md"
					description="Please don't forget to leave your comment"
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * TextareaValidationStyles
 *
 * A component that shows how to use the `isInvalid`, `color`, `errorMessage` and `description` props to control the validation state of the textarea component.
 *
 * This component shows a textarea component with a modern and classic style, and four different validation states: invalid, valid, required and not required.
 *
 * @example
 * <TextareaValidationStyles />
 */
export const TextareaValidationStyles = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="validationStyles">
			<div className="space-y-2">
				<h3 className="font-semibold">Validation styles</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-3">
				<Textarea
					isRequired
					label="Modern required"
					className="max-w-md"
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

					<Textarea
						isRequired
						className="max-w-md"
						isInvalid={true}
						errorMessage="You must fill this to continue"
						// @ts-ignore
						variant={variant}
					/>
				</fieldset>
			</div>

			<Divider />

			<div className="space-y-3">
				<Textarea
					isRequired
					label="Modern valid"
					className="max-w-md"
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

					<Textarea
						isRequired
						className="max-w-md"
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
 * HorizontalTextarea
 *
 * A horizontal textarea component.
 *
 * This component shows a textarea component placed horizontally.
 *
 * @example
 * <HorizontalTextarea />
 */
export const HorizontalTextarea = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="horizontalTextarea">
			<div className="space-y-2">
				<h3 className="font-semibold">Horizontal textarea</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div>
				<Textarea
					label="Horizontal input"
					description="Input fields can already be placed horizontally"
					labelPlacement="outside-left"
					classNames={{
						base: 'max-w-md flex-wrap gap-y-1',
						label: 'w-40',
						inputWrapper: 'basis-auto flex-1',
						helperWrapper: 'basis-full pl-40',
					}}
					// @ts-ignore
					variant={variant}
				/>
			</div>

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
