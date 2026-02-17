"use client";

import { createContext, useContext, useEffect, useState } from "react";

const StarFieldContext = createContext<{
  starsOn: boolean;
  toggleStars: () => void;
}>({
  starsOn: false,
  toggleStars: () => {},
});

export function useStarField() {
  return useContext(StarFieldContext);
}

export default function StarFieldProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [starsOn, setStarsOn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("starfield");
    if (stored === "true") setStarsOn(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("starfield", String(starsOn));
  }, [starsOn, mounted]);

  const toggleStars = () => setStarsOn((prev) => !prev);

  return (
    <StarFieldContext.Provider value={{ starsOn, toggleStars }}>
      {children}
    </StarFieldContext.Provider>
  );
}
