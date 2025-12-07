import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const ICON_MAP = {
    FaLinkedin: <FaLinkedin size={30} />,
    FaGithub: <FaGithub size={30} />,
    MdEmail: <MdEmail size={30} />,
    ImProfile: <ImProfile size={30} />,
};

export default function SocialLinks() {
    const links = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/divyaprakashdp/",
            label: "Linkedin",
            icon: "FaLinkedin",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            link: "https://github.com/divyaprakashdp",
            label: "GitHub",
            icon: "FaGithub",
        },
        {
            id: 3,
            link: "mailto:dev.dp06@gmail.com",
            label: "Email Me",
            icon: "MdEmail",
        },
        {
            id: 4,
            link: "/Resume.pdf",
            label: "Resume",
            icon: "ImProfile",
            style: "rounded-br-md",
        },
    ];

    return (
        <div className="md:flex md:flex-col top-[65%] md:top-[35%] md:left-0 absolute md:fixed rounded-br-md">
            <ul>
                {links.map(({ id, link, label, icon, style }) => (
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
                            <span>{label}</span>
                            {ICON_MAP[icon]}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
