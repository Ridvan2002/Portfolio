import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);

    const base = import.meta.env.BASE_URL;

    const projects = [
        {
            title: "Real Estate Website",
            description: "TheRealEstate is a web application that enables users to view, list, buy, and manage properties. It includes features such as user authentication, wishlist functionality, and a secure purchase flow. The application is built with React and uses Vite for development and bundling. It also incorporates React Router for navigation, CSS Modules for styling, and Node.js with Express for backend integration. The frontend is deployed on GitHub Pages. The app allows users to browse property listings, view details, add properties to a wishlist, list their own properties for sale, and securely initiate property purchases.",
            imageUrl: `${base}assets/RealEstate.png`, // Use base for dynamic image path
            link: "https://ridvan2002.github.io/TheRealEstate/",
            repo: "https://github.com/Ridvan2002/TheRealEstate"
        },
        {
            title: "Android Mobile Application",
            description: "This File Manager application was developed as part of coursework at Georgia State University. It provides a user-friendly interface for managing files on Android devices, allowing users to view, move, create, copy, and delete files. The project was built using Java and the Android SDK, with Gradle used for managing dependencies and automating the build process. The application is designed with a clean and responsive user interface to ensure ease of use on Android devices.",
            imageUrl: `${base}assets/FileManager.png`, // Use base for dynamic image path
            link: "https://github.com/Ridvan2002/FileManager",
            repo: "https://github.com/Ridvan2002/FileManager"
        },
    ];

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="projects-section">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
                    >
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="project-image" 
                            onClick={() => handleImageClick(project.imageUrl)} 
                        />
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                <p>
                                    <strong>To view the GitHub repository </strong>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                                        CLICK HERE
                                    </a>
                                </p>
                                <p>
                                    <strong>To view the live demonstration </strong>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        CLICK HERE
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Large view" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
