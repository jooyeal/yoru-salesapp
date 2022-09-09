import React, { useEffect } from "react";

const useClickOutSide = (ref: any, callback: () => void) => {
  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => document.removeEventListener("mousedown", clickOutSide);
  }, []);
};

export default useClickOutSide;
