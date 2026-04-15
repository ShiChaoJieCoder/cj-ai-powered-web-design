import { useEffect } from "react";
import { useUiStore } from "../store/uiStore";
import { HERO_VIDEO_URL } from "../constants";
import { IconArrowUpRight, IconPlay } from "./Icons";
import styles from "./HeroSection.module.scss";

const WORDS = ["The", "Website", "Your", "Brand", "Deserves"] as const;

export function HeroSection() {
  const heroReveal = useUiStore((s) => s.heroReveal);
  const setHeroReveal = useUiStore((s) => s.setHeroReveal);

  useEffect(() => {
    const id = window.setTimeout(() => setHeroReveal(true), 80);
    return () => window.clearTimeout(id);
  }, [setHeroReveal]);

  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay} />
      <div className={styles.gradTop} />
      <div className={styles.gradBottom} />

      <div className={styles.content}>
        <div
          className={`${styles.pill} ${heroReveal ? styles.pillVisible : ""}`}
        >
          <span className={styles.pillNew}>New</span>
          <span className={styles.pillText}>
            Introducing AI‑powered web design.
          </span>
        </div>

        <h1 className={styles.title} aria-label="The Website Your Brand Deserves">
          {WORDS.map((w, i) => (
            <span
              key={w}
              className={`${styles.word} ${heroReveal ? styles.wordVisible : ""}`}
              style={{ transitionDelay: `${120 + i * 70}ms` }}
              aria-hidden
            >
              {w}
            </span>
          ))}
        </h1>

        <p
          className={`${styles.sub} ${heroReveal ? styles.subVisible : ""}`}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </p>

        <div
          className={`${styles.actions} ${heroReveal ? styles.actionsVisible : ""}`}
        >
          <button type="button" className={styles.btnPrimary}>
            Get Started
            <IconArrowUpRight size={16} />
          </button>
          <button type="button" className={styles.btnGhost}>
            <IconPlay size={14} />
            Watch the Film
          </button>
        </div>
      </div>
    </section>
  );
}
