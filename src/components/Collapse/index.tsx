import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

type CollapseProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  showIcon?: boolean;
};

const Collapse = ({ children, title, showIcon = true }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onCollapse = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        className="flex gap-3 items-center cursor-pointer "
        onClick={onCollapse}
      >
        <AiOutlineRight
          className={`transform transition-transform duration-300 text-gray-300 text-[clamp(10px,2vw,14px)] min-w-5 ${
            isOpen ? "rotate-90" : ""
          } ${showIcon ? "visible" : "invisible"}`}
        />
        <div className="font-medium">{title}</div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out
           ${
             isOpen
               ? "grid-rows-[1fr] opacity-100"
               : "grid-rows-[0fr] opacity-0"
           }`}
      >
        {isOpen && <div>{children}</div>}
      </div>
    </div>
  );
};

export default Collapse;
