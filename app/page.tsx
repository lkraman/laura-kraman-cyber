import {
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Terminal,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'APT38 Threat Assessment',
    tag: 'MS coursework',
    description:
      'Assessed two DPRK state-sponsored APT38 campaigns targeting the financial sector, structured with the Cyber Kill Chain and MITRE ATT&CK. Extracted and defanged IOCs, identified five priority IOAs, and modeled a 55.6% relative risk reduction from recommended controls.',
    tools: ['MITRE ATT&CK', 'IOC / IOA analysis', 'Risk modeling'],
  },
  {
    number: '02',
    title: 'Adversary Profiling Brief',
    tag: 'MS coursework',
    description:
      'Mapped 20 techniques across Scattered Spider and APT29 and produced executive threat profiles: who they are, how they operate, what they\'d cost the business, and which mitigations matter first.',
    tools: ['Threat actor profiling', 'ATT&CK', 'Executive briefing'],
  },
  {
    number: '03',
    title: 'Vulnerability Assessment',
    tag: 'Vulnerability assessment',
    description:
      'Research on the pretext lifecycle: spear phishing, vishing, pretexting, and a counterfeit login portal. Shows how attackers use open-source reconnaissance to build credible lures, and the verification steps and phishing-resistant controls that defeat them.',
    tools: ['OSINT reconnaissance', 'Social engineering', 'FIDO2 / passkeys'],
    link: 'https://github.com/lkraman/laura-kraman-cyber/blob/main/projects/vulnerability-assessment.pdf',
  },
  {
    number: '04',
    title: 'Reconnaissance Lab',
    tag: 'Hands-on lab',
    description:
      'Built and maintain a Kali Linux lab for active and passive reconnaissance: network discovery and mapping with Nmap, and web application testing with Burp Suite.',
    tools: ['Kali Linux', 'Nmap', 'Burp Suite'],
  },
  {
    number: '05',
    title: 'TryHackMe Training',
    tag: 'Hands-on training',
    description:
      'Completed modules across Metasploit, OWASP Top 10, Pentesting Principles, Burp Suite, Linux, and Security Awareness, building an understanding of the attacker\'s side of the problem.',
    tools: ['Metasploit', 'OWASP Top 10', 'Linux'],
  },
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
          <a href="#work">Casework</a>
          <a href="#experience">Track record</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="status-pill" href="mailto:Laurakraman01@gmail.com">
          <span className="status-dot" /> Seeking CTI &amp; OSINT analyst roles, government and private sector
        </a>
      </header>

      <div className="content-grid" id="top">
        <div className="main-column">
          <section className="hero-section">
            <p className="eyebrow"><span>01</span> Intelligence portfolio</p>
            <p className="hero-eyebrow">Cyber Threat Intelligence · OSINT · Reconnaissance</p>
            <h1>From search<br /><em>to signal.</em></h1>
            <p className="hero-copy">
              Laura Kraman is a cyber threat intelligence candidate who spent seven years learning how the open web is built, indexed, and searched, and now uses that knowledge to collect, verify, and analyze it.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="https://github.com/lkraman/laura-kraman-cyber/blob/main/resume.pdf" target="_blank" rel="noreferrer">Download résumé <ArrowUpRight size={16} /></a>
              <a className="text-action" href="#work">View casework <ChevronRight size={15} /></a>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <span className="graph-edge edge-one" />
              <span className="graph-edge edge-two" />
              <span className="graph-edge edge-three" />
              <span className="graph-edge edge-four" />
              <span className="graph-edge edge-five" />
              <span className="graph-node node-one" />
              <span className="graph-node node-two" />
              <span className="graph-node node-three" />
              <span className="graph-node node-four" />
              <span className="graph-node node-five" />
              <span className="graph-node node-six" />
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> Wilmington, DE</span>
              <span><ShieldCheck size={14} /> U.S. citizen · clearance-eligible</span>
              <span><ShieldCheck size={14} /> Open to on-site, hybrid, or remote</span>
              <span><ShieldCheck size={14} /> MS Cybersecurity · 3.80 GPA</span>
              <span className="skill-tag">CompTIA Security+ (2026)</span>
            </div>
          </section>

          <section className="intro-section">
            <div>
              <SectionLabel>Profile</SectionLabel>
            </div>
            <div className="intro-copy">
              <p className="lead-copy">I turn open-source signals into decisions.</p>
              <p>I turn open-source signals into decisions, whether that decision is a mission priority or a security investment. I collect from the open web, evaluate what I find, and deliver finished analysis built for the reader: a threat assessment for an analyst, a bottom-line brief for an executive.</p>
              <p>Years in search and web systems taught me how public information is created, indexed, and surfaced, which is the foundation of open-source collection. I now apply that to reconnaissance, adversary analysis, and vulnerability assessment.</p>
              <p>At Deloitte, I brief senior leadership on complex findings, bottom line up front. In my graduate work, I take adversary tradecraft and turn it into assessed risk and prioritized mitigations.</p>
            </div>
          </section>

          <section className="bring-section">
            <div><SectionLabel>What I bring</SectionLabel></div>
            <div className="bring-grid">
              <article><span>01</span><h3>Collection</h3><p>7+ years in how the open web is built, indexed, and searched.</p></article>
              <article><span>02</span><h3>Analysis</h3><p>Adversary tradecraft mapped to MITRE ATT&amp;CK and the Cyber Kill Chain, with assessed risk and mitigations.</p></article>
              <article><span>03</span><h3>Communication</h3><p>I brief C-suite leadership at Deloitte today, bottom line up front.</p></article>
            </div>
          </section>

          <section className="process-section">
            <SectionLabel>How I work</SectionLabel>
            <h2>From question<br /><em>to decision.</em></h2>
            <div className="process-grid">
              <article><span>01</span><h3>Requirements</h3><p>Start with the question that matters to the decision-maker.</p></article>
              <article><span>02</span><h3>Collection</h3><p>Gather from open sources efficiently, using years of experience in how the web is indexed and searched.</p></article>
              <article><span>03</span><h3>Evaluation</h3><p>Weigh source reliability and corroborate before drawing conclusions.</p></article>
              <article><span>04</span><h3>Analysis</h3><p>Map adversary behavior to ATT&amp;CK and the Kill Chain to assess intent, capability, and risk.</p></article>
              <article><span>05</span><h3>Dissemination</h3><p>Deliver bottom line up front, from technical IOCs to C-suite briefings.</p></article>
            </div>
          </section>

          <section className="skills-section">
            <SectionLabel>Skills</SectionLabel>
            <div className="skills-list">{['OSINT', 'Cyber threat intelligence', 'Intelligence cycle', 'Threat actor profiling', 'Nation-state & cybercrime actors', 'MITRE ATT&CK', 'Cyber Kill Chain', 'IOC / IOA analysis', 'Risk assessment', 'Reconnaissance', 'Nmap', 'Burp Suite', 'Kali Linux', 'Metasploit', 'Python', 'Executive briefing', 'CompTIA Security+'].map((skill) => <span key={skill}>{skill}</span>)}</div>
          </section>

          <section className="work-section" id="work">
            <div className="section-heading-row">
              <div><SectionLabel>Casework</SectionLabel><h2>Analysis in practice.</h2></div>
              <span className="section-count">05 / 05</span>
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
                  {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Read ${project.title}`}>Read the write-up <ExternalLink size={15} /></a> : <div className="project-mark"><Terminal size={18} /></div>}
                </article>
              ))}
            </div>
          </section>

          <section className="experience-section" id="experience">
            <div><SectionLabel>Track record</SectionLabel></div>
            <div className="timeline">
              <div className="timeline-item current"><span className="timeline-year">2022—now</span><div><h3>Deloitte US <small>Search & AI Strategist</small></h3><p>Briefs C-suite and senior leadership, turning complex search and AI findings into clear recommendations. Leads enterprise search and AI methodology. Ran a major website migration that delivered 10% organic traffic growth in the first 30 days.</p></div></div>
              <div className="timeline-item"><span className="timeline-year">2020—2022</span><div><h3>Quartz Network <small>SEO Specialist</small></h3><p>Validated data integrity across API and database migration projects, partnered with developers, and turned public-source research into stakeholder recommendations.</p></div></div>
              <div className="timeline-item"><span className="timeline-year">2018—2020</span><div><h3>Web development <small>MSquared · Whittens</small></h3><p>Built web applications, analyzed performance data, and improved organic traffic by 350% through technical optimization and information architecture.</p></div></div>
              <div className="timeline-item"><span className="timeline-year">2017—2018</span><div><h3>Law Offices of Amanda Brinton <small>Paralegal / Document Review</small></h3><p>Reviewed, indexed, and analyzed case documents to evidentiary standards, supported discovery, and turned research into recommendations.</p></div></div>
              <div className="timeline-item"><span className="timeline-year">2009—2017</span><div><h3>E-volve Fitness <small>Founder & Owner</small></h3><p>Founded and grew a mobile fitness business into a brick-and-mortar studio, managing staff, finances, client relationships, and daily operations.</p></div></div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <SectionLabel>Get in touch</SectionLabel>
            <h2>Good intelligence<br /><em>starts with a question.</em></h2>
            <p className="contact-copy">If you&apos;re building a threat intelligence or OSINT capability, in an agency, a contractor, or a security team, I&apos;d like to hear what you&apos;re working on.</p>
            <div className="contact-actions">
              <a className="email-link" href="mailto:Laurakraman01@gmail.com">Email me <ArrowUpRight size={20} /></a>
              <a className="contact-link" href="https://linkedin.com/in/laurakraman" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>
              <a className="contact-link" href="https://github.com/lkraman/laura-kraman-cyber/blob/main/resume.pdf" target="_blank" rel="noreferrer">Résumé (PDF) <ExternalLink size={13} /></a>
            </div>
            <div className="contact-footer"><span>© 2026 Laura Kraman</span><a href="https://linkedin.com/in/laurakraman" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a></div>
          </section>
        </div>

      </div>
    </main>
  )
}

function IntelField({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link?: string }) {
  const content = link ? <a href={link} target="_blank" rel="noreferrer">{value} <ExternalLink size={11} /></a> : value
  return <div className="intel-field"><div className="field-icon">{icon}</div><div><span>{label}</span><strong>{content}</strong></div></div>
}
