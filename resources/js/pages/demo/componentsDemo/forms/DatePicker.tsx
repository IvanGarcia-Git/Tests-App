import { useState } from 'react'
import {
	DatePicker,
	DateRangePicker,
	Calendar,
	Tabs,
	Tab,
} from '@nextui-org/react'
import {
	now,
	today,
	getLocalTimeZone,
	isWeekend,
	isSameDay,
	parseDate,
} from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'

/**
 * BasicDatePicker
 *
 * A component that shows a basic date picker with a label, description and a
 * variant switcher.
 *
 * @example
 * <BasicDatePicker />
 */
export const BasicDatePicker = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="basicDatepicker">
			<div className="space-y-2">
				<h3 className="font-semibold">Basic datepicker</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<DatePicker
				label="Birth date"
				className="max-w-sm"
				description="This is my birth date."
				// @ts-ignore
				variant={variant}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

export const ClassicDatePicker = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="classicDatepicker">
			<div className="space-y-2">
				<h3 className="font-semibold">Classic style</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<fieldset className="space-y-1">
				<label className="text-xs">Birth date</label>
				<DatePicker
					aria-labelledby="Birth date"
					description="Nostalgic input style for classic forms"
					className="max-w-sm"
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * MonthsYearsDatePicker
 *
 * A component that shows how to display month and year pickers.
 *
 * This component displays a date picker with an option to show month and year pickers.
 *
 * @example
 * <MonthsYearsDatePicker />
 */
export const MonthsYearsDatePicker = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="MonthsYearsDatepicker">
			<div className="space-y-2">
				<h3 className="font-semibold">Months and years datepicker</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<DatePicker
				label="Birth date"
				className="max-w-sm"
				description="This is my birth date."
				showMonthAndYearPickers
				// @ts-ignore
				variant={variant}
			/>

			<fieldset className="space-y-1">
				<label className="text-xs">Birth date</label>
				<DatePicker
					aria-labelledby="Birth date"
					description="Nostalgic input style for classic forms"
					className="max-w-sm"
					showMonthAndYearPickers
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * DateTimePicker
 * 
 * A component that allows selecting date and time.
 * 
 * This component provides a date and time picker interface with options to hide time zone and show month and year pickers.
 */
export const DateTimePicker = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="dateTimePicker">
			<div className="space-y-2">
				<h3 className="font-semibold">Date time picker</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<DatePicker
				label="Birth date"
				className="max-w-sm"
				description="This is my birth date."
				hideTimeZone
				showMonthAndYearPickers
				defaultValue={now(getLocalTimeZone())}
				// @ts-ignore
				variant={variant}
			/>

			<fieldset className="space-y-1">
				<label className="text-xs">Birth date</label>
				<DatePicker
					aria-labelledby="Birth date"
					description="Nostalgic input style for classic forms"
					className="max-w-sm"
					hideTimeZone
					showMonthAndYearPickers
					defaultValue={now(getLocalTimeZone())}
					// @ts-ignore
					variant={variant}
				/>
			</fieldset>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * MinAndMaxDatePicker
 *
 * A component that shows how to limit the date range.
 *
 * @example
 * <MinAndMaxDatePicker />
 */
export const MinAndMaxDatePicker = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="minMaxDate">
			<div className="space-y-2">
				<h3 className="font-semibold">Min Date And Max Date</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<DatePicker
				label="Pick a day"
				className="max-w-sm"
				minValue={today(getLocalTimeZone()).subtract({ days: 5 })}
				maxValue={today(getLocalTimeZone()).add({ days: 5 })}
				defaultValue={today(getLocalTimeZone())}
				// @ts-ignore
				variant={variant}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

export const BasicDateRangePicker = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="basicDateRangePicker">
			<div className="space-y-2">
				<h3 className="font-semibold">Basic date range picker</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<DateRangePicker
				label="Stay duration"
				className="max-w-sm"
				// @ts-ignore
				variant={variant}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

/**
 * DateRangePickerWithMonths
 *
 * A component that demonstrates a date range picker with visible months.
 *
 * This component displays a date range picker with an option to show multiple months for selecting a stay duration.
 */
export const DateRangePickerWithMonths = () => {
	const [variant, setVariant] = useState('flat')

	return (
		<div className="space-y-6" id="dateRangePickerMonths">
			<div className="space-y-2">
				<h3 className="font-semibold">Date range picker months</h3>
				<FlavorSelector {...{ setVariant }} />
			</div>

			<DateRangePicker
				label="Stay duration"
				className="max-w-sm"
				visibleMonths={2}
				// @ts-ignore
				variant={variant}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>
		</div>
	)
}


/**
 * InlineCalendar
 *
 * A component that shows how to display an inline calendar.
 *
 * This component provides various inline calendar examples with options to hide the selection, show a default selected date, and mark unavailable dates.
 *
 * @example
 * <InlineCalendar />
 */
export const InlineCalendar = () => {
	let now = today(getLocalTimeZone())

	let disabledRanges = [
		[now, now.add({ days: 5 })],
		[now.add({ days: 14 }), now.add({ days: 16 })],
		[now.add({ days: 23 }), now.add({ days: 24 })],
	]

	let { locale } = useLocale()

	let isDateUnavailable = (date: any) =>
		isWeekend(date, locale) ||
		disabledRanges.some(
			(interval) =>
				date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
		)

	return (
		<div className="space-y-6" id="inlineCalendar">
			<div className="space-y-2">
				<h3 className="font-semibold">Inline calendar</h3>
			</div>

			<div>
				<Calendar
					aria-label="Date (No Selection)"
					bottomContent={
						<p className="text-foreground-500 text-xs text-right">
							Basic calendar
						</p>
					}
				/>
			</div>

			<div>
				<Calendar
					aria-label="Date (Uncontrolled)"
					defaultValue={parseDate('2020-02-03')}
					bottomContent={
						<p className="text-foreground-500 text-xs text-right">
							With an initial selected date
						</p>
					}
				/>
			</div>

			<p className="text-xs">XIXIXIXIXIXIXIXIXIXIXIXIX</p>

			<div>
				<Calendar
					aria-label="Date (Uncontrolled)"
					isDateUnavailable={isDateUnavailable}
					bottomContent={
						<p className="text-foreground-500 text-xs text-right">
							Unavailable dates
						</p>
					}
				/>
			</div>
		</div>
	)
}

const flavors = {
	flat: 'Flat',
	bordered: 'Bordered',
	faded: 'Faded',
	underlined: 'Underlined',
}

/**
 * FlavorSelector
 *
 * A component that displays a set of flavors as buttons.
 *
 * @example
 *
 * @param {Object} props
 * @param {Function} props.setVariant - A function to set the selected flavor.
 * @returns {ReactElement}
 */
const FlavorSelector = ({ setVariant }: { setVariant: (v: any) => void }) => {
	return (
		<div className="flex items-center gap-x-3">
			<span className="text-xs font-medium text-foreground-700">Flavors:</span>

			<Tabs
				aria-label="Options"
				color="primary"
				variant="underlined"
				size="sm"
				onSelectionChange={(key) => setVariant(key)}
			>
				{Object.entries(flavors).map((item) => (
					<Tab
						key={item[0]}
						title={
							<div className="flex items-center gap-2">
								<span>{item[1]}</span>
							</div>
						}
					/>
				))}
			</Tabs>
		</div>
	)
}
