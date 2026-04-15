import { HERO_VIDEO_URL } from "../constants";
import {
  IconArrowUpRight,
  IconChart,
  IconLayoutGrid,
  IconShield,
  IconZap,
} from "../components/Icons";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import p from "./Page.module.scss";

const CLIENTS = ["Stripe", "Vercel", "Linear", "Notion", "Figma"] as const;

const QUOTES = [
  {
    text: "A complete rebuild in five days — I thought it was a joke. It wasn't. Our new site outperformed the old one in every metric within a week of launch.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    text: "Conversions up 4x in the first month. I've worked with top agencies and this is simply on another level. The AI doesn't just design — it thinks.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    text: "They didn't just design our site — they understood our brand better than agencies we'd briefed for weeks. The result is something we're genuinely proud of.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
] as const;

const WHY = [
  {
    title: "Days, Not Months",
    body: "Concept to launch at a pace that redefines what fast looks like.",
    Icon: IconZap,
  },
  {
    title: "Obsessively Crafted",
    body: "Every detail considered. Every element refined to its essence.",
    Icon: IconLayoutGrid,
  },
  {
    title: "Built to Convert",
    body: "Layouts informed by data. Every decision backed by performance.",
    Icon: IconChart,
  },
  {
    title: "Secure by Default",
    body: "Enterprise-grade protection built in from the very first line.",
    Icon: IconShield,
  },
] as const;

const TASKS = [
  { label: "Heatmap analysis complete", status: "done" as const },
  { label: "CTA color A/B test applied", status: "done" as const },
  { label: "Above-the-fold layout reorder", status: "running" as const },
  { label: "Mobile scroll depth analysis", status: "queued" as const },
  { label: "Micro-copy refinement pass", status: "queued" as const },
] as const;

function taskStatusLabel(s: (typeof TASKS)[number]["status"]) {
  if (s === "done") return "Done";
  if (s === "running") return "Running";
  return "Queued";
}

export function HomePage() {
  return (
    <div className={p.page}>
      <Header />
      <HeroSection />

      <section className={`${p.sectionPad} ${p.center}`}>
        <span className={p.badge}>Trusted by the teams behind</span>
        <div className={p.trustedClients}>
          {CLIENTS.map((name) => (
            <span key={name} className={p.clientName}>
              {name}
            </span>
          ))}
        </div>
      </section>

      <section className={p.videoSection}>
        <video
          className={p.videoFill}
          src='https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={p.videoGradTop} />
        <div className={p.videoGradBottom} />
        <div className={p.videoContent}>
          <span className={p.badge}>How It Works</span>
          <h2 className={p.h2}>You dream it. We ship it.</h2>
          <p className={p.body}>
            Share your vision. Our AI handles the rest—wireframes, design, code,
            launch. All in days, not quarters.
          </p>
          <button type="button" className={p.btnStrong}>
            Get Started
            <IconArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <section className={p.sectionPad}>
        <div className={p.capHeader}>
          <span className={p.badge}>Capabilities</span>
          <h2 className={`${p.h2} ${p.h2Lg}`}>Pro features. Zero complexity.</h2>
        </div>

        <div className={p.capRow}>
          <div className={p.capText}>
            <h3 className={p.h3}>Designed to convert. Built to perform.</h3>
            <p className={p.pDim}>
              Every pixel is intentional. Our AI studies what works across
              thousands of top sites—then builds yours to outperform them all.
            </p>
            <div>
              <button type="button" className={p.btnStrong}>
                Learn more
              </button>
            </div>
          </div>

          <div className={p.performanceGrid}>
            <div className={p.perfCard}>
              <div className={p.ringWrap}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Live Performance
                </span>
                <div className={p.ringOuter}>
                  <div className={p.ringInner}>
                    <span className={p.ringScore}>99</span>
                  </div>
                </div>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
                  score
                </span>
              </div>
              <div className={p.metrics}>
                <div>
                  <div className={p.metricVal}>+12%</div>
                  <div className={p.metricDelta}>48.2K</div>
                  <div className={p.metricLabel}>Page Views</div>
                </div>
                <div>
                  <div className={p.metricVal}>+2.1%</div>
                  <div className={p.metricDelta}>6.8%</div>
                  <div className={p.metricLabel}>CTR</div>
                </div>
                <div>
                  <div className={p.metricVal}>+0.9%</div>
                  <div className={p.metricDelta}>3.4%</div>
                  <div className={p.metricLabel}>Conversions</div>
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <div className={p.lhRow}>
                  <span>Performance</span>
                  <span className={p.lhScore}>99</span>
                </div>
                <div className={p.lhRow}>
                  <span>Accessibility</span>
                  <span className={p.lhScore}>97</span>
                </div>
                <div className={p.lhRow}>
                  <span>Best Practices</span>
                  <span className={p.lhScore}>100</span>
                </div>
              </div>
            </div>

            <div className={p.perfCard}>
              <h3 className={p.h3} style={{ marginBottom: "0.75rem" }}>
                It gets smarter. Automatically.
              </h3>
              <p className={p.pDim} style={{ marginBottom: "1.25rem" }}>
                Your site evolves on its own. AI monitors every click, scroll, and
                conversion—then optimizes in real time. No manual updates. Ever.
              </p>
              <button type="button" className={p.btnStrong}>
                See how it works
              </button>
            </div>

            <div className={p.engineCard}>
              <div className={p.engineTop}>
                <div>
                  <p className={p.engineTitle}>AI Optimization Engine</p>
                  <p className={p.engineSub}>
                    Analyzing 1,247 user sessions…{" "}
                    <strong style={{ color: "rgba(255,255,255,0.85)" }}>72%</strong>
                  </p>
                </div>
                <span className={p.pillActive}>Active</span>
              </div>
              <div className={p.progressTrack}>
                <div className={p.progressBar} style={{ width: "72%" }} />
              </div>
              <div>
                {TASKS.map((t) => (
                  <div
                    key={t.label}
                    className={`${p.task} ${t.status === "done" ? p.taskDone : ""}`}
                  >
                    <span>{t.label}</span>
                    <span>{taskStatusLabel(t.status)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={p.sectionPad}>
        <div className={p.capHeader}>
          <span className={p.badge}>Why Us</span>
          <h2 className={`${p.h2} ${p.h2Lg}`}>The difference is everything.</h2>
        </div>
        <div className={p.whyGrid}>
          {WHY.map(({ title, body, Icon }) => (
            <div key={title} className={p.whyCard}>
              <div className={p.iconBox}>
                <Icon size={18} />
              </div>
              <div style={{ paddingTop: "3rem" }}>
                <h3 className={p.h3} style={{ marginBottom: "0.5rem" }}>
                  {title}
                </h3>
                <p className={p.pDim}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${p.videoSection} ${p.sectionPad}`}>
        <video
          className={p.videoFill}
          src='https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'
          autoPlay
          loop
          data-cid='ZSA_3gWX'
          playsInline
        />
        <div className={p.videoGradTop} />
        <div className={p.videoGradBottom} />
        <div className={p.statsGlass}>
          <div className={p.statsGrid}>
            <div>
              <div className={p.statNum}>200+</div>
              <div className={p.statLabel}>Sites launched</div>
            </div>
            <div>
              <div className={p.statNum}>98%</div>
              <div className={p.statLabel}>Client satisfaction</div>
            </div>
            <div>
              <div className={p.statNum}>3.2x</div>
              <div className={p.statLabel}>More conversions</div>
            </div>
            <div>
              <div className={p.statNum}>5 days</div>
              <div className={p.statLabel}>Average delivery</div>
            </div>
          </div>
        </div>
      </section>

      <section className={p.sectionPad}>
        <div className={p.capHeader}>
          <span className={p.badge}>What They Say</span>
          <h2 className={`${p.h2} ${p.h2Lg}`}>Don&apos;t take our word for it.</h2>
        </div>
        <div className={p.quoteGrid}>
          {QUOTES.map((q) => (
            <article key={q.name} className={p.quoteCard}>
              <p className={p.quoteText}>“{q.text}”</p>
              <div className={p.quoteRule} />
              <div>
                <div className={p.quoteName}>{q.name}</div>
                <div className={p.quoteRole}>{q.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={p.videoSection}>
        <video
          className={p.videoFill}
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={p.videoGradTop} />
        <div className={p.videoGradBottom} />
        <div className={p.finalInner}>
          <h2 className={p.finalTitle}>Your next website starts here.</h2>
          <p className={p.body}>
            Book a free strategy call. See what AI‑powered design can do.
          </p>
          <div className={p.finalActions}>
            <button type="button" className={p.btnStrong}>
              Book a Call
              <IconArrowUpRight size={16} />
            </button>
            <button type="button" className={p.btnWhite}>
              View Pricing
            </button>
          </div>
        </div>
        <footer className={p.footerBar}>
          <span className={p.copy}>© 2026 Studio</span>
          <div className={p.footerLinks}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
