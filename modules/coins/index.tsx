'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const Carousel = dynamic(() => import('react-multi-carousel').then(w => w), {
  ssr: false,
})

import { CoinsSliderWrapper } from './styles'
import CoinInfo from './components/CoinInfo'

import 'react-multi-carousel/lib/styles.css'

const Coins = () => {
  return (
    <CoinsSliderWrapper>
      <Carousel
        itemClass={'carouselItem'}
        ssr={true}
        partialVisible={false}
        swipeable
        infinite={true}
        centerMode
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            // partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            // partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
            // partialVisibilityGutter: 30,
          },
        }}
      >
        <CoinInfo />
        <CoinInfo />
        <CoinInfo />
        <CoinInfo />
        <CoinInfo />
        <CoinInfo />
        <CoinInfo />
        <CoinInfo />
        <CoinInfo />
      </Carousel>
    </CoinsSliderWrapper>
  )
}

export default Coins
