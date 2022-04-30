import React, { FC, ReactNode } from "react";
import StyledButton from "./styles";
import { ButtonProps as MuiProps } from "@mui/material";

type ButtonProps = Pick<
  MuiProps,
  "variant" | "disabled" | "startIcon" | "onClick"
> & {
  className?: string;
  children?: ReactNode;
};
const Button: FC<ButtonProps> = ({
  className,
  variant,
  disabled,
  onClick,
  startIcon,
  children,
}) => {
  return (
    <StyledButton
      className={className}
      variant={variant || "contained"}
      disabled={disabled}
      startIcon={startIcon}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
