import { useUiStore } from "../store/uiStore";
import { IconArrowUpRight } from "./Icons";
import styles from "./Header.module.scss";

const links = ["Home", "Services", "Work", "Process", "Pricing"] as const;

export function Header() {
  const mobileNavOpen = useUiStore((s) => s.mobileNavOpen);
  const toggleMobileNav = useUiStore((s) => s.toggleMobileNav);
  const setMobileNavOpen = useUiStore((s) => s.setMobileNavOpen);

  return (
    <>
      <header className={styles.root}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoLetter}>S</span>
          </div>
          <span className={styles.studioName}>Studio</span>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((label) => (
            <a key={label} href="#" className={styles.navLink}>
              {label}
            </a>
          ))}
          <button type="button" className={styles.cta}>
            Get Started
            <IconArrowUpRight size={14} />
          </button>
        </nav>

        <div className={styles.mobileBar}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={mobileNavOpen}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobileNav}
          >
            <span />
            <span />
          </button>
        </div>

        <div className={styles.spacer} aria-hidden />
      </header>

      {mobileNavOpen ? (
        <div
          className={styles.drawer}
          role="dialog"
          aria-modal
          aria-label="Navigation"
        >
          {links.map((label) => (
            <a
              key={label}
              href="#"
              onClick={() => setMobileNavOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className={styles.drawerCta}
            onClick={() => setMobileNavOpen(false)}
          >
            Get Started
          </button>
        </div>
      ) : null}
    </>
  );
}
