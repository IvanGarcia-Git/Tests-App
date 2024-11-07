import { useState } from 'react'
import {
	Select,
	SelectItem,
	Selection,
	Divider,
	Chip,
	Button,
	Tabs,
	Tab,
} from '@nextui-org/react'

/**
 * BasicSelect
 *
 * A basic select component with a simple dropdown.
 *
 * It allows the user to select a single option from a list of options.
 *
 * @example
 * <BasicSelect />
 */
export const BasicSelect = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="basicSelect">
			<div className="space-y-2">
				<h3 className="font-semibold">Basic select</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Select
				items={companies}
				label="Modern select"
				description="The most basic select component"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			>
				{companies.map((company) => (
					<SelectItem key={company.key}>{company.label}</SelectItem>
				))}
			</Select>

			<Select
				items={companies}
				label="Whith placeholder value"
				placeholder="Select a company"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			>
				{companies.map((company) => (
					<SelectItem key={company.key}>{company.label}</SelectItem>
				))}
			</Select>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * ClassicSelect
 *
 * A select component with a classic style.
 *
 * This component can be used in forms where a classic input style is desired.
 *
 * @example
 * <ClassicSelect />
 */
export const ClassicSelect = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="classicSelect">
			<div className="space-y-2">
				<h3 className="font-semibold">Classic style</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<fieldset className="space-y-1">
				<label className="text-xs">Classic select</label>

				<Select
					aria-label="Classic select"
					items={companies}
					placeholder="Select a company"
					description="Nostalgic input style for classic forms"
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SelectSizes
 *
 * A component that shows how to use the `size` prop to control the size of the select component.
 *
 * @example
 * <SelectSizes />
 */
export const SelectSizes = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-10" id="selectSizes">
			<div className="space-y-2">
				<h3 className="font-semibold">Sizing</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-10">
					<Select
						size="sm"
						items={companies}
						label="Modern small select"
						className="max-w-sm"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Classic small select</label>

						<Select
							aria-label="Classic small select"
							size="sm"
							items={companies}
							description="Nostalgic input style for classic forms"
							className="max-w-sm"
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Select
						size="lg"
						items={companies}
						label="Modern large select"
						className="max-w-sm"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Classic large select</label>

						<Select
							aria-label="Classic large select"
							size="lg"
							items={companies}
							description="Nostalgic input style for classic forms"
							className="max-w-sm"
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SelectRounded
 *
 * A select component with different border radius styles.
 *
 * This component can be used in forms where a custom border radius style is desired.
 *
 * @example
 * <SelectRounded />
 */
export const SelectRounded = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="selectRounded">
			<div className="space-y-2">
				<h3 className="font-semibold">Border radius</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-10">
					<Select
						items={companies}
						label="Select sharp"
						radius="none"
						className="max-w-sm"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Select sharp</label>

						<Select
							aria-label="Select sharp"
							items={companies}
							radius="none"
							description="Nostalgic input style for classic forms"
							className="max-w-sm"
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Select
						items={companies}
						label="Small radius select"
						radius="sm"
						className="max-w-sm"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Small radius select</label>

						<Select
							aria-label="Small radius select"
							items={companies}
							radius="sm"
							description="Nostalgic input style for classic forms"
							className="max-w-sm"
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Select
						items={companies}
						label="Large radius select"
						radius="lg"
						className="max-w-sm"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Large radius select</label>

						<Select
							aria-label="Large radius select"
							items={companies}
							radius="lg"
							description="Nostalgic input style for classic forms"
							className="max-w-sm"
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Select
						items={companies}
						label="Rounded select"
						radius="full"
						className="max-w-sm"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Rounded select</label>

						<Select
							aria-label="Rounded select"
							items={companies}
							radius="full"
							description="Nostalgic input style for classic forms"
							className="max-w-sm"
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>
			</div>
		</div>
	)
}

/**
 * SelectRequired
 *
 * A select component with a required prop.
 *
 * This component shows a required select component with a modern and classic style.
 *
 * @example
 * <SelectRequired />
 */
export const SelectRequired = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="selectRequired">
			<div className="space-y-2">
				<h3 className="font-semibold">Required</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<Select
				isRequired
				items={companies}
				label="Modern required"
				description="Please don't forget to complete this field"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			>
				{companies.map((company) => (
					<SelectItem key={company.key}>{company.label}</SelectItem>
				))}
			</Select>

			<fieldset className="space-y-1">
				<label className="text-xs">
					Classic required{' '}
					<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
				</label>

				<Select
					aria-label="Classic required"
					isRequired
					items={companies}
					description="Please don't forget to complete this field"
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SelectValidationStyles
 *
 * A component that shows how to use the `isInvalid` and `errorMessage` props to control the validation state of the select component.
 *
 * @example
 * <SelectValidationStyles />
 */
