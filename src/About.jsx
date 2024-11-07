
import React from 'react';
import './styles/About.css'

function About() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className="about-section">
            <div className="about-content">
                <div className="about-summary">
                    <h2>About Me</h2>
                    <p>
                        As a self-motivated and hard-working Computer Science graduate, I bring hands-on experience
                        in Java programming and a deep understanding of the software development lifecycle. I am passionate
                        about writing clean, efficient code and rigorously testing it to ensure flawless performance.
                        My technical skills span various programming languages and technologies, including Java, React, HTML, CSS, PHP,
                        JavaScript, and SQL. I am eager to leverage my abilities to contribute to innovative software development initiatives.
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/1YE7eaP68BltsxFtxmQznwS5A-cGeY5MN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View My Resume!</a>
                    </p>
                </div>
                <div className="skills-and-coursework">
                    <div className="skills-section">
                        <h3>Skills</h3>
                        <ul>
                            <li>Java Programming</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>Android Development</li>
                        </ul>
                    </div>
                    <div className="coursework-section">
                        <h3>Coursework</h3>
                        <ul>
                            <li>Web Programming</li>
                            <li>Software Development</li>
                            <li>Software Engineering</li>
                            <li>Design & Algorithms</li>
                            <li>Operating Systems</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="profile-card">
                <div className="card-image-container">
                    <img 
                        className="card-image" 
                        src={`${base}assets/Ridvan.png`}
                        alt="profile picture" 
                    />
                </div>
                <div className="card-content">
                        <h2 className="card-title">Education</h2>
                        <p className="card-text">
                            Georgia State University 
                            Atlanta, GA <br/>
                            May 2024<br/>
                            Bachelor of Science in Computer Science
                        </p>
                        <img className="gsulogo" src={`${base}assets/gsu.png`} alt="GSU Logo" />
                    </div>
                </div>
            </div>
    );
}

export default About;

