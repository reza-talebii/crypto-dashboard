import { styled } from 'styled-components'

export const BannerRegisterStyled = styled.section`
  background: ${props => props.theme.colors.primary};
  border-radius: 0px 16px 16px 0px;
  width: 100%;
  height: 100%;
  padding: 1rem 10px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding: 4rem 1rem;

  .title {
    color: #ffffff;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0;
    border-radius: 16px;
  }

  @media (max-width: 400px) {
    border-radius: 0;
  }
`
