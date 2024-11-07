import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Input,
	Radio,
	RadioGroup,
	cn,
} from '@nextui-org/react'

export const HorizontalFormLayout = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Basic horizontal</CardHeader>
				<CardBody>
					<div className="space-y-5">
						<Input
							isRequired
							label="Name"
							labelPlacement="outside-left"
							classNames={{ mainWrapper: 'w-full', label: 'w-1/4' }}
						/>

						<Input
							isRequired
							label="Lastname"
							labelPlacement="outside-left"
							classNames={{
								mainWrapper: 'w-full',
								label: 'w-1/4',
							}}
						/>

						<Input
							isRequired
							label="Job title"
							labelPlacement="outside-left"
							classNames={{
								mainWrapper: 'w-full',
								label: 'w-1/4',
							}}
						/>

						<div className="flex justify-end">
							<Button color="primary" className="px-12">
								Submit
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
