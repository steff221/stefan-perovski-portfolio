"use client";

import Image from "next/image";
import React from "react";

const keyframes = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes typing {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 100%;
      opacity: 1;
    }
  }

  @keyframes blink {
    0%, 49% {
      border-right: 2px solid #7a9cc8;
    }
    50%, 100% {
      border-right: 2px solid transparent;
    }
  }
128px", height: "128
  @keyframes glow {
    0%, 100% {
      border-color: #1e3a6e;
    }
    50% {
      border-color: #60a5fa; 
    }
  }

  @keyframes themeToggle {
    from {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
    to {
      transform: rotate(360deg) scale(1);
      opacity: 1;
    }
  }
`;

const darkTheme = {
  bg: "#060d1f",
  text: "#e2e8f0",
  textSecondary: "#7a9cc8",
  accentLight: "#60a5fa",
  accentDark: "#1e3a6e",
  cardBg: "#112040",
  btnBg: "#0d1b35",
};

const lightTheme = {
  bg: "#f8fafc",
  text: "#1e293b",
  textSecondary: "#475569",
  accentLight: "#3b82f6",
  accentDark: "#e2e8f0",
  cardBg: "#ffffff",
  btnBg: "#f1f5f9",
};

const getThemeStyles = (isDark: boolean) => {
  const theme = isDark ? darkTheme : lightTheme;
  return {
    page: { background: theme.bg, minHeight: "100vh", color: theme.text, fontFamily: "DM Sans, sans-serif", fontSize: "15px", lineHeight: "1.7", transition: "background 0.3s ease, color 0.3s ease" },
    wrap: { maxWidth: "720px", margin: "0 auto", padding: "0 20px 80px" },
    nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0 18px", borderBottom: `0.5px solid ${theme.accentDark}`, marginBottom: "60px", animation: "slideInLeft 0.6s ease-out", transition: "border-color 0.3s ease" },
    navName: { fontFamily: "DM Serif Display, serif", fontSize: "17px", color: theme.text },
    navLinks: { display: "flex", gap: "24px", alignItems: "center" },
    navLink: { fontSize: "13px", color: theme.textSecondary, textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.3s ease", cursor: "pointer" },
    navLinkHover: { color: theme.accentLight },
    themeToggle: { background: theme.btnBg, border: `0.5px solid ${theme.accentDark}`, borderRadius: "6px", padding: "6px 10px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", width: "36px", height: "36px" },
    themeToggleHover: { borderColor: theme.accentLight },
    themeToggleIcon: { width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center" },
    hero: { display: "flex", gap: "32px", alignItems: "flex-start", marginBottom: "72px", animation: "fadeIn 0.8s ease-out" },
    avatar: { width: "140px", height: "140px", borderRadius: "50%", border: `2px solid ${theme.accentDark}`, flexShrink: 0, overflow: "hidden" as const, transition: "transform 0.3s ease, box-shadow 0.3s ease" },
    avatarHover: { transform: "scale(1.05)", boxShadow: `0 0 20px rgba(96, 165, 250, 0.4)` },
    h1: { fontFamily: "DM Serif Display, serif", fontSize: "30px", fontWeight: 400, marginBottom: "4px", lineHeight: "1.2", color: theme.text },
    subtitle: { fontSize: "13px", color: theme.accentLight, marginBottom: "12px" },
    bio: { color: theme.textSecondary, fontSize: "14px", maxWidth: "460px", marginBottom: "20px", lineHeight: "1.7", animation: "typing 2s ease-out, blink 0.7s infinite" },
    socialRow: { display: "flex", gap: "10px" },
    socialBtn: { fontSize: "12px", padding: "6px 14px", border: `0.5px solid ${theme.accentDark}`, borderRadius: "20px", color: theme.textSecondary, textDecoration: "none", background: theme.btnBg, transition: "all 0.3s ease", cursor: "pointer" },
    socialBtnHover: { borderColor: theme.accentLight, color: theme.accentLight, boxShadow: `0 0 12px rgba(96, 165, 250, 0.3)` },
    sectionTitle: { fontFamily: "DM Serif Display, serif", fontSize: "22px", fontWeight: 400, color: theme.text, marginBottom: "28px", paddingBottom: "12px", borderBottom: `0.5px solid ${theme.accentDark}`, animation: "slideInLeft 0.7s ease-out", transition: "border-color 0.3s ease" },
    card: { background: theme.cardBg, border: `0.5px solid ${theme.accentDark}`, borderRadius: "12px", padding: "20px 22px", marginBottom: "16px", transition: "all 0.3s ease", animation: "fadeIn 0.6s ease-out" },
    cardHover: { borderColor: theme.accentLight, boxShadow: `0 0 20px rgba(96, 165, 250, 0.15)`, transform: "translateY(-2px)" },
    cardHeader: { display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" },
    logo: { width: "38px", height: "38px", borderRadius: "8px", background: theme.btnBg, border: `0.5px solid ${theme.accentDark}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 500, color: theme.accentLight, flexShrink: 0, overflow: "hidden" as const },
    cardTitle: { fontSize: "15px", fontWeight: 500, color: theme.text },
    cardCompany: { fontSize: "13px", color: theme.accentLight },
    cardMeta: { fontSize: "12px", color: theme.textSecondary, marginBottom: "10px" },
    bullet: { fontSize: "13px", color: theme.textSecondary, marginBottom: "4px" },
    skillsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" },
    skillCard: { background: theme.cardBg, border: `0.5px solid ${theme.accentDark}`, borderRadius: "12px", padding: "24px 20px", textAlign: "center" as const, transition: "all 0.3s ease", animation: "fadeIn 0.6s ease-out" },
    skillCardHover: { borderColor: theme.accentLight, boxShadow: `0 0 20px rgba(96, 165, 250, 0.15)`, transform: "translateY(-4px)" },
    skillIcon: { width: "60px", height: "60px", margin: "0 auto 14px", position: "relative" as const },
    skillTitle: { fontSize: "14px", fontWeight: 500, color: theme.text, marginBottom: "8px" },
    skillDesc: { fontSize: "12px", color: theme.textSecondary, lineHeight: "1.5" },
    projGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
    projCard: { background: theme.cardBg, border: `0.5px solid ${theme.accentDark}`, borderRadius: "12px", padding: "18px", transition: "all 0.3s ease", animation: "fadeIn 0.6s ease-out" },
    projCardHover: { borderColor: theme.accentLight, boxShadow: `0 0 20px rgba(96, 165, 250, 0.15)`, transform: "translateY(-4px)" },
    projTitle: { fontSize: "13px", fontWeight: 500, color: theme.text, marginBottom: "5px" },
    projDesc: { fontSize: "12px", color: theme.textSecondary, marginBottom: "10px", lineHeight: "1.5" },
    tagsRow: { display: "flex", flexWrap: "wrap" as const, gap: "5px", marginBottom: "10px" },
    tag: { fontSize: "10px", padding: "3px 8px", background: `${isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.05)"}`, border: `0.5px solid ${isDark ? "rgba(59,130,246,0.3)" : "rgba(59,130,246,0.2)"}`, borderRadius: "20px", color: theme.accentLight, transition: "all 0.2s ease" },
    tagHover: { background: `${isDark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.1)"}`, borderColor: `${isDark ? "rgba(96, 165, 250, 0.6)" : "rgba(59,130,246,0.4)"}` },
    linksRow: { display: "flex", gap: "8px" },
    linkBtn: { fontSize: "11px", color: theme.textSecondary, textDecoration: "none", padding: "4px 10px", border: `0.5px solid ${theme.accentDark}`, borderRadius: "6px", transition: "all 0.2s ease" },
    linkBtnHover: { borderColor: theme.accentLight, color: theme.accentLight },
    stackGroup: { marginBottom: "18px", animation: "fadeIn 0.6s ease-out" },
    stackLabel: { fontSize: "12px", color: theme.textSecondary, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "8px" },
    stackBadges: { display: "flex", flexWrap: "wrap" as const, gap: "6px" },
    badge: { fontSize: "12px", padding: "5px 12px", background: theme.cardBg, border: `0.5px solid ${theme.accentDark}`, borderRadius: "6px", color: theme.text, transition: "all 0.2s ease" },
    badgeHover: { borderColor: theme.accentLight, color: theme.accentLight, boxShadow: `0 0 8px rgba(96, 165, 250, 0.2)` },
    footer: { textAlign: "center" as const, fontSize: "12px", color: theme.textSecondary, paddingTop: "24px", borderTop: `0.5px solid ${theme.accentDark}`, transition: "border-color 0.3s ease" },
  };
};

