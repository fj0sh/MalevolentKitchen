import React from "react";

type Props = [];

interface SkeletonProps {
  count: number;
}

const Loading = ({ count }: SkeletonProps) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div
        key={i}
        className=" bg-gray-200 h-20 mb-4 rounded-sm animate-pulse"
      ></div>
    );
  }

  return <>{skeletons}</>;
};

export default Loading;
