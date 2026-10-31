"use client";

import * as React from "react";
import {
  Badge,
  Body1,
  Body2,
  Button,
  Caption1,
  Card,
  CardPreview,
  Link,
  Text,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  ArrowRight16Regular,
  ArrowUpRight16Regular,
  Checkmark16Regular,
  Code24Filled,
  Play20Filled,
} from "@fluentui/react-icons";
import { SafeImage } from "./SafeImage";
import {
  about,
  contact,
  featuredArticle,
  featuredVideo,
  footer,
  hero,
  nav,
  navCta,
  posts,
  projects,
  projectsSection,
  site,
  videos,
  videosSection,
  writing,
} from "../content/site";

const ext = { target: "_blank", rel: "noreferrer" } as const;

const useStyles = makeStyles({
  // ---- page shell (same rhythm as before) ---------------------------------
  page: {
    display: "flex",
    flexDirection: "column",
    gap: "96px",
    padding: "32px 6vw 64px",
    maxWidth: "1440px",
    margin: "0 auto",
    "@media (max-width: 640px)": { gap: "72px", padding: "24px 5vw 48px" },
  },
  hero: { display: "flex", flexDirection: "column", gap: "72px" },

  // ---- nav ------------------------------------------------------------------
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    "@media (max-width: 900px)": { flexDirection: "column", alignItems: "flex-start" },
  },
  logo: {
    fontSize: tokens.fontSizeBase600,
    lineHeight: tokens.lineHeightBase600,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    letterSpacing: "-0.2px",
  },
  navLinks: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" },
  navLink: { color: tokens.colorNeutralForeground2, fontWeight: tokens.fontWeightRegular },

  // ---- hero -----------------------------------------------------------------
  heroContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    alignItems: "center",
  },
  eyebrow: {
    display: "block",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1,
    marginBottom: "16px",
  },
  h1: {
    fontSize: "clamp(2.5rem, 2vw + 2rem, 4rem)",
    lineHeight: 1.1,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "-0.02em",
    color: tokens.colorNeutralForeground1,
    margin: "0 0 18px",
  },
  h2: {
    fontSize: "clamp(2rem, 1.5vw + 1.5rem, 3rem)",
    lineHeight: 1.15,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "-0.015em",
    color: tokens.colorNeutralForeground1,
    margin: "0 0 12px",
  },
  h3: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },
  subhead: {
    display: "block",
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground3,
    margin: "0 0 24px",
    maxWidth: "560px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "28px",
    "@media (max-width: 640px)": { flexDirection: "column", alignItems: "flex-start" },
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "18px",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    paddingLeft: "12px",
    borderLeft: `3px solid ${tokens.colorBrandStroke2}`,
  },
  statNumber: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  statLabel: { color: tokens.colorNeutralForeground3 },

  // ---- projects -----------------------------------------------------------------
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  projectCard: {
    padding: "24px",
    gap: "14px",
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow8,
    transitionProperty: "box-shadow, transform",
    transitionDuration: tokens.durationNormal,
    transitionTimingFunction: tokens.curveEasyEase,
    ":hover": { boxShadow: tokens.shadow28, transform: "translateY(-2px)" },
    "@media (prefers-reduced-motion: reduce)": { ":hover": { transform: "none" } },
  },
  projectIcon: {
    width: "44px",
    height: "44px",
    display: "grid",
    placeItems: "center",
    borderRadius: tokens.borderRadiusLarge,
    color: tokens.colorNeutralForegroundOnBrand,
    backgroundImage: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #5B4BD1 100%)`,
    boxShadow: tokens.shadow4,
  },
  projectDesc: { color: tokens.colorNeutralForeground2, margin: 0 },
  tags: { display: "flex", flexWrap: "wrap", gap: "6px" },

  // ---- cards ------------------------------------------------------------------
  heroCard: {
    padding: "28px",
    gap: "16px",
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow28,
  },
  heroCardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: tokens.colorNeutralForeground3,
  },
  media: {
    width: "100%",
    overflow: "hidden",
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: tokens.colorNeutralBackground3,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    "& img": { width: "100%", height: "100%", display: "block" },
  },
  heroMedia: { height: "200px" },
  postMedia: { height: "150px" },
  featuredMedia: { height: "220px" },
  videoMedia: { height: "160px", border: "none", borderRadius: 0 },
  heroTitle: {
    fontSize: tokens.fontSizeBase600,
    lineHeight: tokens.lineHeightBase600,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },
  muted: { color: tokens.colorNeutralForeground3 },
  block: { width: "100%" },

  // ---- sections --------------------------------------------------------------
  section: { display: "grid", gap: "32px", scrollMarginTop: "24px" },
  sectionAlt: {
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: "48px 6vw",
    margin: "0 -6vw",
    borderRadius: "24px",
    border: `1px solid ${tokens.colorNeutralStroke3}`,
    boxShadow: tokens.shadow2,
    "@media (max-width: 640px)": { padding: "40px 5vw" },
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    "@media (max-width: 900px)": { flexDirection: "column", alignItems: "flex-start" },
  },
  textLink: {
    fontWeight: tokens.fontWeightSemibold,
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  postCard: {
    padding: "20px",
    gap: "12px",
    minHeight: "260px",
    borderRadius: tokens.borderRadiusXLarge,
  },
  cardBody: { display: "grid", gap: "8px", alignContent: "start", justifyItems: "start", flexGrow: 1 },
  cardFoot: { marginTop: "auto" },

  // ---- videos -----------------------------------------------------------------
  featuredVideo: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    alignItems: "center",
    padding: "20px",
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow16,
  },
  featuredBody: { display: "grid", gap: "12px", justifyItems: "start" },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  videoCard: { padding: 0, gap: 0, borderRadius: tokens.borderRadiusXLarge, overflow: "hidden" },
  videoBody: { padding: "18px", display: "grid", gap: "8px", alignContent: "start", flexGrow: 1 },

  // ---- about ------------------------------------------------------------------
  about: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
    alignItems: "center",
  },
  aboutList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
    marginTop: "24px",
  },
  aboutPanel: {
    padding: "24px",
    gap: "18px",
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow28,
  },
  focusList: { listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "12px" },
  focusItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    color: tokens.colorNeutralForeground2,
  },
  focusIcon: {
    flexShrink: 0,
    marginTop: "2px",
    color: tokens.colorBrandForeground1,
  },

  // ---- contact ------------------------------------------------------------------
  cta: {
    display: "grid",
    gap: "20px",
    padding: "40px",
    borderRadius: "24px",
    color: tokens.colorNeutralForegroundOnBrand,
    backgroundImage: `linear-gradient(135deg, ${tokens.colorBrandBackgroundPressed} 0%, ${tokens.colorBrandBackground} 60%, #3D3A9E 100%)`,
    boxShadow: tokens.shadow28,
    "@media (max-width: 640px)": { padding: "32px 24px" },
  },
  ctaEyebrow: { color: "rgba(255,255,255,0.75)", marginBottom: "16px" },
  ctaTitle: { color: tokens.colorNeutralForegroundOnBrand },
  ctaBody: { color: "rgba(255,255,255,0.85)", margin: 0 },
  socials: { display: "flex", flexWrap: "wrap", gap: "12px" },
  socialBtn: {
    color: tokens.colorNeutralForegroundOnBrand,
    ...shorthands.borderColor("rgba(255,255,255,0.5)"),
    backgroundColor: "rgba(255,255,255,0.08)",
    ":hover": {
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: "rgba(255,255,255,0.18)",
      ...shorthands.borderColor(tokens.colorNeutralForegroundOnBrand),
    },
    ":hover:active": {
      color: tokens.colorNeutralForegroundOnBrand,
      backgroundColor: "rgba(255,255,255,0.24)",
    },
  },

  // ---- footer ------------------------------------------------------------------
  footer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "12px",
    paddingTop: "24px",
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground3,
  },
});

