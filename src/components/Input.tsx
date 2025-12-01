import classNames from "classnames";
import React, { useState } from "react";
import styles from "./Input.module.css";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  type: "text" | "email" | "password";
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  icon,
  className,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={classNames(className)}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            type={show ? "text" : type}
            placeholder={placeholder}
            className={styles.input}
          />
        </div>
        {type === "password" && (
          <span
            className={classNames(styles.icon, styles["icon__password"])}
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff /> : <Eye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
