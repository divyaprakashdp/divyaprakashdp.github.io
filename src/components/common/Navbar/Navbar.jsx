import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useNavbarVisibility } from "../../../hooks/useScroll";
import { NAV_LINKS, NAV_SCROLL_DURATION, MOBILE_BREAKPOINT } from "../../../utils/constants";
import { isMobile } from "../../../utils/helpers";

export default function Navbar() {
    const [navBtn, setNavBtn] = useState(false);
    const isVisible = useNavbarVisibility();

    const handleClickInMobile = () => {
        if (isMobile(MOBILE_BREAKPOINT)) {
            setNavBtn(false);
        }
    };

    const navList = NAV_LINKS.map(({ id, link }) => (
        <li key={id}>
            <Link
                to={link}
                smooth
                duration={NAV_SCROLL_DURATION}
                onClick={handleClickInMobile}
                className="p-2 mr-12 cursor-pointer uppercase font-bold text-xl text-[#32A1E9] hover:text-white rounded-2xl transition-all gap-4"
            >
                {link}
            </Link>
        </li>
    ));

    return (
        <div
            className={`flex justify-between items-center w-full h-20 px-4 text-[#32A1E9] ${isVisible ? "bg-black" : "bg-transparent"
                } fixed z-50 transition-colors duration-300`}
        >
            <h2 className="font-logo text-5xl ml-4">dp</h2>

            <ul className="hidden md:flex">{navList}</ul>

            <div
                className="md:hidden cursor-pointer text-gray-500 pr-4 z-10"
                onClick={() => setNavBtn(!navBtn)}
            >
                {navBtn ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {navBtn && (
                <ul
                    className="flex flex-col w-full top-0 right-0 p-4 gap-4 justify-center items-center absolute rounded-b-lg bg-gradient-to-b from-black to-gray-800"
                    onClick={() => setNavBtn(!navBtn)}
                >
                    {navList}
                </ul>
            )}
        </div>
    );
}
