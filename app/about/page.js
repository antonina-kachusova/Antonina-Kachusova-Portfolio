import SkillList from "../../components/SkillList";
import { skills } from "../../data/skills";

export const metadata = {
  title: "About | Antonina Kachusova",
  description: "About Antonina Kachusova, Junior Frontend Developer.",
};

export default function AboutPage() {
  return (
    <section className="section pageSection">
      <div className="container pageGrid">
        <div>
          <p className="eyebrow">About me</p>
          <h1 className="aboutTitle">
            Junior Frontend Developer focused on React, TypeScript, Next.js,
            and responsive web applications.
          </h1>
        </div>

        <div className="contentStack">
          <p>
            My name is Antonina Kachusova. I am a Junior Frontend Developer
            focused on building responsive, user-friendly web applications with
            React, TypeScript, Next.js, JavaScript, HTML, and CSS.
          </p>
          <p>
            I completed a frontend development course in 2025 and continued
            strengthening my practical skills through portfolio projects. My
            recent projects include a full-stack Next.js Dashboard based on the
            official Vercel course and Jobly, a Next.js job application tracker
            with TypeScript, localStorage, search, filtering, dynamic routes,
            and English/Ukrainian interface localization.
          </p>
          <p>
            I have practical experience with React components, hooks,
            controlled forms, routing, state management, reusable UI structure,
            API requests, responsive layouts, and Next.js App Router. Through
            the Dashboard project, I also practiced React Server Components,
            Server Actions, PostgreSQL, authentication, validation, error
            handling, loading states, streaming UI, and metadata.
          </p>
          <p>
            I also have a strong foundation in JavaScript ES6+, including DOM
            manipulation, OOP, classes, events, localStorage, and working with
            APIs.
          </p>
          <p>
            This portfolio was created to present my projects in a clear and
            structured way. Each project includes a short description,
            technology stack, GitHub repository, live demo, and a separate
            detail page.
          </p>
          <p>
            My current goal is to grow as a Frontend Developer and work on real
            projects where I can apply my skills, improve code quality, and
            continue developing modern web interfaces.
          </p>
        </div>
      </div>

      <div className="container sectionTop">
        <div className="sectionHeader">
          <p className="eyebrow">Education</p>
          <h2>Education &amp; Certificates</h2>
        </div>

        <div className="educationList">
          <article className="educationItem">
            <h3>Frontend Development Course</h3>
            <p>Completed in 2025</p>
          </article>

          <article className="educationItem">
            <h3>TypeScript Course Certificate</h3>
            <p>ITGID Education Platform, March 2026</p>
            <a
              className="educationLink"
              href="/certificates/typescript-certificate.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Certificate
            </a>
          </article>

          <article className="educationItem">
            <h3>Next.js App Router Course Certificate</h3>
            <p>Vercel Next.js Learn</p>
            <div className="educationLinks">
              <a
                className="educationLink"
                href="/certificates/nextjs-certificate.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
              <a
                className="educationLink"
                href="https://nextjs.org/learn/certificate?course=dashboard-app&user=167116&certId=dashboard-app-167116-1784754820091"
                target="_blank"
                rel="noreferrer"
              >
                Verify on Next.js
              </a>
            </div>
          </article>
        </div>
      </div>

      <div className="container sectionTop">
        <div className="sectionHeader">
          <p className="eyebrow">Skills</p>
          <h2>Skills &amp; Technologies</h2>
        </div>
        <SkillList skills={skills} />
      </div>
    </section>
  );
}
