import { styled } from 'styled-components'

export const PopularCoinsWrapper = styled.section`
  width: 100%;
  height: 545px;
  background: #ffffff;
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;

    .listHeader {
      font-weight: 500;
      font-size: 14px;
    }
  }

  .timeSelect {
    width: 71px;
    height: 34px;
  }

  .coinName {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
  }

  .coinSymbol {
    font-weight: 700;
    font-size: 12px;
    color: #b3b3b3;
  }

  .up {
    color: #2ac479;
  }

  .down {
    color: #ea3838;
  }
`
