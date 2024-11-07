import { useState } from 'react'
import {
	Checkbox,
	CheckboxGroup,
	Chip,
	cn,
	Divider,
	User,
} from '@nextui-org/react'

export const BasicCheckbox = () => {
	return (
		<div className="space-y-6" id="basicCheckbox">
			<h3 className="font-semibold">Basic checkbox</h3>

			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<Checkbox>Option</Checkbox>
					<span className="text-sm font-medium">Basic</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<Checkbox defaultSelected>Option</Checkbox>
					<span className="text-sm font-medium">Checked</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<Checkbox isDisabled>Option</Checkbox>
					<span className="text-sm font-medium">Disabled</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<Checkbox isDisabled defaultSelected>
						Option
					</Checkbox>
					<span className="text-sm font-medium">Disabled checked</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<Checkbox lineThrough>Option</Checkbox>
					<span className="text-sm font-medium">Line through</span>
				</div>
			</div>
		</div>
	)
}

export const CheckboxSizing = () => {
	return (
		<div className="space-y-6" id="checkboxSizing">
			<h3 className="font-semibold">Sizing</h3>

			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<Checkbox size="sm">Option</Checkbox>
					<span className="text-sm font-medium">Small</span>
				</div>

				<Divider />
				<div className="flex justify-between items-center">
					<Checkbox>Option</Checkbox>
					<span className="text-sm font-medium">Basic</span>
				</div>

				<Divider />
				<div className="flex justify-between items-center">
					<Checkbox size="lg">Option</Checkbox>
					<span className="text-sm font-medium">Large</span>
				</div>
			</div>
		</div>
	)
}

export const CheckboxRounded = () => {
	return (
		<div className="space-y-6" id="checkboxRounded">
			<h3 className="font-semibold">Border radius</h3>

			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<Checkbox defaultSelected radius="full">
						Option
					</Checkbox>
					<span className="text-sm font-medium">Rounded</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<Checkbox defaultSelected radius="lg">
						Option
					</Checkbox>
					<span className="text-sm font-medium">Large</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<Checkbox defaultSelected radius="sm">
						Option
					</Checkbox>
					<span className="text-sm font-medium">Small</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<Checkbox defaultSelected radius="none">
						Option
					</Checkbox>
					<span className="text-sm font-medium">Sharp</span>
				</div>
			</div>
		</div>
	)
}

export const GroupCheckbox = () => {
	return (
		<div className="space-y-6" id="checkboxGroup">
			<h3 className="font-semibold">Checkbox group</h3>

			<CheckboxGroup
				label="Horizontal"
				orientation="horizontal"
				defaultValue={['buenos-aires']}
			>
				<Checkbox value="buenos-aires">Buenos Aires</Checkbox>
				<Checkbox value="sydney">Sydney</Checkbox>
				<Checkbox value="san-francisco">San Francisco</Checkbox>
			</CheckboxGroup>

			<CheckboxGroup label="Vertical" defaultValue={['buenos-aires', 'london']}>
				<Checkbox value="buenos-aires">Buenos Aires</Checkbox>
				<Checkbox value="sydney">Sydney</Checkbox>
				<Checkbox value="san-francisco">San Francisco</Checkbox>
				<Checkbox value="london">London</Checkbox>
				<Checkbox value="tokyo">Tokyo</Checkbox>
			</CheckboxGroup>
		</div>
	)
}

export const CheckboxValidationStyles = () => {
	return (
		<div className="space-y-6" id="validationStyles">
			<h3 className="font-semibold">Validation styles</h3>

			<div className="flex flex-col gap-3">
				<Checkbox isRequired isInvalid={true} color="danger">
					Required
				</Checkbox>
			</div>

			<CheckboxGroup
				isRequired
				label="Horizontal"
				orientation="horizontal"
				defaultValue={['buenos-aires']}
				isInvalid={true}
				color="danger"
			>
				<Checkbox value="buenos-aires">Buenos Aires</Checkbox>
				<Checkbox value="sydney">Sydney</Checkbox>
				<Checkbox value="san-francisco">San Francisco</Checkbox>
			</CheckboxGroup>
		</div>
	)
}

