import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import SSH_Logo_Footer from "@/assets/logo/ssh-logo-footer.png";
import Jet2 from '@/assets/images/jet2.png';



export default function Footer() {
  return (
  
      <footer className="relative max-w-screen-xl mx-auto mt-30 p-2">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center justify-between gap-12">
          {/* Left - SSH Logo Outline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
       
                <motion.img
                  src={SSH_Logo_Footer}
                  alt="S. Sajad Haider Legacy"
                  className="w-28 h-28 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
            
          </motion.div>

          {/* Center - Legacy Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black/10 dark:from-white/10 to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AN ENDURING LEGACY
            </motion.h2>
            
            As a teenager, S. Sajad Haider aspired to follow in the footsteps of his heroes. Watching cadets at Quetta Academy from just six feet away, the seed of ambition was planted - to become a defender of Pakistan's skies and a symbol of national pride.
          </motion.div>

          {/* Right - Jet Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-20 -top-20 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl"
            />
            <motion.img
              src={Jet2}
              alt="Jet flying into legacy"
              className="w-full max-w-xs mx-auto"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 } 
              }}
            />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="my-4 text-center text-xs text-gray-500"
        >
          © {new Date().getFullYear()} S. Sajad Haider Legacy. All rights reserved.
        </motion.div>
      </footer>
  );
}