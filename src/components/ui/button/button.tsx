import { FC } from "react";
import {
  ButtonIconPosition,
  ButtonPropsType,
  ButtonSize,
  ButtonVariant,
} from "@/components/ui/button/button.type";
import clsx from "clsx";

export const Button: FC<ButtonPropsType> = ({
  variant = ButtonVariant.Base,
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
        btn__primary: variant === ButtonVariant.Primary,
        btn__secondary: variant === ButtonVariant.Secondary,
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
