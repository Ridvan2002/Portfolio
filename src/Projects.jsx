import React, { useState } from 'react';
import './styles/Projects.css';

function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const base = import.meta.env.BASE_URL;

    const projects = [
        {
            title: "Real Estate Website",
            description: "TheRealEstate is a web application that enables users to view, list, buy, and manage properties. It includes features such as user authentication, wishlist functionality, and a secure purchase flow. The application is built with React and uses Vite for development and bundling. It also incorporates React Router for navigation, CSS Modules for styling, and Node.js with Express for backend integration. The frontend is deployed on GitHub Pages. The app allows users to browse property listings, view details, add properties to a wishlist, list their own properties for sale, and securely initiate property purchases.",
            imageUrl: `${base}assets/RealEstate.png`,
            link: "https://ridvan2002.github.io/TheRealEstate/",
            repo: "https://github.com/Ridvan2002/TheRealEstate"
        },
        {
            title: "Android Mobile Application",
            description: "This File Manager application was developed as part of coursework at Georgia State University. It provides a user-friendly interface for managing files on Android devices, allowing users to view, move, create, copy, and delete files. The project was built using Java and the Android SDK, with Gradle used for managing dependencies and automating the build process. The application is designed with a clean and responsive user interface to ensure ease of use on Android devices.",
            imageUrl: `${base}assets/File_Manager.png`,
            link: `${base}assets/FILE_MANAGER_PREVIEW.mp4`,
            repo: "https://github.com/Ridvan2002/FileManager"
        },
        {
            title: "Network Traffic Analyzer",
            description: "This Network Analyzer program was created using Python and is designed to process PCAP (Packet Capture) files, which are used to store network traffic data, to carefully examine network traffic. The program makes use of Scapy, a Python library for packet manipulation. It reads PCAP files, then extracts relevant data like IP addresses, protocols, and timestamps. It offers insights into network communications by extracting packet information, finding frequent communication pairings, seeing possible security risks like port monitoring and suspicious activities, and visualizing different aspects of the network traffic.",
            imageUrl: `${base}assets/networkanalyzer.png`,
            link: `https://docs.google.com/presentation/d/e/2PACX-1vTAH5biop0pniq_iTKdezIp5ecbyAI70xXa61l3XeLBxpiClKu19h94YS-yu0nqcg/pub?start=false&loop=false&delayms=3000`,
            repo: "https://github.com/Ridvan2002/NetworkAnalyzer"
        },
    ];

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl); 
        setSelectedVideo(null); 
    };

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl); 
        setSelectedImage(null);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedVideo(null); 
    };

    const isVideoLink = (url) => {
        return url.endsWith('.mp4'); 
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
                                    <strong>To view the GitHub repository: </strong>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                                        CLICK HERE
                                    </a>
                                </p>
                                <p>
                                    <strong>To view the live demonstration: </strong>
                                    {isVideoLink(project.link) ? (
                                        <span
                                            onClick={() => handleVideoClick(project.link)} 
                                            className="project-link"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            CLICK HERE
                                        </span>
                                    ) : (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                            CLICK HERE
                                        </a>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Large view" className="modal-image" />
                    </div>
                </div>
            )}

            {selectedVideo && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <video controls className="modal-video">
                            <source src={selectedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
