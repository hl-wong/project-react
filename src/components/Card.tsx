import React from "react";
import styles from "./Card.module.css";
import classNames from "classnames";

interface CardProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, desc, children, className }) => {
  return (
    <div className={classNames(styles["card"], className)}>
      <h2 className={styles["title"]}>{title}</h2>
      {desc && <p className={styles["desc"]}>{desc}</p>}
      <div className={styles["children"]}>{children}</div>
    </div>
  );
};

export default Card;
