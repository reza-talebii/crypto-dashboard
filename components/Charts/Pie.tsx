'use client'

import { IAssets } from '@/services/controllers/static/models'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const ResponsivePie = dynamic(() => import('@nivo/pie').then(w => w.ResponsivePie), {
  ssr: false,
})

const PieChart: FC<{ data: IAssets[] }> = ({ data }) => {
  return (
    <ResponsivePie
      animate
      data={data.map(i => ({ ...i, id: i.name }))}
      startAngle={-46}
      sortByValue={true}
      innerRadius={0.03}
      padAngle={2}
      colors={function (e) {
        /* @ts-ignore */
        return e.data.color
      }}
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
      arcLinkLabelsColor={'#fff'}
      arcLabel={function (e) {
        /* @ts-ignore */
        return e.data.symbol
      }}
      arcLabelsRadiusOffset={0.6}
      arcLabelsSkipAngle={15}
      arcLabelsTextColor={'#fff'}
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
      legends={[]}
    />
  )
}

export default PieChart
