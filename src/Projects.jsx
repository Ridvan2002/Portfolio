import React from 'react';
import styles from './ProjectCard/Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';


function Projects() {
    const projects = [
        {
            title: "Android Mobile Application",
            description: "This is the description for the Application.",
            imageUrl: '/assets/FIleManager.png',
            link: "https://github.com/Ridvan2002/Andriod_Task_Manager/blob/ed101d95285bc30272e890e6f5d450273818112a/FILE_MANAGER_PREVIEW.mp4"
        },
        {
            title: "Real Estate Website",
            description: "This is the description for the Website.",
            imageUrl: './assets/real1.png',
            link: "#"
        },
        {
            title: "Python Network Analyzer",
            description: "This is the description for the Application.",
            imageUrl: "/path/to/network_analyzer.png",
            link: "#"
        }
    ];

    return (
        <div className={styles.projectsSection}>
            <h1 className={styles.projectsTitle}>My Projects</h1>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`${styles.projectContainer} ${
                            index % 2 === 0 ? styles.even : styles.odd
                        }`}
                    >
                        <ProjectCard project={project} isEven={index % 2 === 0} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
