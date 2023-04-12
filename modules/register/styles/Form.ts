import { Col } from 'antd'
import { styled } from 'styled-components'

export const FormRegisterWrapper = styled(Col)`
  background: #fff;
  border-radius: 16px 0px 0px 16px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;

  .ant-form {
    gap: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 500px !important;
  }

  .headerTitle {
    text-align: center;

    &__sub {
      margin-top: 0 !important;
    }

    &__step {
      margin: 0;
      font-weight: 700;
      font-size: 16px;
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 16px;
  }

  @media (max-width: 400px) {
    border-radius: 0;
  }
`