export const SelectValidationStyles = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="validationStyles">
			<div className="space-y-2">
				<h3 className="font-semibold">Validation styles</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-3">
				<Select
					isRequired
					items={companies}
					label="Modern invalid"
					className="max-w-sm"
					isInvalid={true}
					errorMessage="You must fill this to continue"
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>

				<fieldset className="space-y-1">
					<label className="text-xs">
						Classic required{' '}
						<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
					</label>

					<Select
						aria-label="Classic required"
						isRequired
						items={companies}
						isInvalid={true}
						className="max-w-sm"
						errorMessage="You must fill this to continue"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>
				</fieldset>
			</div>

			<Divider />

			<div className="space-y-3">
				<Select
					isRequired
					items={companies}
					label="Modern valid"
					color="success"
					className="max-w-sm"
					description="The content has been validated"
					classNames={{ description: 'text-success' }}
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>

				<fieldset className="space-y-1">
					<label className="text-xs">
						Classic valid{' '}
						<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
					</label>

					<Select
						aria-label="Classic valid"
						isRequired
						items={companies}
						color="success"
						className="max-w-sm"
						description="The content has been validated"
						classNames={{ description: 'text-success' }}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>
				</fieldset>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SelectWithAccessories
 *
 * A component that shows how to use the `startContent` and `endContent` props to control the content of the select component.
 *
 * @example
 * <SelectWithAccessories />
 */
export const SelectWithAccessories = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="selectWithAccessories">
			<div className="space-y-2">
				<h3 className="font-semibold">Accessories</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-6">
				<div className="grid grid-cols-2 gap-10">
					<Select
						items={companies}
						label="Left icon accessory"
						className="max-w-sm"
						startContent={<i className="ri-instagram-line ri-lg" />}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Left icon accessory</label>

						<Select
							aria-label="Left icon accessory"
							items={companies}
							className="max-w-sm"
							startContent={<i className="ri-user-6-fill ri-lg" />}
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-10">
					<Select
						items={companies}
						label="Right icon accessory"
						className="max-w-sm"
						endContent={<i className="ri-shield-check-line ri-lg" />}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Right icon accessory</label>

						<Select
							aria-label="Right icon accessory"
							items={companies}
							className="max-w-sm"
							endContent={<i className="ri-lock-line ri-lg" />}
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-x-10 gap-y-6">
					<Select
						items={companies}
						label="Chip left"
						className="max-w-sm"
						startContent={
							<Chip size="sm" color="primary" className="h-5">
								EUR
							</Chip>
						}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Chip left</label>

						<Select
							aria-label="Chip left"
							items={companies}
							className="max-w-sm"
							startContent={
								<Chip size="sm" color="primary" className="h-5">
									EUR
								</Chip>
							}
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>

					<Select
						items={companies}
						label="Chip right"
						className="max-w-sm"
						endContent={
							<Chip size="sm" color="primary" className="h-5">
								USD
							</Chip>
						}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Chip right</label>

						<Select
							aria-label="Chip right"
							items={companies}
							className="max-w-sm"
							endContent={
								<Chip size="sm" color="primary" className="h-5">
									USD
								</Chip>
							}
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>

				<Divider />

				<div className="grid grid-cols-2 gap-x-10 gap-y-6">
					<Select
						items={companies}
						label="Button accessory"
						className="max-w-sm"
						endContent={
							<Button color="primary" size="sm">
								Send
							</Button>
						}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>

					<fieldset className="space-y-1">
						<label className="text-xs">Button accessory</label>

						<Select
							aria-label="Button accessory"
							items={companies}
							className="max-w-sm"
							endContent={
								<Button color="primary" size="sm">
									Send
								</Button>
							}
							// @ts-ignore
							variant={variant}
						>
							{companies.map((company) => (
								<SelectItem key={company.key}>{company.label}</SelectItem>
							))}
						</Select>
					</fieldset>
				</div>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * HorizontalSelect
 *
 * A horizontal select component.
 *
 * This component shows a select component placed horizontally.
 *
 * @example
 * <HorizontalSelect />
 */
export const HorizontalSelect = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="horizontalSelect">
			<div className="space-y-2">
				<h3 className="font-semibold">Horizontal select</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div>
				<Select
					items={companies}
					label="Horizontal select"
					description="Selects can already be placed horizontally"
					labelPlacement="outside-left"
					classNames={{
						mainWrapper: 'max-w-xs',
						label: 'w-36 pr-6',
					}}
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * MultipleSelection
 *
 * A component that shows how to use the `selectionMode` prop to create a multiple selection select component.
 *
 * @example
 * <MultipleSelection />
 */
