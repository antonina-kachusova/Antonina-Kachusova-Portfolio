import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary" }) {
  const isExternal = href.startsWith("http");
  const className = `buttonLink buttonLink-${variant}`;

  if (isExternal) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
