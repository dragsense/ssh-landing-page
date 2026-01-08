import S7_Image from "@/assets/images/S7.png";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import BusinessmanContentSection from "@/components/sections/BusinessmanContentSection";
import BusinessImageSlider from "@/components/sections/BusinessImageSlider";
import BusinessmanFeatureSection from "@/components/sections/BusinessmanFeatureSection";
import BusinessmanGallerySlider from "@/components/sections/BusinessmanGallerySlider";
import CertificateSection from "@/components/sections/CertificateSection";

export default function BusinessMan() {
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
