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
  Tooltip,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import {
  AppsAddIn24Regular,
  ArrowRight16Regular,
  ArrowTrendingLines24Regular,
  ArrowUpRight16Regular,
  BrainCircuit24Regular,
  BranchFork24Regular,
  Checkmark16Regular,
  LockClosed12Regular,
  Play20Filled,
  PlugConnected24Regular,
  WeatherMoon20Regular,
  WeatherSunny20Regular,
} from "@fluentui/react-icons";
import { SafeImage } from "./SafeImage";
import { useThemeMode } from "./Providers";
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
  type Project,
} from "../content/site";

const ext = { target: "_blank", rel: "noreferrer" } as const;

const PROJECT_ICONS: Record<Project["icon"], React.ReactElement> = {
  api: <PlugConnected24Regular />,
  fix: <ArrowTrendingLines24Regular />,
  apps: <AppsAddIn24Regular />,
  sdlc: <BranchFork24Regular />,
  model: <BrainCircuit24Regular />,
};

/** The hero headline's closing clause is rendered with the accent gradient. */
const ACCENT_PHRASE = "clear explanations of complex technology.";

// Acrylic surface shared by every card: translucent fill, blur, hairline, top highlight.
const acrylic = {
  backgroundColor: "var(--surface)",
  backdropFilter: "blur(18px) saturate(140%)",
  WebkitBackdropFilter: "blur(18px) saturate(140%)",
  ...shorthands.border("1px", "solid", "var(--hairline)"),
  boxShadow: "inset 0 1px 0 var(--highlight), var(--elevation)",
} as const;

const lift = {
  transitionProperty: "transform, box-shadow, border-color",
  transitionDuration: tokens.durationNormal,
  transitionTimingFunction: tokens.curveDecelerateMid,
  ":hover": {
    transform: "translateY(-3px)",
    boxShadow: "inset 0 1px 0 var(--highlight), var(--elevation-hover)",
    ...shorthands.borderColor("var(--hairline-strong)"),
  },
} as const;

