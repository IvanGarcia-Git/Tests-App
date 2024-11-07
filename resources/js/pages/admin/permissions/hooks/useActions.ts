import { FormEvent, useEffect, useRef, useContext, useCallback } from 'react'
import { usePage, useForm, router } from '@inertiajs/react'
import { PermissionContext } from '../providers/PermissionProvider'
import { toast } from 'react-toastify'
import { t } from '@/i18n'

import type { PermissionContextProps } from '@/types/permissions'

export const useActions = () => {
	const { state, dispatch } = useContext(
		PermissionContext
	) as PermissionContextProps

	const { data, post, patch, errors, setData, processing, clearErrors, reset } =
		useForm({
			name: '',
			guard_name: ['web'],
		})

	useEffect(() => {
		if (state.selectedPermission) setData({ ...state.selectedPermission })
	}, [state.selectedPermission])

	const submit = (e: FormEvent) => {
		e.preventDefault()

		if (state.selectedPermission) {
			patch(
				route('dashboard.permission.update', {
					permission: state.selectedPermission,
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
						dispatch({ type: 'setSelectedPermission', payload: null })
						router.reload({ only: ['permissions'] })
					},
					onError: (errors) => console.log(errors),
				}
			)
		} else {
			post(route('dashboard.permission.store'), {
				preserveScroll: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}

					dispatch({
						type: 'setSelectedPermission',
						payload: resp.props.permissions.data.at(0),
					})

					dispatch({ type: 'closeDrawer' })
					reset()

					router.reload({ only: ['permissions'] })
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
