// src/Pages/Resume.js
import "../App.css";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import bg from "../assets/Background-01.png";
import flower from "../assets/CarrieMiskin_Flower-01.png";
import flowerWhite from "../assets/CarrieMiskin_Flower-white.png";

import resumePdf from "../assets/Carrie Miskin_Resume.pdf";

export default function Resume() {
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

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const logoSrc = theme === "dark" ? flowerWhite : flower;

  const resume = useMemo(
    () => ({
      name: "Carrie Miskin",
      title: "Web & Graphic Designer • UX/UI • Frontend Design",
      location: "Philadelphia, PA",
      email: "carriemiskin@gmail.com",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/carriemiskin/",
        },
        { label: "GitHub", href: "https://github.com/cmiskin1993" },
      ],
      summary:
        "Web and graphic designer focused on creating clear, user-friendly digital experiences. I design websites, interfaces, and visual systems with usability in mind and enjoy partnering closely with frontend implementation to bring designs to life.",
      skills: [
        "Web Design",
        "UX / UI",
        "Visual Design",
        "Brand Systems",
        "Canva Template Systems",
        "React (frontend implementation)",
        "Figma",
        "Adobe CC (InDesign/Illustrator/Photoshop)",
      ],
      experience: [
        {
          company: "URJ (Union for Reform Judaism)",
          role: "Designer",
          dates: "2017 — Present",
          bullets: [
            "Led UX/UI improvements across web and mobile platforms, increasing site visitation by 5%",
            "Designed digital, social, and print campaigns driving a 50% increase in summer camp attendance",
            "Produced promotional video for international conference, contributing to 700+ attendees",
            "Created large-scale environmental graphics (6,000+ sq. ft.) and weekly email visuals reaching 500,000+ users",
            "Designed executive-level presentations and mentored interns",
          ],
        },
        {
          company: "Princeton Partners",
          role: "Graphic Designer",
          dates: "2016 — 2017",
          bullets: [
            "Designed NJ State public safety campaign “Call #77,” featured on NJ Turnpike billboards and digital displays",
            "Produced print, digital, and web materials for Peapack Gladstone Bank rebrand, supporting 25% asset growth",
          ],
        },
      ],
      education: [
        {
          school: "Temple University",
          degree: "Bachelor of Arts (B.A.) in Advertising",
          dates: "May 2016",
        },
      ],
      certification: [
        {
          school: "Flatiron School",
          program: "Full Stack Software Engineering",
          dates: "April 2023",
        },
      ],
    }),
    []
  );

  const sections = [
    { id: "summary", label: "Summary" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certification", label: "Certification" },
  ];

  return (
    <div className="page resumePage" style={{ backgroundImage: `url(${bg})` }}>
      <div className="content">
        <header className="topBar">
          <div className="brand">
            {/* ✅ LOGO LINKS HOME */}
            <Link
              to="/"
              className="logoWrap"
              style={{ maxWidth: 320, display: "inline-block" }}
              aria-label="Go to homepage"
              title="Home"
            >
              <img className="logo" src={logoSrc} alt="Carrie Miskin logo" />
            </Link>
          </div>

          <div className="topRight">
            <nav className="topNav" aria-label="Primary">
              <Link
                to="/"
                className="resumeIconLink"
                aria-label="Go to homepage"
                title="Home"
              >
                <svg
                  className="navIcon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-10.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              {/* <a
                className="resumeLink"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                title="Open PDF in a new tab"
              >
                PDF
              </a> */}
            </nav>

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
          <section className="heroCard resumeHero">
            <div className="resumeHeader">
              <div>
                <h1 className="resumeName">{resume.name}</h1>
                <div className="resumeTitle">{resume.title}</div>
                <div className="resumeMeta">
                  <span>{resume.location}</span>
                  <span className="resumeMetaDot">•</span>
                  <a
                    className="resumeInlineLink"
                    href={`mailto:${resume.email}`}
                  >
                    {resume.email}
                  </a>
                </div>
              </div>

              <div className="resumeHeaderLinks">
                {resume.links.map((l) => (
                  <a
                    key={l.label}
                    className="resumeChipLink"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  className="resumeChipLink"
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </section>

          <section className="resumeLayout">
            <div className="resumeMain">
              <div id="summary" className="resumeSection">
                <h2 className="resumeH2">Summary</h2>
                <p className="resumeP resumeText">{resume.summary}</p>
              </div>

              <div id="skills" className="resumeSection">
                <h2 className="resumeH2">Skills</h2>
                <div className="resumePills">
                  {resume.skills.map((s) => (
                    <span key={s} className="resumePill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div id="experience" className="resumeSection">
                <h2 className="resumeH2">Experience</h2>

                <div className="resumeStack">
                  {resume.experience.map((job) => (
                    <div
                      key={`${job.company}-${job.role}`}
                      className="resumeItem"
                    >
                      <div className="resumeItemTop">
                        <div className="resumeItemLeft">
                          <div className="resumeItemRole">{job.role}</div>
                          <div className="resumeItemCompany">{job.company}</div>
                        </div>
                        <div className="resumeItemDates">{job.dates}</div>
                      </div>

                      <ul className="resumeBullets resumeText">
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div id="education" className="resumeSection">
                <h2 className="resumeH2">Education</h2>

                <div className="resumeStack">
                  {resume.education.map((ed) => (
                    <div key={ed.school} className="resumeItem">
                      <div className="resumeItemTop">
                        <div className="resumeItemLeft">
                          <div className="resumeItemRole">{ed.degree}</div>
                          <div className="resumeItemCompany">{ed.school}</div>
                        </div>
                        <div className="resumeItemDates">{ed.dates}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ CERTIFICATION */}
              <div id="certification" className="resumeSection">
                <h2 className="resumeH2">Certification</h2>

                <div className="resumeStack">
                  {resume.certification.map((c) => (
                    <div
                      key={`${c.school}-${c.program}-${c.dates}`}
                      className="resumeItem"
                    >
                      <div className="resumeItemTop">
                        <div className="resumeItemLeft">
                          <div className="resumeItemRole">{c.program}</div>
                          <div className="resumeItemCompany">{c.school}</div>
                        </div>
                        <div className="resumeItemDates">{c.dates}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* ✅ END CERTIFICATION */}
            </div>

            <aside className="resumeSide" aria-label="Resume navigation">
              <div className="resumeSideCard">
                <div className="resumeSideTitle">On this page</div>
                <ul className="resumeSideNav">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a className="resumeSideLink" href={`#${s.id}`}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="resumeSideDivider" />

                <a
                  className="resumeSideBtn"
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF
                </a>
                <a className="resumeSideBtnGhost" href={resumePdf} download>
                  Download PDF
                </a>
              </div>
            </aside>
          </section>
        </main>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Carrie Miskin</span>
          <span className="dot">•</span>
          <span className="muted">Site in progress. All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}
