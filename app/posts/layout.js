import React from "react";
export const metadata = {
  title: "articales page",
};
const layout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>articales</h1>
      </div>
      {children}
    </div>
  );
};

export default layout;
