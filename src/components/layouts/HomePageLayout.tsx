
import Navbar from "./NavBar";
import Hero from "../sections/Hero";

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="relative">
        <Navbar />
        <Hero />
      </header>
      <main className="overflow-hidden">
        {children}
      </main>
    </>
  );
}
