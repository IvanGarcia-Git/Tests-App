import { Progress, Divider } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export const BasicProgress = () => {
	return (
		<div className="space-y-6" id="basicProgress">
			<h3 className="font-semibold">Basic progress</h3>

			<Progress aria-label="Loading..." value={60} className="max-w-md" />

			<Divider />

			<h3 className="font-semibold text-sm">Sizes</h3>
			<Progress size="sm" aria-label="Loading..." value={30} />
			<Progress size="md" aria-label="Loading..." value={40} />
			<Progress size="lg" aria-label="Loading..." value={50} />

			<Divider />

			<h3 className="font-semibold text-sm">Colors</h3>
			<Progress color="default" aria-label="Loading..." value={70} />
			<Progress color="primary" aria-label="Loading..." value={70} />
			<Progress color="secondary" aria-label="Loading..." value={70} />
			<Progress color="success" aria-label="Loading..." value={70} />
			<Progress color="warning" aria-label="Loading..." value={70} />
			<Progress color="danger" aria-label="Loading..." value={70} />

			<p className="text-xs">
				Track progress effortlessly with our Basic Progress component. Offering
				multiple sizes and vibrant color options, it delivers a clean and
				dynamic way to visualize completion. Perfect for keeping users engaged
				as they move through key actions.
			</p>
		</div>
	)
}

export const IndeterminateProgress = () => {
	return (
		<div className="space-y-6" id="indeterminateProgress">
			<h3 className="font-semibold">Indeterminate</h3>

			<Progress
				size="sm"
				isIndeterminate
				aria-label="Loading..."
				className="max-w-md"
			/>

			<p className="text-xs">
				Keep users in motion with our Indeterminate Progress component. Perfect
				for tasks without a set end time, its smooth, continuous animation
				offers a seamless visual cue that something is happening behind the
				scenes.
			</p>
		</div>
	)
}

export const ProgressWithLabelAndValues = () => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((v) => (v >= 100 ? 0 : v + 10))
		}, 500)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="space-y-6" id="labelAndValues">
			<h3 className="font-semibold">Labels and values</h3>

			<h3 className="font-semibold text-sm">Label</h3>
			<Progress label="Loading..." value={55} className="max-w-md" />

			<Divider />

			<h3 className="font-semibold text-sm">Values</h3>
			<Progress
				aria-label="Downloading..."
				size="md"
				value={value}
				color="success"
				showValueLabel={true}
				className="max-w-md"
			/>

			<Progress
				label="Monthly expenses"
				size="sm"
				value={4000}
				maxValue={10000}
				color="warning"
				formatOptions={{ style: 'currency', currency: 'USD' }}
				showValueLabel={true}
				className="max-w-md"
			/>

			<Divider />

			<h3 className="font-semibold text-sm">Custom style</h3>
			<Progress
				size="sm"
				radius="sm"
				classNames={{
					base: 'max-w-md',
					track: 'drop-shadow-md border border-default',
					indicator: 'bg-gradient-to-r from-pink-500 to-yellow-500',
					label: 'tracking-wider font-medium text-default-600',
					value: 'text-foreground/60',
				}}
				label="Lose weight"
				value={65}
				showValueLabel={true}
			/>

			<p className="text-xs">
				Dynamic, engaging, and informative — our Progress with Labels and Values
				component gives real-time updates on task completion. Customize labels,
				track progress with value indicators, and even add personalized styles
				to keep users informed every step of the way.
			</p>
		</div>
	)
}
