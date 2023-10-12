import { FC } from "react";
import {
  ButtonIconPosition,
  ButtonMode,
  ButtonPropsType,
  ButtonSize,
} from "@/components/button/button.type";
import buttonStyles from "./button.module.scss";
import clsx from "clsx";

export const Button: FC<ButtonPropsType> = ({
  mode = ButtonMode.Base,
  children,
  icon,
  position = ButtonIconPosition.Before,
  size = ButtonSize.Md,
  className,
  rounded = false,
  outlined = false,
  ...attributes // TODO: pick className from attributes
}) => {
  return (
    <button
      className={clsx(className, buttonStyles.btn, {
        [buttonStyles.btn__md]: size === ButtonSize.Md,
        [buttonStyles.btn__sm]: size === ButtonSize.Sm,
        [buttonStyles.btn__lg]: size === ButtonSize.Lg,
        [buttonStyles.btn__primary]: mode === ButtonMode.Primary,
        [buttonStyles.btn__secondary]: mode === ButtonMode.Secondary,
        [buttonStyles.btn__base]: mode === ButtonMode.Base,
        [buttonStyles.btn__rounded]: rounded,
        [buttonStyles.btn__outlined]: outlined,
      })}
      {...attributes}
    >
      {icon && position === ButtonIconPosition.Before && icon}
      {children && <span>{children}</span>}
      {icon && position === ButtonIconPosition.After && icon}
    </button>
  );
};
