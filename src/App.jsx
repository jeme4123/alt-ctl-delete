
import { useState } from 'react'
import './App.css'

// ======================================
// COMPANY SERVICES
// ======================================

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Professional websites designed to help your business grow.',
    features: [
      'Custom Business Websites',
      'Website Redesigns',
      'Hosting, Domains & Maintenance',
    ],
    link: '#contact',
  },
  {
    icon: '⚙️',
    title: 'IT Services',
    description:
      'Reliable technology support that keeps your business connected.',
    features: [
      'Workstation Setup & Support',
      'Microsoft 365 Administration',
      'Network & Device Management',
    ],
    link: '#contact',
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    description:
      'Practical security solutions to protect your business.',
    features: [
      'Security Assessments',
      'Endpoint Protection & Hardening',
      'Security Awareness Training',
    ],
    link: '#contact',
  },
]

// ======================================
// COMPANY VALUES
// ======================================

const values = [
  {
    icon: '🛡️',
    title: 'Integrity',
    description: 'Honest and dependable service.',
  },
  {
    icon: '⚙️',
    title: 'Innovation',
    description: 'Creative solutions to complex problems.',
  },
  {
    icon: '🤝',
    title: 'Commitment',
    description: 'Focused on customer success.',
  },
]

// ======================================
// PORTFOLIO PROJECTS
// ======================================

const projects = [
  {
    id: 1,
    icon: '🌐',
    category: 'WEB DEVELOPMENT',
    title: 'Ministry in Motion',
    description:
      'A nonprofit website project featuring program information, events, community engagement, and contact sections.',
    type: 'Website Project',
    link: '#contact',
    action: 'Ask About This Project',
  },
  {
    id: 2,
    icon: '🖥️',
    category: 'IT INFRASTRUCTURE',
    title: 'Systems Administration Lab',
    description:
      'Hands-on technical projects involving Windows Server, network configuration, virtualization, and infrastructure management.',
    type: 'Technical Lab',
    link: '#contact',
    action: 'Discuss Our IT Services',
  },
  {
    id: 3,
    icon: '🛡️',
    category: 'CYBERSECURITY',
    title: 'Security & Digital Forensics',
    description:
      'Cybersecurity lab projects covering file integrity, network analysis, security configuration, and digital forensics.',
    type: 'Security Lab',
    link: '#contact',
    action: 'Discuss Security Services',
  },
]

// ======================================
// MAIN APPLICATION
// ======================================

function App() {

  // CONTACT FORM STATE
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState('')

  //MOBILE NAVIGATION STATE
  const [menuOpen, setMenuOpen] = useState(false)

  // UPDATE FORM VALUES
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setFormStatus('')
  }

  // FORM DEMONSTRATION
