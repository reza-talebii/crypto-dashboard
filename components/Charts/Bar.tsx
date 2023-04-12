'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js'

const Bar = dynamic(() => import('react-chartjs-2').then(w => w.Bar), {
  ssr: false,
})

import { faker } from '@faker-js/faker'
import dynamic from 'next/dynamic'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options: ChartOptions<ChartType> = {
  responsive: true,
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data: ChartData<'bar', number[], string> = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#388AEA',
      borderRadius: 10,
      type: 'bar',
    },
  ],
}

export function BarChart() {
  return <Bar options={options} data={data} />
}
