import { Listbox, ListboxItem, type Selection } from '@nextui-org/react'

const navigate = (key: string) => {
	const element = document.getElementById(key.toString())

	if (element) {
		const elementTop = element.offsetTop

		window.scrollTo({
			top: elementTop - 100,
			behavior: 'smooth',
		})
	}
}

interface Props {
	menu: { key: string; label: string }[]
}

export const InternalNavbar = ({ menu }: Props) => {
	return (
		<Listbox
			items={menu}
			aria-label="Actions"
			onAction={(key) => {
				if (typeof key === 'string') {
					navigate(key)
				}
			}}
			classNames={{ base: 'w-56' }}
			color="primary"
			variant="flat"
		>
			{(item) => <ListboxItem key={item.key}>{item.label}</ListboxItem>}
		</Listbox>
	)
}
