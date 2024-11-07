import { FormEvent, useEffect, useRef, useContext, useCallback } from 'react'
import { usePage, useForm, router } from '@inertiajs/react'
import { NotificationContext } from '../providers/NotificationProvider'
import { toast } from 'react-toastify'
import { t } from '@/i18n'

import type { NotificationContextProps } from '@/types/notifications'

export const useActions = () => {
	const { state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	const { data, post, patch, errors, setData, processing, clearErrors, reset } =
		useForm({
			title: '',
			body: '',
			used_dates: [],
		})

	useEffect(() => {
		if (state.selectedNotification)
			setData({
				...state.selectedNotification,
				used_dates: state.selectedNotification.used_dates as never[],
			})
	}, [state.selectedNotification])

	/**
	 * Submits the form data to the server.
	 *
	 * If the user is editing an existing notification, it will call the `update` method
	 * and then reload the page.
	 *
	 * If the user is creating a new notification, it will call the `store` method and
	 * then reload the page.
	 *
	 * @param {FormEvent} e - The form event.
	 */
	const submit = (e: FormEvent) => {
		e.preventDefault()

		if (state.selectedNotification) {
			patch(
				route('dashboard.notification.update', {
					notification: state.selectedNotification,
				}),
				{
					preserveScroll: true,
					onSuccess: () => {
						dispatch({ type: 'closeDrawer' })
						reset()
						dispatch({ type: 'setSelectedNotification', payload: null })
						router.reload({ only: ['notifications'] })
					},
					onError: (errors) => console.log('error', errors),
				}
			)
		} else {
			post(route('dashboard.notification.store'), {
				preserveScroll: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}

					dispatch({
						type: 'setSelectedNotification',
						payload: resp.props.notifications.data.at(0),
					})

					dispatch({ type: 'closeDrawer' })
					reset()

					router.reload({ only: ['notifications'] })
				},
				onError: (errors) => console.log('error', errors),
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
