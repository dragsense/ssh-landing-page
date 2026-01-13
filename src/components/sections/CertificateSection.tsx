import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import CertificateImage from "@/assets/certificates/certificate.jpg";
import HummerImage from "@/assets/business/hummer.jpeg";

export default function CertificateSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) {
                setIsModalOpen(false);
                setSelectedImage(null);
            }
        };

        if (isModalOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    const handleOpenModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Memorabilia</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Recognition and Achievements
                </p>
            </motion.div>
            

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex items-center justify-center gap-6 flex-wrap"
            >
                <motion.img
                    src={CertificateImage}
                    alt="Sajad Haider Military Certificate and Recognition"
                    className="w-80 h-80 md:w-96 md:h-96 rounded-lg shadow-lg object-contain cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onClick={() => handleOpenModal(CertificateImage)}
                    loading="lazy"
                />
                <motion.img
                    src={HummerImage}
                    alt="Hummer Vehicle"
                    className="w-80 h-80 md:w-96 md:h-96 rounded-lg shadow-lg object-contain cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onClick={() => handleOpenModal(HummerImage)}
                    loading="lazy"
                />
            </motion.div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
                                aria-label="Close certificate"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            
                            {selectedImage && (
                                <img
                                    src={selectedImage}
                                    alt="Full View"
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                    loading="eager"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
