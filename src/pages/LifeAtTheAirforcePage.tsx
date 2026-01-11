import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import S4_Image from '@/assets/images/airforce/PAF_F-86_Sabres_1965_War.jpg';
import S5_Image from '@/assets/images/airforce/Pakistani_Sherdil_Pilots_Planning_Pathankot_Airstrikes_(1965_War).jpg';
import S6_Image from '@/assets/images/airforce/SajadHaider1965.png';
import S7_Image from '@/assets/images/airforce/Image (23).jpg';
import S8_Image from '@/assets/images/airforce/Image (24).jpg';

import fl1 from '@/assets/images/airforce/fl (1).jpeg';
import fl2 from '@/assets/images/airforce/fl (2).jpeg';
import fl3 from '@/assets/images/airforce/fl (3).jpeg';
import fl4 from '@/assets/images/airforce/fl (4).jpeg';

import md1 from '@/assets/images/airforce/md (1).jpeg';
import md2 from '@/assets/images/airforce/md (2).jpeg';
import md3 from '@/assets/images/airforce/md (3).jpeg';

// All PILOT LIFE content organized chronologically
const allPilotLifeContent = [
    {
        title: "First Flight Experiences",
        content: "His first take-off in a WW-II Harvard was a feeling he described as \"euphoric, difficult to encapsulate in words.\" When his instructor uttered the magic words, \"You have the controls,\" Haider described it as a dream come true. He experienced his first loop, and his first blackout. An \"incredible feeling\" overcame him: a sense of freedom and self-esteem. The course distinguished Risalpur history with an approximately 80% pass rate. On \"The Big Day,\" receiving the pin of the flying wing was a moment wedged in memory."
    },
    {
        title: "Fighter Conversion and Squadron Life",
        content: "Haider's fighter training emphasised airmanship for the Tempest, but was conducted on the dual Fury. This conversion was the first fully Pakistani-run operation, though the aircraft were dilapidated. It was here that Haider had his first altercation and almost resigned. But his Squadron leader Ashraf Chaudhry tore up the resignation, saying, \"Go boy, and fly well, you will make a fine fighter pilot.\" He placed second in the conversion course, behind Sarfraz Rafiqui, a martyr of the 1965 war. He was then posted to No. 14 Fighter Bomber Squadron in Peshawar."
    },
    {
        title: "Fighter Conversion Section",
        content: "Accompanied by his mother, father, sister, Bunyad, and Jawwad for tearful goodbyes from Quetta, he arrived in Peshawar, settling in the Bachelor's Officer Quarters (BOQs), rooming with good friend Pilot Officer Zaheer Hassan (\"Tinchoo\"). He met senior pilot Flg Off Muniruddin Ahmed (\"Bha Munir\") and adopted sharing a jug of shandy (beer in lemonade) as a symbolic drink with companions. Flying the Sea Furies, which were superior to Tempests, the squadron echoed a WWII RAF gung-ho style with little flight safety regard. After two months, Wing Cdr Rahim Khan (\"Shantay Khan\") took over—a fearsome but kind-hearted commander. A major event was the deployment of No. 14 to Dhaka for a month, the first fighter squadron to cross India for East Pakistan goodwill, landing meticulously and deliberately aggressively at Palam for national pride. At the Dhaka Club, the Begum of Dhaka hosted Haider and companions. Haider noted that politically aware Bengalis saw the goodwill visit as a threat, not goodwill, aware of discontent seeds from dishonest West Pakistani bureaucracy. He specifically pointed to the removal of Bengali Prime Minister Khawaja Nazimuddin in a conspiracy by Gen. Ghulam Mohammad and army C-in-C Ayub Khan, after which East Pakistanis began dreaming independence."
    },
    {
        title: "First Postings and the Dawn of Jet Power",
        content: "Sajad Haider left Quetta with his family for Peshawar, joining the Bachelor's Officer Quarters and training with his flight companions under a demanding flying culture. He participated in a landmark goodwill mission to Dhaka, observing early signs of Bengali resentment toward West Pakistan's political dominance. Later, assigned to No. 11 Squadron—the PAF's first jet unit—Haider faced gruelling flying conditions that shaped his discipline and skill under exacting mentors. Upon Dhaka return, Haider and Tinchoo were assigned to No. 11 squadron by Sqn Ldr Masroor Hossain—the PAF's first and only jet squadron then. This posting was a significant leap for young pilots. He met the beloved Butch (Alauddin Ahmed), who explained the Super Marine Attacker. Flying the Attacker was described as the toughest flying anywhere: no heating/cooling or navigational aids, and bad manual controls, making formation aerobatics deadly. He experienced the bends often, once using a fuel tank opener to tear his gum to relieve excruciating pain, all while maintaining formation. He was surrounded by motivating superiors like Sqn Ldr FS Hussain (a world-class legend whose first interaction involved an upside-down 50 feet off the ground inverted loop), Mitty Masud, and Corny Karim, who were \"terrors\" and sticklers for tight flying. Flt Lt Corny Karim \"bullied the life out of me\" for formation, which Haider later thanked him for after advancing from position 5 to 3 in a year. Stunts for commanders were common despite little safety culture. He was around the same time called \"Nosy\" while Plt Off MA Shamim returned from training called \"Pinky\" for his ruddy complexion."
    },
    {
        title: "Near Miss",
        content: "Haider was on a single-craft run trying new weapons. On his way back he was informed that his jet was on fire. With adrenaline spiking and stomach turning, and with no option to bail out, he landed and ran from the cockpit immediately after cutting the fuel, with the rear aflame from a severed exhaust pipe leaking flames. 10-15 seconds more, and he would have died there."
    },
    {
        title: "Against Afghan Mercenaries",
        content: "There was an incident where Haider took the initiative to help the Frontier Corps against Afghan mercenaries. He felt strongly about leaving the Frontier Corps soldiers hanging when they had specifically requested air support. He flew with a team, performing tight manoeuvres in the mountainous region of Northern Pakistan, killing three of the mercenaries while sparing the life of another."
    },
    {
        title: "Medals",
        images: [
            md1,
            md2,
            md3,
        ]
    },
    {
        title: "Sajad Haider's view on the 1965 war",
        content: "Haider viewed the '65 war as a disastrous military failure driven by the egos and incompetence of Pakistan's leadership, particularly President Ayub Khan. He criticised Operation Grand Slam, which failed due to strategic missteps and leadership confusion, including the removal of General Akhtar Malik just before a crucial attack. The PAF, despite efforts by Musa Khan to keep them out of the loop, demonstrated effective leadership and tactical prowess, playing a key role in defending Pakistan. Haider argues that Pakistan owes its survival to the bravery of its soldiers and not its leaders, emphasising the need to acknowledge past mistakes to ensure a better future."
    },
    {
        title: "Rann of Kutch Skirmish",
        content: "The PAF had been told to sit the skirmish out due to distance and the defensive depth of the Indian position. Had the IAF committed their forces to the fight, he wrote, the Pakistani army would have been decimated, but Air Marshal Asghar Khan negotiated with the IAF to keep both air forces out of the combat to minimise losses, and this was one of the reasons why the IAF didn't enter this skirmish, the other being poor intelligence of Pakistani air bases."
    },
    {
        title: "War Clouds",
        content: "On 28th June, Sajad Haider and the PAF command chain discussed strategies regarding plans of attack: war was brewing, and the element of surprise was integral. In the event of an attack order, Sajad was to lead the largest single attack with 16 F-86 aircraft against Ambala airfield. However, due to the military keeping operational intelligence from the PAF, they were unable to lead an attack and had to defend Lahore and Sialkot, and were thus unable to strike pre-emptively as was their plan, only going on high alert in August."
    },
    {
        title: "Internal struggles in Pakistan's Military",
        content: "Sajad wrote that Asghar Khan's role was overlooked by General Musa, suggesting that cowardice was the reason for Asghar not wanting to commit the PAF forces. The real \"chicken\", as per a classified report by the US Air Attache on May 15 1965 that detailed an intrusion by the IAF near Lahore's airspace, showed Ayub Khan as the one who refused retaliation against the IAF, fearing escalation. The Indian craft was able to complete its intelligence gathering mission and returned to India, and the \"PAF was livid\". This was part of the key information that allowed \"Op Ablaze\" to go forward in September 1965."
    },
    {
        title: "Later Reflections and Personal Challenges",
        content: "Haider held high opinions of Air Marshal Asghar Khan and A.M. Nur Khan. He referred to Ayub Khan (AK) as a dictator, arguing that since AK appointed Gen. Musa, no significant progress was expected. He asserted that the armed forces served gallantly and shouldn't be the people's punching bag today, noting controversial events and bad decisions were edited from official versions by non-historians. Haider strongly criticised the official PAF narrative of the 1965 India-Pakistan Air War (IPAW): \"The PAF did well in the war. It's a pity that its government and leadership saw it fit to denigrate its achievements by making claims that have ensured that the PAF is associated with bragging as opposed to its actual praiseworthy achievements.\" He was indignant that no candid attempts had been made to paint the true picture. He felt \"patently cheated and enraged\" at the loss of gallant men who were martyred believing in a \"sacred cause\" based on what he perceived as a dishonest official version. He concluded, \"It is my conviction that an honest study of the past can throw up the answers to our perpetual national morass. The root cause of our misfortunes has to do with a bankruptcy of leadership.\" In his later business life, his company, Cormorant, was targeted by two generals from the Defence Procurement Division for kickbacks. He wrote, \"With the endemic corruption and coercion by the sitting Director General Defence Procurement (DGDP), it had become obvious that either I resorted to giving kickbacks, or packed up.\" He decided to pull the shutters down on his company by 1990, \"while honour was still an option.\" This coincided with difficult matrimonial decisions (noting a third wife). His father passed away on July 3, 1986, at the age of 104, while Haider was in Geneva."
    },
    {
        title: "Pathankot Strike",
        content: "On 6 September 1965, Sqn Ldr Sajad Haider led a formation of eight F-86 Sabres from No. 19 Squadron in a pre-emptive strike against the Pathankot airfield, a mission that remains one of the most successful in PAF history. Utilising a Hi-Lo-Hi flight profile to avoid detection by Indian radar, the formation achieved complete surprise, reaching the target area at the precisely coordinated time of 17:05 hours. Upon arrival, Haider spotted numerous aircraft, including Mystères and two MiG-21s, parked in the northern dispersal area. Although the original orders specified a single pass, Haider directed his pilots through three devastating strafing attacks, using their .50 calibre guns to ignite an inferno on the ground. According to IAF records confirmed by the sources, the raid resulted in the destruction of ten aircraft—specifically six Mysteres, two MiG-21s, one Gnat, and a Fairchild Packet—while damaging three others. Despite facing a \"wall of flak\" from heavy anti-aircraft guns, the entire ten-ship formation, including the two tactical escorts, returned safely to Peshawar, an achievement that contributed to Haider being awarded the Sitara-e-Jurat."
    },
    {
        title: "Wagah Border",
        content: "Before the attack, the Indian Army high command was so confident that they reportedly issued invitations to journalists for a celebration at the Lahore Gymkhana, an audacity that was crushed when Haider’s formation intercepted their leading columns at the Wagha border. Upon spotting the Indian roundels on the tanks, Haider ordered his pilots to set their weapons to \"hot\" and aggressively engaged the armour with rockets and guns. The squadron remained over the target for roughly 17 minutes, conducting devastating runs that incapacitated the Indian 3 Jat battalion and destroyed mortars, RCL guns, and numerous tanks. Sources confirm that this intervention was the decisive factor that stalled the Indian advance, preventing the enemy from pouring across the BRB canal into the city and earning the 19th Squadron a legacy as the force that saved Lahore."
    },
    {
        title: "Flight Logs",
        images: [
            fl1,
            fl2,
            fl3,
            fl4,
        ]

    },
    {
        title: "1971 War",
        content: "Sajad Haider's primary role during the 1971 War was the Officer Commanding (OC) Flying Wing at Sargodha (No 33 Wing), a position he took in mid-September. He immediately focused on operational readiness but lamented the loss of the classical pre-emption opportunity because the political leadership delayed launching a counter-air and land assault after the Indian Army invaded East Pakistan. When the war officially began on December 3rd, the first Mirage strike against Pathankot missed its target, hampered by darkness and timing issues. His F-6 Squadrons provided constant Close Air Support, using their 30 mm guns effectively against Indian armour, particularly in the critical Shakargarh and Sialkot sectors. The conflict concluded abruptly for him when a crucial Mirage bombing mission he was escorting against the Ferozpur marshalling yard on December 17th was falsely recalled by a senior staff officer, wasting a strategic opportunity and severely demoralising his crews"
    },
    {
        title: "Air Battle over Dhaka",
        content: "On the Western Front, the PAF launched a series of strikes on 3 December targeting Indian airfields like Amritsar, Pathankot, and Srinagar. Unlike 1965, the focus was on cratering runways because the IAF had moved their aircraft into hardened concrete shelters, and while Sajad did not fly the mission himself (as much as he wanted to relive his memories of 1965), he was persuaded to stay behind by Wg Cdr Hakimullah to supervise the conduct of operations. Hakimullah led a particularly successful Mirage mission that decimated a large assembly of Indian tanks at the Mukerian railway station. However, the campaign also saw the loss of the legendary Wg Cdr Mervyn Middlecoat, who was shot down in his F-104 by a MiG-21 on 12 December."
    },
    {
        title: "Defence of Sialkot",
        content: "As Officer Commanding (OC) No. 33 Flying Wing at Sargodha, Sajad Haider defended the Shakargarh and Sialkot sectors during the 1971 War. Under his leadership, the wing launched between 50 and 80 missions daily into the intense tank battles at Phillora and Chawinda, where Sajad mandated the use of 1,000 lb bombs to halt Indian armoured thrusts. Sajad did not merely command from the ground; he personally flew 20 operational missions during the conflict, including a notable sortie on 13 December in the Shakargarh salient. During that mission, after witnessing his wingman, Flt Lt Cecil Chaudhry, bail out behind enemy lines, Sajad conducted aggressive strafing runs to deter Indian soldiers and provide cover until Chaudhry could be reached by Pakistani troops. Sajad’s wing was celebrated by the Army’s Chief of General Staff, Lt Gen Gul Hassan, for its spectacular performance in saving Sialkot"
    },
    {
        title: "Sajad Haider’s Combat and the Ferozpur Incident",
        content: "Sajad Haider personally flew 20 operational missions during the conflict. On 13 December, while flying a Mirage-IIIE, he engaged in a high-speed chase of two Indian Su-7s near Shakargarh. Due to a weapon switching error and the low altitude of the bandits, his missiles failed to lock, and he narrowly avoided overflying Pathankot airfield while exiting the combat zone with critically low fuel. \n\n On 17 December, Sajad prepared a strike of 4 Mirages to bomb the Ferozpur marshalling yard. Moments before the attack, Air Vice Mshl Saeedullah Khan ordered a recall over the radio, falsely claiming it was the Air Chief's instruction. This botched command, which confused a sector-specific dust haze with the target area, caused the mission to be aborted."
    },
    {
        title: "The Attock Conspiracy",
        content: "The Attock Conspiracy, unearthed in March 1973, was a plot to overthrow Zulfiqar Ali Bhutto’s legitimate government by criminal force, masterminded by Brigadier F.B. Ali and Colonel Aleem Afridi, as per Sajad. This event was immediately seized upon by the PAF high command (Air Marshal Zafar Chaudhry's cabal) as a pretext to frame critics, resulting in Sajad Haider's arrest in May 1973 and subsequent solitary confinement in a sub-detention centre near Badaber for many months. Haider defied intense pressure and threats, refusing to sign a coerced confession that would have implicated Air Commodore Zulfiqar Ali Khan. He maintained a \"Plea of No Case\" at the General Court-Martial, leading to his unanimous exoneration; however, the Air Chief, driven by malice, unlawfully ordered him kept under arrest following the verdict, necessitating intervention from the Defence Minister to secure his final release. The fallout from the conspiracy resulted in the conviction of Wing Commander Hashmi and Squadron Leader Ghaus, but also the official removal of the others from their posts for intrigue and vindictive witch-hunting. In an extremely rare case, Sajad Haider was not only exonerated but reinstated to his position, which is unheard of after court martials, as that usually ends in honourable discharge if innocent.",
    },
    {
        title: "End of an Era",
        content: "Sajad Haider's experience with General Zia ul Haq was marked by escalating disillusionment culminating in his resignation from the PAF in 1980. Sajad developed a revulsion for Zia ul Haq following Zulfiqar Ali Bhutto's unlawful murder and Zia's subsequent imposition of the Hadood melodrama and hypocritical use of Islam, earning Zia the derogatory alias Lash ul Haq (Whipper of truth). His career under Zia was jeopardised when he gave a strongly worded note during a presentation to the President, criticising Zia's rule and his assertion that the army would run the country indefinitely. This confrontation, which Sajad felt compelled to make out of sincerity, convinced him that the PIA job was history and that his military career was ending. Concluding that he felt uneasy and did not wish to serve under Zia's rule anymore, Sajad requested to quit, stating, \"Enough was enough\" and that he should be allowed to quit while honour was still an option. He left the PAF with a bank balance of just Rs 17,000."
    },
];

