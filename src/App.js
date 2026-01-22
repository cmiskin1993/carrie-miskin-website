import "./App.css";
import { useEffect, useMemo, useState } from "react";

import bg from "./assets/Background-01.png";
import flower from "./assets/CarrieMiskin_Flower-01.png";
import flowerWhite from "./assets/CarrieMiskin_Flower-white.png";

export default function App() {
  // -------------------------
  // Dark mode
  // -------------------------
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;

    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  // -------------------------
  // Mouse blobs
  // -------------------------
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty("--mx", x.toFixed(3));
      document.documentElement.style.setProperty("--my", y.toFixed(3));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const email = "carriemiskin@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/carriemiskin/";
  const githubUrl = "https://github.com/cmiskin1993";
  const locationText = "Philadelphia, PA";

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (e) {
      window.prompt("Copy this:", text);
    }
  };

  const WAVE_TEXT =
    "WEB & GRAPHIC DESIGNER • UX/UI • FRONTEND DESIGN • BRANDING • VISUAL DESIGN • ";

  // One wide SVG tile
  const WaveTile = useMemo(
    () =>
      function WaveTileInner() {
        return (
          <svg
            className="waveSvg"
            viewBox="0 0 2400 140"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              id="wavePath"
              d="M0,70 C300,20 600,120 900,70 C1200,20 1500,120 1800,70 C2100,20 2250,110 2400,70"
              fill="none"
            />
            <text className="waveText">
              <textPath href="#wavePath" startOffset="0%">
                {WAVE_TEXT.repeat(30)}
              </textPath>
            </text>
          </svg>
        );
      },
    []
  );

  const logoSrc = theme === "dark" ? flowerWhite : flower;

  return (
    <div className="page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="blob one" aria-hidden="true" />
      <div className="blob two" aria-hidden="true" />
      <div className="blob three" aria-hidden="true" />

      <div className="content">
        <header className="topBar">
          <div className="brand">
            <div className="logoWrap">
              <img className="logo" src={logoSrc} alt="Carrie Miskin logo" />
            </div>
            <div className="brandText">
              <div className="tag">Web & Graphic Designer</div>
            </div>
          </div>

          {/* ICON TOGGLE */}
          <div className="topRight">
            <button
              type="button"
              className="themeToggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                // Sun icon
                <svg
                  className="themeIcon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 2v2.2M12 19.8V22M2 12h2.2M19.8 12H22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M19.8 4.2l-1.6 1.6M5.8 18.2l-1.6 1.6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                // Moon icon
                <svg
                  className="themeIcon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>

        <main className="wrap">
          <section className="heroCard">
            <h1 className="headline">
              New site coming soon, portfolio and case studies on the way.
            </h1>

            <div className="mini">
              <span className="pill">Web Design</span>
              <span className="pill">UX / UI</span>
              <span className="pill">Frontend Design</span>
              <span className="pill">Visual & Graphic Design</span>
            </div>
          </section>

          <section id="about" className="infoGrid">
            <div className="infoCard">
              <h2>About</h2>
              <p>
                I’m a web and graphic designer who focuses on creating clear,
                user-friendly, and visually thoughtful digital experiences. I
                design websites, interfaces, and visual systems with usability
                in mind, and I enjoy working closely with frontend
                implementation to bring designs to life.
              </p>
            </div>

            <div id="contact" className="infoCard contactCardNew">
              <h2>Get in Touch</h2>

              <div className="contactRowNew">
                {/* Email (copy) */}
                <button
                  className="contactBtnNew"
                  type="button"
                  onClick={() => copyToClipboard(email)}
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  <span className="contactBtnIconNew" aria-hidden="true">
                    <svg
                      className="tileIconNew"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 7.5h15v9h-15v-9Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.5 8.5 12 13l6.5-4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <span className="contactBtnLabelNew">Email</span>

                  <span className="copyPillNew" aria-hidden="true">
                    <svg
                      className="copyIconNew"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 9h10v10H9V9Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* LinkedIn */}
                <a
                  className="contactBtnNew"
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactBtnIconNew" aria-hidden="true">
                    in
                  </span>
                  <span className="contactBtnLabelNew">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  className="contactBtnNew"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactBtnIconNew" aria-hidden="true">
                    <svg
                      className="ghIconNew"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2C6.477 2 2 6.596 2 12.26c0 4.53 2.865 8.37 6.839 9.727.5.096.682-.22.682-.49 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.495-1.11-1.495-.908-.64.069-.627.069-.627 1.004.073 1.533 1.056 1.533 1.056.892 1.563 2.341 1.112 2.91.85.092-.67.349-1.113.635-1.369-2.221-.26-4.556-1.14-4.556-5.07 0-1.12.389-2.035 1.03-2.753-.103-.26-.446-1.31.098-2.73 0 0 .84-.276 2.75 1.05A9.19 9.19 0 0 1 12 7.12c.85.004 1.705.118 2.505.344 1.909-1.326 2.748-1.05 2.748-1.05.546 1.42.203 2.47.1 2.73.64.718 1.028 1.633 1.028 2.753 0 3.94-2.339 4.808-4.566 5.063.359.318.679.94.679 1.895 0 1.368-.013 2.47-.013 2.806 0 .272.18.59.688.489C19.138 20.626 22 16.787 22 12.26 22 6.596 17.523 2 12 2Z"
                      />
                    </svg>
                  </span>
                  <span className="contactBtnLabelNew">GitHub</span>
                </a>

                {/* Location */}
                <div className="contactBtnNew contactBtnStaticNew">
                  <span className="contactBtnIconNew" aria-hidden="true">
                    <svg
                      className="tileIconNew"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21s6-5.2 6-10.2A6 6 0 0 0 6 10.8C6 15.8 12 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 13a2.2 2.2 0 1 0 0-4.4A2.2 2.2 0 0 0 12 13Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="contactBtnLabelNew">Location</span>
                  <span className="contactBtnHintNew">{locationText}</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FULL-BLEED MARQUEE */}
        <div className="waveMarquee" aria-hidden="true">
          <div className="waveTrack">
            <div className="waveTile">
              <WaveTile />
            </div>
            <div className="waveTile">
              <WaveTile />
            </div>
          </div>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Carrie Miskin</span>
          <span className="dot">•</span>
          <span className="muted">Site in progress. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
