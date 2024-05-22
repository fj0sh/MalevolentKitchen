import React from "react";

interface Props {
  className?: string;
  name?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const Button = (props: Props) => {
  const { name } = props;

  return (
    <button className="p-3 rounded-lg border border-black-1000" {...props}>
      {name ?? "button"}
    </button>
  );
};

export default Button;