const wars = [
    {
        id: "war-of-1965",
        title: "War of 1965",
        description: "Sajad Haider often lauded as the Saviour of Lahore and one of the key heroes of the 1965 War, led the Sherdils of No. 19 Squadron PAF as Squadron Leader.",
        image: S4_Image,
        sections: allPilotLifeContent.filter(s => 
            s.title.includes("1965") || 
            s.title.includes("Rann") || 
            s.title.includes("War Clouds") || 
            s.title.includes("Internal struggles") ||
            s.title.includes("Wagah Border") ||
            s.title.includes("Pathankot Strike") ||
            s.title.includes("Flight Logs")
        )
    },
    {
        id: "war-of-1971",
        title: "War of 1971",
        description: "Sajad led the Wing in notable contributions, with No. 5 Squadron PAF conducting successful strike missions in India's Amritsar, Pathankot, and the famous strike on Mukerian railway station.",
        image: S5_Image,
        sections: allPilotLifeContent.filter(s => 
            s.title.includes("1971 War") ||
            s.title.includes("Air Battle over Dhaka") ||
            s.title.includes("Defence of Sialkot") ||
            s.title.includes("Sajad Haider’s Combat and the Ferozpur Incident")
        )
    },
    {
        id: "pilot-life",
        title: "PILOT LIFE",
        description: "Sajad Haider's complete journey as a pilot in the Pakistan Air Force, from his first flight experiences to his reflections on war and leadership.",
        image: S6_Image,
        sections: allPilotLifeContent.filter(s => 
            s.title.includes("First Flight Experience") ||
            s.title.includes("Fighter Conversion and Squadron Life") ||
            s.title.includes("First Postings and the Dawn of Jet Power") ||
            s.title.includes("Near Miss") || 
            s.title.includes("Against Afghan Mercenaries") ||
            s.title.includes("Medals")
        )
    },
    {
        id: "the-attock-conspiracy",
        title: "The Attock Conspiracy",
        description: "he Attock Conspiracy, unearthed in March 1973, was a plot to overthrow Zulfiqar Ali Bhutto’s legitimate government by criminal force, masterminded by Brigadier F.B. Ali and Colonel Aleem Afridi, as per Sajad.",
        image: S7_Image,
        sections: allPilotLifeContent.filter(s => 
            s.title.includes("The Attock Conspiracy")
        )
    },
    {
        id: "the-final-stand",
        title: "The Final Stand",
        description: "Sajad Haider's experience with General Zia ul Haq was marked by escalating disillusionment culminating in his resignation from the PAF in 1980.",
        image: S8_Image,
        sections: allPilotLifeContent.filter(s => 
            s.title.includes("End of an Era")
        )
    },
];

export default function LifeAtTheAirforcePage() {
    const { warId } = useParams<{ warId: string }>();
    const navigate = useNavigate();
    
    const war = wars.find(w => w.id === warId) || wars[0];

    return (
        <InnerPageLayout 
            title={war.title}
            content={war.description}
            image={war.image}
        >
            <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="flex items-center cursor-pointer gap-2 mb-8 text-black dark:text-white hover:opacity-70 transition-opacity"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Back</span>
                    </motion.button>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={war.image}
                                alt={war.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                                {war.title}
                            </h2>
                            
                            {war.sections && war.sections.length > 0 ? (
                                war.sections.map((section, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="mb-10 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                                    >
                                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                                            {section.title}
                                        </h3>
                                        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                            {section.content}
                                        </p>
                                        {section.images && section.images.length > 0 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {section.images.map((image, index) => (
                                                    <img key={index} src={image} alt={section.title} className="w-full h-full object-cover" />
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))
                            ) : (
                                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    {war.description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </InnerPageLayout>
    );
}

