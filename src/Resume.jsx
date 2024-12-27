import React from "react";
import { jsPDF } from "jspdf";

const Resume = ({
    name,
    title,
    phone,
    email,
    location,
    linkedIn,
    portfolio,
    summary,
    skills,
    experience,
    projects,
    education,
}) => {
    const saveToPdf = () => {
        const doc = new jsPDF("p", "in", "a4");
        const content = document.getElementById("resume-content");
        doc.html(content, {
            callback: function (doc) {
                doc.save("Resume.pdf");
            },
            x: 2,
            y: 2,
            width: 190, // Ensures A4 width
        });
    };

    return (
        <div className="p-6 bg-white shadow rounded-lg">
            {/* Save to PDF Button */}
            <div className="mb-4">
                <button
                    onClick={saveToPdf}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Save to PDF
                </button>
            </div>

            {/* Resume Content */}
            <div id="resume-content" className="text-left">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="text-lg text-gray-600">{title}</p>
                    <p>{location}</p>
                    <p>
                        <a href={`mailto:${email}`} className="text-blue-500">
                            {email}
                        </a>{" "}
                        | <a href={`tel:${phone}`} className="text-blue-500">{phone}</a>
                    </p>
                    <p>
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            LinkedIn
                        </a>{" "}
                        |{" "}
                        <a href={portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            Portfolio
                        </a>
                    </p>
                </div>

                {/* Summary */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Summary</h2>
                    <p className="text-gray-700">{summary}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Skills</h2>
                    <ul className="list-disc list-inside">
                        {skills.map((skill, index) => (
                            <li key={index} className="text-gray-700">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Experience */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Experience</h2>
                    {experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-semibold text-lg">{exp.title}</h3>
                            <p className="text-gray-600">{exp.company} | {exp.dates}</p>
                            <p className="text-gray-700">{exp.description}</p>
                        </div>
                    ))}
                </div>

                {/* Projects */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Projects</h2>
                    {projects.map((project, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-semibold text-lg">{project.title}</h3>
                            <p>
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    Repo
                                </a>{" "}
                                |{" "}
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    Live
                                </a>
                            </p>
                            <p className="text-gray-700">{project.description}</p>
                            <p className="text-gray-600">
                                <strong>Technologies Used:</strong> {project.tech}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Education</h2>
                    <p>
                        <strong>{education.degree}</strong> - {education.institution}
                    </p>
                    <p className="text-gray-600">Graduation Year: {education.graduationYear}</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;