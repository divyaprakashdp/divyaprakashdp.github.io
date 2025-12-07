/**
 * Utility helper functions
 */

/**
 * Calculate scroll visibility based on threshold
 * @param {number} thresholdPercent - Threshold as a percentage (0-1)
 * @returns {boolean} True if scroll is past threshold
 */
export const getScrollVisibility = (thresholdPercent = 0.25) => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    return scrolled > scrollHeight * thresholdPercent;
};

/**
 * Check if device is mobile
 * @param {number} breakpoint - Mobile breakpoint in pixels
 * @returns {boolean} True if window width is less than breakpoint
 */
export const isMobile = (breakpoint = 720) => {
    return window.innerWidth < breakpoint;
};

/**
 * Smooth scroll to top
 */
export const smoothScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

/**
 * Format date range
 * @param {string} startDate - Start date
 * @param {string} endDate - End date
 * @returns {string} Formatted date range
 */
export const formatDateRange = (startDate, endDate) => {
    return `${startDate}-${endDate}`;
};

/**
 * Clamp number between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};
