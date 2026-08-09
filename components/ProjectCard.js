import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const technologies = project.cardTechnologies || project.technologies;
  const category = project.cardCategory || project.category;
  const imageSrc = project.cardImage || project.image;
  const imageAlt =
    project.cardImageAlt || project.imageAlt || `${project.title} preview`;
  const imageClassName =
    project.cardImageFit === "contain"
      ? "projectImage projectImage-contain"
      : "projectImage";

  return (
    <Link href={`/projects/${project.slug}`} className="projectCardLink">
      <article className="projectCard">
        <div className="projectImageLink">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={640}
            height={420}
            className={imageClassName}
          />
        </div>

        <div className="projectCardBody">
          <div className="projectMeta">
            <span>{category}</span>
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="tagList">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
