"use client"

import clsx from "clsx";

import { Separator } from "@/components/ui/separator";

interface SectionHeaderProps {
  sectionName: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionName,
  className,
}) => {
  return (
    <div className={clsx("flex items-center font-bold text-2xl opacity-90", className)}>
      {sectionName}
      <Separator className="grow !w-auto bg-highlight opacity-50 ml-4 !h-[3px] transition-[background-color] duration-300"/>
    </div>
  )
}