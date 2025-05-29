import S6_Image from "@/assets/images/s6.png";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import EarlyLifePicsSection from "@/components/sections/EarlyLifePicsSection";

export default function EarlyLife() {
    return (<InnerPageLayout 
        title="EARLY LIFE & EDUCATION" 
    content="Syed Sajjad Haider was born in Sargodha on 25 or 26 December 1932, at midnight. His parents were Syed Fazal Shah (1882–1986) and Rashida Begum. He has an older sister named Kausar and two younger brothers, Bunyad Haider (1936–2014), a renowned cardiologist who served as the Chairperson of the University of Medicine and Dentistry of New Jersey and the youngest, Jawwad Haider."
    image={S6_Image}
    >
        <section className="relative my-10 p-2">
        <EarlyLifePicsSection />
        </section>

    </InnerPageLayout>)
}
