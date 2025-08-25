import { useState } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JetImage from "@/assets/images/jet.png";


const quotes = [
  {
    text: "Sajad Haider is one of the gallant few who helped save Pakistan in 1965",
    author: "Former C-in-C of the PAF, Air Marshal Asghar Khan",
  },
  {
    text: "As Chief of Operations during the 1965 war, I can say Squadron Leader Sajad Haider emerged as one of the outstanding commanders. Under his able and inspiring leadership, No. 19 Squadron's contribution was second to none and at times beyond all expectations. Whenever there was a difficult task to be carried out effectively, I always called upon No. 19 Squadron to do it and it was always done in the best traditions of the Pakistan Air Force.",
    author: "Former C-in-C of the PAF, Air Marshal Abdur Rahim Khan",
  },
  {
    text: "A brother and mentor, Sajad Haider inspired me in the very incipient stage of my career to always 'aim high', a lesson I never forgot and pursued with vigor. Surely then I owe him much for what Allah bestowed on me later.",
    author: "Former Chief of Air Staff, Air Chief Marshal Abbas Khattak",
  },
];

export default function QuoteSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="max-w-screen-lg mx-auto">

      <Quote className="absolute left-0 md:left-40 top-0 opacity-10" size={100} strokeWidth={1} />

      <div className="relative text-end min-h-[300px] md:min-h-[180px]">
        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="px-4 absolute right-0"
          >
            <p className="text-2xl sm:text-3xl font-medium leading-relaxed font-satisfy italic">
              “{quotes[index].text}”
            </p>
            <div className="mt-4 flex items-center justify-left gap-4">
              <span className="text-sm font-light">{quotes[index].author}</span>
              <span className="w-24 h-px bg-white/30"></span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 right-6 flex gap-3">


        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 rounded-full h-12 w-12 bg-black/10 hover:bg-[#4e8f79]/50 cursor-pointer"
          onClick={handlePrev}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.div>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 rounded-full h-12 w-12 bg-black/10 hover:bg-[#4e8f79]/50 cursor-pointer"
          onClick={handleNext}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.div>
        </Button>

      </div>
      </div>

      <img
        src={JetImage}
        alt="Jet"
        className="absolute bottom-20 md:top-1 -right-10 w-[200px] rotate-[2deg]"
      />

      
    </div>
  );
}
