"use client"

export const Bold = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-semibold text-emph transition-colors">
      {children}
    </span>
  )
}