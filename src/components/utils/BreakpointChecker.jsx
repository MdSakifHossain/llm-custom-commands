import React, { useState, useEffect } from "react";

const icon_size = "12";

const BreakpointChecker = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const checkBreakpoint = () => {
    let breakpointName = "Below sm";

    if (viewportWidth >= 96 * 16) {
      breakpointName = "2xl";
    } else if (viewportWidth >= 80 * 16) {
      breakpointName = "xl";
    } else if (viewportWidth >= 64 * 16) {
      breakpointName = "lg";
    } else if (viewportWidth >= 48 * 16) {
      breakpointName = "md";
    } else if (viewportWidth >= 40 * 16) {
      breakpointName = "sm";
    }

    alert(`Viewport: ${breakpointName}\nCurrent Width: ${viewportWidth}px`);
  };

  return (
    <button
      onClick={checkBreakpoint}
      className="
        fixed top-28 right-5 border-2 p-3 border-white bg-white rounded-full animate-bounce duration-150 z-10
        hover:bg-violet-500 hover:border-violet-500 hover:scale-150 hover:animate-none
        "
    >
      <img
        className={`w-${icon_size} h-${icon_size}`}
        src="./../../public/check.svg"
        alt="Logo"
      />
    </button>
  );
};

export default BreakpointChecker;
