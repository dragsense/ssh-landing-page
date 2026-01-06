import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import S4_Image from "@/assets/images/s4.png";
import S5_Image from "@/assets/images/s5.png";
import S6_Image from "@/assets/images/s6.png";

const educationText = [
  { text: "Early" },
  { text: "Life" },
  { text: "&" },
  { text: "Education" },
];

export default function EarlyLifeSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start z-10">
      {/* Left Column */}
      <div className="flex flex-col gap-8 md:gap-12">
        {/* First Paragraph + Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6"
        >
          <p className="flex-1 text-sm md:text-base leading-relaxed">
            Sajad Haider spent most of his early life within a tin-roofed home,
            two of which were gifted to his father by Nawab Mehran Khan Bugti in
            a complex of eight houses that he’d built. He grew up with Akbar
            Bugti and his siblings, and remembered Akbar as a "stunning and
            fearsome person" who always called him chapeit or scrawny boy. He
            lived around people from various cultures and religions, and
            recalled life in that multicultural setting as “wonderful and
            uncomplicated”.
          </p>
          <motion.img
            src={S4_Image}
            alt="S. Sajad Haider youth"
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] h-auto rounded-lg object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </motion.div>

        {/* Second Paragraph + Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center md:items-end gap-4 md:gap-6"
        >
          <p className="flex-1 text-sm md:text-base leading-relaxed text-right md:text-left">
            As a teenager, he aspired to follow in the footsteps of his hero,
            Quaid-e-Azam, who he saw at his old school in Quetta, sitting just
            ”An arm’s length away… (he) sat on the floor of the stage and gaped
            at the founder in sheer awe”, sparking the seed of his ambition to
            become a defender of Pakistan.
          </p>
          <motion.img
            src={S5_Image}
            alt="Young Haider in uniform"
            className="w-full max-w-[250px] sm:max-w-[300px] h-auto rounded-lg object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </motion.div>
      </div>

      {/* Right Column - Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative dark:bg-black bg-accent rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center"
      >
        <p className="text-xs text-right w-full text-muted-foreground underline mb-4 cursor-pointer hover:text-[#9b6dac] transition-colors">
          <a href="/early-life">Read More &gt;&gt;</a>
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="mb-6 w-full"
        >
          <img
            src={S6_Image}
            alt="Sajad Haider and son"
            className="mx-auto w-full max-w-[240px] sm:max-w-[280px] h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        <TypewriterEffectSmooth
          words={educationText}
          className="text-center mb-2"
          textClassName="xl:text-3xl lg:text-2xl text-xl"
          cursorClassName="h-6"
        />

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-full mt-4 text-center"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent my-4" />
          <p className="text-sm text-muted-foreground italic">
            "The foundation of greatness is laid in childhood"
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
