'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const ReactApexChart = dynamic(() => import('react-apexcharts').then(w => w), {
  ssr: false,
})

const BarChart = () => {
  const series = [
    {
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ]

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '45%',
        colors: {
          backgroundBarRadius: 8,
          ranges: [
            {
              from: 0,
              to: 1,
              color: '#388AEA',
            },
          ],
        },
        dataLabels: {
          position: 'top',
        },
      },
    },

    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  }

  return <ReactApexChart height={154} width={372} options={options} series={series} type="bar" />
}

export default BarChart
