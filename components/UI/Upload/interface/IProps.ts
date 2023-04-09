import { UploadProps } from 'antd'

export interface IUploaderProps extends Omit<UploadProps, 'onPreview'> {
  loading?: boolean
}
