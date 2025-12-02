import S7_Image from "@/assets/images/airforce/SSH.jpg";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import { LifeAtTheAirforce } from "@/components/sections/LifeAtTheAirforce";
import SaviourOfLahoreSection from "@/components/sections/SaviourOfLahoreSection";
import WarFeatureSection from "@/components/sections/WarFeatureSection";
import WarLifeVideoSlider from "@/components/sections/WarLifeVideoSlider";
import AirLifeGallerySlider from "@/components/sections/AirLifeGallerySlider";

export default function WarLife() {
    return (<InnerPageLayout 
        title="Fighter pilot . Air Comodore" 
    content="Sayed Sajad Haider[e] (26 December 1932 – 3 January 2025), better known by his aliases as Nosey Haider[f] and Saviour of Lahore,[2] was a Pakistani fighter pilot and one-star rank officer in the Pakistan Air Force (PAF). He is best known for leading a devastating Blitzkrieg on the Pathankot airbase in India on 6 September during the Indo-Pakistani air war of 1965. "
    image={S7_Image}
    >
        <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <WarLifeVideoSlider />
        </section>

        <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <AirLifeGallerySlider />
        </section>

        <section className="relative my-8 md:my-16 lg:my-30 px-4 md:px-6">
            <WarFeatureSection />
        </section>

        <section className="relative max-w-screen-xl mx-auto my-16 md:my-16 lg:my-50 px-4 md:px-6">
            <SaviourOfLahoreSection />
        </section>

        <section className="relative mt-30 md:my-16 lg:my-24 px-4 md:px-6">
            <LifeAtTheAirforce />
        </section>

    </InnerPageLayout>)
}
