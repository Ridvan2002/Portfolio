import Card from './Cards/Card.jsx'

function About() {
    return (
        <div className="about-section">
            <div className="about-content">
                <div className="about-summary">
                    <h2>About me</h2>
                    <p>
                        As a self-motivated and hard-working Computer Science graduate, I bring hands-on experience
                        in Java programming and a deep understanding of the software development lifecycle. With a
                        keen eye for detail and strong organizational skills, I am passionate about writing clean,
                        efficient code and rigorously testing it to ensure flawless performance. Throughout my
                        academic and personal projects, I have honed my abilities in various programming languages
                        and technologies, including Java, React, HTML, CSS, PHP, JavaScript, and SQL. My commitment to
                        continuous learning and problem-solving has enabled me to successfully complete complex
                        projects, such as developing an Android File Manager application and a Property Listings
                        platform, both of which significantly improved user engagement and system performance.
                        I am eager to leverage my technical skills and collaborative spirit to contribute to innovative
                        software development initiatives in a dynamic team environment. Whether it's optimizing a
                        website's performance, managing client databases, or developing robust mobile applications, I
                        am ready to take on new challenges and make a meaningful impact.
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
                        <h3>CourseWork</h3>
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
            <Card/>
        </div>
    );
}

export default About;
