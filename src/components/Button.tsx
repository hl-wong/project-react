import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md" | "lg";
  label: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  className,
  size = "md",
  icon,
  iconPosition,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        className,
        styles["btn"],
        variant === "primary" && styles["primary"],
        variant === "secondary" && styles["secondary"],
        variant === "tertiary" && styles["tertiary"],
        size === "sm" && styles["sm"],
        size === "md" && styles["md"],
        size === "lg" && styles["lg"]
      )}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <span className={styles["icon"]}>{icon}</span>
      )}
      {label}
      {icon && iconPosition === "right" && (
        <span className={styles["icon"]}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