const gradientText = {
  backgroundImage: "linear-gradient(90deg, var(--accent-a), var(--accent-b))",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

const useStyles = makeStyles({
  // ---- page shell -------------------------------------------------------------
  page: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "112px",
    padding: "20px 6vw 64px",
    maxWidth: "1360px",
    margin: "0 auto",
    "@media (max-width: 640px)": { gap: "80px", padding: "16px 5vw 48px" },
  },
  hero: { display: "flex", flexDirection: "column", gap: "72px" },

  // ---- nav: sticky acrylic bar ------------------------------------------------
  nav: {
    position: "sticky",
    top: "16px",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    padding: "10px 12px 10px 20px",
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: "var(--surface-nav)",
    backdropFilter: "blur(20px) saturate(160%)",
    WebkitBackdropFilter: "blur(20px) saturate(160%)",
    ...shorthands.border("1px", "solid", "var(--hairline)"),
    boxShadow: "inset 0 1px 0 var(--highlight), var(--elevation)",
    "@media (max-width: 900px)": {
      position: "static",
      flexDirection: "column",
      alignItems: "flex-start",
      borderRadius: tokens.borderRadiusXLarge,
      padding: "16px",
    },
  },
  logo: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    letterSpacing: "-0.01em",
  },
  logoMark: {
    width: "28px",
    height: "28px",
    borderRadius: tokens.borderRadiusLarge,
    display: "grid",
    placeItems: "center",
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightBold,
    color: "#fff",
    backgroundImage: "linear-gradient(135deg, #0F6CBD, #5B4BD1)",
    boxShadow: "0 4px 14px rgba(15,108,189,0.45)",
  },
  navLinks: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2px" },
  navLink: { color: tokens.colorNeutralForeground2, fontWeight: tokens.fontWeightRegular },

  // ---- type ---------------------------------------------------------------------
  eyebrow: {
    display: "inline-block",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    margin: "0 0 16px",
    ...gradientText,
  },
  h1: {
    fontFamily: "'Segoe UI Variable Display', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
    fontSize: "clamp(2.6rem, 2.4vw + 2rem, 4.25rem)",
    lineHeight: 1.04,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "-0.035em",
    color: tokens.colorNeutralForeground1,
    margin: "0 0 22px",
    textWrap: "balance",
  },
  accent: gradientText,
  h2: {
    fontFamily: "'Segoe UI Variable Display', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
    fontSize: "clamp(2rem, 1.5vw + 1.5rem, 3rem)",
    lineHeight: 1.1,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "-0.025em",
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },
  h3: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "-0.01em",
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },
  subhead: {
    display: "block",
    fontSize: tokens.fontSizeBase400,
    lineHeight: "1.6",
    color: tokens.colorNeutralForeground3,
    margin: "0 0 28px",
    maxWidth: "580px",
  },
  muted: { color: tokens.colorNeutralForeground3, margin: 0 },
  block: { width: "100%" },

  // ---- hero ----------------------------------------------------------------------
  heroContent: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "56px",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "36px",
    "@media (max-width: 640px)": { flexDirection: "column", alignItems: "flex-start" },
  },
  glowBtn: { boxShadow: "0 8px 24px rgba(15,108,189,0.35)" },
  ghostBtn: {
    backgroundColor: "var(--surface)",
    backdropFilter: "blur(12px)",
    ...shorthands.borderColor("var(--hairline)"),
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "12px",
  },
  stat: {
    ...acrylic,
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    padding: "14px 16px",
    borderRadius: tokens.borderRadiusXLarge,
  },
  statNumber: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  statLabel: { color: tokens.colorNeutralForeground3 },

  heroCard: {
    ...acrylic,
    padding: "24px",
    gap: "16px",
    borderRadius: "20px",
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
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: "var(--surface-strong)",
    "& img": { width: "100%", height: "100%", display: "block" },
  },
  heroMedia: { height: "210px" },
  postMedia: { height: "150px" },
  featuredMedia: { height: "240px" },
  videoMedia: { height: "160px", borderRadius: 0 },
  heroTitle: {
    fontSize: tokens.fontSizeBase600,
    lineHeight: tokens.lineHeightBase600,
    fontWeight: tokens.fontWeightSemibold,
    letterSpacing: "-0.015em",
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },

  // ---- sections ------------------------------------------------------------------
  section: { display: "grid", gap: "36px" },
  sectionAlt: {
    ...acrylic,
    padding: "56px 6vw",
    margin: "0 -6vw",
    borderRadius: "32px",
    "@media (max-width: 640px)": { padding: "40px 5vw", borderRadius: "24px" },
  },
  sectionHeader: {
    display: "flex",
    alignItems: "flex-end",
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

  // ---- projects: bento grid ------------------------------------------------------
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    gap: "20px",
    "@media (max-width: 1000px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 640px)": { gridTemplateColumns: "minmax(0, 1fr)" },
  },
  projectWide: {
    gridColumn: "span 3",
    "@media (max-width: 1000px)": { gridColumn: "span 1" },
  },
  projectNarrow: {
    gridColumn: "span 2",
    "@media (max-width: 1000px)": { gridColumn: "span 1" },
  },
  projectLast: {
    "@media (max-width: 1000px)": { gridColumn: "1 / -1" },
    "@media (max-width: 640px)": { gridColumn: "auto" },
  },
  projectCard: {
    ...acrylic,
    ...lift,
    position: "relative",
    overflow: "hidden",
    padding: "28px",
    gap: "14px",
    minHeight: "240px",
    borderRadius: "20px",
  },
  projectGlow: {
    position: "absolute",
    top: "-80px",
    right: "-80px",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    backgroundImage: "radial-gradient(circle, var(--glow-a) 0, transparent 70%)",
    pointerEvents: "none",
  },
  projectIcon: {
    width: "44px",
    height: "44px",
    display: "grid",
    placeItems: "center",
    borderRadius: tokens.borderRadiusXLarge,
    color: "#fff",
    backgroundImage: "linear-gradient(135deg, #0F6CBD 0%, #5B4BD1 100%)",
    boxShadow: "0 6px 18px rgba(15,108,189,0.35)",
  },
  projectDesc: { color: tokens.colorNeutralForeground2, margin: 0, lineHeight: "1.6" },
  projectFoot: { marginTop: "auto", paddingTop: "6px" },
  privateBadge: { gap: "4px" },

  // ---- articles -------------------------------------------------------------------
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  postCard: {
    ...acrylic,
    ...lift,
    padding: "14px 14px 20px",
    gap: "12px",
    minHeight: "260px",
    borderRadius: "20px",
  },
  cardBody: {
    display: "grid",
    gap: "8px",
    alignContent: "start",
    justifyItems: "start",
    flexGrow: 1,
    padding: "0 6px",
  },
  cardFoot: { marginTop: "auto", padding: "0 6px" },

  // ---- videos -----------------------------------------------------------------------
  featuredVideo: {
    ...acrylic,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
    alignItems: "center",
    padding: "16px",
    borderRadius: "24px",
  },
  featuredBody: { display: "grid", gap: "12px", justifyItems: "start", padding: "8px" },
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  videoCard: { ...acrylic, ...lift, padding: 0, gap: 0, borderRadius: "20px", overflow: "hidden" },
  videoBody: { padding: "18px", display: "grid", gap: "8px", alignContent: "start", flexGrow: 1 },

  // ---- about -----------------------------------------------------------------------
  about: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    alignItems: "center",
  },
  aboutList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "12px",
    marginTop: "8px",
  },
  aboutPanel: { ...acrylic, padding: "28px", gap: "18px", borderRadius: "24px" },
  focusList: { listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "14px" },
  focusItem: { display: "flex", alignItems: "flex-start", gap: "10px", color: tokens.colorNeutralForeground2 },
  focusIcon: {
    flexShrink: 0,
    marginTop: "1px",
    padding: "3px",
    borderRadius: "50%",
    color: tokens.colorBrandForeground1,
    backgroundColor: tokens.colorBrandBackground2,
  },

  // ---- contact ---------------------------------------------------------------------
  cta: {
    position: "relative",
    overflow: "hidden",
    display: "grid",
    gap: "24px",
    padding: "56px",
    borderRadius: "32px",
    color: "#fff",
    backgroundImage: "var(--cta-bg)",
    ...shorthands.border("1px", "solid", "rgba(255,255,255,0.12)"),
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), var(--elevation)",
    "@media (max-width: 640px)": { padding: "36px 24px", borderRadius: "24px" },
  },
  ctaEyebrow: { color: "rgba(255,255,255,0.8)", backgroundImage: "none" },
  ctaTitle: { color: "#fff", margin: "0 0 12px" },
  ctaBody: { color: "rgba(255,255,255,0.85)", margin: 0 },
  socials: { display: "flex", flexWrap: "wrap", gap: "12px" },
  socialBtn: {
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(8px)",
    ...shorthands.borderColor("rgba(255,255,255,0.35)"),
    ":hover": {
      color: "#fff",
      backgroundColor: "rgba(255,255,255,0.2)",
      ...shorthands.borderColor("rgba(255,255,255,0.7)"),
    },
    ":hover:active": { color: "#fff", backgroundColor: "rgba(255,255,255,0.26)" },
  },

  // ---- footer ----------------------------------------------------------------------
  footer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "12px",
    paddingTop: "24px",
    borderTop: "1px solid var(--hairline)",
    color: tokens.colorNeutralForeground3,
  },
});

