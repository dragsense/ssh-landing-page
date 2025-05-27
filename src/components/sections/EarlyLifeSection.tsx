import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import S4_Image from "@/assets/images/s4.png";
import S5_Image from "@/assets/images/s5.png";
import S6_Image from "@/assets/images/s6.png";

const earlyLifeText = [
  { text: "He" },
  { text: "had" },
  { text: "initially", className: "text-blue-500 dark:text-blue-300" },
  { text: "lived" },
  { text: "in" },
  { text: "Bugti", className: "text-yellow-500 dark:text-yellow-300" },
  { text: "house..." },
];

const educationText = [
  { text: "Early" },
  { text: "Life" },
  { text: "&", className: "text-purple-500 dark:text-purple-300" },
  { text: "Education", className: "text-primary dark:text-primary" },
];

export default function EarlyLifeSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 md:gap-12 items-center z-10">
      {/* Left Column - Images & Text */}
      <div className="space-y-8">
        {/* First Paragraph with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end gap-6"
        >
          <p className="flex-1">
            His family initially lived in Bugti House before moving into a small tin-roofed home within a complex of eight houses built by Nawab Mehran Khan Bugti. Mehran, a friend of Sajad's father, gifted him two of the homes. Sajad grew up with Akbar Bugti and his siblings after moving in. He recalled Akbar as a "stunning and fearsome person" who always called him chapeit or scrawny boy. His younger brother, Ahmed Nawaz Bugti, would take Sajad with him every day for driving lessons.
          </p>
          <BackgroundGradient className="rounded-lg overflow-hidden p-1 flex-1 bg-white dark:bg-zinc-900">
            <motion.img
              src={S4_Image}
              alt="S. Sajad Haider youth"
              className="w-64 h-auto rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </BackgroundGradient>
        </motion.div>

        {/* Second Paragraph with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end gap-6"
        >
          <BackgroundGradient className="rounded-lg overflow-hidden p-1 flex-1 bg-white dark:bg-zinc-900 order-1 md:order-2">
            <motion.img
              src={S5_Image}
              alt="Young Haider in uniform"
              className="w-64 h-auto rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </BackgroundGradient>
          <p className="flex-1">
            As a teenager, he aspired to follow in the footsteps of his hero, Quaid-e-Azam, who he saw at his old school in Quetta, sitting just six feet away, sparking the seed of his ambition to become a defender of Pakistan.
          </p>
        </motion.div>
      </div>

      {/* Right Column - Featured Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <BackgroundGradient className="rounded-[12px] p-1 bg-white dark:bg-zinc-900">
          <div className="bg-background p-6 rounded-[10px] h-full flex flex-col items-center">
            <p className="text-xs text-right w-full text-muted-foreground underline mb-4 cursor-pointer hover:text-primary transition-colors">
              Read More &gt;&gt;
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="mb-6"
            >
              <img
                src={S6_Image}
                alt="Sajad Haider and son"
                className="mx-auto w-48 h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <TypewriterEffectSmooth
              words={educationText}
              className="text-center mb-2"
              cursorClassName="h-8"
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-full mt-4"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent my-4" />
              <p className="text-sm text-muted-foreground">
                "The foundation of greatness is laid in childhood"
              </p>
            </motion.div>
          </div>
        </BackgroundGradient>
      </motion.div>
    </div>
  );
}