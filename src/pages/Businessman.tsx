import S7_Image from "@/assets/images/S7.png";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import BusinessmanContentSection from "@/components/sections/BusinessmanContentSection";
import BusinessImageSlider from "@/components/sections/BusinessImageSlider";
import BusinessmanFeatureSection from "@/components/sections/BusinessmanFeatureSection";
import BusinessmanGallerySlider from "@/components/sections/BusinessmanGallerySlider";
import CertificateSection from "@/components/sections/CertificateSection";

export default function BusinessMan() {
    return (<InnerPageLayout 
        title="Business Man" 
    content="The fighter pilot who left the Air Force with just Rs17,000 in his pocket."
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
