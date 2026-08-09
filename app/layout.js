import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Antonina Kachusova | Junior Frontend Developer",
  description:
    "Portfolio website for Antonina Kachusova, a Junior Frontend Developer focused on React, Next.js, TypeScript, and JavaScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
