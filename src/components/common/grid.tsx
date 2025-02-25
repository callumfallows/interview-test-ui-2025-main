import React from "react";

interface GridProps {
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

export default Grid;
