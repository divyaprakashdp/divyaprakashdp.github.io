import {
    FaJava,
    FaReact,
    FaGitAlt,
    FaArrowUp,
} from "react-icons/fa";
import {
    SiSelenium,
    SiTestcafe,
    SiTailwindcss,
    SiMui,
    SiTypescript,
    SiRedux,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
} from "react-icons/si";
import { TECH_SKILLS } from "../../../utils/constants";

const ICON_COMPONENTS = {
    SiHtml5: SiHtml5,
    SiCss3: SiCss3,
    SiJavascript: SiJavascript,
    SiReact: SiReact,
    SiMui: SiMui,
    SiTailwindcss: SiTailwindcss,
    SiTypescript: SiTypescript,
    SiRedux: SiRedux,
    FaJava: FaJava,
    SiSelenium: SiSelenium,
    SiTestcafe: SiTestcafe,
    FaGitAlt: FaGitAlt,
};

export default function Skills() {
    const techStackDiv = TECH_SKILLS.map(({ id, icon: iconName, title, style, color }) => {
        const IconComponent = ICON_COMPONENTS[iconName];
        return (
            <div
                key={id}
                className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
            >
                <div className="w-20 mx-auto">
                    {IconComponent && <IconComponent size={80} className={color} />}
                </div>
                <p className="mt-2">{title}</p>
            </div>
        );
    });

    return (
        <div
            id="Skills"
            className="md:h-screen w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-12">
                    {techStackDiv}
                </div>
            </div>
        </div>
    );
}
