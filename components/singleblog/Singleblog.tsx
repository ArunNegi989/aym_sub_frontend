"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/assets/style/Singleblog/Singleblog.module.css";

/* ================================================================
   TYPES — All preserved
   ================================================================ */
export type SectionType =
  | "heading" | "subheading" | "paragraph" | "images" | "divider"
  | "list" | "quote" | "code" | "video" | "table" | "callout" | "spacer" | "html";

export type ImageLayout = "single" | "two-col" | "three-col" | "wide";
export type ListType = "unordered" | "ordered";
export type CalloutVariant = "info" | "warning" | "success" | "tip" | "danger";

export interface BlogImage {
  src: string;
  caption?: string;
  altText?: string;
}

export interface BlogSection {
  type: SectionType;
  text?: string;
  listType?: ListType;
  listItems?: string[];
  quoteAuthor?: string;
  codeLanguage?: string;
  videoUrl?: string;
  videoCaption?: string;
  tableHeaders?: string[];
  tableRows?: string[][];
  calloutVariant?: CalloutVariant;
  calloutTitle?: string;
  spacerHeight?: number;
  images?: BlogImage[];
  imageLayout?: ImageLayout;
}

export interface Blog {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author?: string;
  category: string;
  coverImage: string;
  image?: string;
  tags?: string[];
  content?: BlogSection[];
  status?: string;
}

interface SingleBlogProps {
  blog: Blog;
  relatedPosts?: Blog[];
  recentPosts?: Blog[];
}

/* ================================================================
   IMAGE URL HELPER — Preserved
   ================================================================ */
const BASE_URL =
  (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/api\/?$/, "");

