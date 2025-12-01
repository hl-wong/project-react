import classNames from "classnames";
import React from "react";

interface DividerOrProps {
  className?: string;
}

const DividerOr: React.FC<DividerOrProps> = ({ className }) => {
  return (
    <div className={classNames(className, "flex items-center gap-4")}>
      <hr className="w-full text-gray-400" />
      <p className="text-gray-400 text-sm">or</p>
      <hr className="w-full text-gray-400" />
    </div>
  );
};

export default DividerOr;
