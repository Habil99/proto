import React from "react";
import { EnumAsUnion } from "@/types";

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

export type ButtonModeType = typeof ButtonMode; // not key, but value
export type ButtonIconPositionType = typeof ButtonIconPosition;
export type ButtonSizeType = typeof ButtonSize;

export type ButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  mode?: EnumAsUnion<ButtonModeType>;
  icon?: React.ReactNode;
  position?: EnumAsUnion<ButtonIconPositionType>;
  size?: EnumAsUnion<ButtonSizeType>;
  classNames?: string;
  rounded?: boolean;
  outlined?: boolean;
};
