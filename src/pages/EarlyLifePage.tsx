import S6_Image from "@/assets/images/s6.png";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import EarlyLifePicsSection from "@/components/sections/EarlyLifePicsSection";
import EarlyLifeInspirationSection from "@/components/sections/EarlyLifeInspirationSection";

export default function EarlyLife() {
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
