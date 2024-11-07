import {
	Code,
	Listbox,
	ListboxItem,
	ListboxSection,
	type Selection,
} from '@nextui-org/react'
import { useState } from 'react'

export const BasicListbox = () => {
	return (
		<div className="space-y-6" id="basicListbox">
			<h3 className="font-semibold">Basic list box</h3>

			<div className="w-52">
				<Listbox
					aria-label="Actions"
					onAction={(key) => alert(key)}
					disabledKeys={['disabled']}
				>
					<ListboxItem key="new">New file</ListboxItem>
					<ListboxItem key="copy">Copy link</ListboxItem>
					<ListboxItem key="edit">Edit file</ListboxItem>
					<ListboxItem key="disabled">Disabled item</ListboxItem>
					<ListboxItem key="delete" className="text-danger" color="danger">
						Delete file
					</ListboxItem>
				</Listbox>
			</div>
		</div>
	)
}

export const SemanticListbox = () => {
	return (
		<div className="space-y-6" id="semanticListbox">
			<h3 className="font-semibold">Semantic colors and variations</h3>

			<div className="w-52">
				<Listbox
					aria-label="Actions"
					onAction={(key) => alert(key)}
					disabledKeys={['disabled']}
					color="primary"
				>
					<ListboxItem key="primary" color="primary" className="text-primary">
						Primary
					</ListboxItem>
					<ListboxItem
						key="secondary"
						color="secondary"
						className="text-secondary"
					>
						Secondary
					</ListboxItem>
					<ListboxItem key="success" color="success" className="text-success">
						Success
					</ListboxItem>
					<ListboxItem key="warning" color="warning" className="text-warning">
						Warning
					</ListboxItem>
					<ListboxItem key="danger" color="danger" className="text-danger">
						Danger
					</ListboxItem>
				</Listbox>
			</div>

			<p className="text-xs">
				You can use the <Code>variant</Code> in the <Code>Listbox</Code>{' '}
				component to change the <Code>hover</Code> style of the listbox items.
			</p>
		</div>
	)
}

export const SelectableListbox = () => {
	const [selectedKey, setSelectedKey] = useState<Selection>(new Set(['number']))
	const [selectedKeys, setSelectedKeys] = useState<Selection>(
		new Set(['number', 'date'])
	)

	return (
		<div className="space-y-6" id="selectableListbox">
			<h3 className="font-semibold">Selection</h3>

			<div className="flex gap-10">
				<div className="w-52">
					<div className="text-sm font-bold">Single selection</div>
					<Listbox
						aria-label="Actions"
						disallowEmptySelection
						selectionMode="single"
						selectedKeys={selectedKey}
						onSelectionChange={(key: Selection) => setSelectedKey(key)}
					>
						<ListboxItem key="text">Text</ListboxItem>
						<ListboxItem key="number">Number</ListboxItem>
						<ListboxItem key="date">Date</ListboxItem>
						<ListboxItem key="single_date">Single Date</ListboxItem>
						<ListboxItem key="iteration">Iteration</ListboxItem>
					</Listbox>
				</div>

				<div className="w-52">
					<div className="text-sm font-bold">Multiple selection</div>
					<Listbox
						aria-label="Actions"
						disallowEmptySelection
						disabledKeys={['disabled']}
						selectionMode="multiple"
						selectedKeys={selectedKeys}
						onSelectionChange={(keys: Selection) => setSelectedKeys(keys)}
					>
						<ListboxItem key="text">Text</ListboxItem>
						<ListboxItem key="number">Number</ListboxItem>
						<ListboxItem key="date">Date</ListboxItem>
						<ListboxItem key="single_date">Single Date</ListboxItem>
						<ListboxItem key="iteration">Iteration</ListboxItem>
					</Listbox>
				</div>
			</div>
		</div>
	)
}

export const IconsAndDescriptionsListbox = () => {
	return (
		<div className="space-y-6" id="iconsAndDescriptionsListbox">
			<h3 className="font-semibold">With icons and descriptions</h3>

			<div className="w-60">
				<Listbox aria-label="Actions" disabledKeys={['disabled']}>
					<ListboxItem
						key="new"
						startContent={<i className="ri-file-2-fill" />}
						endContent={<i className="ri-arrow-right-s-line" />}
						description="Create a new file"
					>
						New file
					</ListboxItem>
					<ListboxItem
						key="copy"
						startContent={<i className="ri-file-copy-fill" />}
						endContent={<i className="ri-arrow-right-s-line" />}
						description="Copy the file link"
					>
						Copy link
					</ListboxItem>
					<ListboxItem
						key="edit"
						startContent={<i className="ri-edit-fill" />}
						endContent={<i className="ri-arrow-right-s-line" />}
						description="Allows you to edit the file"
					>
						Edit file
					</ListboxItem>

					<ListboxItem
						key="delete"
						className="text-danger"
						color="danger"
						startContent={<i className="ri-delete-bin-2-fill" />}
						endContent={<i className="ri-arrow-right-s-line" />}
						description="Permanently delete the file"
					>
						Delete file
					</ListboxItem>
				</Listbox>
			</div>
		</div>
	)
}

export const SectionsListbox = () => {
	return (
		<div className="space-y-6" id="groupedListbox">
			<h3 className="font-semibold">Grouped items</h3>

			<div className="w-52">
				<Listbox aria-label="Actions" disabledKeys={['disabled']}>
					<ListboxSection title="Actions" showDivider>
						<ListboxItem key="new">New file</ListboxItem>
						<ListboxItem key="copy">Copy link</ListboxItem>
						<ListboxItem key="edit">Edit file</ListboxItem>
					</ListboxSection>

					<ListboxSection title="Danger zone">
						<ListboxItem key="delete" className="text-danger" color="danger">
							Delete file
						</ListboxItem>
					</ListboxSection>
				</Listbox>
			</div>
		</div>
	)
}
