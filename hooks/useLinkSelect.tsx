import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useLinkSelect = () => {
  const router = useRouter();
  const [currentLink, setCurrentLink] = useState<string>("");
  useEffect(() => {
    setCurrentLink(router.pathname);
  }, []);

  return currentLink;
};

export default useLinkSelect;
