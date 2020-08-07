import React from "react";

const MessageArea = ({ messages }) => {
  const renderMessageArea = messages.map(({ message }) => {
    return <li key={Math.random()}>{message}</li>;
  });

  return (
    <div className="message-area">
      <h3>操作紀錄</h3>
      <ul>{renderMessageArea}</ul>
    </div>
  );
};

MessageArea.defaultProps = {
  messages: [],
};

export default MessageArea;
