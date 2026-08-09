import ButtonLink from "../../components/ButtonLink";

export const metadata = {
  title: "Contact | Antonina Kachusova",
  description: "Contact Antonina Kachusova for junior frontend opportunities.",
};

export default function ContactPage() {
  return (
    <section className="section pageSection">
      <div className="container pageGrid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s connect.</h1>
          <p className="largeText">
            I am open to Junior Frontend Developer roles and project-based
            opportunities where I can apply my skills in React, TypeScript,
            Next.js, responsive UI, forms, APIs, and modern frontend
            development.
          </p>
        </div>

        <div className="contactList">
          <div className="contactItem">
            <span>Email</span>
            <p className="contactAddress">antoninakachusova@gmail.com</p>
            <div className="contactActions">
              <a
                className="contactAction"
                href="mailto:antoninakachusova@gmail.com"
              >
                Send email
              </a>
              <a
                className="contactAction"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=antoninakachusova@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send with Gmail
              </a>
            </div>
          </div>
          <a
            className="contactItem"
            href="https://github.com/antonina-kachusova"
          >
            <span>GitHub</span>
            github.com/antonina-kachusova
          </a>
          <a
            className="contactItem"
            href="https://www.linkedin.com/in/antonina-kachusova/"
          >
            <span>LinkedIn</span>
            linkedin.com/in/antonina-kachusova
          </a>
          <ButtonLink href="/projects">View my projects</ButtonLink>
        </div>
      </div>
    </section>
  );
}
