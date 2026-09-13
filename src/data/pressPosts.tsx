// data/pressPosts.tsx
// Add new press items, articles, interviews and tributes here.
// Newest first is not required — the page sorts by date.
import type { ReactNode } from "react";
import jangScan from '@/assets/images/press/jang-sunday-magazine-sajjad-haider-6-sept-2026.jpeg';

export type PressCategory = "Newspaper" | "Magazine" | "Interview" | "Tribute" | "Book" | "Event";

export interface PressPost {
  slug: string;
  title: string;
  urduTitle?: string;
  publication: string;
  date: string; // ISO format: YYYY-MM-DD
  author?: string;
  category: PressCategory;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  excerpt: string;
  keywords?: string;
  sourceNote?: string;
  body: ReactNode;
}

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg md:text-xl font-semibold pt-4">{children}</h3>
);

export const pressPosts: PressPost[] = [
  {
    slug: "jang-wings-of-the-homeland-2026",
    title: "Wings of the Homeland",
    urduTitle: "وطن کے شہ پر",
    publication: "Jang Sunday Magazine",
    date: "2026-09-06",
    author: "Aleena Wahid, Islamabad",
    category: "Magazine",
    image: jangScan,
    imageAlt: "Jang Sunday Magazine Defence Day special, 6 September 2026, headlined in Urdu 'Wings of the Homeland', featuring Air Commodore Sajjad Haider (Sajad Haider), hero of Pathankot",
    imageCaption: "Jang Sunday Magazine, page 4, 6 September 2026.",
    excerpt: "Sixty-one years after the September War, Pakistan's largest Urdu daily devoted its Defence Day supplement to the pilots of 1965. Sajad Haider (Sajjad Haider) is named alongside M. M. Alam as one of the two men who changed the course of the air war.",
    keywords: "Sajjad Haider Jang, Jang Sunday Magazine Defence Day 2026, Watan ke Shahpar, Hero of Pathankot, MM Alam Sajjad Haider",
    sourceNote: "English summary of an Urdu-language feature published by Jang, Sunday Magazine, 6 September 2026. Reported by Aleena Wahid. Summarised here for readers outside Urdu, with names and dates as given in the original. Copyright remains with the publisher. Sajad Haider is also written as Sajjad Haider in Urdu press and reference sources.",
    body: (
      <>
        <H3>The hero of Pathankot</H3>
        <p>
          On 6 September 1965, Sajad Haider led No. 19 Squadron in the F-86 Sabre strike on
          Pathankot airbase, destroying Indian aircraft on the ground and cutting into the supply
          and logistics behind the front. The article makes the point that mattered most at the
          time. Pakistan was not only holding Lahore and Sialkot. It was reaching into Indian
          territory and hitting military installations there.
        </p>
        <p>
          For that raid he was awarded the Sitara-e-Jurat. He later received the Hilal-e-Imtiaz
          (Military) and the Sitara-e-Basalat. His account of the war appears in his book,{" "}
          <em>Flight of the Falcon: Demolishing Myths of the Indo-Pak Wars 1965 and 1971</em>.
        </p>

        <H3>Pakistan's falcon</H3>
        <p>
          The companion profile covers M. M. Alam and the engagement of 7 September 1965 over
          Sargodha, flying the same F-86 Sabre. The article presents the two men as a pair. One
          demonstrated that the Pakistan Air Force could strike first and strike deep. The other
          became the symbol of what it could do defending its own sky.
        </p>

        <H3>Background to the war</H3>
        <p>
          Both countries were still forming their national identities. For Pakistan, Lahore and
          Sialkot were a question of survival rather than territory. India held the numerical
          advantage in the air, fielding MiG-21s, Hunters, Gnats and Vampires against a Pakistan
          Air Force built around the American-supplied F-86 Sabre and a small number of F-104
          Starfighters. The article's argument is that air superiority counted for more than
          ground numbers, and that every Pakistani pilot flew knowing the imbalance.
        </p>

        <H3>The unnamed heroes of 1965</H3>
        <p>The feature closes by naming pilots it argues are remembered less than they should be.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Squadron Leader Alauddin Ahmed, Shaheed</strong>. Killed on 13 September 1965 leading a high-risk mission in the Gurdaspur sector after his aircraft was hit by ground fire. Awarded the Sitara-e-Jurat posthumously. His story appears in <em>Flight of the Falcon</em>.</li>
          <li><strong>Jamal A. Khan</strong>. Sitara-e-Jurat for a night engagement near Fazilka on 21 September 1965, flying an F-104 Starfighter. Flew in both the 1965 and 1971 wars and later led the Pakistan Air Force from 1985 to 1988.</li>
          <li><strong>Air Marshal (R) Dilawar Hussain</strong>. Recognised for recovering a badly damaged aircraft under heavy fire.</li>
          <li><strong>Wing Commander Nazir Latif</strong>, later Air Commodore. Repeated strikes against Indian airfields, including Ferozepur.</li>
          <li><strong>Squadron Leader Munir-ud-Din Ahmed, Shaheed</strong>. Wing Operations Officer at Sargodha, killed on 10 November 1965.</li>
          <li><strong>Sarfaraz Rafiqui</strong> and <strong>Cecil Chaudhry</strong> are also named.</li>
        </ul>
        <p>
          The article cites <em>A Saga of PAF's Gallant Air Warriors: Sentinels in the Sky</em> by
          Azam Qadri and Group Captain Muhammad Ali.
        </p>
      </>
    ),
  },
];

export const sortedPressPosts = [...pressPosts].sort((a, b) => b.date.localeCompare(a.date));

export const formatPressDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
