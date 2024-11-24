"use client";
import dynamic from "next/dynamic";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, useEffect } from "react";

export function ThemeProvider({
  // function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [loaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  if (!loaded) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-4 text-4xl">
        Loading...
      </div>
    );
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// export default dynamic (() => Promise.resolve(ThemeProvider), {ssr: false})