export const CustomCheckbox = () => {
	const [isSelected, setIsSelected] = useState(false)

	const user = {
		name: 'John Doe',
		avatar: 'https://i.pravatar.cc/300?img=14',
		username: 'johndoe',
		url: 'https://twitter.com/johndoe',
		role: 'Developer',
		status: 'Active',
	}

	return (
		<div className="space-y-6" id="customCheckbox">
			<h3 className="font-semibold">Custom checkbox</h3>

			<Checkbox
				aria-label={user.name}
				classNames={{
					base: cn(
						'inline-flex w-full max-w-md bg-content1',
						'hover:bg-content2 items-center justify-start',
						'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
						'data-[selected=true]:border-primary'
					),
					label: 'w-full',
				}}
				isSelected={isSelected}
				onValueChange={setIsSelected}
			>
				<div className="w-full flex justify-between gap-2">
					<User
						avatarProps={{ size: 'md', src: user.avatar }}
						description={
							<a href={user.url} target="_blank" rel="noreferrer">
								@{user.username}
							</a>
						}
						name={user.name}
					/>
					<div className="flex flex-col items-end gap-1">
						<span className="text-tiny text-default-500">{user.role}</span>
						<Chip color="success" size="sm" variant="flat">
							{user.status}
						</Chip>
					</div>
				</div>
			</Checkbox>
		</div>
	)
}

const CustomChk = ({
	user,
	statusColor,
	value,
}: {
	user: any
	statusColor: string
	value: string
}) => (
	<Checkbox
		aria-label={user.name}
		classNames={{
			base: cn(
				'inline-flex max-w-md w-full bg-content1 m-0',
				'hover:bg-content2 items-center justify-start',
				'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
				'data-[selected=true]:border-primary'
			),
			label: 'w-full',
		}}
		value={value}
	>
		<div className="w-full flex justify-between gap-2">
			<User
				avatarProps={{ size: 'md', src: user.avatar }}
				description={
					<a href={user.url} target="_blank" rel="noreferrer">
						@{user.username}
					</a>
				}
				name={user.name}
			/>
			<div className="flex flex-col items-end gap-1">
				<span className="text-tiny text-default-500">{user.role}</span>
				{/* @ts-ignore */}
				<Chip color={statusColor} size="sm" variant="flat">
					{user.status}
				</Chip>
			</div>
		</div>
	</Checkbox>
)

export const CustomCheckboxGroup = () => {
	const [groupSelected, setGroupSelected] = useState([])

	return (
		<div className="space-y-6" id="customCheckboxGroup">
			<h3 className="font-semibold">Custom checkbox group</h3>

			<div className="flex flex-col gap-1 w-full">
				<CheckboxGroup
					label="Select employees"
					value={groupSelected}
					// @ts-ignore
					onChange={setGroupSelected}
					classNames={{
						base: 'w-full',
					}}
				>
					<CustomChk
						value="johndoe"
						user={{
							name: 'John Doe',
							avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026707d',
							username: 'johndoe',
							url: '#',
							role: 'Product Designer',
							status: 'Vacation',
						}}
						statusColor="warning"
					/>
					<CustomChk
						value="zoeylang"
						user={{
							name: 'Zoey Lang',
							avatar: 'https://i.pravatar.cc/300?u=a042581f4e29026704d',
							username: 'zoeylang',
							url: '#',
							role: 'Technical Writer',
							status: 'Out of office',
						}}
						statusColor="danger"
					/>
					<CustomChk
						value="william"
						user={{
							name: 'William Howard',
							avatar: 'https://i.pravatar.cc/300?u=a048581f4e29026701d',
							username: 'william',
							url: '#',
							role: 'Sales Manager',
							status: 'Active',
						}}
						statusColor="secondary"
					/>
				</CheckboxGroup>
			</div>
		</div>
	)
}
