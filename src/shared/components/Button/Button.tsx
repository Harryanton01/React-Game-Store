import React, { FC, ReactNode } from "react";
import StyledButton from "./styles";
import { ButtonProps as MuiProps } from "@mui/material";

type ButtonProps = Pick<
  MuiProps,
  "variant" | "disabled" | "startIcon" | "onClick"
> & {
  "data-testid"?: string;
  className?: string;
  children?: ReactNode;
};
const Button: FC<ButtonProps> = ({
  className,
  variant,
  disabled,
  onClick,
  "data-testid": dataTestId,
  startIcon,
  children,
}) => {
  return (
    <StyledButton
      data-testid={dataTestId}
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
