import { Input } from "antd";

const { TextArea } = Input;
import styled from "styled-components";

export const TextAreaStyled = styled(TextArea)`
  color: rgb(211 211 211);
  font: inherit;
  letter-spacing: inherit;
  padding: 4px 0 5px;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;
  padding: 16.5px 14px;
  resize: none !important;

  &:focus {
    box-shadow: none;
  }
`;
