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
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { label: "Books", href: "/#books" },
        { label: "Early Life", href: "/early-life" },
        { label: "Life At Airforce", href: "/war-life" },
        { label: "Awards", href: "/#awards" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NavLinks = () => (
        <>
            {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <a
                        href={link.href}
                        className="relative px-4 py-2 rounded-lg text-lg font-medium text-foreground/80 hover:text-white transition"

                    >
                        {link.label}
                    </a>
                </motion.li>
            ))}
            <li>
                <Button
                    variant="ghost"
                    className="group border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                >
                    <span className="flex items-center">
                        <span className="mr-2">Contact</span>
                        <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                            <ArrowRight className="h-4 w-4" />
                        </motion.span>
                    </span>
                </Button>
            </li>

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
                        animate={{ height: scrolled ? 40 : 100 }}
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

                <div className="md:hidden relative z-100">
                    <ul className="gap-2 flex items-center">
                        <li>
                            <Button onClick={toggleTheme} variant="ghost">
                                {theme === "dark" ? "🌙" : "☀️"}
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="border border-white/20 bg-white/5 hover:bg-white/10"
                                onClick={() => setMobileOpen(!mobileOpen)}
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
                            className="fixed inset-0  backdrop-blur-xl border-b border-white/10 bg-white/5 flex flex-col items-center justify-center space-y-6 pt-20"
                        >
                            <ul className="gap-4 flex flex-col items-center">

                                <NavLinks />
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
