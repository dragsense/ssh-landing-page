import { motion } from "framer-motion";
import CertificateImage from "@/assets/certificates/certificate.jpg";

export default function CertificateSection() {
    return (
        <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Recognition and achievements throughout his career
                </p>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
            >
                <motion.img
                    src={CertificateImage}
                    alt="Certificate"
                    className="w-full h-auto rounded-lg shadow-lg object-contain"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
            </motion.div>
        </div>
    );
}
