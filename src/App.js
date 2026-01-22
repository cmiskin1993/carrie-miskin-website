import "./App.css";
import { useEffect, useState } from "react";

import bg from "./assets/Background-01.png";
import flower from "./assets/CarrieMiskin_Flower-01.png";
import flowerWhite from "./assets/CarrieMiskin_Flower-white.png"; // ✅ NEW

export default function App() {
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

  // Dark mode (keeps your design)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

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

  return (
    <div className="page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="blob one" aria-hidden="true" />
      <div className="blob two" aria-hidden="true" />
      <div className="blob three" aria-hidden="true" />

      <div className="content">
        <header className="topBar">
          <div className="brand">
            <div className="logoWrap">
              {/* ✅ Swap logo based on theme */}
              <img
                className="logo"
                src={theme === "dark" ? flowerWhite : flower}
                alt="Carrie Miskin logo"
              />
            </div>
            <div className="brandText">
              <div className="tag">Web & Graphic Designer</div>
            </div>
          </div>

          {/* Dark mode toggle */}
          <button
            className="themeToggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg className="themeIcon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 18.25a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Zm0-2a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM11 2h2v3h-2V2Zm0 17h2v3h-2v-3ZM2 11h3v2H2v-2Zm17 0h3v2h-3v-2ZM4.22 5.64l1.42-1.42 2.12 2.12-1.42 1.42-2.12-2.12Zm12.02 12.02 1.42-1.42 2.12 2.12-1.42 1.42-2.12-2.12ZM18.36 4.22l1.42 1.42-2.12 2.12-1.42-1.42 2.12-2.12ZM5.64 19.78l-1.42-1.42 2.12-2.12 1.42 1.42-2.12 2.12Z"
                />
              </svg>
            ) : (
              <svg className="themeIcon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.2 15.7A7.6 7.6 0 0 1 8.3 3.8a.9.9 0 0 1 1.08 1.08A5.8 5.8 0 1 0 19.12 14.62a.9.9 0 0 1 1.08 1.08Z"
                />
              </svg>
            )}
          </button>
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

          <footer className="footer">
            <span>© {new Date().getFullYear()} Carrie Miskin</span>
            <span className="dot">•</span>
            <span className="muted">Site in progress</span>
            <span className="dot">•</span>
            <span className="muted2">All rights reserved</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
