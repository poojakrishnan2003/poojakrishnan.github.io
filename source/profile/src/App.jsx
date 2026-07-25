import React from "react";

function SkillBar({ title, value }) {
  return (
    <div className="skill-item">
      <div className="skill-head">
        <span>{title}</span>
        <span>{value}%</span>
      </div>

      <div className="progress">
        <span style={{ width: `${value}%` }}></span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            Pooja<span className="gradient">.</span>
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="container hero-content">

          <div>

            <h1>
              Hello,
              <br />
              I'm
              <span className="gradient">
                {" "}Pooja Krishnan S
              </span>
            </h1>

            <h2>
              Information Technology Student
              <br />
              & Software Developer
            </h2>

            <p>

              Passionate Information Technology student with
              experience in full-stack web development,
              mobile application development, cybersecurity,
              and robotics. Enthusiastic about creating
              innovative software solutions while continuously
              learning emerging technologies.

            </p>

            <div className="hero-buttons">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="btn secondary"
              >
                Contact Me
              </a>

            </div>

          </div>

          <div className="profile-card">


            <img
                src="/profile.jpeg"
                alt="Pooja Krishnan"
                className="profile-image"
            />

            

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about">

        <div className="container">

          <h2 className="title">
            About <span className="gradient">Me</span>
          </h2>

          <div className="glass about-card">

            <p>
              I am an Information Technology undergraduate who
              enjoys building responsive web applications,
              developing mobile solutions, and exploring
              cybersecurity concepts. Through internships,
              academic projects, and continuous learning,
              I have developed strong problem-solving,
              teamwork, and software development skills.
            </p>

          </div>

        </div>

      </section>
            {/* ================= SKILLS ================= */}

<section id="skills">

  <div className="container">

    <h2 className="title">
      Technical <span className="gradient">Skills</span>
    </h2>


    <div className="skills-grid">


      <div className="glass skill-card">

        <div className="skill-icon">💻</div>

        <h3>Programming</h3>

        <div className="skill-tags">
          <span className="tag">Python</span>
          <span className="tag">Java</span>
          <span className="tag">C</span>
          <span className="tag">JavaScript</span>
          <span className="tag">SQL</span>
        </div>

      </div>



      <div className="glass skill-card">

        <div className="skill-icon">🌐</div>

        <h3>Frontend Development</h3>

        <div className="skill-tags">
          <span className="tag">React.js</span>
          <span className="tag">HTML5</span>
          <span className="tag">CSS3</span>
          <span className="tag">Flutter</span>
        </div>

      </div>




      <div className="glass skill-card">

        <div className="skill-icon">⚙️</div>

        <h3>Backend Development</h3>

        <div className="skill-tags">
          <span className="tag">Node.js</span>
          <span className="tag">Express.js</span>
          <span className="tag">REST API</span>
        </div>

      </div>




      <div className="glass skill-card">

        <div className="skill-icon">🗄️</div>

        <h3>Database</h3>

        <div className="skill-tags">
          <span className="tag">MySQL</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Firebase</span>
        </div>

      </div>




      <div className="glass skill-card">

        <div className="skill-icon">🛠️</div>

        <h3>Tools</h3>

        <div className="skill-tags">
          <span className="tag">Git</span>
          <span className="tag">GitHub</span>
          <span className="tag">Postman</span>
          <span className="tag">VS Code</span>
          <span className="tag">Figma</span>
        </div>

      </div>




      <div className="glass skill-card">

        <div className="skill-icon">🚀</div>

        <h3>Technologies</h3>

        <div className="skill-tags">
          <span className="tag">Cybersecurity</span>
          <span className="tag">Robotics</span>
          <span className="tag">Web Development</span>
          <span className="tag">Mobile Development</span>
        </div>

      </div>


    </div>


  </div>


</section>
            {/* ================= PROJECTS ================= */}

      <section id="projects">

        <div className="container">

          <h2 className="title">
            Featured <span className="gradient">Projects</span>
          </h2>

          <div className="project-grid">

            <div className="project-card glow">

              <h3>Roamly – Travel Planner</h3>

              <p>
                Developed a travel planning application that helps
                users organize trips, discover destinations,
                and manage travel information through a modern
                responsive interface.
              </p>

              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">MongoDB</span>
              </div>

            </div>

            <div className="project-card glow">

              <h3>Care Sync</h3>

              <p>
                Built a healthcare application focused on
                improving communication and patient management
                with an intuitive user interface and secure
                backend integration.
              </p>

              <div className="project-tags">
                <span className="tag">Flutter</span>
                <span className="tag">Firebase</span>
                <span className="tag">Mobile App</span>
              </div>

            </div>

            <div className="project-card glow">

              <h3>Employment Management System</h3>

              <p>
                Designed a web-based employment management
                platform supporting authentication,
                employee management, CRUD operations,
                and efficient database handling.
              </p>

              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">MySQL</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education">

        <div className="container">

          <h2 className="title">
            <span className="gradient">
              Education
            </span>
          </h2>

          <div className="glass education-card">

            <h3>
              B.Tech in Information Technology
            </h3>

            <p>
              Cochin University of Science and Technology (CUSAT)
            </p>

            <p>
              2023 – 2027
            </p>

          </div>

          <div className="glass education-card">

            <h3>
              Higher Secondary Education
            </h3>

            <p>
              Completed Higher Secondary with a strong
              academic foundation in Science.
            </p>

          </div>

        </div>

      </section>

      {/* ================= LANGUAGES ================= */}

      <section id="languages">

        <div className="container">

          <h2 className="title">
            <span className="gradient">
              Languages
            </span>
          </h2>

          <div className="language-grid">

            <div className="glass language-card">
              <h3>English</h3>
              <p>Professional Working Proficiency</p>
            </div>

            <div className="glass language-card">
              <h3>Malayalam</h3>
              <p>Native Proficiency</p>
            </div>

            <div className="glass language-card">
              <h3>Hindi</h3>
              <p>Conversational Proficiency</p>
            </div>

          </div>

        </div>

      </section>
            {/* ================= CONTACT ================= */}

      <section id="contact">

        <div className="container">

          <h2 className="title">
            Contact <span className="gradient">Me</span>
          </h2>

          <div className="contact-grid">

            <div className="glass contact-card">

              <h3>📧 Email</h3>

              <a href="mailto:poojakrishnan282003@gmail.com">
                poojakrishnan282003@gmail.com
              </a>

            </div>

            <a
  href="tel:+918281452280"
  className="btn primary"
>
  📞 Call Me
</a>

            <div className="glass contact-card">

              <h3>📍 Location</h3>

              <p>Kerala, India</p>

            </div>

          </div>

          <div className="social-buttons">

            <a
              href="https://github.com/poojakrishnan2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pooja-krishnan-bb975b358/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Resume
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h3>Pooja Krishnan</h3>

        <p>
          Information Technology Student • Software Developer •
          Web & Mobile Application Enthusiast
        </p>

        <br />

        <p>
          © 2026 Pooja Krishnan.
        </p>

      </footer>

    </>
  );
}