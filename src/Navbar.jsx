import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [navBtn, setNavBtn] = useState(false);

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
      className="p-4 cursor-pointer uppercase font-medium text-xl text-[#32A1E9] hover:scale-110  hover:underline duration-500 decoration-lime-200"
    >
      <Link to={link} smooth duration={600} onClick={handleClickInMobile}>
        {link}
      </Link>
    </li>
  ));

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#32A1E9] bg-black fixed">
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
          className="flex flex-col justify-center items-center absolute top-12 right-0 w-18 rounded-bl-lg bg-gradient-to-b from-black to-gray-800"
          onClick={() => setNavBtn(!navBtn)}
        >
          {navList}
        </ul>
      )}
    </div>
  );
}
