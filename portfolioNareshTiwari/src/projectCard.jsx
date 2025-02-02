import React, { useEffect } from 'react';
import './projectCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ title, description, techStack, link }) => {
    return (
        <div className="project-card" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" data-aos-once="false">
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
            <p className="project-tech">Tech Stack: {techStack}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
    );
};

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: false
        });
    }, []);

    const projectData = [
        {
            title: 'Library Management System',
            description: 'Developed a system in C++ that allows users to search for books by ID and author name, manage borrowing and returning, and ensure secure operations with role-based access control.',
            techStack: 'C++',
            link: 'https://github.com/NareshTiwari74/LibraryManagementSystem',  // Placeholder link
        },
        {
            title: 'ToothGrowth Predictive Analysis with ML Models',
            description: 'Applied KNN, Naive Bayes, Decision Tree, and Neural Networks on the ToothGrowth dataset to perform predictive analysis, achieving 90% accuracy.',
            techStack: 'R, ggplot2',
            link: 'https://github.com/NareshTiwari74/ToothGrowthAnalysis',  // Placeholder link
        },
        {
            title: 'Passenger Experience Analysis for British Airways',
            description: 'Analyzed passenger satisfaction based on service, entertainment, and food quality across different cabin classes using data analysis in R, providing insights for improving services.',
            techStack: 'R, RStudio, ggplot2',
            link: 'https://github.com/NareshTiwari74/PassengerExperienceAnalysis',  // Placeholder link
        },
        {
            title: 'Helping Hand Website',
            description: 'Developed a website aimed at connecting volunteers with local NGOs for social work and community service. Built with C++ for backend operations and HTML for the front-end.',
            techStack: 'C++, HTML',
            link: 'https://github.com/NareshTiwari74/HelpingHandWebsite',  // Placeholder link
        },
        {
            title: 'Portfolio Website',
            description: 'Designed a personal portfolio to showcase my projects and achievements.',
            techStack: 'React, Tailwind CSS',
            link: 'https://github.com/NareshTiwari74/Portfolio',  // Placeholder link
        },
    ];
    
    return (
        <div className="projects-container">
            {projectData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default Projects;