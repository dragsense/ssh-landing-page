import { motion } from "framer-motion";
import BusinessmanImage from "@/assets/images/earlylife/Image (31).jpg";

export default function BusinessmanContentSection() {
    return (
        <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-8 items-start"
            >
                {/* Left Side - Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <motion.img
                        src={BusinessmanImage}
                        alt="Business Man"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />
                </motion.div>

                {/* Right Side - Paragraph */}
                <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        After his distinguished military career, Sajad Haider transitioned into the business world, bringing with him the same discipline, integrity, and leadership qualities that defined his service in the Pakistan Air Force. His entrepreneurial journey reflects his commitment to excellence and his unwavering principles, even in the face of challenges and corruption in the business environment.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        Haider established his company, Cormorant, and navigated the complexities of the business world while maintaining his ethical standards. Despite facing pressure from corrupt elements in the Defence Procurement Division, he chose to close his company in 1990 rather than compromise his values, demonstrating that honor and integrity were more important than financial gain.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

