export type PermissionContextProps = {
	state: State
	dispatch: Dispatch<any>
	isOpen: boolean
	onOpen: () => void
	onOpenChange: () => void
}

export interface Permissions {
	current_page: number
	data: Permission[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	next_page_url: string
	path: string
	per_page: number
	prev_page_url: string
	to: number
	total: number
	links: {
		url: string
		label: string
		active: boolean
	}[]
}

export interface Permission {
	id: number
	name: string
	guard_name: string
	created_at?: any
	updated_at?: any
}
