import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Input,
	CheckboxGroup,
	Checkbox,
	Textarea,
	cn,
} from '@nextui-org/react'

export const ClassicFormLayout = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Classic vertical form</CardHeader>
				<CardBody>
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-4">
							<fieldset>
								<Input
									label="Full name"
									labelPlacement="outside"
									classNames={{
										label:
											'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
									}}
								/>
							</fieldset>

							<fieldset>
								<Input
									label="Email"
									labelPlacement="outside"
									classNames={{
										label:
											'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
									}}
								/>
							</fieldset>

							<fieldset>
								<Input
									label="Subject"
									labelPlacement="outside"
									classNames={{
										label:
											'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
									}}
								/>
							</fieldset>

							<fieldset>
								<Textarea
									label="Message"
									labelPlacement="outside"
									classNames={{ label: 'left-1' }}
								/>
							</fieldset>

							<fieldset className="space-y-2">
								<CheckboxGroup
									size="sm"
									label="Services"
									classNames={{ wrapper: 'grid grid-cols-2 gap-4' }}
								>
									<Checkbox>Website design</Checkbox>
									<Checkbox>Content creation</Checkbox>
									<Checkbox>UX design</Checkbox>
									<Checkbox>Strategy & consulting</Checkbox>
									<Checkbox>User research</Checkbox>
									<Checkbox>Other</Checkbox>
								</CheckboxGroup>
							</fieldset>

							<div className="pt-3">
								<Button color="primary" className="px-20">
									Send message
								</Button>
							</div>
						</div>

						<div className="text-gray-400 text-sm xl:pl-28 dark:text-gray-500">
							The classic vertical form layout, with labels placed outside the
							input fields, combines elegant design with practicality and
							intuitive use. This arrangement ensures a clean and organized
							appearance, making it easy for users to read labels and input data
							accurately. The clear separation between labels and fields
							enhances usability, guiding users smoothly through the form. Its
							simplicity and clarity make the classic vertical layout a timeless
							choice for creating efficient, user-friendly forms.
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
