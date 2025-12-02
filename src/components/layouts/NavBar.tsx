import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SSHLogo from "@/assets/logo/ssh-logo.png";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { theme, toggleTheme } = useTheme();

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Publications", href: "/#publications" },
        { label: "Early Life", to: "/early-life" },
        { label: "Airforce Life", to: "/war-life" },
        { label: "Business Life", to: "/business-man" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

     const linkClass =
        "relative px-4 py-2 rounded-lg text-[18px] font-semibold text-foreground/80 hover:text-primary transition";

    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const [path, hash] = href.split('#');
        const currentPath = window.location.pathname;
        
        if (currentPath !== path && hash) {
            // If we're on a different page, let the navigation happen, then scroll after page loads
            e.preventDefault();
            window.location.href = href;
            // The scroll will be handled by HomePage useEffect when it loads
        } else if (hash) {
            // If we're already on the page, just scroll
            e.preventDefault();
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 50);
        }
        setMobileOpen(false);
    };

    const NavLinks = () => (
        <>
            {navLinks.map((link, i) => (
                <motion.li 
                    key={link.href || link.to} 
                    initial={{ opacity: 0, x: 10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.1 }}
                    className="w-full md:w-auto"
                >
                    {link.to ? <a
                        href={link.to}
                        className={cn(linkClass, "block w-full text-center md:text-left md:w-auto cursor-pointer")}
                        onClick={() => setMobileOpen(false)}
                    >
                        {link.label}
                    </a> :
                        <a
                            href={link.href}
                            className={cn(linkClass, "block w-full text-center md:text-left md:w-auto cursor-pointer")}
                            onClick={(e) => handleHashClick(e, link.href!)}
                        >
                            {link.label}

                        </a>}
                </motion.li>
            ))}
            
        </>
    );

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 w-full z-50 px-2 md:px-6 py-4 ",
                scrolled ? "backdrop-blur-xl border-b border-white/10 bg-white/5" : ""
            )}
        >
            <div className="mx-auto flex justify-between items-center relative">
                <motion.div whileHover={{ y: -3, transition: { type: "spring", stiffness: 400 } }}>
                    <Link
                        to="/">
                        <motion.img
                            src={SSHLogo}
                            alt="SSH Logo"
                            className="w-auto"
                            style={{ height: scrolled ? (isMobile ? 50 : 40) : (isMobile ? 60 : 100) }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />     </Link>           </motion.div>

                <ul className="gap-4  hidden md:flex items-center">
                    <NavLinks />
                    <li>
                        <Button onClick={toggleTheme} variant="ghost">
                            {theme === "dark" ? "🌙" : "☀️"}
                        </Button>
                    </li>
                </ul>

                <div className="md:hidden relative z-[101]">
                    <ul className="gap-2 flex items-center">
                        <li>
                            <Button onClick={toggleTheme} variant="ghost" size="icon">
                                {theme === "dark" ? "🌙" : "☀️"}
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="border border-white/20 bg-white/5 hover:bg-white/10"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </li>
                    </ul>
                </div>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[100] backdrop-blur-xl border-b border-white/10 bg-background/95 dark:bg-background/95 flex flex-col items-center justify-center space-y-6 pt-20"
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    setMobileOpen(false);
                                }
                            }}
                        >
                            <ul className="gap-4 flex flex-col items-center w-full px-4" onClick={(e) => e.stopPropagation()}>
                                <NavLinks />
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
