import { useSEO } from "@/hooks/useSEO";
import S7_Image from '@/assets/images/ui/ui-section-7.png';
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import BusinessmanContentSection from "@/components/sections/BusinessmanContentSection";
import BusinessImageSlider from "@/components/sections/BusinessImageSlider";
import BusinessmanFeatureSection from "@/components/sections/BusinessmanFeatureSection";
import BusinessmanGallerySlider from "@/components/sections/BusinessmanGallerySlider";
import CertificateSection from "@/components/sections/CertificateSection";

export default function BusinessMan() {
    useSEO({
        title: 'Business Career - Cormorant Company | Sajad Haider',
        description: 'Sajad Haider business career: Founded Cormorant defense company 1980. Fortune 500 representative, ethical standards.',
        keywords: 'Sajad Haider business, Cormorant company, defense industry Pakistan, military business, ethical business practices',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Business Career - Cormorant Company',
            description: 'Sajad Haider\'s business career and Cormorant company',
            url: typeof window !== 'undefined' ? `${window.location.origin}/business-man` : 'https://sajadhaider.com/business-man',
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
                        name: 'Business Career',
                        item: typeof window !== 'undefined' ? `${window.location.origin}/business-man` : 'https://sajadhaider.com/business-man',
                    },
                ],
            },
        },
    });
    return (<InnerPageLayout 
        title="Trading Wings for Ventures" 
    content="From fighter pilot to business pilot, Sajad Haider ended his military career in 1980; he resigned with no land, no assets, and a meagre bank balance. His only possession was a ten-year-old Toyota. Having to provide for his family without a pension that could sustain them, he was forced to enter the civilian world to earn an income. "
    image={S7_Image}
    >
         <section className="relative my-8 mt-20 md:my-16 lg:my-24 px-4 md:px-6">
            <BusinessImageSlider />
        </section>
        <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <BusinessmanContentSection />
        </section>

        <section className="relative my-8 md:my-16 lg:my-30 px-4 md:px-6">
            <BusinessmanFeatureSection />
        </section>

        <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6 hidden">
            <BusinessmanGallerySlider />
        </section>

        <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <CertificateSection />
        </section>

    </InnerPageLayout>)
}
