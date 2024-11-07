import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicDatePicker,
	ClassicDatePicker,
	MonthsYearsDatePicker,
	DateTimePicker,
	MinAndMaxDatePicker,
	BasicDateRangePicker,
	DateRangePickerWithMonths,
	InlineCalendar,
	PasswordInput,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const DatePickerPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Date Picker')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Elegant date pickers that make selecting dates intuitive and easy.
				</p>
				<p className="text-sm mt-2">
					Each date picker is highly responsive, providing a visually appealing
					and straightforward way to select dates. These components merge style
					and practicality, simplifying calendar-based interactions.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicDatepicker', label: 'Basic datepicker' },
								{ key: 'classicDatepicker', label: 'Classic style' },
								{
									key: 'MonthsYearsDatepicker',
									label: 'Months and years datepicker',
								},
								{ key: 'dateTimePicker', label: 'Date time picker' },
								{ key: 'minMaxDate', label: 'Min and max date' },
								{ key: 'basicDateRangePicker', label: 'Date range picker' },
								{
									key: 'dateRangePickerMonths',
									label: 'Date range picker months',
								},
								{ key: 'inlineCalendar', label: 'Inline calendar' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicDatePicker />
					<ClassicDatePicker />
					<MonthsYearsDatePicker />
					<DateTimePicker />
					<MinAndMaxDatePicker />
					<BasicDateRangePicker />
					<DateRangePickerWithMonths />
					<InlineCalendar />
				</div>
			</PageContent>
		</>
	)
}
