const options = {
	chart: {
		toolbar: { show: false },
		zoom: { enabled: false },
	},
	stroke: {
		curve: 'smooth',
		width: 3,
		color: 'red',
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.8,
			opacityTo: 0,
			stops: [0, 100],
		},
	},
	markers: { size: 0 },
	legend: { show: false },
	dataLabels: { enabled: false },
	xaxis: {
		labels: { show: false },
		axisBorder: { show: false },
		axisTicks: { show: false },
	},
	yaxis: {
		min: (min: number) => min - 50,
		max: (max: number) => max + 50,
		forceNiceScale: true,
	},
	grid: { show: false },
	tooltip: {
		enabled: true,
		intersect: false,
		x: {
			formatter: (idx: number) => years[idx - 1],
		},
		y: {
			title: {},
			formatter: (val: number) => `${val.toFixed(2)}`,
		},
	},
}

const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021']

const series = [
	{
		name: 'Sales',
		data: [3000, 5500, 4500, 6000, 8000, 6000, 9000],
	},
]

const options2 = {
	chart: {
		toolbar: {
			show: false,
		},
		sparkline: {
			enabled: true,
		},
	},
	grid: {
		show: false,
		padding: {
			left: 0,
			right: 0,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: false,
		curve: 'smooth',
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.9,
			colorStops: [
				[
					{
						offset: 70,
						color: '#A5EEFD',
						opacity: 0.5,
					},
					{
						offset: 100,
						color: '#A5EEFD',
						opacity: 0,
					},
				],
				[
					{
						offset: 70,
						color: '#a2e9c1',
						opacity: 0.5,
					},
					{
						offset: 100,
						color: '#a2e9c1',
						opacity: 0,
					},
				],
			],
			stops: [0, 90, 100],
		},
	},
	xaxis: {
		type: 'numeric',
		lines: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		labels: {
			show: false,
		},
	},
	yaxis: [
		{
			y: 0,
			offsetX: 0,
			offsetY: 0,
			labels: {
				show: false,
			},
			padding: {
				left: 0,
				right: 0,
			},
		},
	],
	tooltip: {
		x: {
			show: false,
			format: 'dd/MM/yy HH:mm',
		},
	},
}

const series2 = [
	{
		name: 'series1',
		data: [20, 45, 30, 75, 55, 85, 95],
	},
	{
		name: 'series2',
		data: [30, 40, 60, 68, 75, 78, 105],
	},
]

export { options, series, options2, series2 }
