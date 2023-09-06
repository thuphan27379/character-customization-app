import React from "react";

export const Part = ({ path, index, zIndex }) => {
  // tung cai character de select
  console.log("rerender");
  return (
    <img
      src={`character/${path}/${index + 1}.png`}
      alt=""
      width={260}
      style={{ zIndex, position: "absolute", left: 0, top: 0 }}
    />
  );
};
