import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicSlider,
	SliderSizing,
	VerticalSlider,
	SliderNodes,
	SliderMarks,
	RangeSlider,
	TooltipSlider
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const SliderPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Slider')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Sleek sliders that provide an engaging way to adjust values smoothly.
				</p>
				<p className="text-sm mt-2">
					Each slider is crafted to ensure precise control and responsiveness.
					These components offer a refined blend of design and usability,
					enhancing the interaction experience for users.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicSlider', label: 'Basic slider' },
								{ key: 'sliderSizing', label: 'Sizing' },
								{ key: 'verticalSlider', label: 'Vertical' },
								{ key: 'sliderNodes', label: 'Visible nodes' },
								{ key: 'sliderMarks', label: 'Marks' },
								{ key: 'rangeSlider', label: 'Range' },
								{ key: 'tooltipSlider', label: 'Tooltip' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicSlider />
					<SliderSizing />
					<VerticalSlider />
					<SliderNodes />
					<SliderMarks />
					<RangeSlider />
					<TooltipSlider />
				</div>
			</PageContent>
		</>
	)
}
