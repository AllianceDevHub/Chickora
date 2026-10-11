import './App.css'

const stats = [
  { value: '36+', label: 'brands launched' },
  { value: '4.9/5', label: 'client satisfaction' },
  { value: '12k', label: 'monthly reach' },
]

const services = [
  {
    title: 'Brand Strategy',
    text: 'Positioning frameworks, customer insight, and launch plans that turn attention into revenue.',
    icon: '✦',
  },
  {
    title: 'Web Experiences',
    text: 'Fast, elegant websites designed to convert traffic into trust and action.',
    icon: '◎',
  },
  {
    title: 'Growth Marketing',
    text: 'Campaign systems and retention tactics built to sustain momentum after launch.',
    icon: '↗',
  },
]

const features = [
  'High-converting landing pages',
  'Clear messaging and design systems',
  'Content that speaks to your audience',
  'Launch support from strategy to scale',
]

const steps = [
  { number: '01', title: 'Discover', text: 'We align on goals, audience, and the story you want to tell.' },
  { number: '02', title: 'Design', text: 'We shape the visual direction and experience into a polished system.' },
  { number: '03', title: 'Launch', text: 'We deliver a clear, confident website that is ready to grow with you.' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand" aria-label="Chickora home">
          <span className="brand-mark">C</span>
          <span>Chickora</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#results">Results</a>
        </nav>

        <a href="#contact" className="button button-ghost">
          Book a call
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Digital presence, built to grow</p>
            <h1>Turn your next big idea into a brand people remember.</h1>
            <p className="lead">
              Chickora helps founders and teams sharpen their story, design a standout experience,
              and turn attention into measurable growth.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Get started</a>
              <a href="#services" className="button button-secondary">See services</a>
            </div>

            <div className="stats" id="results">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Summary panel">
            <div className="visual-card main-card">
              <span className="card-label">Launch sprint</span>
              <h2>Brand clarity</h2>
              <div className="mini-bars" aria-hidden="true">
                <span style={{ height: '42%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '88%' }} />
              </div>
            </div>

            <div className="visual-card float-card">
              <p>Conversion uplift</p>
              <strong>+178%</strong>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>Strategy and design that keeps momentum moving.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase">
          <div className="showcase-copy">
            <p className="eyebrow">Why teams choose us</p>
            <h2>Clear positioning, smarter content, stronger conversions.</h2>
          </div>

          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="process" id="process">
          <div className="section-heading">
            <p className="eyebrow">Our process</p>
            <h2>A simple path from idea to launch.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="cta" id="contact">
        <div>
          <p className="eyebrow">Let’s build something memorable</p>
          <h2>Ready to launch a stronger digital presence?</h2>
        </div>
        <a href="mailto:hello@chickora.com" className="button button-primary">
          hello@chickora.com
        </a>
      </footer>
    </div>
  )
}

export default App
