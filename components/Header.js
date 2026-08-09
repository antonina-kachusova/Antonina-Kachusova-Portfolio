import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="logo" href="/" aria-label="Antonina Kachusova home">
          <Image
            src="/images/profile-avatar.webp"
            alt="Antonina Kachusova"
            width={64}
            height={64}
            className="avatarLogo"
            priority
          />
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
