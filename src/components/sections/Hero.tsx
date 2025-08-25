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
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Background + Sparkles */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-full h-full  flex justify-center items-center bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >

        <div className=" text-center mb-6">

          <h1
            className="text-[4rem] md:text-[10rem] text-transparent bg-clip-text
                      bg-[linear-gradient(to_right,_#000,_transparent_50%,_#000)]
                      dark:bg-[linear-gradient(to_right,_#fff,_transparent_50%,_#fff)]"
          >
            S. Sajad Haider

          </h1>


          <div className="mt-4 flex items-center justify-center text-base md:text-lg">
            <span className="dark:text-white text-black">1932</span>
            <div className="flex-1 mx-4 h-0.5 w-24 md:w-40 bg-gradient-to-r from-black/40 via-transparent to-black/40 dark:from-white/40 dark:via-transparent dark:to-white/40" />
            <span className="dark:text-white text-black">2025</span>
          </div>
        </div>
      </motion.div>

      {/* Badges + View Button */}
      <div className="absolute bottom-10 left-0 w-full">
        <div className="flex items-end justify-between w-full">
          {/* Left badge */}
          <motion.img
            src={badge1}
            alt="Badge 1"
            className="h-16 md:h-20 object-contain drop-shadow-xl"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -5 }}
          />


        </div>
      </div>

      <div className="absolute bottom-10 right-0">

        {/* Center badges */}
        <div className="flex items-center gap-6">
          {[badge2, badge3].map((badge, index) => (
            <motion.img
              key={index}
              src={badge}
              alt={`Badge ${index + 2}`}
              className="h-16 md:h-20 object-contain drop-shadow-xl"
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
            <Button
              variant="ghost"
              className="rotate-90 tracking-wide font-medium hover:text-[#9b6dac] hover:bg-transparent  transition -ml-15 cursor-pointer"
            >
              — view all awards —
            </Button>
          </motion.div>
        </div>


      </div>
    </div>
  );
}
