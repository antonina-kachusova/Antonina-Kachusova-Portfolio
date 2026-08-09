import ButtonLink from "../components/ButtonLink";
import ProjectCard from "../components/ProjectCard";
import SkillList from "../components/SkillList";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero section">
        <div className="container heroGrid">
          <div className="heroContent">
            <p className="eyebrow">Portfolio</p>
            <h1>Antonina Kachusova</h1>
            <p className="heroTitle">Junior Frontend Developer</p>
            <p className="heroText">
              I build responsive web applications with React, TypeScript,
              Next.js, and JavaScript. This portfolio presents my frontend and
              Next.js projects, including practical work with routing, forms,
              APIs, authentication, database integration, localStorage, and
              clean UI structure.
            </p>
            <div className="buttonGroup">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact me
              </ButtonLink>
            </div>
          </div>

          <div className="heroPanel" aria-label="Developer profile summary">
            <div className="profileCard">
              <span className="profileLabel">Current focus</span>
              <strong>React + Next.js</strong>
              <p>
                Building responsive, maintainable frontend and Next.js projects
                with React, TypeScript, App Router, forms, APIs, and modern UI
                structure.
              </p>
            </div>
            <div className="statsGrid">
              <div>
                <strong>{projects.length}</strong>
                <span>Portfolio projects</span>
              </div>
              <div>
                <strong>{skills.length}</strong>
                <span>Skill groups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <p className="eyebrow">About</p>
            <h2>Building React and Next.js Frontend Projects.</h2>
          </div>
          <div>
            <p>
              I create responsive, structured web applications and continue
              improving my skills through portfolio projects focused on React,
              TypeScript, Next.js App Router, forms, routing, APIs, localStorage,
              authentication, database integration, and clean UI architecture.
            </p>
            <ButtonLink href="/about" variant="text">
              More about me
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section mutedSection">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Skills</p>
            <h2>Skills &amp; Technologies</h2>
          </div>
          <SkillList skills={skills} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Selected work</p>
            <h2>Featured Projects</h2>
          </div>
          <div className="projectGrid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="sectionAction">
            <ButtonLink href="/projects" variant="secondary">
              See all projects
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section ctaSection">
        <div className="container ctaContent">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>
              Open to Junior Frontend Developer roles and project-based
              opportunities.
            </h2>
          </div>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </div>
      </section>
    </>
  );
}
