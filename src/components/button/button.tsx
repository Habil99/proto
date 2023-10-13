import { FC } from "react";
import {
  ButtonIconPosition,
  ButtonMode,
  ButtonPropsType,
  ButtonSize,
} from "@/components/button/button.type";
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
  ...attributes
}) => {
  return (
    <button
      className={clsx(className, "btn", {
        btn__md: size === ButtonSize.Md,
        btn__sm: size === ButtonSize.Sm,
        btn__lg: size === ButtonSize.Lg,
        btn__primary: mode === ButtonMode.Primary,
        btn__secondary: mode === ButtonMode.Secondary,
        btn__base: mode === ButtonMode.Base,
        btn__rounded: rounded,
        btn__outlined: outlined,
      })}
      {...attributes}
    >
      {icon && position === ButtonIconPosition.Before && icon}
      {children && <span>{children}</span>}
      {icon && position === ButtonIconPosition.After && icon}
    </button>
  );
};
