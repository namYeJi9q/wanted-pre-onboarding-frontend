import React, { Children } from "react";

const Template = () => {
  return (
    <div>
      <h1>오늘의 할일 (0)</h1>
      <div>{Children}</div>
    </div>
  );
};

export default Template;
