import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Input,
	Select,
	SelectItem,
	cn,
} from '@nextui-org/react'

export const ComfortableFormLayout = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Comfortable form layout</CardHeader>
				<CardBody>
					<div className="space-y-3">
						<Input
							size="sm"
							label="Username"
							placeholder="maxmasterson"
							startContent={
								<span className="text-gray-400 text-sm dark:text-gray-500">
									@
								</span>
							}
						/>

						<Input size="sm" label="First name" placeholder="Max" />

						<Input size="sm" label="Last name" placeholder="Masterson" />

						<Input size="sm" label="Email" placeholder="user@example.com" />

						<div className="flex justify-end">
							<Button color="primary" className="px-20">
								Submit
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const CompactFormLayout = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Compact form layout</CardHeader>
				<CardBody>
					<div className="space-y-2">
						<fieldset>
							<Input
								size="sm"
								label="Username"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								size="sm"
								label="First name"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								size="sm"
								label="Last name"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								size="sm"
								label="Email"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<div className="pt-2 flex justify-end">
							<Button size="sm" color="primary" className="px-20">
								Submit
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
