import { styled } from 'styled-components'

export const BannerLoginWrapper = styled.section`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  border-radius: 0px 16px 16px 0px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  .title,
  .paragraph {
    color: #fff !important;
  }

  .title {
    font-family: 'Yekan Bakh FaNum';
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 56px;
  }

  .paragraph {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 31px;
  }

  @media (max-width: 767px) {
    border-radius: 16px;
    padding: 1rem 0;
  }
`
