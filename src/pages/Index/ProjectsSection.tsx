import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects.json";

export default function ProjectsSection() {
  return (
    <section className="px-6" id="projects">
      <div className="flex justify-center">
        <div className="max-w-3xl text-center mt-10 mb-10 text-xl">
          {/* Title */}
          <h2 className="text-3xl font-semibold">Projects I've worked on...</h2>
          {/* Paragraph description */}
          <div className="font-light my-5">
            <p>Take a closer look at some of the projects I've done.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {projects.projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
