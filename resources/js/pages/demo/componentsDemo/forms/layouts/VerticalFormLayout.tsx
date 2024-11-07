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

export const VerticalFormLayout = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Basic vertical</CardHeader>
				<CardBody>
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-3">
							<Input
								isRequired
								label="Name"
								description="Please enter your full name"
							/>
							<Input
								label="Email"
								description="Please enter your email address"
							/>
							<Input
								label="Password"
								type="password"
								description="Please enter your email address"
							/>

							<div className="flex justify-between items-end">
								<fieldset className="space-y-2">
									<RadioGroup
										orientation="horizontal"
										size="sm"
										label="User type"
										classNames={{ label: 'text-sm', wrapper: 'flex gap-x-5' }}
									>
										<Radio
											value="administrator"
											classNames={{ labelWrapper: 'ml-2' }}
										>
											Administrator
										</Radio>
										<Radio value="user" classNames={{ labelWrapper: 'ml-2' }}>
											User
										</Radio>
									</RadioGroup>
								</fieldset>

								<Button color="primary" className="px-12">
									Submit
								</Button>
							</div>
						</div>

						<div className="text-gray-400 text-sm xl:pl-28 dark:text-gray-500">
							The vertical form layout combines aesthetic design with practical
							functionality, offering a clean and organized interface. The
							beauty of this layout lies in its simplicity and elegance, with
							labels placed inside the input area. When a user focuses on an
							input field, the labels gracefully animate to a new position,
							making space for text entry. This intuitive interaction enhances
							usability by clearly guiding users, reducing clutter, and creating
							a smooth, engaging experience.
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
