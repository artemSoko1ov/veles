import styles from "./Button.module.scss";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type Variant = "primary" | "outline";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: Variant;
};

const Button = ({ className, children, type = "button", variant = "primary", ...props }: Props) => {
  return (
    <button className={clsx(styles.button, styles[variant], className)} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
