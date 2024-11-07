export type NavbarProps = {
	key: string
	title: string | null
	permissions?: string[]
	menu: {
		label: string
		route: string | null
		icon: string
		submenu?: {
			label: string
			route: string
		}[]
		permissions?: string[]
	}[]
}[]