function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  const s = useStyles();
  return <Text as="p" className={mergeClasses(s.eyebrow, className)}>{children}</Text>;
}

function HeroTitle({ className, accentClass }: { className: string; accentClass: string }) {
  const i = hero.title.indexOf(ACCENT_PHRASE);
  if (i < 0) return <h1 className={className}>{hero.title}</h1>;
  return (
    <h1 className={className}>
      {hero.title.slice(0, i)}
      <span className={accentClass}>{ACCENT_PHRASE}</span>
    </h1>
  );
}

function ThemeToggle() {
  const { mode, toggle } = useThemeMode();
  const label = mode === "dark" ? "Switch to light theme" : "Switch to dark theme";
  return (
    <Tooltip content={label} relationship="label" withArrow>
      <Button
        appearance="subtle"
        shape="circular"
        icon={mode === "dark" ? <WeatherSunny20Regular /> : <WeatherMoon20Regular />}
        onClick={toggle}
      />
    </Tooltip>
  );
}

export function Home() {
  const s = useStyles();

  return (
    <main className={s.page}>
      <nav className={s.nav} aria-label="Primary">
        <div className={s.logo}>
          <span className={s.logoMark} aria-hidden>JR</span>
          {site.name}
        </div>
        <div className={s.navLinks}>
          {nav.map((n) => (
            <Button key={n.href} as="a" href={n.href} appearance="subtle" shape="circular" className={s.navLink}>
              {n.label}
            </Button>
          ))}
          <ThemeToggle />
          <Button as="a" href={navCta.href} appearance="primary" shape="circular" className={s.glowBtn}>
            {navCta.label}
          </Button>
        </div>
      </nav>

      {/* ------------------------------------------------------------ Hero */}
      <header className={s.hero}>
        <div className={s.heroContent}>
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <HeroTitle className={s.h1} accentClass={s.accent} />
            <Body2 as="p" className={s.subhead}>{hero.subhead}</Body2>
            <div className={s.actions}>
              <Button as="a" href={hero.primary.href} appearance="primary" size="large" shape="circular" className={s.glowBtn}>
                {hero.primary.label}
              </Button>
              <Button as="a" href={hero.secondary.href} appearance="outline" size="large" shape="circular" className={s.ghostBtn}>
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
              <Badge appearance="tint" color="brand" shape="circular">{featuredArticle.tag}</Badge>
            </div>
            <CardPreview className={mergeClasses(s.media, s.heroMedia)}>
              <SafeImage src={featuredArticle.image} alt={featuredArticle.title} />
            </CardPreview>
            <h2 className={s.heroTitle}>{featuredArticle.title}</h2>
            <Body1 as="p" className={s.muted}>{featuredArticle.meta}</Body1>
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
          <Button
            as="a"
            href={projectsSection.profileHref}
            {...ext}
            appearance="outline"
            shape="circular"
            icon={<ArrowUpRight16Regular />}
            iconPosition="after"
            className={s.ghostBtn}
          >
            {projectsSection.profileLabel}
          </Button>
        </div>
        <div className={s.projectGrid}>
          {projects.map((p, i) => (
            <Card
              key={p.name}
              role="article"
              className={mergeClasses(
                s.projectCard,
                i < 2 ? s.projectWide : s.projectNarrow,
                i === projects.length - 1 && s.projectLast,
              )}
            >
              <span className={s.projectGlow} aria-hidden />
              <div className={s.projectIcon} aria-hidden>{PROJECT_ICONS[p.icon]}</div>
              <h3 className={s.h3}>{p.name}</h3>
              <Body1 as="p" className={s.projectDesc}>{p.description}</Body1>
              <div className={s.projectFoot}>
                {p.repo ? (
                  <Link href={p.repo} {...ext} className={s.textLink}>
                    {projectsSection.cta} <ArrowUpRight16Regular />
                  </Link>
                ) : (
                  <Badge
                    appearance="tint"
                    color="informative"
                    shape="circular"
                    icon={<LockClosed12Regular />}
                    className={s.privateBadge}
                  >
                    {p.status}
                  </Badge>
                )}
              </div>
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
            <Card key={p.href} className={s.postCard} role="article">
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
            <Body1 as="p" className={s.muted}>{featuredVideo.meta}</Body1>
            <Button
              as="a"
              href={featuredVideo.href}
              {...ext}
              appearance="primary"
              size="large"
              shape="circular"
              icon={<Play20Filled />}
              className={mergeClasses(s.block, s.glowBtn)}
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
            <h2 className={s.h2} style={{ marginBottom: 16 }}>{about.title}</h2>
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
            <Button
              as="a"
              href={about.cta.href}
              appearance="primary"
              size="large"
              shape="circular"
              className={mergeClasses(s.block, s.glowBtn)}
            >
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
