import { PropsWithChildren, ReactElement } from 'react'
import { cn } from '@nextui-org/react'

interface Props extends PropsWithChildren {
	className?: string
	aside?: ReactElement
}

export const PageContent = ({ children, className, aside }: Props) => {
	return (
		<>
			<section className={cn('px-5 py-7 md:px-6 md:py-8', className)}>
				<div className="flex gap-20">
					{children}
					{aside && (
						<aside className="hidden sticky top-20 h-32 xl:flex">{aside}</aside>
					)}
				</div>

				<div className="h-20" />
			</section>
		</>
	)
}
