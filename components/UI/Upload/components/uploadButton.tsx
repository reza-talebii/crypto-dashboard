import { Spin } from 'antd'
import React, { FC } from 'react'

const UploaderButton: FC<{ loading?: boolean }> = ({ loading }) => {
  return (
    <section>
      {!loading && (
        <>
          <span className="material-icons">add</span>
          <div className="mt-2">بارگزاری عکس</div>
        </>
      )}
      {loading && <Spin spinning={loading} />}
    </section>
  )
}

export default UploaderButton
