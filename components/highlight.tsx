"use client"

import clsx from "clsx";

type HighlightProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <span className={clsx("font-semibold text-highlight transition-colors", className)}>
      {children}
    </span>
  )
}