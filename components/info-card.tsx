"use client"

import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

interface InfoCardProps {
  title: string;
  date: string;
  href?: string;
  badges?: string[];
  content: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  date,
  href,
  badges,
  content,
}) => {
  return (
    <div className={clsx("flex flex-row interactive-card gap-3", href && "cursor-pointer group")}>
      <div
        className={"flex flex-col gap-2 grow"}
        onClick={() => href && window.open(href, "_blank")}
      >
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="text-lg font-normal">— {title}</div>
          <div className="border-t border-dotted border-highlight grow opacity-25" />
          <div className="opacity-70">{date}</div>
        </div>
        <div className="flex flex-col ml-5 gap-2">
          {content}

          <div className="flex flex-wrap gap-2">
            {badges?.map((badge) => (
              <Badge key={badge} variant="secondary">{badge}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex mt-1 w-4 opacity-60">
        {href && <FaExternalLinkSquareAlt className="transition-transform duration-200 group-hover:scale-125 origin-bottom-left" />}
      </div>
    </div>
  )
}