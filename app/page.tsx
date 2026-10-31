import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  ChevronRight,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Network,
  Phone,
  Search,
  ShieldCheck,
  Terminal,
  UserRound,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'APT38 Threat Assessment',
    tag: 'MS coursework',
    description:
      'Analyzed two North Korean APT38 campaigns against financial targets using the Cyber Kill Chain and MITRE ATT&CK. Identified defanged IOCs, five priority IOAs, and modeled a 55.6% relative risk reduction from recommended controls.',
    tools: ['MITRE ATT&CK', 'Python', 'Risk modeling'],
  },
  {
    number: '02',
    title: 'Adversary Mapping Briefing',
    tag: 'MS coursework',
    description:
      'Mapped 20 techniques across Scattered Spider and APT29, translating tradecraft into executive threat profiles, business impact statements, and mitigation priorities.',
    tools: ['Threat intelligence', 'ATT&CK', 'Executive briefing'],
  },
  {
    number: '03',
    title: 'Phishing Scenario & Lab',
    tag: 'Vulnerability assessment',
    description:
      'A research write-up on a layered phishing attack combining spear phishing, pretexting, voice phishing, and a counterfeit login portal—plus the verification processes and phishing-resistant controls that disrupt it.',
    tools: ['OSINT', 'Social engineering', 'FIDO2 / passkeys'],
    link: 'https://blobs.vusercontent.net/blob/Phishing%20Scenerio%20and%20lab.docx-VO6l77vj3gWv7afYiDLpFzBXnTkn0E.pdf',
  },
  {
    number: '04',
    title: 'Kali Linux Home Lab',
    tag: 'Hands-on lab',
    description:
      'Built and maintain a personal Kali Linux lab for reconnaissance, network scanning and mapping with Nmap, and web application testing with Burp Suite.',
    tools: ['Kali Linux', 'Nmap', 'Burp Suite'],
  },
]

const skills = [
  'Reconnaissance & OSINT',
  'Network mapping & scanning',
  'Web application testing',
  'Threat actor profiling',
  'IOC / IOA analysis',
  'Python & data analysis',
  'MITRE ATT&CK',
  'AI search vulnerabilities',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span className="label-line" /> {children}
    </p>
  )
}

