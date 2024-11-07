import { useRef } from 'react'
import Chart from 'react-apexcharts'
import * as config from './helpers'
import { ApexOptions } from 'apexcharts'

import { commonColors, semanticColors } from '@nextui-org/theme'
console.log('commonColors', commonColors)
console.log('semanticColors', semanticColors)

export const LineChart = () => {
	return (
		<div className="space-y-6" id="lineChart">
			<h3 className="font-semibold">Line charts</h3>
			<Chart
				options={config.linechart.options as ApexOptions}
				series={config.linechart.series}
				type="line"
				height={280}
			/>

			<Chart
				options={config.linechart.options2 as ApexOptions}
				series={config.linechart.series2}
				type="line"
				height={280}
			/>

			<p className="text-xs">XIXIXIXIXIXIXIXIX</p>
		</div>
	)
}

export const AreaCharts = () => {
	return (
		<div className="space-y-6" id="areaChart">
			<h3 className="font-semibold">Area charts</h3>

			<Chart
				options={config.areachart.options as ApexOptions}
				series={config.areachart.series}
				type="area"
				height={280}
			/>

			<Chart
				options={config.areachart.options2 as ApexOptions}
				series={config.areachart.series2}
				type="area"
				height={280}
			/>

			<p className="text-xs">XIXIXIXIXIXIX</p>
		</div>
	)
}

export const BarCharts = () => {
	return (
		<div className="space-y-6" id="barChart">
			<h3 className="font-semibold">Bar chart</h3>

			<Chart
				options={config.barchart.options as ApexOptions}
				series={config.barchart.series}
				type="bar"
				height={280}
			/>

			<Chart
				options={config.barchart.options2 as ApexOptions}
				series={config.barchart.series2}
				type="bar"
				height={280}
			/>

			<p className="text-xs">XIXIXIXIXIXIX</p>
		</div>
	)
}

export const DonutCharts = () => {
	return (
		<div className="space-y-6" id="donutChart">
			<h3 className="font-semibold">Donut chart</h3>

			<Chart
				options={config.donutchart.options as ApexOptions}
				series={config.donutchart.series}
				type="radialBar"
				height={300}
			/>

			<Chart
				options={config.donutchart.options2 as ApexOptions}
				series={config.donutchart.series2}
				type="radialBar"
				height={230}
			/>

			<Chart
				options={config.donutchart.options3 as ApexOptions}
				series={config.donutchart.series3}
				type="donut"
				height={240}
			/>

			<p className="text-xs">XIXIXIXIXIXIX</p>
		</div>
	)
}
