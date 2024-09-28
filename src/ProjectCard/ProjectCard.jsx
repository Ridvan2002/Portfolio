import React from 'react';
import styles from '../Cards/Card.module.css';

function ProjectCard({ project }) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.projectContent}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectText}>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
