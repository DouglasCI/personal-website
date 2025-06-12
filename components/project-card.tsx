"use client"

import { FaExternalLinkSquareAlt } from "react-icons/fa";
import clsx from "clsx";
import Image from "next/image";

interface ProjectCardProps {
  href?: string;
  thumbnail: string;
  content: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  content,
  thumbnail,
}) => {
  return (
    <div className={clsx("flex flex-row interactive-card gap-3", href && "cursor-pointer group")}>
      <div
        className={"flex flex-col"}
        onClick={() => href && window.open(href, "_blank")}
      >
        <div className="flex flex-row items-start gap-4">
          <Image
            src={thumbnail}
            alt="thumbnail"
            width={150}
            height={150}
            className="mt-1.5 rounded-md"
          />
          
          {content}
        </div>
      </div>

      <div className="flex mt-1 w-4 opacity-60">
        {href && <FaExternalLinkSquareAlt className="transition-transform duration-200 group-hover:scale-125 origin-bottom-left" />}
      </div>
    </div>
  )
}