function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  const s = useStyles();
  return <Text as="p" className={mergeClasses(s.eyebrow, className)}>{children}</Text>;
}

export function Home() {
  const s = useStyles();

  return (
    <main className={s.page}>
      {/* ------------------------------------------------------------ Hero */}
      <header className={s.hero}>
        <nav className={s.nav} aria-label="Primary">
          <div className={s.logo}>{site.name}</div>
          <div className={s.navLinks}>
            {nav.map((n) => (
              <Button key={n.href} as="a" href={n.href} appearance="subtle" className={s.navLink}>
                {n.label}
              </Button>
            ))}
            <Button as="a" href={navCta.href} appearance="primary" shape="circular">
              {navCta.label}
            </Button>
          </div>
        </nav>

        <div className={s.heroContent}>
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className={s.h1}>{hero.title}</h1>
            <Body2 as="p" className={s.subhead}>{hero.subhead}</Body2>
            <div className={s.actions}>
              <Button as="a" href={hero.primary.href} appearance="primary" size="large" shape="circular">
                {hero.primary.label}
              </Button>
              <Button as="a" href={hero.secondary.href} appearance="outline" size="large" shape="circular">
                {hero.secondary.label}
              </Button>
            </div>
            <div className={s.stats}>
              {hero.stats.map((st) => (
                <div key={st.value} className={s.stat}>
                  <span className={s.statNumber}>{st.value}</span>
                  <Caption1 className={s.statLabel}>{st.label}</Caption1>
                </div>
              ))}
            </div>
          </div>

          <Card className={s.heroCard} size="large">
            <div className={s.heroCardTop}>
              <Caption1>{featuredArticle.label}</Caption1>
              <Badge appearance="tint" color="brand" shape="rounded">{featuredArticle.tag}</Badge>
            </div>
            <CardPreview className={mergeClasses(s.media, s.heroMedia)}>
              <SafeImage src={featuredArticle.image} alt={featuredArticle.title} />
            </CardPreview>
            <h2 className={s.heroTitle}>{featuredArticle.title}</h2>
            <Body1 as="p" className={s.muted} style={{ margin: 0 }}>{featuredArticle.meta}</Body1>
            <Button
              as="a"
              href={featuredArticle.href}
              {...ext}
              appearance="primary"
              size="large"
              shape="circular"
              icon={<ArrowUpRight16Regular />}
              iconPosition="after"
              className={s.block}
            >
              {featuredArticle.cta}
            </Button>
          </Card>
        </div>
      </header>

      {/* -------------------------------------------------------- Projects */}
      <section id="projects" className={s.section}>
        <div className={s.sectionHeader}>
          <div>
            <Eyebrow>{projectsSection.eyebrow}</Eyebrow>
            <h2 className={s.h2}>{projectsSection.title}</h2>
          </div>
          <Link href={projectsSection.allHref} {...ext} className={s.textLink}>
            {projectsSection.allLabel} <ArrowRight16Regular />
          </Link>
        </div>
        <div className={s.projectGrid}>
          {projects.map((p) => (
            <Card key={p.repo} className={s.projectCard} role="article">
              <div className={s.projectIcon} aria-hidden>
                <Code24Filled />
              </div>
              <h3 className={s.h3}>{p.name}</h3>
              <Body1 as="p" className={s.projectDesc}>{p.description}</Body1>
              <div className={s.tags}>
                {p.stack.map((t) => (
                  <Badge key={t} appearance="outline" color="informative" shape="rounded">{t}</Badge>
                ))}
              </div>
              <Link href={p.repo} {...ext} className={mergeClasses(s.textLink, s.cardFoot)}>
                {projectsSection.cta} <ArrowUpRight16Regular />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- Writing */}
      <section id="writing" className={s.section}>
        <div className={s.sectionHeader}>
          <div>
            <Eyebrow>{writing.eyebrow}</Eyebrow>
            <h2 className={s.h2}>{writing.title}</h2>
          </div>
          <Link href={writing.allHref} {...ext} className={s.textLink}>
            {writing.allLabel} <ArrowRight16Regular />
          </Link>
        </div>
        <div className={s.cardGrid}>
          {posts.map((p) => (
            <Card key={p.href} className={s.postCard} appearance="filled-alternative" role="article">
              <CardPreview className={mergeClasses(s.media, s.postMedia)}>
                <SafeImage src={p.image} alt={p.title} />
              </CardPreview>
              <div className={s.cardBody}>
                <Badge appearance="tint" color="brand" shape="circular">{writing.pill}</Badge>
                <h3 className={s.h3}>{p.title}</h3>
                <Caption1 className={s.muted}>{p.date}</Caption1>
              </div>
              <Link href={p.href} {...ext} className={mergeClasses(s.textLink, s.cardFoot)}>
                {writing.cta} <ArrowUpRight16Regular />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- Videos */}
      <section id="videos" className={mergeClasses(s.section, s.sectionAlt)}>
        <div className={s.sectionHeader}>
          <div>
            <Eyebrow>{videosSection.eyebrow}</Eyebrow>
            <h2 className={s.h2}>{videosSection.title}</h2>
          </div>
          <Link href={videosSection.allHref} {...ext} className={s.textLink}>
            {videosSection.allLabel} <ArrowRight16Regular />
          </Link>
        </div>

        <Card className={s.featuredVideo} role="article">
          <div className={mergeClasses(s.media, s.featuredMedia)}>
            <SafeImage src={featuredVideo.image} alt={featuredVideo.title} />
          </div>
          <div className={s.featuredBody}>
            <Badge appearance="tint" color="brand" shape="circular">{featuredVideo.pill}</Badge>
            <h3 className={s.h3}>{featuredVideo.title}</h3>
            <Body1 as="p" className={s.muted} style={{ margin: 0 }}>{featuredVideo.meta}</Body1>
            <Button
              as="a"
              href={featuredVideo.href}
              {...ext}
              appearance="primary"
              size="large"
              shape="circular"
              icon={<Play20Filled />}
              className={s.block}
            >
              {featuredVideo.cta}
            </Button>
          </div>
        </Card>

        <div className={s.videoGrid}>
          {videos.map((v) => (
            <Card key={v.href} className={s.videoCard} role="article">
              <CardPreview className={mergeClasses(s.media, s.videoMedia)}>
                <SafeImage src={v.image} alt={v.title} />
              </CardPreview>
              <div className={s.videoBody}>
                <h3 className={s.h3}>{v.title}</h3>
                <Caption1 className={s.muted}>{v.date}</Caption1>
                <Link href={v.href} {...ext} className={s.textLink}>
                  {videosSection.cta} <ArrowUpRight16Regular />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- About */}
      <section id="about" className={s.section}>
        <div className={s.about}>
          <div>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className={s.h2}>{about.title}</h2>
            <Body2 as="p" className={s.subhead}>{about.body}</Body2>
            <div className={s.aboutList}>
              {about.roles.map((r) => (
                <div key={r.value} className={s.stat}>
                  <span className={s.statNumber}>{r.value}</span>
                  <Caption1 className={s.statLabel}>{r.label}</Caption1>
                </div>
              ))}
            </div>
          </div>
          <Card className={s.aboutPanel} size="large">
            <h3 className={s.h3}>{about.focusTitle}</h3>
            <ul className={s.focusList}>
              {about.focus.map((f) => (
                <li key={f} className={s.focusItem}>
                  <Checkmark16Regular className={s.focusIcon} />
                  <Body1>{f}</Body1>
                </li>
              ))}
            </ul>
            <Button as="a" href={about.cta.href} appearance="primary" size="large" shape="circular" className={s.block}>
              {about.cta.label}
            </Button>
          </Card>
        </div>
      </section>

      {/* --------------------------------------------------------- Contact */}
      <section id="contact" className={s.section}>
        <div className={s.cta}>
          <div>
            <Eyebrow className={s.ctaEyebrow}>{contact.eyebrow}</Eyebrow>
            <h2 className={mergeClasses(s.h2, s.ctaTitle)}>{contact.title}</h2>
            <Body2 as="p" className={s.ctaBody}>{contact.body}</Body2>
          </div>
          <div className={s.socials}>
            {contact.socials.map((so) => (
              <Button
                key={so.href}
                as="a"
                href={so.href}
                {...ext}
                appearance="outline"
                shape="circular"
                className={s.socialBtn}
              >
                {so.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <footer className={s.footer}>
        <Caption1>{footer.copyright}</Caption1>
        <Caption1>{footer.tagline}</Caption1>
      </footer>
    </main>
  );
}