const getSoftSkills = () => [
  { title: "Teamwork", desc: "Building together toward shared goals, across technical and non-technical teams.", icon: "team_9942529.png" },
  { title: "Motivation", desc: "Self-driven to keep learning and building, even outside the classroom.", icon: "self-motivation_17379187.png" },
  { title: "Adaptability", desc: "Comfortable switching between coding, leadership, and public-facing roles.", icon: "adaptation_18224723.png" },
  { title: "Public Relations", desc: "Representing organizations clearly and professionally to diverse audiences.", icon: "public-relation_17495092.png" },
  { title: "Strategic Thinking", desc: "Connecting day-to-day work to long-term impact and bigger picture goals.", icon: "game_14544309.png" },
  { title: "Cognitive Flexibility", desc: "Shifting fluidly between deep technical focus and high-level people work.", icon: "flexibility_18514241.png" },
];

export default function Home() {
  const [isDark, setIsDark] = React.useState(true);
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = React.useState<string | null>(null);
  
  const S = getThemeStyles(isDark);
  const softSkills = getSoftSkills();

  React.useEffect(() => {
    // Check system preference on load
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
  }, []);
  
  return (
    <>
      <style>{keyframes}</style>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <main style={S.page}>
        <div style={S.wrap}>

          {/* NAVBAR */}
          <nav style={S.nav}>
            <span style={S.navName}>Stefan Perovski</span>
            <div style={S.navLinks}>
              <a href="#about"      style={S.navLink}>About</a>
              <a href="#experience" style={S.navLink}>Experience</a>
              <a href="#projects"   style={S.navLink}>Projects</a>
              <button 
                style={{...S.themeToggle, ...(hoveredBtn === 'theme' ? S.themeToggleHover : {})}}
                onClick={() => setIsDark(!isDark)}
                onMouseEnter={() => setHoveredBtn('theme')}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                <svg 
                  style={{...S.themeToggleIcon, animation: "themeToggle 0.6s ease-in-out"}}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={isDark ? "white" : "black"}
                  strokeWidth="2"
                >
                  {isDark ? (
                    // Sun icon
                    <>
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </>
                  ) : (
                    // Moon icon - crescent shape
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* HERO */}
          <section id="about" style={S.hero}>
            <div style={{...S.avatar, ...(hoveredBtn === 'avatar' ? S.avatarHover : {})}} onMouseEnter={() => setHoveredBtn('avatar')} onMouseLeave={() => setHoveredBtn(null)}>
              <Image src="/pfp.jpg" alt="Stefan Perovski" width={180} height={180} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h1 style={S.h1}>Hi, I&apos;m Stefan Perovski</h1>
              <p style={S.subtitle}>Chair of Digitalization ·Software Engineering Student & Web Developer· Builder</p>
              <p style={S.bio}>
                A software engineering student at FINKI passionate about building impactful software and driving digital transformation.
                I love solving hard problems, learning new technologies, and creating things that matter.
              </p>
              <div style={S.socialRow}>
                <a href="https://github.com/steff221"     target="_blank" rel="noopener noreferrer" style={{...S.socialBtn, ...(hoveredBtn === 'github' ? S.socialBtnHover : {})}} onMouseEnter={() => setHoveredBtn('github')} onMouseLeave={() => setHoveredBtn(null)}>GitHub</a>
                <a href="https://www.linkedin.com/in/stefan-perovski-a5b401294/" target="_blank" rel="noopener noreferrer" style={{...S.socialBtn, ...(hoveredBtn === 'linkedin' ? S.socialBtnHover : {})}} onMouseEnter={() => setHoveredBtn('linkedin')} onMouseLeave={() => setHoveredBtn(null)}>LinkedIn</a>
                <a href="mailto:stefan.perovski20@fmail.com"                style={{...S.socialBtn, ...(hoveredBtn === 'email' ? S.socialBtnHover : {})}} onMouseEnter={() => setHoveredBtn('email')} onMouseLeave={() => setHoveredBtn(null)}>Email</a>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" style={{ marginBottom: "64px" }}>
            <h2 style={S.sectionTitle}>Experience</h2>

            <div style={{...S.card, ...(hoveredCard === 'exp1' ? S.cardHover : {})}} onMouseEnter={() => setHoveredCard('exp1')} onMouseLeave={() => setHoveredCard(null)}>
              <div style={S.cardHeader}>
                <div style={S.logo}>USA</div>
                <div>
                  <div style={S.cardTitle}>Chair of the Digitalization Committee</div>
                  <div style={S.cardCompany}>University Student Assembly · Ss. Cyril and Methodius University</div>
                </div>
              </div>
              <div style={S.cardMeta}>Mar 2026 – Present · 2 mos · Skopje</div>
              <ul style={{ paddingLeft: "16px" }}>
                <li style={S.bullet}>Selected as Chair of the Digitalisation Committee at the University Student Assembly of Ss. Cyril and Methodius University in Skopje.</li>
                <li style={S.bullet}>Leading initiatives to modernize and digitize university student processes and services.</li>
              </ul>
            </div>

            <div style={{...S.card, ...(hoveredCard === 'exp2' ? S.cardHover : {})}} onMouseEnter={() => setHoveredCard('exp2')} onMouseLeave={() => setHoveredCard(null)}>
              <div style={S.cardHeader}>
                <div style={S.logo}>USA</div>
                <div>
                  <div style={S.cardTitle}>Multimedia and Public Relations</div>
                  <div style={S.cardCompany}>University Student Assembly · Part-time</div>
                </div>
              </div>
              <div style={S.cardMeta}>Nov 2025 – Present · 6 mos · Skopje</div>
              <ul style={{ paddingLeft: "16px" }}>
                <li style={S.bullet}>Managing multimedia content and public relations for the University Student Assembly.</li>
              </ul>
            </div>

            <div style={{...S.card, ...(hoveredCard === 'exp3' ? S.cardHover : {})}} onMouseEnter={() => setHoveredCard('exp3')} onMouseLeave={() => setHoveredCard(null)}>
              <div style={S.cardHeader}>
                <div style={S.logo}>FINKI</div>
                <div>
                  <div style={S.cardTitle}>Faculty of Computer Science and Engineering</div>
                  <div style={S.cardCompany}>Computer Software Engineering · Skopje</div>
                </div>
              </div>
              <div style={S.cardMeta}>Sep 2023 – Present</div>
              <ul style={{ paddingLeft: "16px" }}>
                <li style={S.bullet}>Studying Computer Software Engineering at Ss. Cyril and Methodius University.</li>
                <li style={S.bullet}>Skills: JavaScript, HTML5, TypeScript, Python, and more.</li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" style={{ marginBottom: "64px" }}>
            <h2 style={S.sectionTitle}>Projects</h2>
            <div style={S.projGrid}>

              <div style={{...S.projCard, ...(hoveredCard === 'proj1' ? S.projCardHover : {})}} onMouseEnter={() => setHoveredCard('proj1')} onMouseLeave={() => setHoveredCard(null)}>
                <h3 style={S.projTitle}>MedTech App</h3>
                <p style={S.projDesc}>Medical technology application with a Java backend, React frontend, and Oracle SQL database.</p>
                <div style={S.tagsRow}>
                  {["React", "Java", "Oracle SQL"].map(t => <span key={t} style={{...S.tag, ...(hoveredCard === 'proj1' ? S.tagHover : {})}}>{t}</span>)}
                </div>
                <div style={S.linksRow}>
                  <a href="#" style={{...S.linkBtn, ...(hoveredCard === 'proj1' ? S.linkBtnHover : {})}}>GitHub</a>
                </div>
              </div>

            </div>
          </section>

          {/* SOFT SKILLS */}
          <section id="skills" style={{ marginBottom: "64px" }}>
            <h2 style={S.sectionTitle}>Soft Skills</h2>
            <div style={S.skillsGrid}>
              {softSkills.map((skill) => (
                <div 
                  key={skill.title}
                  style={{...S.skillCard, ...(hoveredCard === `skill-${skill.title}` ? S.skillCardHover : {})}}
                  onMouseEnter={() => setHoveredCard(`skill-${skill.title}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={S.skillIcon}>
                    <Image 
                      src={`/Icons/${skill.icon}`} 
                      alt={skill.title}
                      width={60}
                      height={60}
                      style={{ width: "100%", height: "100%", objectFit: "contain", filter: isDark ? "brightness(0) invert(1)" : "none" }}
                    />
                  </div>
                  <h3 style={S.skillTitle}>{skill.title}</h3>
                  <p style={S.skillDesc}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TECH STACK */}
          <section style={{ marginBottom: "64px" }}>
            <h2 style={S.sectionTitle}>Tech Stack</h2>
            {[
              { label: "Languages",      items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "SQL"] },
              { label: "Frontend",       items: ["React", "Next.js", "TailwindCSS", "Bootstrap", "HTML/CSS"] },
              { label: "Backend & APIs", items: ["Node.js", ".NET", "Spring Boot", "REST APIs"] },
              { label: "Data & ML",      items: ["NumPy", "Pandas", "Neural Networks"] },
              { label: "Databases",      items: ["PostgreSQL", "MySQL", "Oracle SQL"] },
              { label: "Cloud & Tools",  items: ["Microsoft Azure", "Docker", "Vercel", "Git/GitHub", "Judge0", "VS Code"] },
            ].map(group => (
              <div key={group.label} style={S.stackGroup}>
                <div style={S.stackLabel}>{group.label}</div>
                <div style={S.stackBadges}>
                  {group.items.map(item => <span key={item} style={{...S.badge, ...(hoveredCard === `badge-${item}` ? S.badgeHover : {})}} onMouseEnter={() => setHoveredCard(`badge-${item}`)} onMouseLeave={() => setHoveredCard(null)}>{item}</span>)}
                </div>
              </div>
            ))}
          </section>

          {/* FOOTER */}
          <footer style={S.footer}>
            © 2025 Stefan Perovski · All rights reserved.
          </footer>

        </div>
      </main>
    </>
  );
}
