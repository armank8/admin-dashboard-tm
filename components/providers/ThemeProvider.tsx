"use client"
import dynamic from "next/dynamic";

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
// function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// export default dynamic (() => Promise.resolve(ThemeProvider), {ssr: false})
