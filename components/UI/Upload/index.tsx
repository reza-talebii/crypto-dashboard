import { Modal, UploadFile } from 'antd'
import React, { FC, useState } from 'react'
import { UploaderUiStyled } from './styles'
import { RcFile } from 'antd/lib/upload/interface'
import { IUploaderProps } from './interface'
import UploaderButton from './components/uploadButton'
import { UploadRequestOption } from 'rc-upload/lib/interface'

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

const UploaderUi: FC<IUploaderProps> = ({ fileList, maxCount = 3, loading, ...props }) => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [previewTitle, setPreviewTitle] = useState('')

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }
  const dummyRequest: (options: UploadRequestOption) => void = ({ file, onSuccess }) => {
    setTimeout(() => {
      console.log()
      if (onSuccess) {
        onSuccess('done')
        return file
      }
    }, 0)
  }

  return (
    <>
      <UploaderUiStyled
        accept="image/png, image/jpeg , image/jpg"
        listType="picture-card"
        action={undefined}
        fileList={fileList}
        onPreview={handlePreview}
        {...props}
        customRequest={dummyRequest}
      >
        {fileList && fileList?.length >= maxCount ? null : <UploaderButton loading={loading} />}
      </UploaderUiStyled>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img alt="uploaded image" className="w-full" src={previewImage} />
      </Modal>
    </>
  )
}

export default UploaderUi
