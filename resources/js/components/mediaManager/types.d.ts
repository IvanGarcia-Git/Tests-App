import { type ButtonProps } from '@nextui-org/react'

export type Image = {
	id: number
	model_type: string
	model_id: number
	uuid: string
	collection_name: string
	name: string
	file_name: string
	mime_type: string
	disk: string
	conversions_disk: string
	size: number
	manipulations: any
	custom_properties: {
		altText?: string
		caption?: string
		description?: string
	}
	generated_conversions: any
	responsive_images: any
	order_column: number
	original_url: string
	preview_url: string
	created_at: string
	updated_at: string
}

interface MediaManagerContextType {
	files: Image[] | null
	setFiles?: (files: any) => void
	filesTotal: number
	setFilesTotal?: (filesTotal: number) => void
	filesSelected: Image[] | never[]
	setFilesSelected?: (files: Image[]) => void
	tabsDisabled: string[]
	setTabsDisabled?: (tabsDisabled: any[]) => void
	selectedTab: string
	setSelectedTab?: (selectedTab: string) => void
	enableTabs?: () => void
	disableTabs?: () => void
	selectMultiple?: boolean
	order?: number[] | null
	setOrder?: (order: number[] | null) => void
}

interface ComponentProps {
	button?: {
		text?: string
		props?: ButtonProps
	}
	selectMultiple?: boolean
	onFilesSelected?: (file: any) => void
	collection?: Image[] | null | undefined
}
