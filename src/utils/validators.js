/**
 * Form validation utilities
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate required field
 * @param {string} value - Value to validate
 * @returns {boolean} True if value is not empty
 */
export const isRequired = (value) => {
    return value && value.trim().length > 0;
};

/**
 * Validate minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum length
 * @returns {boolean} True if value meets minimum length
 */
export const hasMinLength = (value, minLength) => {
    return value && value.length >= minLength;
};

/**
 * Validate form object
 * @param {Object} formData - Form data object
 * @param {Object} rules - Validation rules
 * @returns {Object} Validation errors
 */
export const validateForm = (formData, rules) => {
    const errors = {};

    Object.keys(rules).forEach((field) => {
        const rule = rules[field];
        const value = formData[field];

        if (rule.required && !isRequired(value)) {
            errors[field] = `${field} is required`;
        }

        if (rule.email && !isValidEmail(value)) {
            errors[field] = "Invalid email format";
        }

        if (rule.minLength && !hasMinLength(value, rule.minLength)) {
            errors[field] = `${field} must be at least ${rule.minLength} characters`;
        }
    });

    return errors;
};
