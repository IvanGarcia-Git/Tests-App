const options = {
	chart: {
		type: 'line', // Change to 'area', 'bar', etc., based on your image
		height: 350,
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: 'smooth', // Options: 'smooth', 'straight', 'stepline'
	},

	xaxis: {
		categories: ['1970', '1980', '1990', '2000', '2010', '202'],
	},
	tooltip: {
		enabled: true,
	},
}

const series = [
	{
		name: 'Visitors',
		data: [30, 80, 90, 70, 30, 40], // Replace with actual data
	},
	{
		name: 'Sales',
		data: [60, 20, 40, 60, 90, 20], // Replace with actual data
	},
	{
		name: 'Customers',
		data: [95, 40, 35, 65, 55, 25], // Replace with actual data
	},
]

const options2 = {
	chart: {
		height: 110,
		type: 'bar',
		toolbar: {
			show: false,
		},
		sparkline: {
			enabled: true,
		},
		events: {
			click: function (chart, w, e) {},
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '10px',
			distributed: true,
			endingShape: 'rounded',
			borderRadius: 5,
		},
	},
	dataLabels: {
		enabled: false,
	},
	legend: {
		show: false,
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
}

const series2 = [
	{
		data: [21, 22, 10, 28, 16, 21, 13, 30],
	},
]

export { options, series, options2, series2 }
