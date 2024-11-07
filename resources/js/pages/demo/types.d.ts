export type Data = {
	id: number
	name: string
	description: string
	price: string
	category: string
	sku: string
	stock: string
}

export interface ProductsProps {
	current_page: number
	data: Data[]
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

export type Template = 'corporate' | 'executive'
