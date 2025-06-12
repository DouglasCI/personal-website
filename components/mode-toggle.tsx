"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      className="cursor-pointer relative h-12 w-12"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="transition-opacity duration-100 absolute flex items-center justify-center"
           style={{ opacity: isDark ? 0 : 1 }}>
        <Sun className="h-16 w-16" />
      </div>
      <div className="transition-opacity duration-100 absolute flex items-center justify-center"
           style={{ opacity: isDark ? 1 : 0 }}>
        <Moon className="h-16 w-16" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
