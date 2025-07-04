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

        <section className="relative max-w-screen-lg mx-auto my-10 md:my-30 p-2">
            <TrueHeroSection />
        </section>

        <section id="awards" className="relative max-w-screen-xl ml-auto my-10 md:my-30 p-2">
            <AwardSection />
        </section>

        <section className="relative my-10 md:my-30 -mb-30 pt-30 dark:bg-black bg-accent">
            <ProfileSection />
        </section>

        <section className="relative my-10 md:my-40 p-2">
            <QuoteSection />
        </section>

        <section className="relative max-w-screen-lg mx-auto my-10 md:my-30 p-2">
            <RecordSection />
        </section>

        <section id="books" className="relative my-10 md:my-30 p-2" >
            <BookHighlightSection />
        </section>

        <section className="relative max-w-screen-lg mx-auto my-10 md:my-30 p-2">
            <MediaArchiveSection />
        </section>

        <section className="relative max-w-screen-xl ml-auto p-2">
            <EarlyLifeSection />
        </section>

    </HomePageLayout>)
}
