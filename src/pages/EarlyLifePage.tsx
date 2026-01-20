import { useSEO } from "@/hooks/useSEO";
import S6_Image from '@/assets/images/ui/ui-section-6.png';
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import EarlyLifePicsSection from "@/components/sections/EarlyLifePicsSection";
import EarlyLifeInspirationSection from "@/components/sections/EarlyLifeInspirationSection";
import EarlyLifeInspirationSection2 from "@/components/sections/EarlyLifeInspirationSection2";

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
    content="Sajad’s formative years were spent in Quetta, first in the Bugti house and then the Bugti Complex, a gift to his parents from Nawab Mehran Khan. His father, known as 'Baba-e-Baluch,' lunched daily with Nawab Sahib, leading Haider and his sister Kausar to spend many years there. Kausar was the closest to their parents among the siblings, which also included Bunyad and Jawwad. Surrounded by fierce, hard men in a hardcore Baloch and Pashtun culture, he made friends with children from those clans, as well as Hindus and Sikhs, fostering strong intercommunal ties and describing life in that multicultural community as wonderful and uncomplicated, with a focus on communal wellbeing."
    image={S6_Image}
    link="https://en.wikipedia.org/wiki/Sajad_Haider"
    linkText="Source: Wikipedia"
    >
        <section className="relative my-12 mt-25 md:my-16 lg:my-24 px-4 md:px-6 max-w-screen-lg mx-auto">
            <p>
            Sajad first attended the Mission School in Quetta, run by Christian teachers, where he remained until the fourth standard. This was followed by fifth grade at the Islamia School, which he described as having dedicated but "ruthless" teachers. <br/> <br/>

Driven by a desire to master the English language, he successfully entered the prestigious St Francis Grammar School, where he spent three years and completed his Junior Cambridge examination. On his father's recommendation, he also cleared his Matriculation to hasten his path to college. Haider then moved to Lahore to attend Forman Christian College, a transformative experience that he credits with making him a "more rounded person" due to its academic atmosphere and his first exposure to being in a mixed environment. <br/><br/>

Later on, during his pilot training, his formal education continued at the RPAF College in Risalpur.

            </p>
        </section>
        <section className="relative my-12 mt-25 md:my-16 lg:my-24 px-4 md:px-6">
            <EarlyLifeInspirationSection />
        </section>

        <section className="relative mt-12 mt-25 md:my-16 lg:my-24 px-4 md:px-6">
            <EarlyLifePicsSection />
        </section>


        <section className="relative mt-12 mt-25 md:my-16 lg:my-24 px-4 md:px-6">
            <EarlyLifeInspirationSection2 />
        </section>

    </InnerPageLayout>)
}
