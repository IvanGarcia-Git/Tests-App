import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
	Code,
	SharedSelection,
} from '@nextui-org/react'
import { useMemo, useState } from 'react'

export const BasicDropdown = () => {
	return (
		<div className="space-y-6" id="basicDropdown">
			<h3 className="font-semibold">Basic dropdown</h3>

			<Dropdown>
				<DropdownTrigger>
					<Button color="primary">Open Menu</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Static Actions"
					onAction={(key) => alert(key)}
				>
					<DropdownItem key="new">New file</DropdownItem>
					<DropdownItem key="copy">Copy link</DropdownItem>
					<DropdownItem key="edit">Edit file</DropdownItem>
					<DropdownItem key="delete" className="text-danger" color="danger">
						Delete file
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	)
}

export const SemanticDropdown = () => {
	return (
		<div className="space-y-6" id="semanticDropdown">
			<h3 className="font-semibold">Semantic colors</h3>

			<Dropdown>
				<DropdownTrigger>
					<Button color="primary">Open Menu</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Static Actions"
					color="primary"
					variant="flat"
				>
					<DropdownItem key="new">New file</DropdownItem>
					<DropdownItem key="copy">Copy link</DropdownItem>
					<DropdownItem key="edit">Edit file</DropdownItem>
					<DropdownItem key="delete" className="text-danger" color="danger">
						Delete file
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>

			<p className="text-xs">
				You can use the <Code>variant</Code> in the <Code>DropdownMenu</Code>{' '}
				component to change the hover style of the dropdown items.
			</p>
		</div>
	)
}

export const SingleSelectionDropdown = () => {
	const [selectedKeys, setSelectedKeys] = useState(new Set(['text']))

	const selectedValue = useMemo(
		() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
		[selectedKeys]
	)

	const handleSelectionChange = (keys: SharedSelection) => {
		setSelectedKeys(new Set([keys.anchorKey as string]))
	}

	return (
		<div className="space-y-6" id="singleSelectionDropdown">
			<h3 className="font-semibold">Selectable dropdown</h3>

			<Dropdown>
				<DropdownTrigger>
					<Button color="primary">{selectedValue}</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Static Actions"
					disallowEmptySelection
					selectionMode="multiple"
					selectedKeys={selectedKeys}
					onSelectionChange={handleSelectionChange}
				>
					<DropdownItem key="text">Text</DropdownItem>
					<DropdownItem key="number">Number</DropdownItem>
					<DropdownItem key="date">Date</DropdownItem>
					<DropdownItem key="single_date">Single Date</DropdownItem>
					<DropdownItem key="iteration">Iteration</DropdownItem>
				</DropdownMenu>
			</Dropdown>

			<p className="text-xs">
				You can use the <Code>variant</Code> in the <Code>DropdownMenu</Code>{' '}
				component to change the hover style of the dropdown items.
			</p>
		</div>
	)
}

export const SectionsDropdown = () => {
	return (
		<div className="space-y-6" id="groupedItems">
			<h3 className="font-semibold">Grouped items</h3>

			<Dropdown>
				<DropdownTrigger>
					<Button color="primary">Open Menu</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Static Actions"
					onAction={(key) => alert(key)}
				>
					<DropdownSection title="Actions" showDivider>
						<DropdownItem key="new">New file</DropdownItem>
						<DropdownItem key="copy">Copy link</DropdownItem>
						<DropdownItem key="edit">Edit file</DropdownItem>
					</DropdownSection>

					<DropdownSection title="Danger zone">
						<DropdownItem key="delete" className="text-danger" color="danger">
							Delete file
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>

			<p className="text-xs">
				You can use the <Code>DropdownSection</Code> component to group dropdown
				items.
			</p>
		</div>
	)
}

export const OrientatedMenuDropdown = () => {
	return (
		<div className="space-y-6" id="orientated">
			<h3 className="font-semibold">Orientated dropdown</h3>

			<div className="flex justify-between gap-10">
				<Dropdown placement="bottom-start">
					<DropdownTrigger>
						<Button color="primary">Left aligned</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Static Actions"
						onAction={(key) => alert(key)}
					>
						<DropdownItem key="new">New file</DropdownItem>
						<DropdownItem key="copy">Copy link</DropdownItem>
						<DropdownItem key="edit">Edit file</DropdownItem>
						<DropdownItem key="delete" className="text-danger" color="danger">
							Delete file
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>

				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Button color="primary">Right aligned</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Static Actions"
						onAction={(key) => alert(key)}
					>
						<DropdownItem key="new">New file</DropdownItem>
						<DropdownItem key="copy">Copy link</DropdownItem>
						<DropdownItem key="edit">Edit file</DropdownItem>
						<DropdownItem key="delete" className="text-danger" color="danger">
							Delete file
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	)
}

export const DescriptionsDropdown = () => {
	return (
		<div className="space-y-6" id="descriptions">
			<h3 className="font-semibold">Menu items with descriptions</h3>

			<Dropdown>
				<DropdownTrigger>
					<Button color="primary">Open Menu</Button>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Static Actions"
					onAction={(key) => alert(key)}
				>
					<DropdownItem key="new" description="Create a new file">
						New file
					</DropdownItem>
					<DropdownItem key="copy" description="Copy the file link">
						Copy link
					</DropdownItem>
					<DropdownItem key="edit" description="Allows you to edit the file">
						Edit file
					</DropdownItem>
					<DropdownItem
						key="delete"
						className="text-danger"
						color="danger"
						description="Permanently delete the file"
					>
						Delete file
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>

			<p className="text-xs">
				The menu items can have a description to provide additional context.
			</p>
		</div>
	)
}
