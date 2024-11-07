import { t } from '@/i18n'
import { router, useForm, usePage } from '@inertiajs/react'
import dayjs from 'dayjs'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
} from '@nextui-org/react'

import type {
	Sessions as SessionsProps,
	PageProps,
	User,
	InertiaResponse,
} from '@/types'

import { toast } from 'react-toastify'

export const SessionsManager = () => {
	const { sessions, user } =
		usePage<PageProps<{ sessions: SessionsProps; user: User }>>().props

	const { delete: destroy } = useForm()

	const invalidateSession = (id: string) => {
		destroy(route('dashboard.session.invalidate', { id }), {
			only: ['sessions'],
			preserveScroll: true,
			// @ts-ignore
			onSuccess: (resp: InertiaResponse) => {
				if (resp.props.flash && resp.props.flash.success) {
					toast.success(t(resp.props.flash.success))
				}
			},
			onError: (error) => console.log('error', error),
		})
	}

	if (!sessions.length) return <></>

	return (
		<>
			<Card shadow="none">
				<CardHeader className="px-8 pt-5">{t('Sessions')}</CardHeader>

				<CardBody className="space-y-3 py-1 pl-8 pr-6">
					{sessions.map(({ id, ip_address, last_activity }) => (
						<div key={id} className="flex gap-5 justify-between items-center">
							<div className="text-sm font-light space-x-3">
								<i className="ri-mac-line ri-xl" />
								<span>{ip_address}</span>
							</div>

							<div className="space-x-4">
								<span className="text-sm text-foreground-500">
									{dayjs(last_activity).format('YYYY-MM-DD')}
								</span>

								<Button
									isIconOnly
									color="danger"
									size="sm"
									radius="lg"
									variant="light"
									onPress={() => invalidateSession(id)}
								>
									<i className="ri-delete-bin-2-line ri-xl" />
								</Button>
							</div>
						</div>
					))}
				</CardBody>
				<CardFooter />
			</Card>
		</>
	)
}
