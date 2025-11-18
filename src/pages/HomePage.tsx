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
    return (<HomePageLayout>

        <section className="relative max-w-screen-lg mx-auto my-8 md:my-16 lg:my-24 px-4 md:px-6">
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
