import { Permission } from './permissions'

export type RoleContextProps = {
	state: State
	dispatch: Dispatch<any>
	isOpen: boolean
	onOpen: () => void
	onOpenChange: () => void
}

export interface Roles {
	current_page: number
	data: Role[]
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

export interface Role {
	id: number
	name: string
	guard_name: string
	created_at?: any
	updated_at?: any
	permissions: Permission[]
	users_count: number
}

export type WebPermissions = {
	web: {
		id: number
		name: string
		guard_name: string
		created_at?: any
		updated_at?: any
	}[]
}
