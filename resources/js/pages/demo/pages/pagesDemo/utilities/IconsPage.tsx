import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'
import iconsList from './remixicon.json'
import { Card, CardBody, Chip } from '@nextui-org/react'
import { InternalNavbar } from './components'
import { toast } from 'react-toastify'

interface Props {
	template?: Template
}

const copyIcon = (cn: string) => {
	try {
		navigator.clipboard.writeText(`<i className="${cn}" />`)
		toast.success('Icon copied successfully')
	} catch (err) {
		console.error('Failed to copy: ', err)
	}
}

export const IconsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Icons')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Enhance User Experience with Intuitive Icons
				</p>
				<p className="text-sm mt-2">
					Icons are visual elements that simplify communication by representing
					actions, objects, or ideas in a compact and easily recognizable way.
					They enhance the user interface by providing quick, intuitive cues,
					improving navigation, and reducing text clutter. Icons play a crucial
					role in making applications more user-friendly, visually appealing,
					and efficient.
				</p>

				<p className="text-sm font-medium mt-5 text-primary">Remixicon v4.3</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: Object.entries(iconsList).map((key) => ({
								key: key[0],
								label: key[1].title,
							})),
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					{Object.entries(iconsList).map((key) => (
						<div id={key[0]} key={key[0]}>
							<h3 className="font-semibold flex items-center gap-5">
								{key[1].title}{' '}
								<Chip size="sm" color="primary" variant="flat">
									{key[1].icons.length}
								</Chip>
							</h3>
							<small className="text-foreground-700 font-medium mt-2 block">
								{t('Click any icon to copy')}
							</small>

							<div className="mt-10 flex flex-wrap gap-3">
								{key[1].icons.map((icon) => (
									<div className="flex gap-4 items-center" key={icon.className}>
										<Card
											shadow="none"
											isPressable
											onPress={() => copyIcon(icon.className)}
											className="text-foreground-800 hover:text-white"
										>
											<CardBody className="w-14 h-14 flex justify-center items-center">
												<i className={`${icon.className} ri-xl`}></i>
											</CardBody>
										</Card>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</PageContent>
		</>
	)
}
