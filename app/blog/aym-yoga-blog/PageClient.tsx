"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/assets/style/aym-yoga-blog/Blogpage.module.css";
import HowToReach from "@/components/home/Howtoreach";
import api from "@/lib/api";
import { resolveImage } from "@/lib/Imageutils";

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  rawDate: string;
  author?: string;
  category: string;
  image: string;
  tags?: string[];
}

interface BlogPageProps {
  blogs?: Blog[];
  recentPosts?: Blog[];
}

const BLOGS_PER_PAGE = 9;

const CATEGORY_OPTIONS = [
  "All",
  "Yoga Teacher Training",
  "Yoga",
  "Ayurveda",
  "Yoga Retreats",
  "Lifestyle",
  "Health",
  "Meditation",
  "Philosophy",
  "Nutrition",
];

function normalise(raw: any): Blog {
  return {
    id: raw._id ?? raw.id,
    slug: raw.slug ?? "",
    title: raw.title ?? "",
    excerpt: raw.excerpt ?? "",
    rawDate: raw.date ?? "",
    date: raw.date
      ? new Date(raw.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "",
    author: raw.author || undefined,
    category: raw.category ?? "",
    image: resolveImage(raw.coverImage),
    tags: raw.tags ?? [],
  };
}

const OmSymbol = ({ size = 24, opacity = 0.4 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <text x="12" y="18" textAnchor="middle" fontSize="18" fill={`rgba(224,100,0,${opacity})`} fontFamily="serif">ॐ</text>
  </svg>
);

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ClearIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function BlogPage({ blogs: propBlogs, recentPosts }: BlogPageProps) {
  const [blogList, setBlogList] = useState<Blog[]>(propBlogs ?? []);
  const [isLoading, setIsLoading] = useState(!propBlogs || propBlogs.length === 0);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (propBlogs && propBlogs.length > 0) return;
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/blogs/get-all");
        const published: Blog[] = (res.data.data ?? [])
          .filter((b: any) => b.status === "Published")
          .map(normalise);
        setBlogList(published);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => { setPage(1); }, [searchQuery, sortOrder, activeCategory]);

  const filteredBlogs = useMemo(() => {
    let result = [...blogList];
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter((b) => b.title.toLowerCase().includes(q));
    }
    if (activeCategory !== "All") {
      result = result.filter((b) => b.category?.toLowerCase() === activeCategory.toLowerCase());
    }
    result.sort((a, b) => {
      const dateA = a.rawDate ? new Date(a.rawDate).getTime() : 0;
      const dateB = b.rawDate ? new Date(b.rawDate).getTime() : 0;
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });
    return result;
  }, [blogList, searchQuery, sortOrder, activeCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const visibleBlogs = filteredBlogs.slice(0, page * BLOGS_PER_PAGE);
  const hasMore = page < totalPages;
  const latestPosts =
    recentPosts ??
    blogList
      .slice()
      .sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime())
      .slice(0, 8);

  const isFiltered = searchQuery.trim() !== "" || activeCategory !== "All";

  // Featured post = first in list
  const featuredBlog = visibleBlogs[0] ?? null;
  const gridBlogs = visibleBlogs.slice(1);

  if (isLoading) {
    return (
      <div className={styles.pageRoot}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>AYM Yoga School · Rishikesh</p>
            {/* <h1 className={styles.heroTitle}>AYM Yoga Blog: Tips, Guides & Stories for Yoga Teachers</h1> */}
            <p className={styles.heroSub}>Ancient wisdom · Modern practice · Timeless transformation</p>
          </div>
          <div className={styles.heroRule}><span /><OmSymbol size={28} opacity={0.5} /><span /></div>
        </div>
        <div className={styles.layout}>
          <main className={styles.main}>
            <div className={styles.skeletonFeatured} />
            <div className={styles.grid}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.skeletonCard} style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </main>
          <aside className={styles.sidebar}><div className={styles.skeletonSide} /></aside>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageRoot}>

      {/* ══════════ HERO HEADER ══════════ */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgCircle1} />
          <div className={styles.heroBgCircle2} />
          <div className={styles.heroBgLines} />
        </div>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            AYM Yoga School · Rishikesh
            <span className={styles.eyebrowDot} />
          </p>
          <h1 className={styles.heroTitle}>
          AYM Yoga Blog: Tips, Guides & Stories for Yoga Teachers
          </h1>
          <p className={styles.heroSub}>Ancient wisdom · Modern practice · Timeless transformation</p>
        </div>
        <div className={styles.heroRule}>
          <span className={styles.ruleLine} />
          <span className={styles.ruleOm}>ॐ</span>
          <span className={styles.ruleLine} />
        </div>
      </header>

      {/* ══════════ MAIN LAYOUT ══════════ */}
      <div className={styles.layout}>

        {/* ── MAIN CONTENT ── */}
        <main className={styles.main}>

          {/* ── Controls Row ── */}
          <div className={styles.controlsRow}>
            {/* Search */}
            <div className={styles.searchBox}>
              <span className={styles.searchIconWrap}><SearchIcon /></span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blogs"
              />
              {searchQuery && (
                <button className={styles.clearBtn} onClick={() => setSearchQuery("")} aria-label="Clear">
                  <ClearIcon />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className={styles.sortGroup}>
              <button
                className={`${styles.sortPill} ${sortOrder === "latest" ? styles.sortPillOn : ""}`}
                onClick={() => setSortOrder("latest")}
              >Newest</button>
              <button
                className={`${styles.sortPill} ${sortOrder === "oldest" ? styles.sortPillOn : ""}`}
                onClick={() => setSortOrder("oldest")}
              >Oldest</button>
            </div>
          </div>

          {/* ── Category Tabs ── */}
          <div className={styles.catStrip}>
            {CATEGORY_OPTIONS.map((cat) => (
              <button
                key={cat}
                className={`${styles.catTab} ${activeCategory === cat ? styles.catTabOn : ""}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >{cat}</button>
            ))}
          </div>

          {/* ── Results Label ── */}
          {isFiltered && (
            <p className={styles.resultsLabel}>
              {filteredBlogs.length === 0
                ? `No results${searchQuery ? ` for "${searchQuery}"` : ""}${activeCategory !== "All" ? ` in "${activeCategory}"` : ""}`
                : `${filteredBlogs.length} article${filteredBlogs.length !== 1 ? "s" : ""}${searchQuery ? ` for "${searchQuery}"` : ""}${activeCategory !== "All" ? ` in "${activeCategory}"` : ""}`}
              {isFiltered && (
                <button className={styles.clearAllBtn} onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                  Clear filters
                </button>
              )}
            </p>
          )}

          {filteredBlogs.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyOm}>ॐ</span>
              <p className={styles.emptyMsg}>{isFiltered ? "No articles match your filters." : "No articles yet. Check back soon."}</p>
            </div>
          ) : (
            <>
              {/* ── Featured Card (first post, full-width) ── */}
              {featuredBlog && !isFiltered && (
                <Link href={`/blog/aym-yoga-blog/${featuredBlog.slug}`} className={styles.featured}>
                  <div className={styles.featuredImgWrap}>
                    <Image
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      fill
                      priority
                      sizes="(max-width: 860px) 100vw, 65vw"
                      className={styles.featuredImg}
                      unoptimized={featuredBlog.image.includes("localhost")}
                    />
                    <div className={styles.featuredOverlay} />
                    <span className={styles.featuredBadge}>Featured</span>
                  </div>
                  <div className={styles.featuredBody}>
                    <span className={styles.featuredCat}>{featuredBlog.category}</span>
                    <h2 className={styles.featuredTitle}>{featuredBlog.title}</h2>
                    <p className={styles.featuredExcerpt}>{featuredBlog.excerpt}</p>
                    <div className={styles.featuredMeta}>
                      <span className={styles.featuredDate}>{featuredBlog.date}</span>
                      {featuredBlog.author && <span className={styles.featuredAuthor}>· {featuredBlog.author}</span>}
                    </div>
                    <span className={styles.featuredReadMore}>Read Article <ArrowRight /></span>
                  </div>
                </Link>
              )}

              {/* ── Section Label ── */}
              {!isFiltered && gridBlogs.length > 0 && (
                <div className={styles.sectionHead}>
                  <span className={styles.sectionLine} />
                  <span className={styles.sectionLabel}>All Articles</span>
                  <span className={styles.sectionLine} />
                </div>
              )}

              {/* ── Blog Grid ── */}
              <div className={styles.grid}>
                {(isFiltered ? visibleBlogs : gridBlogs).map((blog, idx) => (
                  <Link
                    href={`/blog/aym-yoga-blog/${blog.slug}`}
                    key={blog.id}
                    className={styles.card}
                    style={{ animationDelay: `${(idx % BLOGS_PER_PAGE) * 0.06}s` }}
                  >
                    <div className={styles.cardImgWrap}>
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.cardImg}
                        unoptimized={blog.image.includes("localhost")}
                      />
                      <div className={styles.cardOverlay} />
                      <span className={styles.cardCat}>{blog.category}</span>
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardDate}>{blog.date}</span>
                        {blog.author && <span className={styles.cardAuthor}>{blog.author}</span>}
                      </div>
                      <h3 className={styles.cardTitle}>{blog.title}</h3>
                      <p className={styles.cardExcerpt}>{blog.excerpt}</p>
                      <span className={styles.cardArrow}><ArrowRight /></span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ── Load More ── */}
              {hasMore && (
                <div className={styles.loadMore}>
                  <button className={styles.loadMoreBtn} onClick={() => setPage((p) => p + 1)}>
                    Load More Articles
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </button>
                  <p className={styles.loadMoreCount}>{Math.min(page * BLOGS_PER_PAGE, filteredBlogs.length)} / {filteredBlogs.length}</p>
                </div>
              )}

              {!hasMore && visibleBlogs.length > 0 && (
                <div className={styles.endRule}>
                  <span className={styles.ruleLine} /><span className={styles.ruleOm}>ॐ</span><span className={styles.ruleLine} />
                </div>
              )}
            </>
          )}
        </main>

        {/* ── SIDEBAR ── */}
        <aside className={styles.sidebar}>

          {/* CTA */}
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow} />
            <p className={styles.ctaEye}>Featured Program</p>
            <h4 className={styles.ctaTitle}>Begin Your<br />Yoga Journey</h4>
            <p className={styles.ctaText}>World-class teacher training at AYM Yoga School, Rishikesh — where tradition meets transformation.</p>
            <div className={styles.ctaPrograms}>
              {[
                { label: "200 Hr YTT", href: "/200-hour-yoga-ttc-in-rishikesh" },
                { label: "300 Hr YTT", href: "/300-hour-yoga-ttc-in-rishikesh" },
                { label: "500 Hr YTT", href: "/500-hour-yoga-ttc-in-rishikesh" },
              ].map(p => (
                <Link key={p.label} href={p.href} className={styles.ctaProgramBtn}>{p.label}</Link>
              ))}
            </div>
            <Link href="/yoga-registration" className={styles.ctaRegister}>Enquire Now →</Link>
          </div>

          {/* Latest Articles */}
          <div className={styles.sidePanel}>
            <div className={styles.sidePanelHead}>
              <span className={styles.sidePanelOm}>ॐ</span>
              <h3 className={styles.sidePanelTitle}>Latest Articles</h3>
            </div>
            <ul className={styles.recentList}>
              {latestPosts.map((post, i) => (
                <li key={post.id} className={styles.recentItem}>
                  <Link href={`/blog/aym-yoga-blog/${post.slug}`} className={styles.recentLink}>
                    <span className={styles.recentNum}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.recentTitle}>{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className={styles.sidePanel}>
            <div className={styles.sidePanelHead}>
              <span className={styles.sidePanelOm}>ॐ</span>
              <h3 className={styles.sidePanelTitle}>Explore Topics</h3>
            </div>
            <div className={styles.tagCloud}>
              {["Yoga", "Ayurveda", "Rishikesh", "Meditation", "Pranayama", "Health", "Lifestyle", "Fitness", "Yoga Teacher Training", "Retreat", "International"].map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

        </aside>
      </div>

      <HowToReach />
    </div>
  );
}