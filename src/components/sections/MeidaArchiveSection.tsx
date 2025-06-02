// components/MediaArchiveSection.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight-new";
import News1 from "@/assets/archive/news-1.png";
import News2 from "@/assets/archive/news-2.png";
import News3 from "@/assets/archive/news-3.png";

const mediaItems = [
  {
    title: "Whispers of the Forgotten | Untold Stories of 1965 and 1971 Wars",
    source: "/ RAVA Documentary Films",
    image: News1,
    link: "#"
  },
  {
    title: "Pakistan Failed Indian Mission | 1965 War",
    source: "/ BOL News",
    image: News3,
    link: "#"
  },
  {
    title: "Pakistan Failed Indian Mission | 1965 War",
    source: "/ BOL News",
    image: News3,
    link: "#"
  },
  {
    title: "Pakistan Failed Indian Mission | 1965 War",
    source: "/ BOL News",
    image: News3,
    link: "#"
  },
  {
    title: "Strike at Pathankot | War Diaries | Episode 6",
    source: "/ TCM Originals",
    image: News2,
    link: "#"
  },
    {
    title: "Whispers of the Forgotten | Untold Stories of 1965 and 1971 Wars",
    source: "/ RAVA Documentary Films",
    image: News1,
    link: "#"
  },
  {
    title: "Pakistan Failed Indian Mission | 1965 War",
    source: "/ BOL News",
    image: News3,
    link: "#"
  },
  {
    title: "Pakistan Failed Indian Mission | 1965 War",
    source: "/ BOL News",
    image: News3,
    link: "#"
  },
  {
    title: "Whispers of the Forgotten | Untold Stories of 1965 and 1971 Wars",
    source: "/ RAVA Documentary Films",
    image: News1,
    link: "#"
  },
  {
    title: "Pakistan Failed Indian Mission | 1965 War",
    source: "/ BOL News",
    image: News3,
    link: "#"
  },
];

export default function MediaArchiveSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const getCardStyle = (i: number) => {
  const distance = (i - index + mediaItems.length) % mediaItems.length;
  const absDistance = Math.min(distance, mediaItems.length - distance);

  const getDirection = () => {
    if (distance === absDistance) return 1;
    if (mediaItems.length - distance === absDistance) return -1;
    return distance <= mediaItems.length / 2 ? 1 : -1;
  };

  const dir = getDirection();

  if (absDistance === 0) {
    return {
      zIndex: 30,
      x: 0,
      scale: 1,
      opacity: 1,
      filter: "brightness(1)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        delay: direction === 0 ? i * 0.1 : 0
      }
    };
  } else if (absDistance === 1) {
    return {
      zIndex: 25,
      x: dir * 180,
      scale: 0.85,
      opacity: 1,
      filter: "brightness(0.75)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: direction === 0 ? i * 0.1 : 0.1
      }
    };
  } else if (absDistance === 2) {
    return {
      zIndex: 20,
      x: dir * 280,
      scale: 0.7,
      opacity: 0.9,
      filter: "brightness(0.6)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: direction === 0 ? i * 0.1 : 0.2
      }
    };
  } else if (absDistance === 3) {
    return {
      zIndex: 15,
      x: dir * 360,
      scale: 0.6,
      opacity: 0.7,
      filter: "brightness(0.4)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: direction === 0 ? i * 0.1 : 0.3
      }
    };
  } else {
    return {
      zIndex: 10,
      x: dir * 440,
      scale: 0.5,
      opacity: 0.5,
      filter: "brightness(0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: direction === 0 ? i * 0.1 : 0.4
      }
    };
  }
};

  return (
    <>
      <Spotlight />
      <div className="z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
          MEDIA ARCHIVE
        </h2>

        <div className="relative h-[400px] w-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {mediaItems.map((item, i) => {
              const style = getCardStyle(i);
              const isActive = i === index;
              
              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={style}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                  onClick={() => !isActive && (i > index ? next() : prev())}
                >
                  <Card className="w-[240px] md:w-[320px] border rounded-xl overflow-hidden shadow-lg">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <CardHeader className="p-0">
                        <div className="relative h-48 w-full overflow-hidden">
                          <motion.img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                            <span className="text-white text-sm font-medium">Watch Now →</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{item.source}</p>
                      </CardContent>
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prev}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-1">
            {mediaItems.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === i 
                    ? "w-4 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={next}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
}