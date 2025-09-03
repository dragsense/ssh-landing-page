import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import placeHolderImage from '@/assets/images/videoframe_14891.png';
import imageReocrd from '@/assets/images/record.png';
import { BackgroundLines } from "../ui/background-lines";

export default function RecordSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <>

      <div className="grid md:grid-cols-2 gap-5 items-center h-3/4">
        {/* Text Side */}
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-muted-foreground mb-4">
            WORLD RECORD LOOP OF 1958
          </h2>
          <p className="text-sm leading-relaxed max-w-md">
            On 2 February 1958, flying in the No. 3 position, F/L Haider was part of the 16 F-86 Sabres aerobatic team led by Wg. Cdr. Mitty Masud that set a world record performing a 16-aircraft diamond loop.

          </p>

          <motion.img
            src={imageReocrd}
            alt="Record"
            className="rounded-md object-cover w-full h-full max-w-md"
            whileHover={{ scale: 1.02 }}
          />
        </div>

        {/* Video Side */}
        <div className="flex justify-center flex-col text-center group w-full cursor-pointer gap-4" onClick={() => setIsOpen(true)}>

          <div className="relative w-full h-full">
            <motion.img
              src={placeHolderImage}
              alt="Loop Thumbnail"
              className="object-cover w-full h-full rounded-md"
              whileHover={{ scale: 1.02 }}
            />

            {/* Play Button Overlay (only on image) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 p-6 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-md font-semibold">
                DIAMOND LOOP
              </h3>
              <h3 className="text-md font-semibold">
                16 F-86 SABRE
              </h3>
              <h3 className="text-md font-semibold">
                FEBRUARY 2, 1958
              </h3>
            </div>
            <div className="text-center text-muted text-6xl font-bold">
              <span>
                PAF - FALCONS
              </span>
            </div>

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
              <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d6/PAFWorldRecordLoop1958.webm/PAFWorldRecordLoop1958.webm.480p.vp9.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
