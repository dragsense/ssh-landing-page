import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import B1 from '@/assets/business/cormorant-company-1.jpeg'
import B2 from '@/assets/business/cormorant-company-2.jpeg'

export default function BusinessmanFeatureSection() {

    return (


        <div className="max-w-screen-lg mx-auto my-10">
            <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-between flex-col order-2 md:order-1"
                >
                    <p className="font-normal mb-5 text-base md:text-lg">
                        <strong>Cormorant</strong> <br />
                        Cormorant was the name of the company Sajad founded, named after the bird that can fly (representing the Air Force), live on land (the Army), and go underwater (the Navy). The business operated for a decade, from 1980 to 1990. Initially financed by the Gokals, Sajad sought complete independence and achieved it in 1983 by paying them back ten times their original investment. At its peak, Cormorant represented 80 of the top Fortune 100 defence companies in the world. Major deals included selling AM General vehicles to the Army, providing Gulfstream aircraft to the Survey General of Pakistan for aerial mapping, supplying Litton Industries with night vision and setting up a major ammunition plant in Wah.

                        

                    </p>
                  
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="order-1 md:order-2"
                >
                    <motion.img
                        src={B2}
                        alt="Young Haider in uniform"
                        className="w-full h-auto rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />

                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className=""
                >
                    <motion.img
                        src={B1}
                        alt="Young Haider in uniform"
                        className="w-full h-auto rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-between flex-col"
                >
                    <p className="font-normal mb-5 text-base md:text-lg">
                    Sajad maintained a strict code of ethics, refusing to do "one cent of business" with the Air Force because he would not leverage his former position or ask for favours from officers who had served under him.
                        In 1989, a businessman with ties to the military demanded a 10% kickback on a contract, and Sajad responded by kicking his desk, telling him he did not want the contract, and walking out. “I refused kickbacks. That door closed. Another opened.”

                        This encounter with systemic corruption led Sajad to shut down the company in 1990. He had no doubts about this decision, as he said, “Allah completes the circle. You only need to keep walking.”

                        Sajad Haider had "no greed"; once he had earned enough to buy a roof for his parents, his sister, and his own children, he chose to retire with his honour intact rather than compromise his integrity.
                    </p>
                   
                </motion.div>

              
            </div>
            </div>
        </div>
    );
}