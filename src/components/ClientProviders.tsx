"use client";

import ThemeProvider from "./ThemeProvider";
import StarFieldProvider, { useStarField } from "./StarFieldProvider";
import StarField from "./StarField";

function StarFieldLayer() {
  const { starsOn } = useStarField();
  if (!starsOn) return null;
  return <StarField />;
}

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <StarFieldProvider>
        <StarFieldLayer />
        {children}
      </StarFieldProvider>
    </ThemeProvider>
  );
}
