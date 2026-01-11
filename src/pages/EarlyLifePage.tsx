import { useSEO } from "@/hooks/useSEO";
import S6_Image from '@/assets/images/ui/ui-section-6.png';
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import EarlyLifePicsSection from "@/components/sections/EarlyLifePicsSection";
import EarlyLifeInspirationSection from "@/components/sections/EarlyLifeInspirationSection";

export default function EarlyLife() {
    useSEO({
        title: 'Early Life - Sajad Haider | Pakistan Air Force Hero',
        description: 'Sajad Haider early life: born Sargodha 1932, Quetta childhood, family background. Pakistan Air Force inspiration.',
        keywords: 'Sajad Haider early life, Sajad Haider education, Sajad Haider family, Quetta childhood, Pakistan Air Force history',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Early Life and Education - Sajad Haider',
            description: 'Early life and education of Air Commodore (R) Sajad Haider',
            url: typeof window !== 'undefined' ? `${window.location.origin}/early-life` : 'https://sajadhaider.com/early-life',
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
                        name: 'Early Life',
                        item: typeof window !== 'undefined' ? `${window.location.origin}/early-life` : 'https://sajadhaider.com/early-life',
                    },
                ],
            },
        },
    });
    return (<InnerPageLayout 
        title="EARLY LIFE AND EDUCATION" 
    content="Sajad was born in Sargodha on 25 and 26 of December 1932, at midnight. 

His parents were Dr Syed Fazal Shah (1882–1986) and Rashida Begum. 

Being the eldest, he had a sister named Kausar Fazal Shah (1934 - 2022), a renowned Professor of Psychology at the Government College of Lahore, and two younger brothers, Dr. Bunyad Haider (1936 – 2014), a renowned cardiologist who served as the Chairperson of the University of Medicine and Dentistry of New Jersey (UMDNJ) and the youngest, Jawwad Haider, a businessman in New York and only remaining sibling."
    image={S6_Image}
    >
        <section className="relative my-8 mt-25 md:my-16 lg:my-24 px-4 md:px-6">
            <EarlyLifeInspirationSection />
        </section>

        <section className="relative my-8 mt-25 md:my-16 lg:my-24 px-4 md:px-6">
            <EarlyLifePicsSection />
        </section>

    </InnerPageLayout>)
}
