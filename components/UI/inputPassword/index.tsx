import { Input, InputProps } from "antd";
import React, { FC, ReactNode } from "react";
import FormControlUiKit from "../FormControl";
import { InputPasswordStyled } from "./styles";

interface IProps extends InputProps {
  label?: string;
}

const InputPassword: FC<IProps> = ({ label, ...props }) => {
  return (
    <FormControlUiKit
      label={label}
      height={"45px"}
      icon={<span className="material-icons">lock</span>}
    >
      <InputPasswordStyled autoComplete="off" {...props} />
    </FormControlUiKit>
  );
};

export default InputPassword;
