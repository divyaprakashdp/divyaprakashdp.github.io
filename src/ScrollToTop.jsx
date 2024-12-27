import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when 25% of the page is scrolled
    useEffect(() => {
        const toggleVisibility = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            setIsVisible(scrolled > scrollHeight * 0.25);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {isVisible && (
                <div
                    className="fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-br from-[#1B8AA2] to-[#EAC7B5] text-white shadow-lg cursor-pointer animate-bounce transition-all"
                    onClick={scrollToTop}
                >
                    <FaArrowUp className="text-xl" />
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;