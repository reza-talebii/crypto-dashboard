import { Table } from 'antd'
import styled from 'styled-components'

export const TableUiStyled = styled.section`
  padding: 16px;
  width: 100%;
  height: auto;
  background: #23272e;
  border-radius: 16px;

  .ant-table-thead .ant-table-cell {
    border: none !important;
  }

  .ant-table-row-expand-icon {
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }

  .ant-pagination {
    align-items: center;
  }

  .ant-table-footer {
    background-color: transparent !important;
  }

  .ant-pagination-item {
    background-color: transparent !important;
  }

  .ant-table-cell {
    text-align: center !important;
  }

  .ant-table-thead .ant-table-cell {
    background: transparent !important;

    &::before {
      background-color: rgba(86, 87, 91, 0.2) !important;
    }
  }

  .ant-table-tbody {
    background: ${props => props.theme.colors.components.footerBg};
    td {
      border-bottom: 1px solid rgba(86, 87, 91, 0.3) !important;
    }

    .ant-table-cell-row-hover {
      background: transparent !important;
      border-radius: 0 !important;
    }
  }
`
