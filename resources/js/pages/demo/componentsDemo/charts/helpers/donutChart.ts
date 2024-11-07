const options = {
	chart: {},
	plotOptions: {
		circle: {
			dataLabels: {
				showOn: 'hover',
			},
		},
	},
	stroke: {
		colors: ['#F6637A', '#F6637A', '#F6637A', '#F6637A'],
	},
	labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
}

const series = [44, 55, 67, 83]

const options2 = {
	chart: {},
	plotOptions: {
		radialBar: {
			hollow: {
				margin: 15,
				size: '70%',
			},

			dataLabels: {
				showOn: 'always',
				name: {
					offsetY: -15,
					show: true,
					color: '#888',
					fontSize: '13px',
				},
				value: {
					offsetY: 4,
					color: '#111',
					fontSize: '30px',
					show: true,
				},
			},
		},
	},
	stroke: {
		lineCap: 'round',
	},
	labels: ['Progress'],
}

const series2 = [67]

const options3 = {
	labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
	colors: ['#F6637A', '#FABB4B', '#58E6A6', '#3D9FFB'],
	plotOptions: {
		pie: {
			donut: {
				size: '65%',
				labels: {
					show: true,
					name: { offsetY: -15, fontSize: '13px', show: true },
					value: { offsetY: 5, fontSize: '40px', show: true },
				},
			},
		},
	},
	dataLabels: {
		enabled: false,
		formatter: function (val: number) {
			return val.toFixed(1) + '%'
		},
	},
	tooltip: {
		y: {
			formatter: function (val: number) {
				return val + '%'
			},
		},
	},
	legend: {
		position: 'bottom',
	},
}

const series3 = [44, 55, 67, 83]

export { options, series, options2, series2, options3, series3 }