const handleSubmit = async (event) => {
  event.preventDefault()

  setFormStatus('Sending your request...')

  try {
    const response = await fetch(
      'https://formspree.io/f/maeoovdo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )

    if (response.ok) {
      setFormStatus(
        'Success! Your consultation request has been sent.'
      )

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    } else {
      setFormStatus(
        'Something went wrong. Please try again.'
      )
    }
  } catch (error) {
    console.error('Form submission error:', error)

    setFormStatus(
      'Unable to send your request. Please try again later.'
    )
  }
}

  return (
    <div className="app">

      {/* ==================================
          HEADER / NAVIGATION
      ================================== */}

      
{/* HEADER / NAVIGATION */}
  <header className="header">

    <div className="brand">
      <a href="#home" className="brand-logo-link">
        <img
          src="/images/acd-logo.png"
          alt="ALT-CTL-DELETE Logo"
          className="logo"
        />
      </a>

      <span className="brand-divider"></span>

      <span className="brand-text">
        IT Solutions & Cybersecurity
      </span>
    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      className="menu-toggle"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      aria-controls="main-navigation"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span>{menuOpen ? '✕' : '☰'}</span>
    </button>

    {/* NAVIGATION LINKS */}
    <nav
      id="main-navigation"
      className={`nav ${menuOpen ? 'nav-open' : ''}`}
      aria-label="Main navigation"
    >
      <a href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </a>

      <a href="#about" onClick={() => setMenuOpen(false)}>
        About Us
      </a>

      <a href="#services" onClick={() => setMenuOpen(false)}>
        Services
      </a>

      <a href="#work" onClick={() => setMenuOpen(false)}>
        Our Work
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
    </nav>

    {/* CONSULTATION BUTTON */}
    <a href="#contact" className="consult-btn">
      Get a Free Consultation
    </a>

  </header>


      {/* ==================================
          MAIN CONTENT
      ================================== */}

      <main id="home">

        {/* HERO SECTION */}
        <section className="hero">

          <div className="hero-content">

            <div className="hero-eyebrow">
              WEB DEVELOPMENT
              <span>|</span>
              IT SERVICES
              <span>|</span>
              CYBERSECURITY
            </div>

            <h1>
              TECHNOLOGY SOLUTIONS
              <span>
                FOR A SECURE, CONNECTED BUSINESS.
              </span>
            </h1>

            <div className="hero-line"></div>

            <h2>
              There Is More Than One Way to Solve a Problem.
            </h2>

            <p>
              ALT-CTL-DELETE (A_CD) provides professional
              web development, reliable IT support, and
              practical cybersecurity solutions to keep
              your business online, productive, and protected.
            </p>

            <div className="hero-buttons">

              <a
                href="#contact"
                className="hero-btn primary-btn"
              >
                Get a Free Consultation →
              </a>

              <a
                href="#services"
                className="hero-btn secondary-btn"
              >
                Our Services →
              </a>

            </div>

          </div>

          <div
            className="hero-image"
            role="img"
            aria-label="Cybersecurity workstation"
          ></div>

        </section>

        {/* ==================================
            ABOUT US SECTION
        ================================== */}

        <section className="about-section" id="about">

          <div className="about-container">

            <div className="about-content">

              <span className="about-label">
                WHO WE ARE
              </span>

              <h2>
                Technology Expertise.
                <span> Practical Solutions.</span>
              </h2>

              <div className="about-line"></div>

              <p>
                ALT-CTL-DELETE (A_CD) is a veteran-owned
                technology business dedicated to helping
                organizations build, support, and secure
                their digital environments.
              </p>

              <p>
                We believe that every technology challenge
                has a solution. Through professional web
                development, dependable IT services,
                and practical cybersecurity solutions,
                we help businesses operate confidently
                in an increasingly digital world.
              </p>

              <p>
                Our approach combines technical expertise,
                attention to detail, and a commitment to
                understanding each client's unique needs.
              </p>

              <a href="#contact" className="about-btn">
                Work With Us →
              </a>

            </div>

            <div className="about-values">

              <h3>What Drives Us</h3>

              {values.map((value) => (
                <div
                  className="value-card"
                  key={value.title}
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>

                  <div className="value-details">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ==================================
            CORE SERVICES SECTION
        ================================== */}

        <section className="services-section" id="services">

          <div className="services-heading">

            <h2>Our Core Services</h2>

            <div className="services-line"></div>

            <p>
              End-to-end technology solutions to build,
              support, and protect your business.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service) => (
              <article
                className="service-card"
                key={service.title}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <ul className="service-features">

                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}

                </ul>

                <a
                  href={service.link}
                  className="service-link"
                >
                  Learn More →
                </a>

              </article>
            ))}

          </div>

        </section>

        {/* ==================================
            PORTFOLIO SECTION
        ================================== */}

        <section className="portfolio-section" id="work">

          <div className="portfolio-heading">

            <span className="portfolio-label">
              OUR PORTFOLIO
            </span>

            <h2>Our Work & Projects</h2>

            <div className="portfolio-line"></div>

            <p>
              Explore website development and technical
              project demonstrations that showcase our
              approach to technology solutions.
            </p>

          </div>

          <div className="portfolio-grid">

            {projects.map((project) => (
              <article
                className="portfolio-card"
                key={project.id}
              >

                <div className="portfolio-image">
                  <span className="portfolio-icon">
                    {project.icon}
                  </span>
                </div>

                <div className="portfolio-details">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <span className="project-type">
                    {project.type}
                  </span>

                  <a
                    href={project.link}
                    className="project-btn"
                  >
                    {project.action} →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* ==================================
            CONTACT SECTION
        ================================== */}

        <section className="contact-section" id="contact">

          <div className="contact-heading">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>Let's Work Together</h2>

            <div className="contact-line"></div>

            <p>
              Have a website project, IT challenge, or
              cybersecurity concern? Tell us what you
              need and let's discuss a solution.
            </p>

          </div>

          <div className="contact-container">

            {/* CONTACT INFORMATION */}
            <div className="contact-info">

              <h3>Start a Conversation</h3>

              <p>
                From custom websites to technology
                support and security solutions,
                ALT-CTL-DELETE is ready to discuss
                your business technology needs.
              </p>

              <div className="contact-info-card">
                <span className="contact-info-icon">📍</span>

                <div>
                  <h4>Service Area</h4>
                  <p>Metro Detroit, Michigan</p>
                  <p>Remote consultations available</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-icon">💻</span>

                <div>
                  <h4>Technology Solutions</h4>
                  <p>Web Development</p>
                  <p>IT Services & Cybersecurity</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-icon">🤝</span>

                <div>
                  <h4>Free Consultation</h4>
                  <p>
                    Tell us about your project
                    using the contact form.
                  </p>
                </div>
              </div>

            </div>

            {/* CONSULTATION FORM */}
            <div className="contact-form-wrapper">

              <h3>Request a Free Consultation</h3>

              <p className="form-intro">
                Complete the information below.
                Required fields are marked with *.
              </p>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      autoComplete="name"
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="(555) 555-5555"
                      autoComplete="tel"
                      maxLength={30}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">
                      Company Name
                    </label>

                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Your business name"
                      autoComplete="organization"
                      maxLength={120}
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="form-group">

                  <label htmlFor="service">
                    Service Needed *
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="IT Services">
                      IT Services
                    </option>

                    <option value="Cybersecurity">
                      Cybersecurity
                    </option>

                    <option value="Multiple Services">
                      Multiple Services
                    </option>

                    <option value="Other">
                      Other / Not Sure
                    </option>
                  </select>

                </div>

                <div className="form-group">

                  <label htmlFor="message">
                    Tell Us About Your Project *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Describe your project or technology challenge..."
                    maxLength={3000}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                <p className="form-notice">
                  Please don't include passwords,
                  financial account information,
                  or other sensitive data.
                </p>

                <button
                  type="submit"
                  className="form-submit-btn"
                >
                  Request Free Consulation →
                </button>

                {formStatus && (
                  <p
                    className="form-status"
                    role="status"
                  >
                    {formStatus}
                  </p>
                )}

              </form>

            </div>

          </div>

        </section>

      </main>

      {/* ==================================
          WEBSITE FOOTER
      ================================== */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-brand">
            <img
              src="/images/acd-logo.png"
              alt="ALT-CTL-DELETE"
              className="footer-logo"
            />

            <p>
              There Is More Than One Way
              to Solve a Problem.
            </p>
          </div>

          <div className="footer-links">

            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#contact">Contact</a>

          </div>

          <div className="footer-services">

            <h4>Our Services</h4>

            <a href="#services">Web Development</a>
            <a href="#services">IT Support</a>
            <a href="#services">Cybersecurity</a>

          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} ALT-CTL-DELETE.
            All Rights Reserved.
          </p>

          <p>
            IT Solutions & Cybersecurity
          </p>
        </div>

      </footer>

    </div>
  )
}

export default App
