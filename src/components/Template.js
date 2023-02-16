import React from "react";

const Template = ({ children }) => {
  return (
    <div>
      <h1>오늘의 할일 (0)</h1>
      <div>{children}</div>
    </div>
  );
};

export default Template;
