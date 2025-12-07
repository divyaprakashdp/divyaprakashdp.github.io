import { useState, useEffect } from "react";
import { getScrollVisibility, debounce } from "../utils/helpers";
import { SCROLL_THRESHOLD_PERCENT } from "../utils/constants";

/**
 * Custom hook to track scroll visibility
 * @param {number} thresholdPercent - Scroll threshold as percentage
 * @returns {boolean} Whether scroll is past threshold
 */
export const useScroll = (thresholdPercent = SCROLL_THRESHOLD_PERCENT) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Debounced scroll handler for better performance
        const handleScroll = debounce(() => {
            setIsVisible(getScrollVisibility(thresholdPercent));
        }, 100);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [thresholdPercent]);

    return isVisible;
};

/**
 * Custom hook to track navbar visibility on scroll
 * @returns {boolean} Whether navbar should be visible
 */
export const useNavbarVisibility = () => {
    return useScroll(SCROLL_THRESHOLD_PERCENT);
};
