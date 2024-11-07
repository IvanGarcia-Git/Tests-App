import { Spinner, Skeleton, CircularProgress, Divider } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export const BasicSpinner = () => {
	return (
		<div className="space-y-6" id="basicSpinner">
			<h3 className="font-semibold">Spinner</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Small</span>
					<Spinner size="sm" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">
						Medium <small>(default)</small>
					</span>
					<Spinner />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Large</span>
					<Spinner size="lg" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">With label</span>
					<Spinner label="Loading..." />
				</div>
			</div>
		</div>
	)
}

export const BasicSkeleton = () => {
	return (
		<div className="space-y-6" id="basicSkeleton">
			<h3 className="font-semibold">Skeleton</h3>

			<div className="w-52 space-y-5">
				<Skeleton className="rounded-lg">
					<div className="h-24 rounded-lg bg-default-500"></div>
				</Skeleton>
				<div className="space-y-3">
					<Skeleton className="w-3/5 rounded-lg">
						<div className="h-3 w-3/5 rounded-lg bg-default-500"></div>
					</Skeleton>
					<Skeleton className="w-4/5 rounded-lg">
						<div className="h-3 w-4/5 rounded-lg bg-default-500"></div>
					</Skeleton>
					<Skeleton className="w-2/5 rounded-lg">
						<div className="h-3 w-2/5 rounded-lg bg-default-500"></div>
					</Skeleton>
				</div>
			</div>
		</div>
	)
}

export const Progress = () => {
	return (
		<div className="space-y-6" id="circularProgress">
			<h3 className="font-semibold">Circular progress</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Small</span>
					<CircularProgress aria-label="Loading..." size="sm" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">
						Medium <small>(default)</small>
					</span>
					<CircularProgress aria-label="Loading..." />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Large</span>
					<CircularProgress aria-label="Loading..." size="lg" />
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">With label</span>
					<CircularProgress aria-label="Loading..." label="Loading..." />
				</div>
			</div>
		</div>
	)
}

export const ProgressWithValue = () => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setValue((v) => (v >= 100 ? 0 : v + 10))
		}, 500)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="space-y-6" id="circularProgressWithValue">
			<h3 className="font-semibold">Progress with value</h3>

			<div className="space-y-4 max-w-sm">
				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Progresive</span>
					<CircularProgress
						aria-label="Loading..."
						size="lg"
						value={value}
						color="primary"
						showValueLabel={true}
					/>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Custom format</span>
					<CircularProgress
						label="Speed"
						size="lg"
						value={70}
						color="success"
						formatOptions={{ style: 'unit', unit: 'kilometer' }}
						showValueLabel={true}
					/>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<span className="text-sm font-medium">Custom style</span>
					<CircularProgress
						classNames={{
							svg: 'w-36 h-36 drop-shadow-md',
							indicator: 'stroke-warning stroke-2',
							track: 'stroke-warning/10 stroke-1',
							value: 'text-3xl font-semibold text-warning',
						}}
						value={70}
						strokeWidth={4}
						showValueLabel={true}
					/>
				</div>
			</div>
		</div>
	)
}
