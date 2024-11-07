import { useReducer, type PropsWithChildren, createContext } from 'react'
import { useDisclosure, type SortDescriptor } from '@nextui-org/react'

import type { PermissionContextProps } from '@/types/permissions'

const initialState = {
	drawerOpen: false,
	selectedPermission: null,
	sortDescriptor: {} as SortDescriptor,
	listLoading: true,
}

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'openDrawer':
			return { ...state, drawerOpen: true }
		case 'closeDrawer':
			return { ...state, drawerOpen: false }
		case 'setSelectedPermission':
			return { ...state, selectedPermission: action.payload }
		case 'setSortDescriptor':
			return { ...state, sortDescriptor: action.payload }
		case 'setListLoading':
			return { ...state, listLoading: action.payload }
		default:
			throw new Error()
	}
}

export const PermissionContext = createContext<PermissionContextProps | null>(
	null
)

export const PermissionProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<PermissionContext.Provider
			value={{ state, dispatch, isOpen, onOpen, onOpenChange }}
		>
			{children}
		</PermissionContext.Provider>
	)
}
