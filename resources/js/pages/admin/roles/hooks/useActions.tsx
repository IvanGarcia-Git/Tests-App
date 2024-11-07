import { FormEvent, useEffect, useRef, useContext, useCallback } from 'react'
import { usePage, useForm, router } from '@inertiajs/react'
import { RoleContext } from '../providers/RoleProvider'
import { toast } from 'react-toastify'
import { t } from '@/i18n'

import type { RoleContextProps } from '@/types/roles'
import { Permission } from '@/types/permissions'

export const useActions = () => {
	const { state, dispatch } = useContext(RoleContext) as RoleContextProps

	const { data, post, patch, errors, setData, processing, clearErrors, reset } =
		useForm({
			name: '',
			permissions: [] as string[],
		})

	useEffect(() => {
		if (state.selectedRole) {
			console.log('selectedRole', state.selectedRole)
			setData({
				name: state.selectedRole.name,
				permissions: state.selectedRole.permissions.map(
					(permission: Permission) => permission.name
				),
			})
		}
	}, [state.selectedRole])

	const submit = (e: FormEvent) => {
		e.preventDefault()

		if (state.selectedRole) {
			patch(
				route('dashboard.role.update', {
					role: state.selectedRole,
				}),
				{
					preserveScroll: true,
					// @ts-ignore
					onSuccess: (resp: InertiaResponse) => {
						if (resp.props.flash && resp.props.flash.success) {
							toast.success(t(resp.props.flash.success))
						}

						dispatch({ type: 'closeDrawer' })
						reset()
						dispatch({ type: 'setSelectedRole', payload: null })
						router.reload({ only: ['roles'] })
					},
					onError: (errors) => console.log(errors),
				}
			)
		} else {
			post(route('dashboard.role.store'), {
				preserveScroll: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}

					dispatch({ type: 'setSelectedRole', payload: null })

					dispatch({ type: 'closeDrawer' })
					reset()

					router.reload({ only: ['roles'] })
				},
				onError: (errors) => console.log(errors),
			})
		}
	}

	const inputName = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setTimeout(() => {
			inputName.current?.focus()
		}, 300)
	}, [state.drawerOpen])

	return {
		data,
		post,
		patch,
		errors,
		setData,
		processing,
		clearErrors,
		reset,
		inputName,
		submit,
	}
}
