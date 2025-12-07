import React from "react";
import Resume from "./Resume";

/**
 * ResumeForm - Component for creating and previewing resumes
 * Note: Currently commented out in App.jsx. Uncomment to use.
 */
const ResumeForm = () => {
    const [formData, setFormData] = React.useState({
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

    const [isPreviewVisible, setIsPreviewVisible] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-8 bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Resume Builder</h1>

            {!isPreviewVisible ? (
                <form className="space-y-4">
                    {/* Basic Information */}
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 rounded bg-gray-700 text-white"
                        />
                        <input
                            type="text"
                            name="title"
                            placeholder="Job Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="p-2 rounded bg-gray-700 text-white"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 rounded bg-gray-700 text-white"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="p-2 rounded bg-gray-700 text-white"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsPreviewVisible(true)}
                        className="mt-8 px-6 py-2 bg-lime-500 text-black rounded font-bold hover:bg-lime-600"
                    >
                        Preview Resume
                    </button>
                </form>
            ) : (
                <div>
                    <Resume {...formData} />
                    <button
                        onClick={() => setIsPreviewVisible(false)}
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Back to Form
                    </button>
                </div>
            )}
        </div>
    );
};

export default ResumeForm;
