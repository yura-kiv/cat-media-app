import React from "react";
import styles from "./styles/IconButton.module.css";

interface IconButtonProps {
  size: "small" | "large";
  color: "white" | "red";
  className?: string;
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ size, icon, color, className = "" }) => {
  const btnSize = size === "small" ? styles.small : styles.large;
  const btnColor = color === "white" ? styles.white : styles.red;
  return <button className={[styles.btn, btnSize, btnColor, className].join(" ")}>{icon}</button>;
};

export default IconButton;