export const MultipleSelection = () => {
	const [variant, setVariant] = useState('flat')
	const [values, setValues] = useState<Selection>(
		new Set([
			'openai',
			'google',
			'amazon',
			'tesla',
			'intel',
			'oracle',
			'samsung',
		])
	)

	return (
		<div className="space-y-6" id="multipleSelection">
			<div className="space-y-2">
				<h3 className="font-semibold">Multiple selection</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<div className="space-y-3">
				<Select
					items={companies}
					label="Modern multiselect"
					selectionMode="multiple"
					selectedKeys={values}
					onSelectionChange={setValues}
					description="Select more than one option"
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>

				<fieldset className="space-y-1">
					<label className="text-xs">Classic multiselect</label>

					<Select
						aria-label="Classic multiselect"
						items={companies}
						selectionMode="multiple"
						selectedKeys={values}
						onSelectionChange={setValues}
						description="Select more than one option"
						className="max-w-sm"
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>
				</fieldset>
			</div>

			<Divider />

			<div className="space-y-3">
				<Select
					items={companies}
					label="Modern multiselect with chips"
					selectionMode="multiple"
					selectedKeys={values}
					onSelectionChange={setValues}
					className="max-w-sm"
					renderValue={(values) => (
						<div className="flex gap-x-1 overflow-x-auto">
							{values.map((item) => (
								<Chip color="primary" size="sm" key={item.key}>
									{item.textValue}
								</Chip>
							))}
						</div>
					)}
					// @ts-ignore
					description={`${values.size} companies selected`}
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>

				<fieldset className="space-y-1">
					<label className="text-xs">Classic multiselect with chips</label>

					<Select
						aria-label="Classic multiselect with chips"
						items={companies}
						selectionMode="multiple"
						selectedKeys={values}
						onSelectionChange={setValues}
						className="max-w-sm"
						renderValue={(values) => (
							<div className="flex gap-x-1 overflow-x-auto">
								{values.map((item) => (
									<Chip color="primary" size="sm" key={item.key}>
										{item.textValue}
									</Chip>
								))}
							</div>
						)}
						// @ts-ignore
						description={`${values.size} companies selected`}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>
				</fieldset>
			</div>

			<Divider />

			<div className="space-y-3">
				<Select
					items={companies}
					label="Multi line"
					selectionMode="multiple"
					selectedKeys={values}
					isMultiline={true}
					onSelectionChange={setValues}
					className="max-w-sm"
					renderValue={(values) => (
						<div className="flex flex-wrap gap-1">
							{values.map((item) => (
								<Chip color="primary" size="sm" key={item.key}>
									{item.textValue}
								</Chip>
							))}
						</div>
					)}
					// @ts-ignore
					description={`${values.size} companies selected`}
					// @ts-ignore
					variant={variant}
				>
					{companies.map((company) => (
						<SelectItem key={company.key}>{company.label}</SelectItem>
					))}
				</Select>

				<fieldset className="space-y-1">
					<label className="text-xs">Multi line</label>

					<Select
						aria-label="Multi line"
						items={companies}
						selectionMode="multiple"
						selectedKeys={values}
						isMultiline={true}
						onSelectionChange={setValues}
						className="max-w-sm"
						renderValue={(values) => (
							<div className="flex flex-wrap gap-1 py-2">
								{values.map((item) => (
									<Chip color="primary" size="sm" key={item.key}>
										{item.textValue}
									</Chip>
								))}
							</div>
						)}
						// @ts-ignore
						description={`${values.size} companies selected`}
						// @ts-ignore
						variant={variant}
					>
						{companies.map((company) => (
							<SelectItem key={company.key}>{company.label}</SelectItem>
						))}
					</Select>
				</fieldset>
			</div>
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

const companies = [
	{ key: 'apple', label: 'Apple' },
	{ key: 'openai', label: 'OpenAI' },
	{ key: 'google', label: 'Google' },
	{ key: 'microsoft', label: 'Microsoft' },
	{ key: 'amazon', label: 'Amazon' },
	{ key: 'facebook', label: 'Facebook' },
	{ key: 'tesla', label: 'Tesla' },
	{ key: 'netflix', label: 'Netflix' },
	{ key: 'adobe', label: 'Adobe' },
	{ key: 'ibm', label: 'IBM' },
	{ key: 'samsung', label: 'Samsung' },
	{ key: 'intel', label: 'Intel' },
	{ key: 'oracle', label: 'Oracle' },
	{ key: 'cisco', label: 'Cisco' },
]
