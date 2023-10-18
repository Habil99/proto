import React from "react";

export enum ButtonVariantEnum {
  Base = "base",
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
}

export enum ButtonSizeEnum {
  Xs = "xs",
  Sm = "sm",
  Md = "md",
  Lg = "lg",
}

export enum ButtonIconPositionEnum {
  Before = "before",
  After = "after",
}

export type ButtonVariant = "base" | "primary" | "secondary" | "success";
export type ButtonIconPosition = "before" | "after";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  position?: ButtonIconPosition;
  size?: ButtonSize;
  classNames?: string;
  rounded?: boolean;
  outlined?: boolean;
};
