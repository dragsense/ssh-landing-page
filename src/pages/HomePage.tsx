import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSEO } from "@/hooks/useSEO";
import HomePageLayout from "@/components/layouts/HomePageLayout";
import AwardSection from "@/components/sections/AwardSection";
import BookHighlightSection from "@/components/sections/BookHighlightSection";
import EarlyLifeSection from "@/components/sections/EarlyLifeSection";
import MediaArchiveSection from "@/components/sections/MeidaArchiveSection";
import ProfileSection from "@/components/sections/ProfileSection";
import QuoteSection from "@/components/sections/QuoteSection";
import RecordSection from "@/components/sections/RecordSection";
import TrueHeroSection from "@/components/sections/TrueHeroSection";

export default function Home() {
    useSEO({
        title: 'Sajad Haider - Saviour of Lahore | Pakistan Air Force Hero',
        description: 'Sajad Haider, Pakistan Air Force hero, Saviour of Lahore. 1965 & 1971 war veteran, Pathankot Strike leader.',
        keywords: 'Sajad Haider, Air Commodore, Pakistan Air Force, PAF, 1965 War, 1971 War, Saviour of Lahore, Pathankot Strike, Fighter Pilot, Pakistan Military History',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sajad Haider',
            alternateName: 'Air Commodore (R) Sajad Haider',
            jobTitle: 'Retired Air Commodore',
            worksFor: {
                '@type': 'Organization',
                name: 'Pakistan Air Force',
            },
            description: 'Air Commodore (Retired) Sajad Haider, hero of the 1965 and 1971 wars, Saviour of Lahore, and distinguished Pakistan Air Force pilot.',
            url: typeof window !== 'undefined' ? window.location.origin : 'https://sajadhaider.com',
            image: typeof window !== 'undefined' ? `${window.location.origin}/og-image.jpg` : 'https://sajadhaider.com/og-image.jpg',
            knowsAbout: [
                'Military Aviation',
                'Pakistan Air Force',
                '1965 Indo-Pakistan War',
                '1971 Indo-Pakistan War',
                'Fighter Pilot Training',
            ],
            award: [
                'Sitara-e-Jurat',
                'Sitara-e-Harb',
                'Tamgha-e-Jang',
                'Tamgha-e-Diffa',
            ],
        },
    });
    const location = useLocation();

    useEffect(() => {
        // Handle hash navigation when component mounts or location changes
        if (location.hash) {
            const hash = location.hash.substring(1); // Remove the # symbol
            // Wait for the page to render, then scroll
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const offset = 100; // Account for fixed navbar
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, [location]);

    return (<HomePageLayout>
        <h1 className="sr-only">Sajad Haider - Saviour of Lahore | Pakistan Air Force Hero</h1>
        <section className="relative max-w-screen-lg mx-auto my-8 mt-40 md:my-16 lg:my-24 px-4 md:px-6">
            <TrueHeroSection />
        </section>

        <section id="awards" className="relative max-w-screen-xl mx-auto my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <AwardSection />
        </section>

        <section className="relative my-8 md:my-16 lg:my-24 pt-8 md:pt-16 lg:pt-24 dark:bg-black bg-accent px-4 md:px-6">
            <ProfileSection />
        </section>
        <div id="space" className="pt-10"></div>

        <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <QuoteSection />
        </section>

        <section className="relative max-w-screen-lg mx-auto my-8 md:my-16 lg:my-24 px-4 md:px-6 flex items-center">
            <RecordSection />
        </section>
        
        <div id="publications" className="pt-10"></div>
        
        <section id="books" className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <BookHighlightSection />
        </section>

        <section className="relative max-w-screen-lg mx-auto my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <MediaArchiveSection />
        </section>

        <section className="relative max-w-screen-xl mx-auto my-16 md:my-16 lg:my-24 px-4 md:px-6">
            <EarlyLifeSection />
        </section>

    </HomePageLayout>)
}
