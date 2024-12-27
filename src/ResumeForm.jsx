import React, { useState } from "react";
import Resume from "./Resume"; // Assuming Resume component is in the same folder

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        phone: "",
        email: "",
        location: "",
        linkedIn: "",
        portfolio: "",
        summary: "",
        skills: [],
        experience: [],
        projects: [],
        education: {
            degree: "",
            institution: "",
            graduationYear: "",
        },
    });

    const [isPreviewVisible, setIsPreviewVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSkillsChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            skills: e.target.value.split(",").map((skill) => skill.trim()),
        }));
    };

    const handleAddExperience = () => {
        setFormData((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                { title: "", company: "", dates: "", description: "" },
            ],
        }));
    };

    const handleExperienceChange = (index, field, value) => {
        const updatedExperience = [...formData.experience];
        updatedExperience[index][field] = value;
        setFormData((prev) => ({ ...prev, experience: updatedExperience }));
    };

    const handleAddProject = () => {
        setFormData((prev) => ({
            ...prev,
            projects: [
                ...prev.projects,
                { title: "", repoLink: "", liveLink: "", description: "", tech: "" },
            ],
        }));
    };

    const handleProjectChange = (index, field, value) => {
        const updatedProjects = [...formData.projects];
        updatedProjects[index][field] = value;
        setFormData((prev) => ({ ...prev, projects: updatedProjects }));
    };

    const handlePreview = () => {
        setIsPreviewVisible(true);
    };

    return (
        <div className="p-6 bg-gray-50">
            {!isPreviewVisible ? (
                <form>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">LinkedIn</label>
                        <input
                            type="url"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Portfolio</label>
                        <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Summary</label>
                        <textarea
                            name="summary"
                            value={formData.summary}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2">Skills (comma-separated)</label>
                        <input
                            type="text"
                            value={formData.skills.join(", ")}
                            onChange={handleSkillsChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Experience</h2>
                        {formData.experience.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={exp.title}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "title", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={exp.company}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "company", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Dates"
                                    value={exp.dates}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "dates", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <textarea
                                    placeholder="Description"
                                    value={exp.description}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "description", e.target.value)
                                    }
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddExperience}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Add Experience
                        </button>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Projects</h2>
                        {formData.projects.map((project, index) => (
                            <div key={index} className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={project.title}
                                    onChange={(e) =>
                                        handleProjectChange(index, "title", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <input
                                    type="url"
                                    placeholder="Repo Link"
                                    value={project.repoLink}
                                    onChange={(e) =>
                                        handleProjectChange(index, "repoLink", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <input
                                    type="url"
                                    placeholder="Live Link"
                                    value={project.liveLink}
                                    onChange={(e) =>
                                        handleProjectChange(index, "liveLink", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <textarea
                                    placeholder="Description"
                                    value={project.description}
                                    onChange={(e) =>
                                        handleProjectChange(index, "description", e.target.value)
                                    }
                                    className="w-full p-2 border rounded mb-2"
                                />
                                <textarea
                                    placeholder="Technologies Used"
                                    value={project.tech}
                                    onChange={(e) =>
                                        handleProjectChange(index, "tech", e.target.value)
                                    }
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddProject}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Add Project
                        </button>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Education</h2>
                        <input
                            type="text"
                            placeholder="Degree"
                            name="degree"
                            value={formData.education.degree}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Institution"
                            name="institution"
                            value={formData.education.institution}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Graduation Year"
                            name="graduationYear"
                            value={formData.education.graduationYear}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handlePreview}
                        className="bg-green-500 text-white px-6 py-2 rounded"
                    >
                        Preview Resume
                    </button>
                </form>
            ) : (
                <Resume {...formData} />
            )}
        </div>
    );
};

export default ResumeForm;