export default function Page() {
  return (
    <main className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Laura Kraman home">
          LK<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="status-pill" href="mailto:Laurakraman01@gmail.com">
          <span className="status-dot" /> Open to cyber internships
        </a>
      </header>

      <div className="content-grid" id="top">
        <div className="main-column">
          <section className="hero-section">
            <p className="eyebrow"><span>01</span> Intelligence portfolio</p>
            <h1>From SEO<br /><em>to intelligence.</em></h1>
            <p className="hero-copy">
              Laura Kraman is a cybersecurity candidate with a background in web systems, enterprise search, AI strategy, and open-source collection.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">Explore the work <ArrowUpRight size={16} /></a>
              <a className="text-action" href="mailto:Laurakraman01@gmail.com">Start a conversation <ChevronRight size={15} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> Wilmington, DE</span>
              <span><ShieldCheck size={14} /> MS Cybersecurity · 3.80 GPA</span>
            </div>
          </section>

          <section className="intro-section" id="experience">
            <div>
              <SectionLabel>Profile</SectionLabel>
            </div>
            <div className="intro-copy">
              <p className="lead-copy">I trace how information moves—from a public signal to a business decision.</p>
              <p>My work sits at the intersection of technical systems and human context. After 7+ years building and troubleshooting web platforms, I now apply that same curiosity to reconnaissance, threat intelligence, and vulnerability assessment.</p>
              <p>At Deloitte, I translate complex search and AI findings for senior leadership. In my graduate work, I translate adversary tradecraft into clear risk and mitigation priorities.</p>
            </div>
          </section>

          <section className="work-section" id="work">
            <div className="section-heading-row">
              <div><SectionLabel>Selected work</SectionLabel><h2>Research in practice.</h2></div>
              <span className="section-count">04 / 04</span>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-body">
                    <div className="project-title-row"><h3>{project.title}</h3><span>{project.tag}</span></div>
                    <p>{project.description}</p>
                    <div className="tool-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                  </div>
                  {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Read ${project.title}`}><ExternalLink size={17} /></a> : <div className="project-mark"><Terminal size={18} /></div>}
                </article>
              ))}
            </div>
          </section>

          <section className="experience-section">
            <div><SectionLabel>Now / before</SectionLabel></div>
            <div className="timeline">
              <div className="timeline-item current"><span className="timeline-year">2022—now</span><div><h3>Deloitte US <small>Search & AI Strategist</small></h3><p>Advising C-suite and senior leadership while leading enterprise search and AI methodology. Managed a major website migration that delivered 10% organic traffic growth in the first 30 days.</p></div></div>
              <div className="timeline-item"><span className="timeline-year">2020—2022</span><div><h3>Quartz Network <small>SEO Specialist</small></h3><p>Validated data integrity across API and database migration projects, partnered with developers, and turned public-source research into stakeholder recommendations.</p></div></div>
              <div className="timeline-item"><span className="timeline-year">2018—2020</span><div><h3>Web development <small>MSquared · Whittens</small></h3><p>Built full-stack applications with React, Node.js, and PostgreSQL. Increased organic traffic by 350% through technical optimization and information architecture.</p></div></div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <SectionLabel>Get in touch</SectionLabel>
            <h2>Good intelligence<br /><em>starts with a question.</em></h2>
            <a className="email-link" href="mailto:Laurakraman01@gmail.com">Laurakraman01@gmail.com <ArrowUpRight size={20} /></a>
            <div className="contact-footer"><span>© 2026 Laura Kraman</span><a href="https://linkedin.com/in/laurakraman" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a></div>
          </section>
        </div>

        <aside className="intel-aside" aria-label="Lampyre enrichment panel">
          <div className="aside-inner">
            <div className="aside-heading"><div><span className="live-indicator"><span /> LIVE CONTEXT</span><h2>Lampyre<br /><em>enrichment</em></h2></div><Network size={22} /></div>
            <p className="aside-note">Public intelligence context is shown here when the Lampyre connector is available.</p>
            <div className="connector-state"><span className="state-icon"><Search size={14} /></span><div><strong>MCP endpoint noted</strong><span>Awaiting authorized source data</span></div><span className="state-dot" /></div>
            <a className="mcp-endpoint" href="https://account.lampyre.io/api/v2/mcp" target="_blank" rel="noreferrer"><span>account.lampyre.io/api/v2/mcp</span><ExternalLink size={12} /></a>
            <div className="intel-fields">
              <IntelField icon={<Globe2 size={15} />} label="IP address" value="Not available" />
              <IntelField icon={<UserRound size={15} />} label="Name" value="Laura Kraman" />
              <IntelField icon={<Phone size={15} />} label="Phone" value="302-233-6133" />
              <IntelField icon={<Mail size={15} />} label="Email" value="Laurakraman01@gmail.com" />
              <IntelField icon={<AtSign size={15} />} label="Username" value="Laurakraman01" />
              <IntelField icon={<BriefcaseBusiness size={15} />} label="Work" value="Deloitte US · Search & AI Strategist" />
              <IntelField icon={<Globe2 size={15} />} label="Website / social" value="linkedin.com/in/laurakraman" link="https://linkedin.com/in/laurakraman" />
            </div>
            <div className="aside-footnote"><span className="lock-mark">⌁</span><span>Only public, user-authorized details should appear here. No IP address or external profiles are invented.</span></div>
          </div>
        </aside>
      </div>
    </main>
  )
}

function IntelField({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link?: string }) {
  const content = link ? <a href={link} target="_blank" rel="noreferrer">{value} <ExternalLink size={11} /></a> : value
  return <div className="intel-field"><div className="field-icon">{icon}</div><div><span>{label}</span><strong>{content}</strong></div></div>
}
