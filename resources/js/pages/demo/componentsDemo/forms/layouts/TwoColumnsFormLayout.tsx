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

export const TwoColumnsFormLayout = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>2 columns form</CardHeader>
				<CardBody>
					<div
						className={cn(
							'space-y-6 sm:space-y-5',
							'[&_.grid]:gap-4 [&_.grid]:sm:grid-cols-2'
						)}
					>
						<div className="grid">
							<Input label="Name" description="Please enter your full name" />

							<Input label="Lastname" />
						</div>

						<div className="grid">
							<Input
								label="Email address"
								startContent={
									<i className="ri-mail-line ri-lg text-gray-400 dark:text-gray-500" />
								}
							/>

							<Input
								label="Website"
								startContent={
									<span className="text-gray-400 text-sm dark:text-gray-500">
										www.
									</span>
								}
							/>
						</div>

						<div className="grid">
							<Input
								label="Pin code"
								description="Please enter your pin code"
							/>

							<div className="flex items-end pb-6">
								<Button color="primary" className="px-10">
									Confirm
								</Button>
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
