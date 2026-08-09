import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export const metadata = {
  title: "Projects | Antonina Kachusova",
  description: "Frontend projects by Antonina Kachusova.",
};

export default function ProjectsPage() {
  return (
    <section className="section pageSection">
      <div className="container">
        <div className="pageIntro">
          <p className="eyebrow">Projects</p>
          <h1>Projects</h1>
          <p>
            A collection of frontend and full-stack learning projects built
            with React, Next.js, TypeScript, JavaScript, APIs, routing, state
            management, forms, authentication, database integration, and
            responsive UI.
          </p>
          <p>
            This page includes all portfolio projects. Selected projects are
            also featured on the Home page.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
