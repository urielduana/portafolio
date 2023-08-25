import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Chip,
} from "@nextui-org/react";

import technologies from "../data/technologies.json";
import VadoseIcon from "./VadoseIcon";

interface Props {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: Array<number>;
    repository: string;
    logo: string;
  };
}

export default function ProjectCard({ project }: Props) {
  const styles = [
    "text-tech-10 border-tech-10",
    "text-tech-20 border-tech-20",
    "text-tech-30 border-tech-30",
    "text-tech-40 border-tech-40",
    "text-tech-50 border-tech-50",
    "text-tech-100 border-tech-100",
    "text-tech-200 border-tech-200",
    "text-tech-300 border-tech-300",
    "text-tech-400 border-tech-400",
    "text-tech-500 border-tech-500",
    "text-tech-600 border-tech-600",
    "text-tech-700 border-tech-700",
    "text-tech-800 border-tech-800",
  ];

  return (
    <Card className="max-w-xs" key={project.id}>
      <CardHeader className="inline-grid justify-start w-fill ">
        <div className="overflow-visible py-2 ">
          {/* <Image
            alt="Card background"
            className="object-cover rounded-xl w-full mb-3"
            src="https://nextui.org/images/hero-card.jpeg"
          /> */}
        </div>
        <div className="flex gap-3">
          {project.logo == "" ? (
            <VadoseIcon size={64} />
          ) : (
            <img
              className="rounded"
              alt="{project.title} logo"
              src={project.logo}
              width="64"
              height="64"
            ></img>
          )}
          <div className="flex flex-col w-3/4">
            <p className="text-md">{project.title}</p>
            <div className="flex flex-wrap my-1 gap-1 ">
              {project.technologies.map((technology) => (
                <Chip
                  key={technology}
                  variant="bordered"
                  size="sm"
                  radius="sm"
                  className={styles[technology]}
                >
                  {technologies.technologies[technology].name}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{project.description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={project.repository}>
          Visit code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
