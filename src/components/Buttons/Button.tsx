import React from "react";
import styles from "./styles/Button.module.css";

interface ButtonProps {
  size: "small" | "large";
  color: "white" | "red";
  className?: string;
  innerContent: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  innerContent,
  className = "",
  onClick = () => {},
}) => {
  const btnSize = size === "small" ? styles.small : styles.large;
  const btnColor = color === "white" ? styles.white : styles.red;
  return (
    <button
      onClick={onClick}
      className={[styles.btn, btnSize, btnColor, className].join(" ")}
    >
      {innerContent}
    </button>
  );
};

export default Button;
