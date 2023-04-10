import styled from 'styled-components'

export const FormControlContainer = styled.section<{ height?: string }>`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;

  .ant-select-focused .ant-select-selector,
  .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
  }

  .label {
    font-weight: 900;
    font-size: 16px;
    line-height: 25px;
    color: #1e1e1e;
    position: absolute;
    right: 33px;
    top: -12px;
    z-index: 1;
    background: #fff;
    padding: 0 5px;
  }

  .childrenContainer {
    overflow: hidden;
    border-radius: 51px;
    display: flex;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4375em;
    position: relative;
    cursor: text;
    display: inline-flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: ${props => props.height};
    padding: 0 18px;
    border: 1px solid #d6d6d6;

    .icon {
      vertical-align: bottom;
      margin-right: 5px;
      font-size: 1.3rem;
      border-left: 1px solid #d6d6d6;
      padding-left: 7px;
    }
  }
`
