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
                        I'm Ridvan Suleymanov — a passionate and determined Computer Science graduate with hands-on experience 
                        in full-stack development and a sharp focus on clean, scalable code. From building Android apps and 
                        developing REST APIs to deploying interactive features in production e-commerce environments, I thrive on solving complex problems 
                        and crafting meaningful user experiences.
                    </p>
                    <p>
                        During my Web Developer Internship at <strong>Cooledtured</strong>, I led the development of engaging anime-themed 
                        quizzes that increased user interaction through dynamic character-matching logic, Firebase integration, and REST-based content updates. 
                        I also contributed to cross-functional sprints with designers, marketers, and backend engineers to ship features under tight deadlines.
                    </p>
                    <p>
                        My toolkit includes <strong>React, Remix, Firebase, TailwindCSS, Java, Python, PHP, SQL</strong>, and mobile development with <strong>Android Studio</strong>. 
                        I am actively looking for opportunities where I can grow as a developer and contribute to impactful products.
                    </p>
                    <a 
                        className="resume-link" 
                        href="https://drive.google.com/file/d/1YE7eaP68BltsxFtxmQznwS5A-cGeY5MN/view?usp=drive_link" 
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
                            <li>Java, Android SDK, Object-Oriented Programming</li>
                            <li>React, Remix, TailwindCSS, HTML/CSS, JavaScript</li>
                            <li>PHP, SQL, RESTful APIs</li>
                            <li>Firebase (Auth, Firestore, Realtime DB)</li>
                            <li>Version Control (Git, GitHub)</li>
                        </ul>
                    </div>
                    <div className="coursework-section">
                        <h3>Relevant Coursework</h3>
                        <ul>
                            <li>Software Engineering</li>
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
