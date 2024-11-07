import { useState } from 'react'
import {
	Checkbox,
	CheckboxGroup,
	RadioGroup,
	Radio,
	Chip,
	cn,
	Divider,
	User,
} from '@nextui-org/react'

export const BasicRadio = () => {
	return (
		<div className="space-y-6" id="basicRadio">
			<h3 className="font-semibold">Basic radio</h3>

			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<RadioGroup>
						<Radio value="1">Option</Radio>
					</RadioGroup>
					<span className="text-sm font-medium">Basic</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<RadioGroup defaultValue="1">
						<Radio value="1">Option</Radio>
					</RadioGroup>
					<span className="text-sm font-medium">Checked</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<RadioGroup isDisabled>
						<Radio value="1">Option</Radio>
					</RadioGroup>
					<span className="text-sm font-medium">Disabled</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<RadioGroup isDisabled defaultValue="1">
						<Radio value="1">Option</Radio>
					</RadioGroup>
					<span className="text-sm font-medium">Disabled checked</span>
				</div>
			</div>
		</div>
	)
}

export const RadioSizing = () => {
	return (
		<div className="space-y-6" id="radioSizing">
			<h3 className="font-semibold">Sizing</h3>

			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<RadioGroup defaultValue="1" size="sm" orientation="horizontal">
						<Radio value="1">Option</Radio>
						<Radio value="2">Option</Radio>
						<Radio value="3">Option</Radio>
					</RadioGroup>

					<span className="text-sm font-medium">Small</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<RadioGroup defaultValue="1" orientation="horizontal">
						<Radio value="1">Option</Radio>
						<Radio value="2">Option</Radio>
						<Radio value="3">Option</Radio>
					</RadioGroup>

					<span className="text-sm font-medium">Basic</span>
				</div>

				<Divider />

				<div className="flex justify-between items-center">
					<RadioGroup defaultValue="1" size="lg" orientation="horizontal">
						<Radio value="1">Option</Radio>
						<Radio value="2">Option</Radio>
						<Radio value="3">Option</Radio>
					</RadioGroup>

					<span className="text-sm font-medium">Large</span>
				</div>
			</div>
		</div>
	)
}

export const RadioValidationStyles = () => {
	const [selected, setSelected] = useState('london')

	return (
		<div className="space-y-6" id="validationStyles">
			<h3 className="font-semibold">Validation styles</h3>

			<RadioGroup
				label="Select your favorite city"
				value={selected}
				isInvalid={true}
				onValueChange={setSelected}
			>
				<Radio value="buenos-aires">Buenos Aires</Radio>
				<Radio value="sydney">Sydney</Radio>
				<Radio value="san-francisco">San Francisco</Radio>
				<Radio value="london">London</Radio>
				<Radio value="tokyo">Tokyo</Radio>
			</RadioGroup>
		</div>
	)
}

const CustomRd = ({
	user,
	statusColor,
	value,
}: {
	user: any
	statusColor: string
	value: string
}) => (
	<Radio
		aria-label={user.name}
		classNames={{
			base: cn(
				'inline-flex max-w-md w-full bg-content1 m-0',
				'hover:bg-content2 items-center justify-start',
				'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
				'data-[selected=true]:border-primary'
			),
		}}
		value={value}
		className="[&>div]:flex-1"
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
	</Radio>
)

export const CustomRadioGroup = () => {
	const [groupSelected, setGroupSelected] = useState('johndoe')

	return (
		<div className="space-y-6" id="customRadioGroup">
			<h3 className="font-semibold">Custom checkbox group</h3>

			<div className="flex flex-col gap-1 w-full">
				<RadioGroup
					label="Select employees"
					value={groupSelected}
					// @ts-ignore
					onValueChange={setGroupSelected}
					classNames={{
						base: 'w-full',
					}}
				>
					<CustomRd
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
					<CustomRd
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
					<CustomRd
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
				</RadioGroup>

				{/* <pre>{JSON.stringify(groupSelected)}</pre> */}
			</div>
		</div>
	)
}