function resolveImg(src?: string): string {
  if (!src) return "/placeholder.jpg";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("blob:")) return "/placeholder.jpg";
  return `${BASE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

/* ================================================================
   LAYOUT HELPER — Preserved
   ================================================================ */
function getLayoutClass(layout: ImageLayout | undefined, count: number): string {
  if (layout === "single") return styles.gridOne;
  if (layout === "two-col") return styles.gridTwo;
  if (layout === "three-col") return styles.gridThree;
  if (layout === "wide") return styles.gridWide;
  if (count === 1) return styles.gridOne;
  if (count === 2) return styles.gridTwo;
  return styles.gridThree;
}

/* ================================================================
   VIDEO URL EMBED HELPER — Preserved
   ================================================================ */
function getEmbedUrl(url: string): string {
  if (!url) return "";
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

/* ================================================================
   CALLOUT CONFIG — Preserved
   ================================================================ */
const CALLOUT_CONFIG: Record<CalloutVariant, { icon: string; label: string }> = {
  info: { icon: "ℹ️", label: "Information" },
  tip: { icon: "💡", label: "Tip" },
  success: { icon: "✅", label: "Success" },
  warning: { icon: "⚠️", label: "Warning" },
  danger: { icon: "🚨", label: "Important" },
};

/* ================================================================
   IMAGE GRID BLOCK — Preserved
   ================================================================ */
const ArticleImages = ({
  images,
  imageLayout,
}: {
  images: BlogImage[];
  imageLayout?: ImageLayout;
}) => {
  const layoutClass = getLayoutClass(imageLayout, images.length);
  return (
    <div className={`${styles.articleImgGrid} ${layoutClass}`}>
      {images.map((img, i) => {
        const resolvedSrc = resolveImg(img.src);
        return (
          <figure key={i} className={styles.articleImgFigure}>
            <div className={styles.articleImgWrap}>
              <Image
                src={resolvedSrc}
                alt={img.altText || img.caption || "Blog image"}
                fill
                sizes={
                  imageLayout === "single" || imageLayout === "wide"
                    ? "100vw"
                    : "(max-width:600px) 100vw, (max-width:900px) 50vw, 33vw"
                }
                className={styles.articleImg}
                unoptimized
              />
              <div className={styles.imgOverlay} />
            </div>
            {img.caption && (
              <figcaption className={styles.articleImgCaption}>
                <span className={styles.captionNum}>↑</span> {img.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
};

/* ================================================================
   LIST BLOCK — Preserved
   ================================================================ */
const ListBlock = ({ listType, listItems }: { listType?: ListType; listItems?: string[] }) => {
  if (!listItems || listItems.length === 0) return null;
  if (listType === "ordered") {
    return (
      <ol className={`${styles.contentList} ${styles.orderedList}`}>
        {listItems.map((item, i) => (
          <li key={i} className={styles.contentListItem}>
            <span className={styles.listNum}>{String(i + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul className={`${styles.contentList} ${styles.unorderedList}`}>
      {listItems.map((item, i) => (
        <li key={i} className={styles.contentListItem}>
          <span className={styles.listBullet} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

/* ================================================================
   QUOTE BLOCK — Preserved
   ================================================================ */
const QuoteBlock = ({ text, quoteAuthor }: { text?: string; quoteAuthor?: string }) => (
  <blockquote className={styles.contentQuote}>
    <span className={styles.quoteMark}>"</span>
    <p className={styles.quoteText}>{text}</p>
    {quoteAuthor && (
      <cite className={styles.quoteAuthor}>
        <span className={styles.quoteAuthorLine} />
        {quoteAuthor}
      </cite>
    )}
  </blockquote>
);

/* ================================================================
   CODE BLOCK — Preserved
   ================================================================ */
const CodeBlock = ({ text, codeLanguage }: { text?: string; codeLanguage?: string }) => (
  <div className={styles.contentCodeWrap}>
    <div className={styles.codeHeader}>
      <div className={styles.codeDots}>
        <span /><span /><span />
      </div>
      {codeLanguage && codeLanguage !== "plaintext" && (
        <div className={styles.codeLangBadge}>{codeLanguage}</div>
      )}
    </div>
    <pre className={styles.contentCode}>
      <code>{text}</code>
    </pre>
  </div>
);

/* ================================================================
   VIDEO BLOCK — Preserved
   ================================================================ */
const VideoBlock = ({ videoUrl, videoCaption }: { videoUrl?: string; videoCaption?: string }) => {
  if (!videoUrl) return null;
  const embedUrl = getEmbedUrl(videoUrl);
  return (
    <div className={styles.contentVideoWrap}>
      <div className={styles.contentVideoFrame}>
        <iframe
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videoCaption || "Video"}
          className={styles.contentVideoIframe}
        />
      </div>
      {videoCaption && <p className={styles.contentVideoCaption}>{videoCaption}</p>}
    </div>
  );
};

/* ================================================================
   TABLE BLOCK — Preserved
   ================================================================ */
const TableBlock = ({
  tableHeaders,
  tableRows,
}: {
  tableHeaders?: string[];
  tableRows?: string[][];
}) => {
  if (!tableHeaders || tableHeaders.length === 0) return null;
  return (
    <div className={styles.contentTableWrap}>
      <table className={styles.contentTable}>
        <thead>
          <tr>
            {tableHeaders.map((h, i) => (
              <th key={i} className={styles.contentTh}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(tableRows ?? []).map((row, rIdx) => (
            <tr key={rIdx} className={styles.contentTr}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={styles.contentTd}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ================================================================
   CALLOUT BLOCK — Preserved
   ================================================================ */
const CalloutBlock = ({
  calloutVariant = "info",
  calloutTitle,
  text,
}: {
  calloutVariant?: CalloutVariant;
  calloutTitle?: string;
  text?: string;
}) => {
  const config = CALLOUT_CONFIG[calloutVariant];
  return (
    <div className={`${styles.contentCallout} ${styles[`callout${calloutVariant.charAt(0).toUpperCase() + calloutVariant.slice(1)}`]}`}>
      <div className={styles.calloutAccent} />
      <div className={styles.calloutBody}>
        <div className={styles.calloutHeader}>
          <span className={styles.calloutIcon}>{config.icon}</span>
          <span className={styles.calloutTitle}>{calloutTitle || config.label}</span>
        </div>
        {text && <p className={styles.calloutText}>{text}</p>}
      </div>
    </div>
  );
};

/* ================================================================
   SPACER BLOCK — Preserved
   ================================================================ */
const SpacerBlock = ({ spacerHeight = 40 }: { spacerHeight?: number }) => (
  <div style={{ height: `${spacerHeight}px` }} aria-hidden="true" />
);

/* ================================================================
   DIVIDER BLOCK — Preserved
   ================================================================ */
const DividerBlock = () => (
  <div className={styles.contentDivider}>
    <span className={styles.dividerText}>✦</span>
  </div>
);

/* ================================================================
   HTML BLOCK — Preserved
   ================================================================ */
const HtmlBlock = ({ text }: { text?: string }) => (
  <div
    className={styles.contentHtml}
    dangerouslySetInnerHTML={{ __html: text || "" }}
  />
);

/* ================================================================
   PARAGRAPH BLOCK — Preserved
   ================================================================ */
const ParagraphBlock = ({ text }: { text?: string }) => (
  <div
    className={styles.contentPara}
    dangerouslySetInnerHTML={{ __html: text || "" }}
  />
);

/* ================================================================
   READING TIME HELPER — Preserved
   ================================================================ */
function calcReadingTime(sections?: BlogSection[]): number {
  if (!sections) return 1;
  const text = sections.map(s => s.text || "").join(" ");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/* ================================================================
   MAIN CONTENT RENDERER — Preserved
   ================================================================ */
const RenderSections = ({ sections }: { sections: BlogSection[] }) => (
  <>
    {sections.map((s, i) => {
      switch (s.type) {
        case "heading":
          return <h2 key={i} className={styles.contentH2}><span className={styles.headingNum}></span>{s.text}</h2>;
        case "subheading":
          return <h3 key={i} className={styles.contentH3}>{s.text}</h3>;
        case "paragraph":
          return <ParagraphBlock key={i} text={s.text} />;
        case "images":
          return s.images && s.images.length > 0 ? (
            <ArticleImages key={i} images={s.images} imageLayout={s.imageLayout} />
          ) : null;
        case "list":
          return <ListBlock key={i} listType={s.listType} listItems={s.listItems} />;
        case "quote":
          return <QuoteBlock key={i} text={s.text} quoteAuthor={s.quoteAuthor} />;
        case "code":
          return <CodeBlock key={i} text={s.text} codeLanguage={s.codeLanguage} />;
        case "video":
          return <VideoBlock key={i} videoUrl={s.videoUrl} videoCaption={s.videoCaption} />;
        case "table":
          return <TableBlock key={i} tableHeaders={s.tableHeaders} tableRows={s.tableRows} />;
        case "callout":
          return (
            <CalloutBlock
              key={i}
              calloutVariant={s.calloutVariant}
              calloutTitle={s.calloutTitle}
              text={s.text}
            />
          );
        case "spacer":
          return <SpacerBlock key={i} spacerHeight={s.spacerHeight} />;
        case "divider":
          return <DividerBlock key={i} />;
        case "html":
          return <HtmlBlock key={i} text={s.text} />;
        default:
          return null;
      }
    })}
  </>
);

/* ================================================================
   MAIN COMPONENT — Modern UI with ALL original widgets
   ================================================================ */
export default function SingleBlog({
  blog,
  relatedPosts = [],
  recentPosts = [],
}: SingleBlogProps) {
  const heroImage = resolveImg(blog.coverImage || blog.image);
  const readTime = calcReadingTime(blog.content);

  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className={styles.pageRoot}>

      {/* ══════════════════════════════
          HERO — Full bleed, cinematic (preserved design)
      ══════════════════════════════ */}
      <div className={styles.hero}>
        <div className={styles.heroImgWrap}>
          <Image
            src={heroImage}
            alt={blog.title}
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
            unoptimized
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>—</span>
            <Link href="/blog/aym-yoga-blog" className={styles.breadLink}>Blog</Link>
            <span className={styles.breadSep}>—</span>
            <span className={styles.breadCurrent}>{blog.category}</span>
          </nav>

          <div className={styles.heroCategoryRow}>
            <span className={styles.heroCategory}>{blog.category}</span>
            <span className={styles.heroCategoryLine} />
          </div>

          <h1 className={styles.heroTitle}>{blog.title}</h1>

          <p className={styles.heroExcerpt}>{blog.excerpt}</p>

          <div className={styles.heroMeta}>
            {blog.author && (
              <div className={styles.authorChip}>
                <div className={styles.authorAvatar}>
                  {blog.author.charAt(0).toUpperCase()}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorLabel}>Written by</span>
                  <span className={styles.authorName}>{blog.author}</span>
                </div>
              </div>
            )}
            <div className={styles.metaStats}>
              <div className={styles.metaStat}>
                <span className={styles.metaStatLabel}>Published</span>
                <time className={styles.metaStatVal} dateTime={blog.date}>{formattedDate}</time>
              </div>
              <div className={styles.metaStatDivider} />
              <div className={styles.metaStat}>
                <span className={styles.metaStatLabel}>Read time</span>
                <span className={styles.metaStatVal}>{readTime} min</span>
              </div>
            </div>
          </div>
        </div>
        

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* ══════════════════════════════
          BODY — Modern layout with ALL original widgets
      ══════════════════════════════ */}
      <div className={styles.bodyWrap}>

        {/* Top rule */}
        <div className={styles.bodyRule}>
          <span className={styles.bodyRuleLeft} />
          <span className={styles.bodyRuleLabel}>Article</span>
          <span className={styles.bodyRuleRight} />
        </div>

        <div className={styles.layout}>

          {/* ── Article ── */}
          <article className={styles.article}>

            <div className={styles.content}>
              {blog.content && blog.content.length > 0 ? (
                <RenderSections sections={blog.content} />
              ) : (
                <p className={styles.contentPlaceholder}>
                  Content abhi available nahi hai. Please check back soon.
                </p>
              )}
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className={styles.articleTags}>
                <span className={styles.tagsLabel}>Filed under</span>
                <div className={styles.tagsList}>
                  {blog.tags.map((tag) => (
                    <span key={tag} className={styles.articleTag}># {tag}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Back button */}
            <div className={styles.backRow}>
              <Link href="/blog/aym-yoga-blog" className={styles.backBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Back to all articles</span>
              </Link>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className={styles.sidebar}>

            {/* Profile Card — NEW modern widget */}
            <div className={styles.profileCard}>
              <div className={styles.profileAvatar}>
                <span>ॐ</span>
              </div>
              <h3 className={styles.profileName}>AYM Yoga School</h3>
              <p className={styles.profileBio}>Authentic yoga education in the birthplace of yoga — Rishikesh.</p>
              <div className={styles.profileStats}>
                <div className={styles.profileStat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Years</span>
                </div>
                <div className={styles.profileStat}>
                  <span className={styles.statNumber}>5000+</span>
                  <span className={styles.statLabel}>Graduates</span>
                </div>
                <div className={styles.profileStat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>Countries</span>
                </div>
              </div>
            </div>

            {/* CTA Widget — Original preserved */}
            <div className={styles.sideCtaWidget}>
              <div className={styles.ctaPattern} />
              <div className={styles.ctaInner}>
                <p className={styles.ctaEyebrow}>Featured Program</p>
                <h4 className={styles.ctaTitle}>Begin Your Yoga Journey</h4>
                <p className={styles.ctaText}>
                  World-class teacher training at AYM Yoga School, Rishikesh — where tradition meets transformation.
                </p>
                <Link href="/register" className={styles.ctaBtn}>
                  Enquire Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Recent Posts Widget — Original preserved */}
            {recentPosts.length > 0 && (
              <div className={styles.sideWidget}>
                <div className={styles.sideWidgetHeader}>
                  <h3 className={styles.sideWidgetTitle}>Recent Articles</h3>
                  <Link href="/blog/aym-yoga-blog" className={styles.sideWidgetLink}>View all</Link>
                </div>
                <ul className={styles.recentList}>
                  {recentPosts.map((post, idx) => {
                    const postImg = resolveImg(post.coverImage || post.image);
                    const postDate = post.date
                      ? new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
                      : "";
                    return (
                      <li key={post._id || post.id} className={styles.recentItem}>
                        <span className={styles.recentIdx}>{String(idx + 1).padStart(2, "0")}</span>
                        <Link href={`/blog/aym-yoga-blog/${post.slug}`} className={styles.recentLink}>
                          <div className={styles.recentImgWrap}>
                            <Image src={postImg} alt={post.title} fill sizes="64px" className={styles.recentImg} unoptimized />
                          </div>
                          <div className={styles.recentInfo}>
                            <span className={styles.recentCategory}>{post.category}</span>
                            <p className={styles.recentTitle}>{post.title}</p>
                            <span className={styles.recentDate}>{postDate}</span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Related Posts Widget — Original preserved */}
            {relatedPosts.length > 0 && (
              <div className={styles.sideWidget}>
                <div className={styles.sideWidgetHeader}>
                  <h3 className={styles.sideWidgetTitle}>In This Category</h3>
                </div>
                <ul className={styles.relatedList}>
                  {relatedPosts.map((post) => {
                    const relImg = resolveImg(post.coverImage || post.image);
                    const relDate = post.date
                      ? new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
                      : "";
                    return (
                      <li key={post._id || post.id} className={styles.relatedItem}>
                        <Link href={`/blog/aym-yoga-blog/${post.slug}`} className={styles.relatedLink}>
                          <div className={styles.relatedImgWrap}>
                            <Image src={relImg} alt={post.title} fill sizes="56px" className={styles.relatedImg} unoptimized />
                          </div>
                          <div className={styles.relatedInfo}>
                            <p className={styles.relatedTitle}>{post.title}</p>
                            <span className={styles.relatedDate}>{relDate}</span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Upcoming Batches Widget — Original preserved */}
            <div className={styles.sideWidget}>
              <div className={styles.sideWidgetHeader}>
                <h3 className={styles.sideWidgetTitle}>Upcoming Batches</h3>
              </div>
              <div className={styles.batchList}>
                {[
                  { label: "200 Hour YTT", href: "/200-hour-ytt", dates: "Aug – Nov 2025", price: "₹21,000" },
                  { label: "300 Hour YTT", href: "/300-hour-ytt", dates: "Aug – Nov 2025", price: "₹25,000" },
                  { label: "500 Hour YTT", href: "/500-hour-ytt", dates: "Aug – Dec 2025", price: "₹45,000" },
                ].map((batch, i) => (
                  <Link href={batch.href} key={batch.label} className={styles.batchItem}>
                    <span className={styles.batchNum}>{String(i + 1).padStart(2, "0")}</span>
                    <div className={styles.batchInfo}>
                      <p className={styles.batchLabel}>{batch.label}</p>
                      <p className={styles.batchDates}>{batch.dates}</p>
                    </div>
                    <span className={styles.batchPrice}>{batch.price}</span>
                  </Link>
                ))}
              </div>
              <Link href="/register" className={styles.batchRegister}>Register Now →</Link>
            </div>

            {/* Newsletter Card — NEW modern widget */}
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterIcon}>📬</div>
              <h4 className={styles.newsletterTitle}>Subscribe to Newsletter</h4>
              <p className={styles.newsletterText}>Get the latest articles and yoga insights delivered to your inbox.</p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="Your email address" className={styles.newsletterInput} />
                <button className={styles.newsletterBtn}>Subscribe</button>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}