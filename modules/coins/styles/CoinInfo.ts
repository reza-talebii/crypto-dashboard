import { styled } from 'styled-components'

export const CoinInfoWrapper = styled.section`
  width: 248px;
  height: 171px;
  background: #ffffff;
  border-radius: 16px;
  padding: 10px;

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    display: flex;
    gap: 10px;
  }

  .ant-typography {
    margin: 0;
  }

  .up {
    color: #2ac479;
  }

  .down {
    color: #ea3838;
  }
`
