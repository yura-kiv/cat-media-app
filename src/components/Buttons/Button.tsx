import React from "react";
import styles from "./styles/Button.module.css";

interface ButtonProps {
  size: "small" | "large";
  color: "white" | "red";
  className?: string;
  innerContent: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size, color, innerContent, className = "" }) => {
  const btnSize = size === "small" ? styles.small : styles.large;
  const btnColor = color === "white" ? styles.white : styles.red;
  return (
    <button className={[styles.btn, btnSize, btnColor, className].join(" ")}>{innerContent}</button>
  );
};

export default Button;
