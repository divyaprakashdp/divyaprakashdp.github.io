import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/divyaprakashdp/",
      icon: (
        <>
          Linkedin
          <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      link: "https://github.com/divyaprakashdp",
      icon: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      link: "mailto:dev.dp06@gmail.com",
      icon: (
        <>
          Email Me
          <MdEmail size={30} />
        </>
      ),
    },
    {
      id: 4,
      link: "/Resume.pdf",
      icon: (
        <>
          Resume
          <ImProfile size={30} />
        </>
      ),
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="flex md:flex-col top-[35%] md:left-0 absolute md:fixed rounded-br-md ">
      <ul>
        {links.map(({ id, link, icon, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-lime-700 ml-[-100px] md:hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
