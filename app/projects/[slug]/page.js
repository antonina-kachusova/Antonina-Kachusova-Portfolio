import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ButtonLink from "../../../components/ButtonLink";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Antonina Kachusova`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="section pageSection">
      <div className="container">
        <Link className="backLink" href="/projects">
          Back to projects
        </Link>

        <div className="projectDetailsGrid">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="largeText">{project.longDescription}</p>
            {project.projectNote ? (
              <p className="projectNote">{project.projectNote}</p>
            ) : null}

            <div className="tagList">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="buttonGroup">
              <ButtonLink href={project.githubUrl}>GitHub</ButtonLink>
              {project.liveUrl ? (
                <ButtonLink href={project.liveUrl} variant="secondary">
                  Live demo
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <div className="detailImageWrap">
            {project.demoGif || project.demoImage ? (
              <img
                src={project.demoGif || project.demoImage}
                alt={project.demoAlt}
                className="detailImage"
              />
            ) : (
              <Image
                src={project.detailImage || project.image}
                alt={
                  project.detailImageAlt ||
                  project.imageAlt ||
                  `${project.title} preview`
                }
                width={900}
                height={620}
                className="detailImage"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
