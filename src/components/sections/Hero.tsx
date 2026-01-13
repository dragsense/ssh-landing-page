import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import heroBg from "@/assets/hero/hero-bg.png";
import heroImg from "@/assets/hero/hero-img.png";
import badge1 from "@/assets/hero/badge-1.png";
import badge2 from "@/assets/hero/badge-2.png";
import badge3 from "@/assets/hero/badge-3.png";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen md:h-screen pb-15 flex flex-col justify-center items-center bg-background/50">
      {/* Background + Sparkles */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={2.0}
          particleDensity={30}
          className="w-full h-full opacity-70"
          particleColor="#e99020"
        />
      </div>

      {/* Hero Image + Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-full h-full mt-20 flex flex-col justify-center items-center bg-[length:600px] md:bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Mobile Heading */}
        <div className="md:hidden absolute -top-5 w-full left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg leading-tight">
            Sajad Haider
          </h1>
          <h2 className="font-semibold drop-shadow-lg leading-tight">Air Commodore (R) S.J.</h2>

        </div>

        {/* Desktop Heading */}
        <div className="hidden relative md:flex gap-20 lg:gap-40 justify-center">
          <h1 className="text-4xl md:text-[7rem] lg:text-[10rem] font-bold">Sajad</h1>
          <h1 className="text-4xl md:text-[7rem] lg:text-[10rem] font-bold">Haider</h1>
          <h2 className="absolute top-28 lg:top-38 right-0 text-2xl font-semibold drop-shadow-lg leading-tight">Air Commodore (R) S.J.</h2>

        </div>

        {/* Timeline */}
        <div className="mt-100 md:mt-4 flex items-center justify-center text-sm sm:text-base md:text-lg px-12 md:px-24 w-full">
          <span className="dark:text-white text-black">1932</span>
          <div className="flex-1 mx-2 sm:mx-4 h-0.5 bg-gradient-to-r from-black/40 via-transparent to-black/40 dark:from-white/40 dark:via-transparent dark:to-white/40" />
          <span className="dark:text-white text-black">2025</span>
        </div>
      </motion.div>

      {/* Badges + Button */}
      <div className="absolute bottom-5 md:bottom-10 w-full flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Badge */}
        <motion.img
          src={badge1}
          alt="Pakistan Air Force Military Award Badge"
          className="h-20 w-auto object-contain drop-shadow-xl mb-4 md:mb-0 invisible"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          aria-hidden="true"
        />

        {/* Right Badges + Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          {[badge2, badge3].map((badge, index) => (
            <motion.img
              key={index}
              src={badge}
              alt={`Sajad Haider Military Award Badge ${index + 2}`}
              className="h-20 w-auto object-contain drop-shadow-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            />
          ))}

          {/* View all awards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="#awards" className="no-underline cursor-pointer">  
            <Button
              variant="ghost"
              className="rotate-90 tracking-wide font-medium hover:text-[#9b6dac] hover:bg-transparent transition hidden sm:inline-flex"
            >
              — view all awards —
            </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
