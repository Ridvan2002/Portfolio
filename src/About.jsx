import React from 'react';
import './styles/About.css';

function About() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className="about-section">
            <div className="about-content">
                <div className="about-summary">
                    <h2>About Me</h2>
                    <p>
                    I'm Ridvan Suleymanov, a Computer Science graduate with hands-on experience in full-stack development and a focus on building clean, scalable applications. From developing Android apps and REST APIs to deploying interactive features in production e-commerce environments, I enjoy solving complex problems and enhancing user experiences.
                    </p>
                    <p>
                    During my Web Developer Internship at Cooledtured, I led the creation of anime-themed quizzes that boosted user engagement through dynamic character-matching logic, Firebase integration, and REST-based updates. I collaborated with cross-functional teams to deliver features under tight deadlines.
                    </p>
                    <p>
                    I'm eager to grow as a developer, solve real-world challenges, and contribute to meaningful, user-centered products that make a lasting impact.                    </p>
                    <a 
                        className="resume-link" 
                        href="https://drive.google.com/file/d/1Uu22yACuWjk15sDrQv7u0WvwrlYNX_hs/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        📄 View My Resume
                    </a>
                </div>

                <div className="skills-and-coursework">
                    <div className="skills-section">
                        <h3>Skills</h3>
                        <ul>
                            <li>Java, Python, Android SDK, Object-Oriented Programming</li>
                            <li>React, Remix, TailwindCSS, HTML/CSS, JavaScript, TypeScript</li>
                            <li>PHP, SQL, RESTful APIs</li>
                            <li>Firebase (Auth, Firestore, Realtime DB)</li>
                            <li>Version Control (Git, GitHub)</li>
                        </ul>
                    </div>
                    <div className="coursework-section">
                        <h3>Relevant Coursework</h3>
                        <ul>
                            <li>Software Engineering / Development</li>
                            <li>Web Programming</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Operating Systems</li>
                            <li>Theoretical Foundations of Computer Science</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="profile-card">
                <div className="card-image-container">
                    <img 
                        className="card-image" 
                        src={`${base}assets/Ridvan.PNG`} 
                        alt="Ridvan Suleymanov" 
                    />
                </div>
                <div className="card-content">
                    <h2 className="card-title">Education</h2>
                    <p className="card-text">
                        Georgia State University <br />
                        Atlanta, GA <br />
                        <strong>May 2024</strong> <br />
                        Bachelor of Science in Computer Science
                    </p>
                    <img 
                        className="gsulogo" 
                        src={`${base}assets/gsu.png`} 
                        alt="GSU Logo" 
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
