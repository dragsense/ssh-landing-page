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
                        <strong>Beginning of the businessman</strong> <br/>
                        Sajad’s transition into the commercial sector was facilitated by his friends, the Gokals, who were prominent shipping magnets. Mustafa Gokal, then Zia-ul-Haq’s shipping minister, suggested that Sajad enter the defence business. Sajad initially resisted, famously stating he only knew "how to spell business" but had no idea what it actually was, even stating that, “I did not know what an LC (Letter of Credit) was.” 
                        <br/>“They told me I didn’t have the experience. They were right — but I had intent.” <br/>
                        Sajad travelled to the US and was given a single opportunity: a 30-day trial contract with AM General. With no formal business background, he learned procurement, pricing, and negotiation on the job. By undercutting existing government-to-government deals and delivering real savings, he earned the confidence of senior military leadership, which earned him more deals as the years progressed.

                    </p>
                </div>
            </motion.div>
        </div>
    );
}

