import { styled } from 'styled-components'

export const CoinsSliderWrapper = styled.section`
  margin-top: 10px;

  .react-multi-carousel-list {
    direction: ltr !important;
    border-radius: 10px;
  }

  .react-multi-carousel-track {
    gap: 2rem !important;
  }

  .react-multi-carousel-list {
    width: 95%;
    margin: 0 auto;
    position: initial !important;
  }

  .react-multi-carousel-track {
    position: relative;
  }

  .react-multiple-carousel__arrow--left {
    position: absolute;
    left: 12px;
  }
  .react-multiple-carousel__arrow--right {
    position: absolute;
    right: 12px;
  }

  .react-multiple-carousel__arrow {
    border: 1.8px solid #1e1e1e;
    min-height: 20px;
    min-width: 20px;
    background-color: transparent !important;
    color: #1e1e1e !important;
    border-radius: 5px;

    &::before {
      color: #1e1e1e !important;
      font-size: 13px;
      font-weight: bold;
    }
  }
`
