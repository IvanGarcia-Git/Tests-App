import { useContext, useCallback } from 'react'
import { MediaManagerContext } from '../providers/MediaManagerProvider'
import { cn, Image } from '@nextui-org/react'
import { t } from '@/i18n'
import { GridContainer, BlockWrapper } from '@tackboon/react-grid-rearrange'

export const GallerySelection = () => {
	const { filesSelected, order, setOrder, filesTotal } =
		useContext(MediaManagerContext)

	const setOrderItems = useCallback(
		({ order: newOrder }: { order: number[] }) => {
			setOrder && setOrder(newOrder)
		},
		[order]
	)

	return (
		<aside
			className={cn(
				'bg-content1 border-left-100 border-l w-60 hidden inset-y-0 right-0 absolute',
				'lg:block lg:w-96',
				'dark:border-gray-800'
			)}
		>
			<div className="h-full overflow-auto">
				<div className="text-sm px-6 pt-4 pb-10">
					<div className="text-foreground-600">
						<p className="text-base font-semibold">{t('Items selected')}</p>
						{filesSelected && filesSelected.length > 0 && (
							<p className="text-sm">{t('Drag and drop to change order')}</p>
						)}
					</div>

					{filesTotal && filesSelected && filesSelected.length > 0 && (
						<div className="mt-5 [&>*]:!-mx-3 [&>*>*>*]:!bg-transparent">
							<GridContainer
								totalItem={filesSelected.length}
								itemHeight={100}
								itemWidth={100}
								colGap={7}
								rowGap={7}
								cb={setOrderItems}
							>
								{(styles) => {
									return styles.map((style, i) => (
										<BlockWrapper index={i} animationStyle={style} key={i}>
											<Image
												src={filesSelected[i].preview_url}
												alt={filesSelected[i].name}
												className={cn(
													'w-[100px] aspect-square object-cover pointer-events-none'
												)}
												radius="lg"
												removeWrapper
											/>
										</BlockWrapper>
									))
								}}
							</GridContainer>
						</div>
					)}
				</div>
			</div>
		</aside>
	)
}
