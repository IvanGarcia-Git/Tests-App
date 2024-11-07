import { useReducer, type PropsWithChildren, createContext } from 'react'
import { useDisclosure, type SortDescriptor } from '@nextui-org/react'

import type { RoleContextProps } from '@/types/roles'

const initialState = {
	drawerOpen: false,
	selectedRole: null,
	sortDescriptor: {} as SortDescriptor,
	listLoading: true,
}

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'openDrawer':
			return { ...state, drawerOpen: true }
		case 'closeDrawer':
			return { ...state, drawerOpen: false }
		case 'setSelectedRole':
			return { ...state, selectedRole: action.payload }
		case 'setSortDescriptor':
			return { ...state, sortDescriptor: action.payload }
		case 'setListLoading':
			return { ...state, listLoading: action.payload }
		default:
			throw new Error()
	}
}

export const RoleContext = createContext<RoleContextProps | null>(null)

export const RoleProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<RoleContext.Provider
			value={{ state, dispatch, isOpen, onOpen, onOpenChange }}
		>
			{children}
		</RoleContext.Provider>
	)
}
