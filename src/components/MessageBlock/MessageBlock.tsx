import React from "react";
import styles from "./MessageBlock.module.css";

interface MessageBlockProps {
  innerContent: React.ReactNode;
  color: "gray" | "red";
  icon: React.ReactNode;
}

const MessageBlock: React.FC<MessageBlockProps> = ({ innerContent, color, icon }) => {
  const messageBlockColor =
    styles.messageBlockWrapper + (color === "gray" ? " bg-gray-100" : " bg-red-300");
  return (
    <div className={messageBlockColor}>
      {icon}
      <div className={styles.messageBlockContent}>{innerContent}</div>
    </div>
  );
};

export default MessageBlock;
