import React from "react";

export enum ButtonMode {
  Base = "base",
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
}

export enum ButtonSize {
  Xs = "xs",
  Sm = "sm",
  Md = "md",
  Lg = "lg",
}

export enum ButtonIconPosition {
  Before = "before",
  After = "after",
}

export type ButtonModeType = "base" | "primary" | "secondary" | "success";
export type ButtonIconPositionType = "before" | "after";
export type ButtonSizeType = "xs" | "sm" | "md" | "lg";

export type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  mode?: ButtonModeType;
  icon?: React.ReactNode;
  position?: ButtonIconPositionType;
  size?: ButtonSizeType;
  classNames?: string;
  rounded?: boolean;
  outlined?: boolean;
};