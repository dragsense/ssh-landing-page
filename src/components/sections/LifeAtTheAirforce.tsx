
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import S4_Image from '@/assets/images/s4.png';
import S5_Image from '@/assets/images/s5.png';
import S6_Image from '@/assets/images/s6.png';
import S7_Image from '@/assets/images/s7.png';

export function LifeAtTheAirforce() {
    return <HeroParallax products={products}>

        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                LIFE AT THE AIRFORCE <br />
                War of 1965
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
                Sajad Haider often lauded as the Saviour of Lahore and one of the key heroes of the 1965 War, led the Sherdils of No. 19 Squadron PAF as Squadron Leader.
            </p>
            <p className="text-xs text-right w-full text-muted-foreground underline mb-4 cursor-pointer hover:text-primary transition-colors">
                Read More &gt;&gt;
            </p>
        </div>
    </HeroParallax>;
}
export const products = [
    {
        title: "",
        link: "",
        thumbnail:
            S4_Image,
    },
    {
        title: "",
        link: "",
        thumbnail:
            S5_Image,
    },
    {
        title: "",
        link: "",
        thumbnail:
            S6_Image,
    },

    {
        title: "",
        link: "",
        thumbnail:
            S7_Image,
    },
  {
        title: "",
        link: "",
        thumbnail:
            S4_Image,
    },
    {
        title: "",
        link: "",
        thumbnail:
            S5_Image,
    },
    {
        title: "",
        link: "",
        thumbnail:
            S6_Image,
    },

    {
        title: "",
        link: "",
        thumbnail:
            S7_Image,
    },
  {
        title: "",
        link: "",
        thumbnail:
            S4_Image,
    },
    {
        title: "",
        link: "",
        thumbnail:
            S5_Image,
    },
    {
        title: "",
        link: "",
        thumbnail:
            S6_Image,
    },

    {
        title: "",
        link: "",
        thumbnail:
            S7_Image,
    },
 
];
