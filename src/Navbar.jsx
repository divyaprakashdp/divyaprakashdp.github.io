import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navBtn, setNavBtn] = useState(false);
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
      className="p-4 cursor-pointer uppercase font-medium text-xl text-slate-400 hover:scale-110 duration-200"
    >
      {link}
    </li>
  ));

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-slate-400 bg-black fixed">
      <h2 className=" font-logo text-5xl ml-4">dp</h2>

      <ul className="hidden md:flex">{navList}</ul>
      <div
        className="md:hidden cursor-pointer text-gray-500 pr-4 z-10"
        onClick={() => setNavBtn(!navBtn)}
      >
        {navBtn ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navBtn && (
        <ul className="flex flex-col justify-center items-center absolute top-12 right-0 w-18 h-18 bg-gradient-to-b from-black to-gray-800">
          {navList}
        </ul>
      )}
    </div>
  );
}
