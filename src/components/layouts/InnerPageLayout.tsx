
import Navbar from "./NavBar";
import InnerPageHero from "../sections/InnerPageHero";

export default function InnerPageLayout({ children, title, content, image }
  :
  { children: React.ReactNode, title: string, content: string, image: string }) {
  return (
    <>
      <header className="relative">
        <Navbar />
        <InnerPageHero title={title} content={content} image={image} />
      </header>
      <main className="px-4 overflow-hidden">
        {children}
      </main>
    </>
  );
}
