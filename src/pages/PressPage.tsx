import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Newspaper } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/layouts/NavBar";
import { cn } from "@/lib/utils";
import { sortedPressPosts, formatPressDate, type PressPost } from "@/data/pressPosts";

const SITE = "https://sajadhaider.com";

function groupByYear(posts: PressPost[]) {
  const groups: Record<string, PressPost[]> = {};
  posts.forEach((post) => {
    const year = post.date.slice(0, 4);
    (groups[year] ||= []).push(post);
  });
  return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));
}

function TimelineSidebar({ activeSlug }: { activeSlug?: string }) {
  const years = groupByYear(sortedPressPosts);

  return (
    <aside className="md:sticky md:top-32 md:self-start">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-4">TIMELINE</p>

      {/* Mobile: horizontal chips */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-3 -mx-1 px-1">
        <Link
          to="/press"
          className={cn(
            "shrink-0 rounded-full border px-3 py-1.5 text-sm",
            !activeSlug ? "border-red-500 text-red-500" : "border-border text-foreground/80"
          )}
        >
          All
        </Link>
        {sortedPressPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/press/${post.slug}`}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 text-sm whitespace-nowrap",
              activeSlug === post.slug ? "border-red-500 text-red-500" : "border-border text-foreground/80"
            )}
          >
            {post.date.slice(0, 4)} · {post.title}
          </Link>
        ))}
      </div>

      {/* Desktop: vertical timeline */}
      <nav className="hidden md:block" aria-label="Press timeline">
        <Link
          to="/press"
          className={cn(
            "block mb-6 text-sm font-semibold hover:text-red-500 transition",
            !activeSlug ? "text-red-500" : "text-foreground/80"
          )}
        >
          All coverage ({sortedPressPosts.length})
        </Link>
        {years.map(([year, posts]) => (
          <div key={year} className="mb-6">
            <p className="text-2xl font-bold mb-3">{year}</p>
            <ol className="relative border-l border-border ml-1.5 space-y-5">
              {posts.map((post) => {
                const active = activeSlug === post.slug;
                return (
                  <li key={post.slug} className="pl-5 relative">
                    <span
                      className={cn(
                        "absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2",
                        active ? "bg-red-500 border-red-500" : "bg-background border-muted-foreground"
                      )}
                    />
                    <Link to={`/press/${post.slug}`} className="group block">
                      <p className="text-xs text-muted-foreground">{formatPressDate(post.date)}</p>
                      <p className={cn("text-sm font-semibold leading-snug group-hover:text-red-500 transition", active && "text-red-500")}>
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{post.publication}</p>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </nav>
    </aside>
  );
}

function PostList() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Press & Legacy</h1>
      <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl">
        Newspaper features, interviews and tributes to Air Commodore (R) Sajad Haider
        (also written Sajjad Haider), gathered as a record of how his story has been told.
      </p>
      <div className="grid gap-8">
        {sortedPressPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid sm:grid-cols-3 gap-5 rounded-xl border border-border p-4 md:p-5 hover:border-red-500/60 transition"
          >
            {post.image && (
              <Link to={`/press/${post.slug}`} className="sm:col-span-1">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full h-48 sm:h-full object-cover object-top rounded-md"
                  loading="lazy"
                />
              </Link>
            )}
            <div className={cn("flex flex-col", post.image ? "sm:col-span-2" : "sm:col-span-3")}>
              <p className="text-xs tracking-wide text-muted-foreground mb-2">
                {post.category.toUpperCase()} · {post.publication} · {formatPressDate(post.date)}
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-1">
                <Link to={`/press/${post.slug}`} className="hover:text-red-500 transition">{post.title}</Link>
              </h2>
              {post.urduTitle && (
                <p lang="ur" dir="rtl" className="text-lg text-red-500 dark:text-red-300 mb-2 text-left">{post.urduTitle}</p>
              )}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <Link to={`/press/${post.slug}`} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function PostDetail({ post }: { post: PressPost }) {
  const index = sortedPressPosts.findIndex((p) => p.slug === post.slug);
  const newer = sortedPressPosts[index - 1];
  const older = sortedPressPosts[index + 1];

  return (
    <article>
      <Link to="/press" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 mb-6">
        <ArrowLeft className="w-4 h-4" /> All press
      </Link>

      <p className="text-xs md:text-sm tracking-wide text-muted-foreground mb-3">
        {post.category.toUpperCase()} · {post.publication} · {formatPressDate(post.date)}
        {post.author && <> · by {post.author}</>}
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{post.title}</h1>
      {post.urduTitle && (
        <p lang="ur" dir="rtl" className="text-2xl leading-loose text-red-500 dark:text-red-300 mb-6 text-left">
          {post.urduTitle}
        </p>
      )}
      <p className="text-base md:text-lg leading-relaxed text-muted-foreground border-l-4 border-red-500 pl-4 mb-10">
        {post.excerpt}
      </p>

      {post.image && (
        <figure className="my-10">
          <a href={post.image} target="_blank" rel="noopener noreferrer" title="Open full size">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full h-auto rounded-md border border-border shadow-xl"
              loading="eager"
            />
          </a>
          {post.imageCaption && (
            <figcaption className="text-xs md:text-sm text-muted-foreground mt-3">
              {post.imageCaption} Click to view full size.
            </figcaption>
          )}
        </figure>
      )}

      <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-3xl">{post.body}</div>

      {post.sourceNote && (
        <p className="text-xs md:text-sm text-muted-foreground border-t border-border pt-5 mt-12 leading-relaxed max-w-3xl">
          {post.sourceNote}
        </p>
      )}

      {(newer || older) && (
        <nav className="grid grid-cols-2 gap-4 mt-12 pt-6 border-t border-border text-sm">
          <div>
            {older && (
              <Link to={`/press/${older.slug}`} className="group block">
                <span className="text-muted-foreground">← Older</span>
                <p className="font-semibold group-hover:text-red-500">{older.title}</p>
              </Link>
            )}
          </div>
          <div className="text-right">
            {newer && (
              <Link to={`/press/${newer.slug}`} className="group block">
                <span className="text-muted-foreground">Newer →</span>
                <p className="font-semibold group-hover:text-red-500">{newer.title}</p>
              </Link>
            )}
          </div>
        </nav>
      )}
    </article>
  );
}

export default function PressPage() {
  const { slug } = useParams();
  const post = slug ? sortedPressPosts.find((p) => p.slug === slug) : undefined;
  const path = post ? `/press/${post.slug}` : "/press";

  useSEO({
    title: post
      ? `${post.title} - ${post.publication} | Sajad Haider (Sajjad Haider)`
      : "Press & Legacy - Sajad Haider (Sajjad Haider) | Pakistan Air Force Hero",
    description: post
      ? post.excerpt
      : "Newspaper features, interviews and tributes to Air Commodore (R) Sajad Haider, also written Sajjad Haider, hero of Pathankot and the 1965 and 1971 wars.",
    keywords: `Sajad Haider, Sajjad Haider, Air Commodore Sajjad Haider, Sajad Haider press, Sajjad Haider news${post?.keywords ? `, ${post.keywords}` : ""}`,
    image: post?.image,
    type: post ? "article" : "website",
    structuredData: post
      ? {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: post.title,
          datePublished: post.date,
          author: post.author ? { "@type": "Person", name: post.author } : undefined,
          publisher: { "@type": "Organization", name: post.publication },
          image: post.image,
          about: { "@type": "Person", name: "Sajad Haider", alternateName: "Sajjad Haider" },
          url: `${SITE}${path}`,
        }
      : {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Press & Legacy - Sajad Haider",
          url: `${SITE}${path}`,
        },
  });

  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      <main className="max-w-screen-xl mx-auto px-4 md:px-6 pt-32 md:pt-44 pb-24">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-14">
          <TimelineSidebar activeSlug={post?.slug} />
          <div className="min-w-0">
            {slug && !post ? (
              <div className="py-20">
                <Newspaper className="w-10 h-10 text-muted-foreground mb-4" />
                <h1 className="text-2xl font-bold mb-2">Article not found</h1>
                <Link to="/press" className="text-red-500 font-semibold">Back to all press</Link>
              </div>
            ) : post ? (
              <PostDetail post={post} />
            ) : (
              <PostList />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
