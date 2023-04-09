import React, { FC, ReactNode } from 'react'
import { TableUiStyled } from './style'
import { Table, TableProps } from 'antd'
import { DefaultRecordType } from 'rc-table/lib/interface'

interface IProps extends TableProps<DefaultRecordType> {
  wrapperClassName?: string
}

const TableUi: FC<IProps> = ({ wrapperClassName, pagination = false, ...props }) => {
  return (
    <TableUiStyled className={wrapperClassName}>
      <Table pagination={pagination} {...props} />
    </TableUiStyled>
  )
}

export default TableUi
