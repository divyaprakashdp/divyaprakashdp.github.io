import { jsPDF } from "jspdf";

/**
 * Generate and download resume as PDF
 * @param {string} resumeContentId - ID of the HTML element containing resume content
 * @param {string} fileName - Name of the PDF file to download
 */
export const downloadResumePDF = (resumeContentId = "resume-content", fileName = "Resume.pdf") => {
    try {
        const doc = new jsPDF("p", "in", "a4");
        const content = document.getElementById(resumeContentId);

        if (!content) {
            throw new Error(`Element with ID "${resumeContentId}" not found`);
        }

        doc.html(content, {
            callback: function (doc) {
                doc.save(fileName);
            },
            x: 2,
            y: 2,
            width: 190, // A4 width in mm
        });
    } catch (error) {
        console.error("Error generating PDF:", error);
        throw error;
    }
};

/**
 * Generate PDF from HTML content
 * @param {HTMLElement} element - HTML element to convert to PDF
 * @param {string} fileName - Name of the PDF file
 * @returns {Promise} Promise that resolves when PDF is generated
 */
export const generatePDFFromContent = async (element, fileName = "document.pdf") => {
    return new Promise((resolve, reject) => {
        try {
            if (!element) {
                reject(new Error("Element not provided"));
                return;
            }

            const doc = new jsPDF("p", "in", "a4");

            doc.html(element, {
                callback: function (doc) {
                    doc.save(fileName);
                    resolve({
                        success: true,
                        message: `${fileName} downloaded successfully`,
                    });
                },
                x: 2,
                y: 2,
                width: 190,
                onerror: (error) => {
                    reject(error);
                },
            });
        } catch (error) {
            reject(error);
        }
    });
};
