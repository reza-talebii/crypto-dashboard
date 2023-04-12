'use client'

import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const ResponsivePie = dynamic(() => import('@nivo/pie').then(w => w.ResponsivePie), {
  ssr: false,
})

const PieChart: FC<{ data: any }> = ({ data }) => {
  return (
    <ResponsivePie
      animate
      data={data}
      startAngle={-46}
      sortByValue={true}
      innerRadius={0.03}
      padAngle={2}
      colors={{ scheme: 'category10' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.8]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabel={function (e) {
        return e.label.toString()
      }}
      arcLinkLabelsSkipAngle={18}
      arcLinkLabelsTextColor={{ theme: 'background' }}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor="#e61414"
      arcLabel={function (e) {
        return e.label.toString()
      }}
      arcLabelsRadiusOffset={0.6}
      arcLabelsSkipAngle={15}
      arcLabelsTextColor="#eeeded"
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[]}
    />
  )
}

export default PieChart
