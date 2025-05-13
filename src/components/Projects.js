import React from 'react';


const projects = [
    { name: 'project 1', description: "hello", link: "https://github.com" },
    { name: 'project 2', description: "hello", link: "https://github.com" },
    { name: 'project 3', description: "hello", link: "https://github.com" },
];

const Projects = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projects;
