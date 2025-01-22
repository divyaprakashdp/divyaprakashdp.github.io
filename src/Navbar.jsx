import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [navBtn, setNavBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleClickInMobile() {
    if (window.innerWidth < 720) {
      setNavBtn(false);
    }
  }
  const navLinks = [
    { id: 1, link: "Home" },
    { id: 2, link: "Skills" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];

  const navList = navLinks.map(({ id, link }) => (
    <li
      key={id}

    >
      <Link to={link} smooth duration={600} onClick={handleClickInMobile} className="p-2 mr-12 cursor-pointer uppercase font-bold text-xl text-[#32A1E9] hover:text-white rounded-2xl transition-all gap-4">
        {link}
      </Link>
    </li>
  ));

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

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 text-[#32A1E9] ${isVisible ? "bg-black" : "bg-transparent"} fixed z-50`}>
      <h2 className=" font-logo text-5xl ml-4">dp</h2>

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
