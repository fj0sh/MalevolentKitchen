import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  height?: number;
}

const Cardsm = (props: Props) => {
  const { children } = props;

  return (
    <div className="border shadow-md rounded-lg p-5  mt-15 max-h-[200px] hover:border-black">
      {children}
    </div>
  );
};

export default Cardsm;
