"use client";

import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  // Calcula qué porcentaje de la página se ha recorrido cada vez que el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full">
      <div className="h-full bg-primary dark:bg-primary-light" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
