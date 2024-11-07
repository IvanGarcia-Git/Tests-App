import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Snippet } from '@nextui-org/react'
import { commonColors, semanticColors } from '@nextui-org/theme'
import { Fragment } from 'react/jsx-runtime'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

console.log('commonColors', commonColors)
console.log('semanticColors', semanticColors)

const data = [
	{
		title: 'Layout',
		items: [
			{ name: 'Background', cn: 'bg-background' },
			{ name: 'Foreground', cn: 'bg-foreground' },
			{ name: 'Divider', cn: 'bg-divider' },
			{ name: 'Focus', cn: 'bg-focus' },
			{ name: 'Overlay', cn: 'bg-overlay' },
		],
	},
	{
		title: 'Content',
		items: [
			{ name: 'Content1', cn: 'bg-content1 text-content1-foreground' },
			{ name: 'Content2', cn: 'bg-content2 text-content2-foreground' },
			{ name: 'Content3', cn: 'bg-content3 text-content3-foreground' },
			{ name: 'Content4', cn: 'bg-content4 text-content4-foreground' },
		],
	},
	{
		title: 'Base',
		items: [
			{ name: 'Default', cn: 'bg-default' },
			{ name: 'Primary', cn: 'bg-primary' },
			{ name: 'Secondary', cn: 'bg-secondary' },
			{ name: 'Success', cn: 'bg-success' },
			{ name: 'Warning', cn: 'bg-warning' },
			{ name: 'Danger', cn: 'bg-danger' },
		],
	},
	{
		title: 'Foreground',
		items: [
			{ name: '50', cn: 'text-foreground-50' },
			{ name: '100', cn: 'text-foreground-100' },
			{ name: '200', cn: 'text-foreground-200' },
			{ name: '300', cn: 'text-foreground-300' },
			{ name: '400', cn: 'text-foreground-400' },
			{ name: '500', cn: 'text-foreground-500' },
			{ name: '600', cn: 'text-foreground-600' },
			{ name: '700', cn: 'text-foreground-700' },
			{ name: '800', cn: 'text-foreground-800' },
			{ name: '900', cn: 'text-foreground-900' },
			{ name: 'Default', cn: 'text-foreground' },
		],
	},
	{
		title: 'Default',
		items: [
			{ name: '50', cn: 'bg-default-50' },
			{ name: '100', cn: 'bg-default-100' },
			{ name: '200', cn: 'bg-default-200' },
			{ name: '300', cn: 'bg-default-300' },
			{ name: '400', cn: 'bg-default-400' },
			{ name: '500', cn: 'bg-default-500' },
			{ name: '600', cn: 'bg-default-600' },
			{ name: '700', cn: 'bg-default-700' },
			{ name: '800', cn: 'bg-default-800' },
			{ name: '900', cn: 'bg-default-900' },
			{ name: 'Default', cn: 'bg-default' },
		],
	},
]

export const ColorsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Color')}
				classNames={{
					wrapper: headerClassName,
				}}
			/>

			<PageContent className={contentClassName}>
				<div className="space-y-2">
					<h3 className="font-bold">Semantic colors</h3>

					<div className="max-w-xs pt-3 space-y-16 sm:max-w-lg md:max-w-xl">
						{data.map(({ title, items }, idx) => (
							<Fragment key={`row${idx}`}>
								<Row {...{ title, items }} />
							</Fragment>
						))}
					</div>
				</div>

				<div className="space-y-2 mt-20">
					<h3 className="font-bold">JavaScript colors</h3>
					<p>
						You can import semantic and common colors into your JavaScript files
						as follows:
					</p>

					<Snippet size="sm" className="hidden md:inline-flex">
						{`import {commonColors, semanticColors} from "@nextui-org/theme";`}
					</Snippet>
					<p>Inspect this page to see the available colors.</p>
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

const Row = ({
	title,
	items,
}: {
	title: string
	items: { name: string; cn: string }[]
}) => (
	<div className="space-y-2">
		<div className="font-bold">{title}</div>
		<div className="w-auto grid grid-cols-3 gap-6 sm:grid-cols-5 xl:grid-cols-6">
			{items.map((e) => (
				<Fragment key={`row${e.cn}`}>
					{title === 'Foreground' || title === 'Content' ? (
						<div className="space-y-1">
							<div
								className={`bg-background border border-divider w-full flex justify-end items-end aspect-video rounded-lg ${e.cn}`}
							>
								<span className="text-2xl mr-1.5">Aa</span>
							</div>
							<div className="text-foreground-700 text-xs font-medium">
								{e.name}
							</div>
						</div>
					) : (
						<div className="space-y-1">
							<div
								className={`border border-divider w-full aspect-video rounded-lg ${e.cn}`}
							/>
							<div className="text-foreground-700 text-xs font-medium">
								{e.name}
							</div>
						</div>
					)}
				</Fragment>
			))}
		</div>
	</div>
)
