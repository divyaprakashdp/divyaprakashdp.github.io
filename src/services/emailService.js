import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_9adoq0n";
const TEMPLATE_ID = "template_pcoknxh";
const PUBLIC_KEY = "UxJpw1VaaHHqd2nls";

/**
 * Initialize EmailJS (call once at app startup)
 */
export const initializeEmailJS = () => {
    emailjs.init(PUBLIC_KEY);
};

/**
 * Send email using EmailJS
 * @param {Object} formData - Form data with user_name, user_email, message
 * @returns {Promise} EmailJS response
 */
export const sendEmail = async (formData) => {
    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            user_name: formData.user_name || formData.name,
            user_email: formData.user_email || formData.email,
            message: formData.message,
        });

        if (response.status === 200) {
            return {
                success: true,
                message: "Email sent successfully!",
            };
        }
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            message: "Failed to send email. Please try again.",
            error,
        };
    }
};

/**
 * Send email with form reference
 * @param {HTMLFormElement} formElement - Form DOM element
 * @returns {Promise} EmailJS response
 */
export const sendEmailForm = async (formElement) => {
    try {
        const response = await emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formElement,
            { publicKey: PUBLIC_KEY }
        );

        return {
            success: response.status === 200,
            message: response.status === 200 ? "Email sent successfully!" : "Failed to send email",
            response,
        };
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            message: "Failed to send email. Please try again.",
            error,
        };
    }
};
