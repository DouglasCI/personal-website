import { Bold } from "@/components/bold";
import { InfoCard } from "@/components/info-card";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Highlight } from "@/components/highlight";
import { ModeToggle } from "@/components/mode-toggle";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const natooraHyperlink = <a
    href="https://natoora.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    <Highlight>Natoora</Highlight>
  </a>

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col sticky top-0 max-h-screen px-6 py-30 gap-4 w-1/2 justify-between items-center">
          <div className="flex flex-col gap-3">
            <div className="text-6xl font-medium">Douglas Chen</div>

            <div className="text-2xl font-extralight opacity-70">Software Developer</div>
          </div>

          <Separator orientation="vertical" className="!h-30 bg-highlight opacity-50 transition-[background-color] duration-200" />

          <Separator orientation="vertical" className="!h-30 bg-highlight opacity-50 transition-[background-color] duration-200" />

          <div className="flex justify-center"><ModeToggle /></div>
        </div>
      
        <div className="flex flex-col items-end gap-4 py-32 px-6 w-1/2">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <SectionHeader sectionName="About" />

              <div className="font-light text-lg text-subtle">
                I&apos;m a developer focused on delivering well-designed and practical solutions.
                I pay close attention not only to functionality, but also to the structure, scalability, 
                and user experience of the systems I build. Whether I&apos;m working on front-end design or 
                back-end logic, I look for <Bold>clean, efficient, and reliable solutions</Bold>.
              </div>
              
              <div className="font-light text-lg text-subtle">
                I&apos;m a full-stack developer at {natooraHyperlink}, where I help <Bold>modernize our codebase</Bold>. 
                On the frontend, I&apos;m migrating a legacy Angular app to <Highlight>React</Highlight> with Material UI, to
                <Bold> enable a more scalable and developer-friendly architecture</Bold>. 
                While on the backend, I work with <Highlight>Django REST Framework</Highlight> to <Bold>improve API structure and maintainability</Bold>.
              </div>

              <div className="font-light text-lg text-subtle">
                In my free time, I mostly play piano and games, and once in a while, I even compose a bit 
                of <span className="relative group"><Bold>music</Bold><span className="music-note">🎵</span></span>.
              </div>
            </div>

            <div>
              <SectionHeader sectionName="Experience" className="mb-2" />
              
              <div className="flex flex-col gap-2">
                <InfoCard
                  title="Natoora"
                  date="02/2025 - Present"
                  href="https://natoora.com"
                  badges={
                    [
                      "JavaScript", "TypeScript", "React", "TanStack", "Material UI", "AngularJS", "Python",
                      "Django", "DRF", "GCP", "Docker", "Kubernetes", "git", "Jira", "Figma", "Scrum"
                    ]
                  }
                  content={
                    <div className="font-light text-subtle">
                      Migrate legacy Angular frontend to React with Material UI, and refactor a 
                      Django REST Framework API for better modularity and RESTful design. Work with 
                      a <Bold>team that includes designers, product managers, and other developers</Bold>. 
                      Taking advantage of <Bold>good communication to assure agile deployment</Bold>.
                    </div>
                  }
                />
              </div>
            </div>
            
            <div>
              <SectionHeader sectionName="Education" className="mb-2" />

              <div className="flex flex-col gap-3">
                <InfoCard 
                  title="Bachelor's Degree in Computer Science"
                  date="03/2019 - 10/2024"
                  badges={
                    [
                      "Logic", "Data Structures", "Programming Languages", "Computer Theory", "Software Design", 
                      "Software Architecture", "Object-oriented Programming", "Machine Learning", "Databases", "Computer Graphics"
                    ]
                  }
                  content={
                    <div className="font-light text-subtle">
                      Earned my degree from the Federal University of São Carlos, where I developed <Bold>solid skills in 
                      programming logic, software design, and computational thinking</Bold>. The curriculum covered a wide 
                      range of topics, from low-level programming in C to high-level AI techniques in machine learning.
                    </div>
                  }
                />

                <InfoCard 
                  title="Research Initiation"
                  date="02/2024 - 10/2024"
                  badges={["Java", "Rust", "Parallelism", "Code Optimization", "Distributed Systems"]}
                  content={
                    <div className="font-light text-subtle">
                      Convert a consensus algorithm from Java to Rust, <Bold>optimizing for performance</Bold>. 
                      Use <Bold>parallelism and task scheduling</Bold> to synchronize network communication with disk I/O.
                    </div>
                  }
                />

                <InfoCard 
                  title="Web Development Bootcamp"
                  date="06/2024 - 10/2024"
                  href="https://www.udemy.com/certificate/UC-d8f6ef5a-444b-42d0-9ec5-a66872e55225/"
                  badges={
                    [
                      "HTML", "CSS", "Bootstrap", "Javascript", "Node.js", "EJS", "Express.js", 
                      "JQuery", "API REST", "SQL", "PostgreSQL", "OAuth"
                    ]
                  }
                  content={
                    <div className="font-light text-subtle">
                      Learn the <Bold>fundamentals of full-stack Web development</Bold> from pure HTML and CSS, 
                      to frontend and backend integration using Node.js and EJS, as well as the basics of 
                      SQL and user authentication.
                    </div>
                  }
                />

                <div>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center group w-fit border-1 rounded-md border-accent gap-2 ml-7 mt-3 p-2"
                  >
                    <Highlight className="text-xl">View Résumé</Highlight>
                    <FaExternalLinkSquareAlt
                      size={20}
                      className="text-highlight transition-transform duration-200 group-hover:scale-115 origin-bottom-left"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader sectionName="Projects" className="mb-2" />

              <ProjectCard 
                content={
                  <div className="font-light text-subtle">
                    Learn the <Bold>fundamentals of full-stack Web development</Bold> from pure HTML and CSS, 
                    to frontend and backend integration using Node.js and EJS, as well as the basics of 
                    SQL and user authentication.
                  </div>
                }
                thumbnail={"/personal_website.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
