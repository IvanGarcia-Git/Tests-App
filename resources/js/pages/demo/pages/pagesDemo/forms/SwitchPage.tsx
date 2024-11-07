import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicSwitch,
	SwitchSizing,
	SwitchColors,
	CustomLabelsSwitch,
	SwitchWithIcons,
	CustomSwitch,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const SwitchPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Switch')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Modern switches designed for effortless toggling between options.
				</p>
				<p className="text-sm mt-2">
					Each switch is intuitive and responsive, providing a visual cue for
					quick status changes. These components combine aesthetics with
					functionality, making interactions seamless and satisfying.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicSwitch', label: 'Basic switch' },
								{ key: 'switchSizing', label: 'Sizes' },
								{ key: 'switchColors', label: 'Semantic colors' },
								{ key: 'customLabelsSwitch', label: 'Custom labels' },
								{ key: 'switchWithIcons', label: 'Icons' },
								{ key: 'customSwitch', label: 'Custom implementation' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicSwitch />
					<SwitchSizing />
					<SwitchColors />
					<CustomLabelsSwitch />
					<SwitchWithIcons />
					<CustomSwitch />
				</div>
			</PageContent>
		</>
	)
}
