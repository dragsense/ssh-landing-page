import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import S4_Image from "@/assets/images/s4.png";
import S5_Image from "@/assets/images/s5.png";
import S6_Image from "@/assets/images/s6.png";

const sections = [
    {
        id: "early-life-inspiration",
        title: "Early Life and Inspiration",
        content: "Haider's formative years were spent in Quetta, first in the Bugti house and then the Bugti Complex, a gift to his parents from Nawab Mehran Khan. His father, known as \"Baba-e-Baluch,\" lunched daily with Nawab Sahib, leading Haider and his sister Kausar to spend many years there. Kausar was the closest to their parents among the siblings, which also included Bunyad and Jawwad. Surrounded by fierce, hard men in a hardcore Baloch and Pashtun culture, he made friends with children from those clans, as well as Hindus and Sikhs, fostering strong intercommunal ties and describing life in that multicultural community as wonderful and uncomplicated, with a focus on communal wellbeing.\n\nA pivotal moment for Haider was witnessing Quaid-e-Azam Muhammad Ali Jinnah speak at his old school in Quetta, sitting an arm's length away in sheer awe. Jinnah's powerful words, urging that \"some of you will choose to defend your country with your lives as members of the army, navy, or the air force,\" inspired Haider. He viewed Jinnah as truly the only one worthy of the title Quaid-e-Azam, having created Pakistan single-handedly. Initially seeing himself in an army uniform while living in a largely army cantonment, he shifted his aspiration to the air force after encountering fighter pilots at Cafe Stanley and witnessing Spitfires perform intricate manoeuvres the next day. He stated, \"To me it will always be that momentous occasion and the Quaid's powerful words that motivated me with passion towards flying as a defender of my country.\"",
        image: S6_Image,
    },
    {
        id: "rigorous-training",
        title: "Rigorous Military Training",
        content: "Haider joined the PAF after passing the gruelling Inter Service Selection Board (ISSB), which tested physical, mental, and psychological capabilities with a very low pass rate. His batch was the 13th General Duty Pilot's course, the largest to graduate since the academy's inception at Risalpur. Training was intense and strictly regimented, following British tradition, to prepare for taking orders in a regimented lifestyle. Even talking in Urdu was forbidden. An extensive education program covered aerodynamics, physics, airmanship, meteorology, Morse Code, and history, lasting months before flight training.",
        image: S5_Image,
    },
];

export default function EarlyLifeInspirationSection() {
    const [expandedSection, setExpandedSection] = useState<string>(sections[0].id);

    const toggleSection = (id: string) => {
        // If clicking the already expanded section, open the other one instead
        if (expandedSection === id) {
            const otherSection = sections.find(s => s.id !== id);
            if (otherSection) {
                setExpandedSection(otherSection.id);
            }
        } else {
            // Otherwise, open the clicked section
            setExpandedSection(id);
        }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
                Early Life and Inspiration
            </motion.h2>

            <div className="space-y-4">
                {sections.map((section, index) => {
                    const isExpanded = expandedSection === section.id;
                    
                    return (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Header - Clickable */}
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white pr-4">
                                    {section.title}
                                </h3>
                                <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isExpanded ? (
                                        <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                                    )}
                                </motion.div>
                            </button>

                            {/* Content - Expandable */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: isExpanded ? "auto" : 0,
                                    opacity: isExpanded ? 1 : 0,
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 md:px-8 pb-6 md:pb-8">
                                    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 md:gap-8 items-start">
                                        {/* Text Content */}
                                        <div className="space-y-4">
                                            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                                {section.content}
                                            </p>
                                        </div>

                                        {/* Image */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="relative"
                                        >
                                            <motion.img
                                                src={section.image}
                                                alt={section.title}
                                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                                                whileHover={{ scale: 1.03 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

