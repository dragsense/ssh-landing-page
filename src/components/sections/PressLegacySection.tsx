// components/PressLegacySection.tsx
// Home page teaser: shows the latest press items and links to /press
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sortedPressPosts, formatPressDate } from "@/data/pressPosts";

export default function PressLegacySection() {
  const [latest, ...rest] = sortedPressPosts;
  if (!latest) return null;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs md:text-sm tracking-widest text-muted-foreground mb-2">PRESS & LEGACY</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">The record held</h2>
        </div>
        <Link to="/press" className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-red-500 hover:gap-3 transition-all">
          View all press <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
      >
        {latest.image && (
          <Link to={`/press/${latest.slug}`}>
            <img
              src={latest.image}
              alt={latest.imageAlt || latest.title}
              className="w-full h-72 md:h-96 object-cover object-top rounded-md border border-border shadow-xl"
              loading="lazy"
            />
          </Link>
        )}
        <div>
          <p className="text-xs md:text-sm tracking-wide text-muted-foreground mb-3">
            {latest.publication} · {formatPressDate(latest.date)}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-1">{latest.title}</h3>
          {latest.urduTitle && (
            <p lang="ur" dir="rtl" className="text-xl leading-loose text-red-500 dark:text-red-300 mb-3 text-left">
              {latest.urduTitle}
            </p>
          )}
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground border-l-4 border-red-500 pl-4 mb-6">
            {latest.excerpt}
          </p>
          <Link to={`/press/${latest.slug}`} className="inline-flex items-center gap-2 font-semibold hover:text-red-500 transition">
            Read the English summary <ArrowRight className="w-4 h-4" />
          </Link>

          {rest.length > 0 && (
            <ul className="mt-8 space-y-2 text-sm border-t border-border pt-4">
              {rest.slice(0, 3).map((post) => (
                <li key={post.slug}>
                  <Link to={`/press/${post.slug}`} className="hover:text-red-500">
                    <span className="text-muted-foreground">{post.date.slice(0, 4)} · </span>
                    {post.title} <span className="text-muted-foreground">({post.publication})</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.article>
    </div>
  );
}
