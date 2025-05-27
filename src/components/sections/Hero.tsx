import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import heroBg from '@/assets/hero/hero-bg.png';
import heroImg from '@/assets/hero/hero-img.png';
import badge1 from '@/assets/hero/badge-1.png';
import badge2 from '@/assets/hero/badge-2.png';
import badge3 from '@/assets/hero/badge-3.png';

export default function Hero() {
  const words = [
    { text: "Celebrating" },
    { text: "the" },
    { text: "Legacy", className: "text-primary" },
    { text: "of" },
    { text: "S. Sajad Haider", className: "text-primary font-bold" },
  ];

  return (
    <div
      className="h-screen max-w-screen-xl mx-auto flex flex-col items-center justify-center overflow-hidden p-2"
    >
      {/* Layered Background Effects */}
      <div className="absolute  inset-0 z-0">
        {/* Your background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-to-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />


        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={2.0}
          particleDensity={30}
          className="w-full h-full opacity-70 z-10 relative"
          particleColor="#e99020"
        />


      </div>


      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-full h-5/6  flex justify-center items-center bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >

        <div className=" text-center mb-6">

          <h1
            className="text-[5rem] md:text-[10rem] text-transparent bg-clip-text
                      bg-[linear-gradient(to_right,_#000,_transparent_50%,_#000)]
                      dark:bg-[linear-gradient(to_right,_#fff,_transparent_50%,_#fff)]"
          >
            S. Sajad Haider
          </h1>


          <div className="mt-4 flex items-center justify-center text-base md:text-lg">
            <span className="dark:text-white text-black">1932</span>
            <div className="flex-1 mx-4 h-px w-24 md:w-40 bg-gradient-to-r from-black/40 via-transparent to-black/40 dark:from-white/40 dark:via-transparent dark:to-white/40" />
            <span className="dark:text-white text-black">1932</span>
          </div>
        </div>
      </motion.div>



      {/* Badges */}
      <motion.div
        className="absolute bottom-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="flex items-center justify-between gap-4">
          {[badge1].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity" />
              <img
                src={badge}
                alt={`Badge ${index + 1}`}
                className="relative h-16 md:h-20 w-auto object-contain drop-shadow-lg"
              />
            </motion.div>
          ))}

    
          <div className="felx-1 flex items-center gap-4 mr-10">
            {[badge2, badge3].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity" />
                <img
                  src={badge}
                  alt={`Badge ${index + 1}`}
                  className="relative h-16 md:h-20 w-auto object-contain drop-shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>



    </div>
  );
}