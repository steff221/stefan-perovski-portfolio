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
`;

const S = {
  page: { background: "#060d1f", minHeight: "100vh", color: "#e2e8f0", fontFamily: "DM Sans, sans-serif", fontSize: "15px", lineHeight: "1.7" },
  wrap: { maxWidth: "720px", margin: "0 auto", padding: "0 20px 80px" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0 18px", borderBottom: "0.5px solid #1e3a6e", marginBottom: "60px", animation: "slideInLeft 0.6s ease-out" },
  navName: { fontFamily: "DM Serif Display, serif", fontSize: "17px", color: "#e2e8f0" },
  navLinks: { display: "flex", gap: "24px" },
  navLink: { fontSize: "13px", color: "#7a9cc8", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.3s ease", cursor: "pointer" },
  navLinkHover: { color: "#60a5fa" },
  hero: { display: "flex", gap: "32px", alignItems: "flex-start", marginBottom: "72px", animation: "fadeIn 0.8s ease-out" },
  avatar: { width: "140px", height: "140px", borderRadius: "50%", border: "2px solid #1e3a6e", flexShrink: 0, overflow: "hidden" as const, transition: "transform 0.3s ease, box-shadow 0.3s ease" },
  avatarHover: { transform: "scale(1.05)", boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)" },
  h1: { fontFamily: "DM Serif Display, serif", fontSize: "30px", fontWeight: 400, marginBottom: "4px", lineHeight: "1.2", color: "#e2e8f0" },
  subtitle: { fontSize: "13px", color: "#60a5fa", marginBottom: "12px" },
  bio: { color: "#7a9cc8", fontSize: "14px", maxWidth: "460px", marginBottom: "20px", lineHeight: "1.7", animation: "typing 2s ease-out, blink 0.7s infinite" },
  socialRow: { display: "flex", gap: "10px" },
  socialBtn: { fontSize: "12px", padding: "6px 14px", border: "0.5px solid #1e3a6e", borderRadius: "20px", color: "#7a9cc8", textDecoration: "none", background: "#0d1b35", transition: "all 0.3s ease", cursor: "pointer" },
  socialBtnHover: { borderColor: "#60a5fa", color: "#60a5fa", boxShadow: "0 0 12px rgba(96, 165, 250, 0.3)" },
  sectionTitle: { fontFamily: "DM Serif Display, serif", fontSize: "22px", fontWeight: 400, color: "#e2e8f0", marginBottom: "28px", paddingBottom: "12px", borderBottom: "0.5px solid #1e3a6e", animation: "slideInLeft 0.7s ease-out" },
  card: { background: "#112040", border: "0.5px solid #1e3a6e", borderRadius: "12px", padding: "20px 22px", marginBottom: "16px", transition: "all 0.3s ease", animation: "fadeIn 0.6s ease-out" },
  cardHover: { borderColor: "#60a5fa", boxShadow: "0 0 20px rgba(96, 165, 250, 0.15)", transform: "translateY(-2px)" },
  cardHeader: { display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" },
  logo: { width: "38px", height: "38px", borderRadius: "8px", background: "#0d1b35", border: "0.5px solid #1e3a6e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 500, color: "#60a5fa", flexShrink: 0, overflow: "hidden" as const },
  cardTitle: { fontSize: "15px", fontWeight: 500, color: "#e2e8f0" },
  cardCompany: { fontSize: "13px", color: "#60a5fa" },
  cardMeta: { fontSize: "12px", color: "#7a9cc8", marginBottom: "10px" },
  bullet: { fontSize: "13px", color: "#7a9cc8", marginBottom: "4px" },
  projGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
  projCard: { background: "#112040", border: "0.5px solid #1e3a6e", borderRadius: "12px", padding: "18px", transition: "all 0.3s ease", animation: "fadeIn 0.6s ease-out" },
  projCardHover: { borderColor: "#60a5fa", boxShadow: "0 0 20px rgba(96, 165, 250, 0.15)", transform: "translateY(-4px)" },
  projTitle: { fontSize: "13px", fontWeight: 500, color: "#e2e8f0", marginBottom: "5px" },
  projDesc: { fontSize: "12px", color: "#7a9cc8", marginBottom: "10px", lineHeight: "1.5" },
  tagsRow: { display: "flex", flexWrap: "wrap" as const, gap: "5px", marginBottom: "10px" },
  tag: { fontSize: "10px", padding: "3px 8px", background: "rgba(59,130,246,0.1)", border: "0.5px solid rgba(59,130,246,0.3)", borderRadius: "20px", color: "#60a5fa", transition: "all 0.2s ease" },
  tagHover: { background: "rgba(59,130,246,0.2)", borderColor: "rgba(96, 165, 250, 0.6)" },
  linksRow: { display: "flex", gap: "8px" },
  linkBtn: { fontSize: "11px", color: "#7a9cc8", textDecoration: "none", padding: "4px 10px", border: "0.5px solid #1e3a6e", borderRadius: "6px", transition: "all 0.2s ease" },
  linkBtnHover: { borderColor: "#60a5fa", color: "#60a5fa" },
  stackGroup: { marginBottom: "18px", animation: "fadeIn 0.6s ease-out" },
  stackLabel: { fontSize: "12px", color: "#7a9cc8", letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "8px" },
  stackBadges: { display: "flex", flexWrap: "wrap" as const, gap: "6px" },
  badge: { fontSize: "12px", padding: "5px 12px", background: "#112040", border: "0.5px solid #1e3a6e", borderRadius: "6px", color: "#e2e8f0", transition: "all 0.2s ease" },
  badgeHover: { borderColor: "#60a5fa", color: "#60a5fa", boxShadow: "0 0 8px rgba(96, 165, 250, 0.2)" },
  footer: { textAlign: "center" as const, fontSize: "12px", color: "#7a9cc8", paddingTop: "24px", borderTop: "0.5px solid #1e3a6e" },
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = React.useState<string | null>(null);
  
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
            </div>
          </nav>

          {/* HERO */}
          <section id="about" style={S.hero}>
            <div style={{...S.avatar, ...(hoveredBtn === 'avatar' ? S.avatarHover : {})}} onMouseEnter={() => setHoveredBtn('avatar')} onMouseLeave={() => setHoveredBtn(null)}>
              <Image src="/pfp.jpg" alt="Stefan Perovski" width={180} height={180} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h1 style={S.h1}>Hi, I&apos;m Stefan Perovski</h1>
              <p style={S.subtitle}>Chair of Digitalization · CS Student · Builder</p>
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
