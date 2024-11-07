import { PropsWithChildren, ReactElement } from 'react'
import { cn } from '@nextui-org/react'

interface Props extends PropsWithChildren {
	title: string | ReactElement
	classNames?: {
		base?: string
		wrapper?: string
	}
}

export const PageHeader = ({ title, children, classNames }: Props) => {
	return (
		<div
			className={cn(
				'bg-white w-full py-7',
				'flex justify-center',
				'md:px-10 md:py-12 xl:gap-20',
				'dark:bg-black',
				classNames && classNames.base
			)}
		>
			<div
				className={cn(
					'w-full grid gap-3 md:gap-6',
					children && 'sm:grid-cols-2',
					classNames && classNames.wrapper
				)}
			>
				{title && (
					<h2 className="text-xl font-semibold select-none md:text-2xl">
						{title}
					</h2>
				)}

				{children && <div>{children}</div>}
			</div>
		</div>
	)
}
