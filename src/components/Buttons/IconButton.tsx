import React from "react";
import styles from "./styles/IconButton.module.css";

interface IconButtonProps {
  size: "small" | "large";
  color: "white" | "red" | "gray";
  className?: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  size,
  icon,
  color,
  className = "",
  active = false,
  onClick = () => {},
}) => {
  const btnSize = size === "small" ? styles.small : styles.large;
  const btnColor = color === "white" ? styles.white : color === "red" ? styles.red : styles.gray;
  const isBtnActive = active === false ? "" : styles.btnActive;
  return (
    <button
      onClick={onClick}
      className={[styles.btn, btnSize, btnColor, isBtnActive, className].join(" ")}
    >
      {icon}
    </button>
  );
};

export default IconButton;
