"use client";

import { useEffect, useState } from "react";

export default function FadeIn({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure animation is noticeable
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {children}
    </div>
  );
}
