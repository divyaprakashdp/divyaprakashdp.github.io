import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { getScrollVisibility, smoothScrollToTop } from "../../../utils/helpers";
import { SCROLL_THRESHOLD_PERCENT } from "../../../utils/constants";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(getScrollVisibility(SCROLL_THRESHOLD_PERCENT));
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div
                    className="fixed bottom-4 right-4 p-3 rounded-full bg-gradient-to-br from-[#1B8AA2] to-[#EAC7B5] text-white shadow-lg cursor-pointer animate-bounce transition-all hover:scale-110"
                    onClick={smoothScrollToTop}
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll to top"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            smoothScrollToTop();
                        }
                    }}
                >
                    <FaArrowUp className="text-xl" />
                </div>
            )}
        </div>
    );
}
