import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import placeHolderImage from '@/assets/images/placeholder.png';
import { BackgroundLines } from "../ui/background-lines";

export default function RecordSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
        <>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text Side */}
        <div>
          <h2 className="text-4xl font-serif font-bold mb-4">
            World record loop of 1958
          </h2>
          <p className="text-sm leading-relaxed max-w-md">
            On 2 February 1958, flying in the No. 3 position, F/L Haider was part of the F-86 Sabre aerobatic team led by Wg. Cdr. Mitty Masud that set a world record performing a 16-aircraft diamond loop.
          </p>
        </div>

        {/* Video Side */}
        <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
          <motion.img
            src={placeHolderImage}
            alt="Loop Thumbnail"
            className="rounded-md object-cover w-full max-w-md"
            whileHover={{ scale: 1.02 }}
          />
<div className="absolute top-3 right-3 flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity duration-300">            <Play className="w-4 h-4" />
            <span>play video</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="p-4 rounded-lg max-w-3xl w-full">
            <video controls autoPlay className="w-full rounded-md">
              <source src="/videos/record-loop-1958.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
