import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(1024);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
