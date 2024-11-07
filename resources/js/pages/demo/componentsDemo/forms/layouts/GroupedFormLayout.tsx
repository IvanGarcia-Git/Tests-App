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

export const GroupedFormLayout = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>A single form separated by groups</CardHeader>
				<CardBody>
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">
						<section>
							<div className="space-y-2">
								<div className="text-sm font-bold">Your profile</div>

								<div className="grid grid-cols-2">
									<Input
										isRequired
										label="First name"
										variant="bordered"
										radius="none"
									/>
									<Input
										isRequired
										label="Last name"
										variant="bordered"
										radius="none"
									/>
									<Input
										size="sm"
										label="Email"
										variant="bordered"
										radius="none"
										className="col-span-2"
									/>

									<Input
										size="sm"
										label="Phone number"
										variant="bordered"
										radius="none"
									/>
									<Input
										size="sm"
										label="Job title"
										variant="bordered"
										radius="none"
									/>
								</div>
							</div>

							<div className="space-y-2 mt-6">
								<div className="text-sm font-bold">Basic information</div>

								<div className="grid grid-cols-2">
									<Input
										size="lg"
										isRequired
										radius="none"
										variant="faded"
										label="Company name:"
										className="col-span-2"
									/>

									<Input
										size="sm"
										label="Street address:"
										radius="none"
										variant="faded"
									/>
									<Input
										size="sm"
										label="City:"
										radius="none"
										variant="faded"
									/>

									<Input
										size="sm"
										label="Zip code:"
										radius="none"
										variant="faded"
									/>
									<Input
										size="sm"
										label="Tax ID number:"
										radius="none"
										variant="faded"
									/>
								</div>
							</div>

							<div className="mt-4">
								<Button fullWidth color="primary" radius="none">
									Submit
								</Button>
							</div>
						</section>

						<section>
							<div className="space-y-2">
								<div className="text-sm font-bold">Your profile</div>

								<div className="grid grid-cols-2 gap-2">
									<Input isRequired label="First name" />
									<Input isRequired label="Last name" />
									<Input size="sm" label="Email" className="col-span-2" />

									<Input size="sm" label="Phone number" />
									<Input size="sm" label="Job title" />
								</div>
							</div>

							<div className="space-y-2 mt-4">
								<div className="text-sm font-bold">Basic information</div>

								<div className="grid grid-cols-2 gap-2">
									<Input
										size="lg"
										isRequired
										variant="bordered"
										label="Company name:"
										className="col-span-2"
									/>

									<Input size="sm" label="Street address:" variant="bordered" />
									<Input size="sm" label="City:" variant="bordered" />

									<Input size="sm" label="Zip code:" variant="bordered" />
									<Input size="sm" label="Tax ID number:" variant="bordered" />
								</div>
							</div>

							<div className="mt-3">
								<Button fullWidth color="primary">
									Submit
								</Button>
							</div>
						</section>

						<div className="text-gray-400 text-sm space-y-4 lg:col-span-2 xl:col-span-1 dark:text-gray-500">
							<p>
								The grouped form layout organizes a single form into distinct
								sections, each dedicated to a specific type of information. This
								approach enhances clarity by grouping related fields together,
								making it easier for users to navigate and complete the form
								efficiently.
							</p>
							<p>
								Additionally, varying input field sizes can be used to highlight
								the most important information, drawing attention to key areas
								and improving the overall user experience. This design strategy
								ensures that users can focus on critical details while
								maintaining a well-structured and visually appealing form.
							</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
