import { Row } from 'antd'
import { styled } from 'styled-components'

export const WalletWrapper = styled(Row)`
  width: 100%;
  height: 218px;
  background: #ffffff;
  border-radius: 16px;
  padding: 10px 13px 0;

  .listWallet {
    max-height: 160px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .ant-list-item {
      border-block-end: none !important;
    }

    .ant-list-item-meta-avatar {
      margin-inline-end: 9px !important;
    }

    .ant-list-item-meta-content {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }
  }
`
