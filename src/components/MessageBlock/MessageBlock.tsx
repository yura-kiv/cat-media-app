import React from "react";
import styles from "./MessageBlock.module.css";

interface MessageBlockProps {
  innerText: string;
  color: "gray" | "red";
  icon: React.ReactNode;
}

const MessageBlock: React.FC<MessageBlockProps> = ({ innerText, color, icon }) => {
  const messageBlockColor =
    styles.messageBlockWrapper + (color === "gray" ? " bg-gray-100" : " bg-red-300");
  return (
    <div className={messageBlockColor}>
      {icon}
      <span className={styles.messageBlockText}>{innerText}</span>
    </div>
  );
};

export default MessageBlock;
