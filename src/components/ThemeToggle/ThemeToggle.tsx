import React, { useState } from "react";
import styles from "./ThemeToggle.module.css";
import { ReactComponent as EyeOpen } from "../../assets/icons/eye-open-16.svg";
import { ReactComponent as EyeClose } from "../../assets/icons/eye-close-16.svg";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={styles.themeToggleWrapper}>
      <div className={styles.themeEye}>{theme ? <EyeOpen /> : <EyeClose />}</div>
      <button
        className={styles.themeToggle}
        onClick={() => setTheme(!theme)}
      >
        <div
          className={[
            styles.themeToggleCircle,
            theme ? styles.themeToggleCircleLight : styles.themeToggleCircleDark,
          ].join(" ")}
        ></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
