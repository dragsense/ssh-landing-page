
import Navbar from "./NavBar";
import InnerPageHero from "../sections/InnerPageHero";

export default function InnerPageLayout({ children, title, content, image, link, linkText }
  :
  { children: React.ReactNode, title: string, content: string, image: string, link?: string, linkText?: string }) {
  return (
    <>
      <header className="relative">
        <Navbar />
        <InnerPageHero title={title} content={content} image={image} link={link} linkText={linkText} />
      </header>
      <main className="px-4 overflow-hidden">
        {children}
      </main>
    </>
  );
}
