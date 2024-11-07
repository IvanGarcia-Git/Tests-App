import { createContext, type PropsWithChildren, useState } from 'react'
import { tabsMapper } from '../helpers/mappers/tabs.mapper'

import type { Image, MediaManagerContextType, ComponentProps } from '../types.d'

const initialState = {
	files: null,
	filesTotal: 0,
	filesSelected: [],
	tabsDisabled: [],
	selectedTab: tabsMapper('TAB_LIBRARY'),
	collection: null,
	order: null,
}

export const MediaManagerContext = createContext<MediaManagerContextType>({
	...initialState,
})

interface Props extends PropsWithChildren, ComponentProps {}

export const MediaManagerProvider = ({
	children,
	collection,
	selectMultiple,
}: Props) => {
	const [files, setFiles] = useState(initialState.files)
	const [filesTotal, setFilesTotal] = useState(initialState.filesTotal)
	// const [filesSelected, setFilesSelected] = useState<Image[] | never[] | any[]>(
	const [filesSelected, setFilesSelected] = useState<any>(
		collection ?? initialState.filesSelected
	)
	const [tabsDisabled, setTabsDisabled] = useState<string[]>(
		initialState.tabsDisabled
	)
	const [selectedTab, setSelectedTab] = useState(initialState.selectedTab)
	const [order, setOrder] = useState<number[] | null>(initialState.order)

	const enableTabs = () => setTabsDisabled([])

	const disableTabs = () =>
		setTabsDisabled([tabsMapper('TAB_UPLOAD'), tabsMapper('TAB_LIBRARY')])

	return (
		<MediaManagerContext.Provider
			value={{
				files,
				setFiles,
				filesTotal,
				setFilesTotal,
				filesSelected,
				setFilesSelected,
				tabsDisabled,
				setTabsDisabled,
				selectedTab,
				setSelectedTab,
				enableTabs,
				disableTabs,
				selectMultiple,
				order,
				setOrder,
			}}
		>
			{children}
		</MediaManagerContext.Provider>
	)
}
