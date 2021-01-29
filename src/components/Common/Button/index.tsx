import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

export type CustomButtonProps = React.ComponentProps<typeof Button> & {
  color: string;
  textColor?: string;
  shadowColor?: string;
};

const _CustomButton = ({
  children,
  color,
  textColor,
  ...props
}: CustomButtonProps) => (
  <StyledButton color={color} textColor={textColor} {...props}>
    {children}
  </StyledButton>
);

const StyledButton = styled(
  Button
).attrs((props: CustomButtonProps) => ({}))<CustomButtonProps>`
  height: 56px;
  justify-content: center;
  border-radius: 28px;
  line-height: 24px;
  letter-spacing: 0.2;
  background-color: #103966;
` as React.ComponentType<CustomButtonProps>;

export const CustomButton = _CustomButton;
