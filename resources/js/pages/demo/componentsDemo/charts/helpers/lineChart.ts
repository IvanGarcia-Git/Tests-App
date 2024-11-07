const options = {
	chart: {
		toolbar: { show: false },
		zoom: { enabled: false },
		sparkline: { enabled: true },
	},
	grid: {
		show: false,
		padding: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
		},
	},
	stroke: {
		curve: 'smooth',
		width: 5,
	},
	dataLabels: { enabled: false },
	yaxis: {
		min: (min: number) => min - 2,
		max: (max: number) => max + 2,
		forceNiceScale: true,
	},
	tooltip: {
		x: {
			show: false,
			format: 'dd/MM/yy HH:mm',
		},
	},
	fill: {
		type: 'solid',
		colors: ['#2196F3'],
	},
}

const series = [
	{
		name: 'Sales',
		data: [30, 60, 46, 80, 70],
	},
]

const options2 = {
	chart: {
		toolbar: { show: false },
		sparkline: { enabled: true },
	},
	grid: {
		show: false,
		padding: {
			left: 0,
			right: 0,
		},
	},
	stroke: {
		curve: 'straight',
		width: 5,
	},
	dataLabels: { enabled: false },
	xaxis: {
		type: 'numeric',
		lines: { show: false },
		axisBorder: { show: false },
		labels: { show: false },
	},
	yaxis: {
		min: (min: number) => min - 2,
		max: (max: number) => max + 2,
		forceNiceScale: true,
	},
	tooltip: {
		x: {
			show: false,
			format: 'dd/MM/yy HH:mm',
		},
	},
	markers: {
		colors: ['#95DA74'],
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.9,
			colorStops: [
				{
					offset: 0,
					color: '#EB656F',
					opacity: 1,
				},
				{
					offset: 20,
					color: '#FAD375',
					opacity: 1,
				},
				{
					offset: 60,
					color: '#61DBC3',
					opacity: 1,
				},
				{
					offset: 100,
					color: '#95DA74',
					opacity: 1,
				},
			],
		},
	},
}

const series2 = [
	{
		name: 'Sales',
		data: [150, 650, 450, 650, 350, 480, 900],
	},
]

export { options, series, options2, series2 }
