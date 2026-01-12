import { motion } from "framer-motion";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import SaviourOfLahoreImage from '@/assets/images/airforce/saviour-of-lahore.png';

export default function SaviourOfLahoreSection() {
    const descriptionText = `On 6th September, Haider’s 19 Squadron provided close air support by destroying Indian tanks, artillery, preventing them from entering Lahore. He also led a daring strike to attack the air base at Pathankot Air Force Station the same day, despite the mission being beyond their range. Under his leadership, the formation claimed destruction of 13 Indian aircraft on the ground and inflicted significant damage, earning him the decoration Sitara‑e‑Jurat for courage and flying skill.`;
    const descriptionText2 = ``;

    return (
        <div className="relative w-full overflow-hidden rounded-lg md:px-8 min-h-[650px]">
            {/* Background Image - Only visible on md and above */}
            <div 
                className="hidden lg:block absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${SaviourOfLahoreImage})`,
                }}
            />
            
            {/* Overlay for better text readability - Only visible on md and above */}

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 lg:mt-30 lg:gap-12 items-center">
                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    <TextRevealCard
                        text="SAVIOUR OF LAHORE"
                        revealText="S. Sajad Haider"
                        className="p-0 border-none bg-transparent w-auto"
                        hoverClassName="bg-background"
                        revealTextClassName="text-dark dark:text-light"
                        textClassName="text-2xl"
                    />

                    <TextGenerateEffect
                        words={descriptionText}
                        className="text-md font-normal"
                    />

                    <TextGenerateEffect
                        words={descriptionText2}
                        className="text-md font-normal"
                    />
                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="relative lg:hidden"
                >

                    <motion.img
                        src={SaviourOfLahoreImage}
                        alt="Minar-E-Pakistan"
                        className="relative z-10 object-contain  w-full"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />

                </motion.div>
        </div>
        </div>

       
    );
}