import { Pagination } from '@nextui-org/react'
import { router } from '@inertiajs/react'

interface Props {
	links: {
		url: string
		label: string
		active: boolean
	}[]
	current_page: number
}

export const NotificationsListPager = ({ links, current_page }: Props) => {
	return (
		<div className="flex justify-between items-center mt-3">
			{links && (
				<div className="flex w-full justify-end">
					<Pagination
						size="sm"
						isCompact
						showControls
						showShadow
						variant="light"
						color="primary"
						page={current_page}
						total={links.length - 2 || 0}
						classNames={{ wrapper: 'shadow-none' }}
						onChange={(page) =>
							router.reload({
								data: { page },
								only: ['notifications'],
							})
						}
					/>
				</div>
			)}
		</div>
	)
}
