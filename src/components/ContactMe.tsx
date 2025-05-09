import { useState } from "react";

export const ContactMe = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="absolute border-2 rounded-full w-16 h-16 max-sm:w-18 max-sm:h-18  right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center cursor-pointer z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleClick}
    >
      <div className="bg-[var(--tag-color)] border-2 rounded-full w-10 h-10 z-20" />
      <div
        className={`absolute cursor-pointer mr-4 flex items-center pl-2 rounded-lg border bg-[var(--tag-color)] w-36 h-8 right-0 top-1/2 -translate-y-1/2 origin-right transition-all duration-500 z-10 ${
          visible ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
        }`}
      >
        <a href="mailto:spirituinteriore@gmail.com" className="hover:text-yellow-300 hover:underline">
          contact me
        </a>
      </div>
    </div>
  );
};