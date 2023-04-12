'use client'

import 'react-multi-carousel/lib/styles.css'

import dynamic from 'next/dynamic'
import React from 'react'

const Carousel = dynamic(() => import('react-multi-carousel').then(w => w), {
  ssr: false,
})

import { CoinsSliderWrapper } from './styles'
import CoinInfo from './components/CoinInfo'

const Coins = () => {
  return (
    <CoinsSliderWrapper>
      <Carousel
        ssr={false}
        // autoPlay
        swipeable
        infinite={true}
        centerMode
        slidesToSlide={4}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 4,
            partialVisibilityGutter: 30,
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
