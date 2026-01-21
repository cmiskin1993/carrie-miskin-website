import "./App.css";
import { useEffect } from "react";

import bg from "./assets/Background-01.png";
import flower from "./assets/CarrieMiskin_Flower-01.png";

export default function App() {
  // Adds that “alive” feel: blobs subtly follow your mouse (like the example site)
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1..1
      document.documentElement.style.setProperty("--mx", x.toFixed(3));
      document.documentElement.style.setProperty("--my", y.toFixed(3));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="page" style={{ backgroundImage: `url(${bg})` }}>
      {/* animated background blobs */}
      <div className="blob one" aria-hidden="true" />
      <div className="blob two" aria-hidden="true" />
      <div className="blob three" aria-hidden="true" />

      {/* all site content */}
      <div className="content">
        <header className="topBar">
          <div className="brand">
            <div className="logoWrap">
              <img className="logo" src={flower} alt="Carrie Miskin logo" />
            </div>
            <div className="brandText">
              <div className="tag">Web & Graphic Designer</div>
            </div>
          </div>

          <nav className="nav">{/* add links later if you want */}</nav>
        </header>

        <main className="wrap">
          <section className="heroCard">
            <h1 className="headline">
              New site coming soon, portfolio and case studies on the way.
            </h1>

            {/* <p className="subhead">
              I’m a web and graphic designer who creates clean, intuitive, and
              visually engaging digital experiences. I focus on thoughtful
              design, strong visual systems, and frontend implementation —
              bringing ideas from concept through execution.
            </p> */}

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

            <div id="contact" className="infoCard">
              <h2>Contact</h2>
              <p className="contactLine">
                Email:{" "}
                <a href="mailto:carriemiskin@gmail.com">
                  carriemiskin@gmail.com
                </a>
              </p>
              <p className="contactLine">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/carriemiskin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/carriemiskin
                </a>
              </p>
              <p className="contactLine">
                Portfolio: <span className="muted">launching soon</span>
              </p>
            </div>
          </section>

          <footer className="footer">
            <span>© {new Date().getFullYear()} Carrie Miskin</span>
            <span className="dot">•</span>
            <span className="muted">Site in progress</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
