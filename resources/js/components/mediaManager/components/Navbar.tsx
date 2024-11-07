import { useContext } from 'react'
import { Button } from '@nextui-org/react'
import { MediaManagerContext } from '../providers/MediaManagerProvider'
import { t } from '@/i18n'

interface Props {
	onFilesSelected?: (file: any) => void
	onClose: () => void
}

export const Navbar = ({ onFilesSelected, onClose }: Props) => {
	const { filesTotal, filesSelected, order, setFilesSelected, setFilesTotal } =
		useContext(MediaManagerContext)

	const confirm = () => {
		setFilesTotal && setFilesTotal(0)

		if (order && order.length) {
			const newItems = []

			for (const index of order) {
				newItems.push(filesSelected[index])
			}
			onFilesSelected && onFilesSelected(newItems)
			setFilesSelected && setFilesSelected(newItems)
		} else {
			onFilesSelected && onFilesSelected(filesSelected)
		}

		onClose && onClose()
	}

	return (
		<div className="bg-white border-t border-gray-100 w-full rounded-b-2xl z-30 dark:bg-gray-900 dark:border-gray-800">
			<div className="px-8 py-4 flex justify-between items-end gap-x-5">
				<div className="hidden text-foreground-600 text-sm sm:block">
					{t('Total files')}: {filesTotal}
				</div>

				<div className="flex justify-end flex-1 gap-5">
					<Button
						variant="ghost"
						startContent={
							<svg viewBox="0 0 24 24" className="h-5 fill-white">
								<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
							</svg>
						}
						onPress={onClose}
					>
						{t('Cancel')}
					</Button>

					{filesSelected && (
						<Button color="primary" className="px-10" onPress={confirm}>
							{t('Select')}
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
