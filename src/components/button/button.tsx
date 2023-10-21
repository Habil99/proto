import { FC } from "react";
import {
  ButtonIconPositionEnum,
  ButtonProps,
  ButtonSizeEnum,
  ButtonVariantEnum,
} from "@/components/button/button.type";
import clsx from "clsx";

export const Button: FC<ButtonProps> = ({
  variant = ButtonVariantEnum.Base,
  children,
  icon,
  position = ButtonIconPositionEnum.Before,
  size = ButtonSizeEnum.Md,
  className,
  rounded = false,
  outlined = false,
  ...attributes
}) => {
  return (
    <button
      className={clsx(className, "btn", {
        btn__md: size === ButtonSizeEnum.Md,
        btn__sm: size === ButtonSizeEnum.Sm,
        btn__lg: size === ButtonSizeEnum.Lg,
        btn__primary: variant === ButtonVariantEnum.Primary,
        btn__secondary: variant === ButtonVariantEnum.Secondary,
        btn__rounded: rounded,
        btn__outlined: outlined,
        "flex items-center gap-2":
          icon && position === ButtonIconPositionEnum.After,
        "flex items-center gap-2 flex-row-reverse":
          icon && position === ButtonIconPositionEnum.Before,
      })}
      {...attributes}
    >
      {icon && position === ButtonIconPositionEnum.Before && icon}
      {children && <span>{children}</span>}
      {icon && position === ButtonIconPositionEnum.After && icon}
    </button>
  );
};
