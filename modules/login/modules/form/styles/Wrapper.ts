import { Form } from 'antd'
import { styled } from 'styled-components'

export const LoginFromStyled = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background: #fff;
  border-radius: 16px 0px 0px 16px;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 2.5rem;

  .ant-form-item {
    width: 100%;
  }

  .title {
    font-weight: 900 !important;
    font-size: 40px;
    color: #000000;
    margin: 0;
  }

  .link {
    font-weight: 700;
    font-size: 17px;
    line-height: 31px;
    color: #388aea;
  }

  .btn {
    width: 170px;
    height: 49px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    border-radius: 16px;
    gap: 1rem;
    padding: 1.5rem 2rem;
  }

  @media (max-width: 567px) {
    border-radius: 16px;
    gap: 1rem;
    padding: 1.5rem 2rem;
  }
  @media (max-width: 401px) {
    padding: 1.5rem 0.5rem;
  }
`
