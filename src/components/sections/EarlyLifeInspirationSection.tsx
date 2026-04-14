import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import S5_Image from '@/assets/images/ui/ui-section-5.png';
import S6_Image from '@/assets/images/earlylife/early-life-1.jpeg';
import S16_Image from '@/assets/images/earlylife/early-life-inspiration.jpg';

const sections = [
    {
        id: "early-life-inspiration",
        title: "Education",
        content: "Sajad first attended the Mission School in Quetta, run by Christian teachers, where he remained until the fourth standard. This was followed by fifth grade at the Islamia School, which he described as having dedicated but \"ruthless\" teachers. \n\nDriven by a desire to master the English language, he successfully entered the prestigious St Francis Grammar School, where he spent three years and completed his Junior Cambridge examination. On his father's recommendation, he also cleared his Matriculation to hasten his path to college. Haider then moved to Lahore to attend Forman Christian College, a transformative experience that he credits with making him a \"more rounded person\" due to its academic atmosphere and his first exposure to being in a mixed environment. \n\nLater on, during his pilot training, his formal education continued at the RPAF College in Risalpur.",
        image: S6_Image,
    },
    {
        id: "early-life-inspiration-2",
        title: "Family",
        content: ' Born in Sargodha on 25 and 26 December 1932, at midnight to Dr Syed Fazal Shah (1882–1986) and Rashida Begum, Sajad was the eldest sibling. He had a sister named Kausar Fazal Shah (1934 - 2022), a renowned Professor of Psychology at the Government College of Lahore, and two younger brothers, Dr. Bunyad Haider (1936 – 2014), a renowned cardiologist who served as the Chairperson of the University of Medicine and Dentistry of New Jersey (UMDNJ) and the youngest, Jawwad Haider, a businessman in New York and only remaining sibling. <br /> Reference : <a href="https://en.wikipedia.org/wiki/Sajad_Haider" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:underline;">Wikipedia</a>',
        image: S6_Image,
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
       {/*      <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent"
            >
                Early Life and Inspiration
            </motion.h2> */}

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
                                                <span dangerouslySetInnerHTML={{ __html: section.content }} />
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

