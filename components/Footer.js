export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <p>© {currentYear} Antonina Kachusova. Built with Next.js.</p>
      </div>
    </footer>
  );
}
