import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthSwitch.module.css";
import classNames from "classnames";

interface AuthSwitchProps {
  label?: string;
  linkText: string;
  path: string;
  className?: string;
}

const AuthSwitch: React.FC<AuthSwitchProps> = ({
  label,
  linkText,
  path,
  className,
}) => {
  return (
    <div className={classNames(className, styles.container)}>
      {label && <p className={styles.label}>{label}</p>}
      <Link to={path} className={styles.link}>
        {linkText}
      </Link>
    </div>
  );
};

export default AuthSwitch;
