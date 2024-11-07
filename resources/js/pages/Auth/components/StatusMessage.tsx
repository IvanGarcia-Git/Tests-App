import { t } from '@/i18n'

export const StatusMessage = ({ status }: { status: string }) => {
	return (
		<>
			<div className="bg-success-100 text-success font-medium leading-tight pl-12 pr-5 py-4 relative rounded-2xl">
				<i className="ri-checkbox-circle-line ri-xl text-success-300 left-1 top-2 absolute pointer-events-none" />
				{t(status)}
			</div>
		</>
	)
}
