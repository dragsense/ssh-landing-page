import S7_Image from "@/assets/images/s7.png";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import { LifeAtTheAirforce } from "@/components/sections/LifeAtTheAirforce";
import SaviourOfLahoreSection from "@/components/sections/SaviourOfLahoreSection";
import WarFeatureSection from "@/components/sections/WarFeatureSection";

export default function WarLife() {
    return (<InnerPageLayout 
        title="Fighter pilot . Air Comodore" 
    content="Sayed Sajad Haider[e] (26 December 1932 – 3 January 2025), better known by his aliases as Nosey Haider[f] and Saviour of Lahore,[2] was a Pakistani fighter pilot and one-star rank officer in the Pakistan Air Force (PAF). He is best known for leading a devastating Blitzkrieg on the Pathankot airbase in India on 6 September during the Indo-Pakistani air war of 1965. "
    image={S7_Image}
    >
        <section className="relative my-10 p-2">
            <WarFeatureSection />
        </section>

          <section className="relative max-w-screen-xl ml-auto my-10 md:my-30 p-2">
                    <SaviourOfLahoreSection />
                </section>

   <section className="relative my-10 md:my-30 p-2">
                    <LifeAtTheAirforce />
                </section>

    </InnerPageLayout>)
}
