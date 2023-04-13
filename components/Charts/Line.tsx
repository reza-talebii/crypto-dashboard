import { SparklineIn7d } from '@/services/controllers/coins/models'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const ReactApexChart = dynamic(() => import('react-apexcharts').then(w => w), {
  ssr: false,
})

const LineChart: FC<SparklineIn7d> = ({ price }) => {
  console.log(price)

  const series = [
    {
      name: 'line',
      data: price,
    },
  ]

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
  }

  return <ReactApexChart options={options} series={series} type="line" height={105} />
}

export default LineChart
