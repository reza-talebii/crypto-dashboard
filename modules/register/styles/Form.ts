import { Col } from 'antd'
import { styled } from 'styled-components'

export const FormRegisterWrapper = styled(Col)`
  background: #fff;
  border-radius: 16px 0px 0px 16px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;

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
`
