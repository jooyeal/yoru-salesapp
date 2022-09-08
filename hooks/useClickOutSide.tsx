import React, { useEffect } from "react";

const useClickOutSide = (ref: any) => {
  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) console.log("out");
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => document.removeEventListener("mousedown", clickOutSide);
  }, []);
};

export default useClickOutSide;
