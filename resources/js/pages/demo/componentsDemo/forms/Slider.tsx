import { Slider } from '@nextui-org/react'

/**
 * BasicSlider
 *
 * A basic slider component.
 *
 * This component shows a slider component with a label, min value, max value, step, and default value.
 *
 * @example
 * <BasicSlider />
 */
export const BasicSlider = () => {
	return (
		<div className="space-y-6" id="basicSlider">
			<div className="space-y-2">
				<h3 className="font-semibold">Basic switch</h3>
			</div>

			<Slider
				label="Earned"
				step={0.01}
				maxValue={1}
				minValue={0}
				defaultValue={0.4}
				className="max-w-md"
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SliderSizing
 *
 * A component that shows how to use the `size` prop to control the size of the slider component.
 *
 * This component shows a slider component with a small, medium, and large size.
 *
 * @example
 * <SliderSizing />
 */
export const SliderSizing = () => {
	return (
		<div className="space-y-6" id="sliderSizing">
			<div className="space-y-2">
				<h3 className="font-semibold">Sizing</h3>
			</div>

			<Slider
				size="sm"
				step={0.01}
				maxValue={1}
				minValue={0}
				aria-label="Temperature"
				defaultValue={0.2}
				className="max-w-md"
			/>
			<Slider
				size="md"
				step={0.01}
				maxValue={1}
				minValue={0}
				aria-label="Temperature"
				defaultValue={0.4}
				className="max-w-md"
			/>
			<Slider
				size="lg"
				step={0.01}
				maxValue={1}
				minValue={0}
				aria-label="Temperature"
				defaultValue={0.6}
				className="max-w-md"
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * VerticalSlider
 *
 * A component that shows how to use the `orientation` prop to create a vertical slider.
 *
 * This component shows a vertical slider component with a small, medium and large size.
 *
 * @example
 * <VerticalSlider />
 */
export const VerticalSlider = () => {
	return (
		<div className="space-y-6" id="verticalSlider">
			<div className="space-y-2">
				<h3 className="font-semibold">Vertical</h3>
			</div>

			<div className="flex flex-row  max-w-md h-40 gap-6 w-full">
				<Slider
					size="sm"
					step={0.01}
					maxValue={1}
					minValue={0}
					orientation="vertical"
					aria-label="Temperature"
					defaultValue={0.2}
				/>
				<Slider
					size="md"
					step={0.01}
					maxValue={1}
					minValue={0}
					orientation="vertical"
					aria-label="Temperature"
					defaultValue={0.4}
				/>
				<Slider
					size="lg"
					step={0.01}
					maxValue={1}
					minValue={0}
					orientation="vertical"
					aria-label="Temperature"
					defaultValue={0.6}
				/>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * SliderNodes
 *
 * A component that displays a slider with visible nodes.
 *
 * This component shows a slider with visible nodes at specified intervals. It includes options for different sizes (small, medium, large) and color customization.
 */
export const SliderNodes = () => {
	return (
		<div className="space-y-6" id="sliderNodes">
			<div className="space-y-2">
				<h3 className="font-semibold">Visible nodes</h3>
			</div>

			<Slider
				size="sm"
				step={0.1}
				color="primary"
				label="Temperature"
				showSteps={true}
				maxValue={1}
				minValue={0}
				defaultValue={0.2}
				className="max-w-md"
			/>
			<Slider
				size="md"
				step={0.1}
				color="primary"
				label="Temperature"
				showSteps={true}
				maxValue={1}
				minValue={0}
				defaultValue={0.4}
				className="max-w-md"
			/>
			<Slider
				size="lg"
				step={0.1}
				color="primary"
				label="Temperature"
				showSteps={true}
				maxValue={1}
				minValue={0}
				defaultValue={0.6}
				className="max-w-md"
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

export const SliderMarks = () => {
	return (
		<div className="space-y-6" id="sliderMarks">
			<div className="space-y-2">
				<h3 className="font-semibold">Marks</h3>
			</div>

			<Slider
				label="Select a value"
				color="primary"
				size="sm"
				step={10}
				marks={[
					{
						value: 20,
						label: '20%',
					},
					{
						value: 50,
						label: '50%',
					},
					{
						value: 80,
						label: '80%',
					},
				]}
				defaultValue={20}
				className="max-w-md"
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

export const RangeSlider = () => {
	return (
		<div className="space-y-6" id="rangeSlider">
			<div className="space-y-2">
				<h3 className="font-semibold">Range</h3>
			</div>

			<Slider
				label="Price Range"
				step={50}
				minValue={0}
				maxValue={1000}
				defaultValue={[100, 500]}
				formatOptions={{ style: 'currency', currency: 'USD' }}
				className="max-w-md"
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

export const TooltipSlider = () => {
	return (
		<div className="space-y-6" id="tooltipSlider">
			<div className="space-y-2">
				<h3 className="font-semibold">Tooltip</h3>
			</div>

			<Slider
				label="Select a value"
				showTooltip={true}
				step={0.1}
				formatOptions={{ style: 'percent' }}
				maxValue={1}
				minValue={0}
				marks={[
					{
						value: 0.2,
						label: '20%',
					},
					{
						value: 0.5,
						label: '50%',
					},
					{
						value: 0.8,
						label: '80%',
					},
				]}
				defaultValue={0.2}
				className="max-w-md"
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}
