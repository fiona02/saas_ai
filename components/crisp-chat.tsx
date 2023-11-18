"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7e0930ad-0f95-4b58-a4f7-ffd05e6f62e1");
  }, []);

  return null;
};
