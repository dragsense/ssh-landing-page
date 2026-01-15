import { useSEO } from "@/hooks/useSEO";
import S7_Image from '@/assets/images/airforce/sajad-haider-portrait.jpg';
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import { LifeAtTheAirforce } from "@/components/sections/LifeAtTheAirforce";
import SaviourOfLahoreSection from "@/components/sections/SaviourOfLahoreSection";
import AirforceFeatureSection from "@/components/sections/AirforceFeatureSection";
import AirforceVideoSlider from "@/components/sections/AirforceVideoSlider";
import AirLifeGallerySlider from "@/components/sections/AirLifeGallerySlider";

export default function AirforceLife() {
    useSEO({
        title: 'Fighter Pilot Career - Sajad Haider | PAF Hero',
        description: 'Sajad Haider fighter pilot career: Saviour of Lahore, Pathankot Strike 1965 leader, PAF 1965 & 1971 war hero.',
        keywords: 'Sajad Haider fighter pilot, Pathankot Strike 1965, Saviour of Lahore, Pakistan Air Force career, PAF 1965 War, PAF 1971 War',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Fighter Pilot Career - Air Commodore Sajad Haider',
            description: 'Military career of Air Commodore (R) Sajad Haider in the Pakistan Air Force',
            url: typeof window !== 'undefined' ? `${window.location.origin}/airforce-life` : 'https://sajadhaider.com/airforce-life',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: typeof window !== 'undefined' ? window.location.origin : 'https://sajadhaider.com',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Airforce Life',
                        item: typeof window !== 'undefined' ? `${window.location.origin}/airforce-life` : 'https://sajadhaider.com/airforce-life',
                    },
                ],
            },
        },
    });
    return (<InnerPageLayout 
        title="Fighter pilot . Air Commodore" 
    content="Sayed Sajad Haider (26 December 1932 – 3 January 2025), better known by his aliases as Nosey Haider and Saviour of Lahore, was a Pakistani fighter pilot and one-star rank officer in the Pakistan Air Force (PAF). He is best known for leading a devastating Blitzkrieg on the Pathankot airbase in India on 6 September during the Indo-Pakistani air war of 1965. "
    image={S7_Image}
    >
        <section className="relative my-12 mt-25 md:my-16 lg:my-24 px-4 md:px-6">
            <AirforceVideoSlider />
        </section>

        <section className="relative my-12 -mt-20 md:my-16 lg:my-24 px-4 md:px-6">
            <AirLifeGallerySlider />
        </section>

            <section className="relative my-12 md:my-16 lg:my-30 px-4 md:px-6">
            <AirforceFeatureSection />
        </section>

        <section className="relative  mx-auto my-16 lg:my-50">
            <SaviourOfLahoreSection />
        </section>

        <section className="relative mt-12 md:my-16 lg:my-24 px-4 md:px-6">
            <LifeAtTheAirforce />
        </section>

    </InnerPageLayout>)
}
