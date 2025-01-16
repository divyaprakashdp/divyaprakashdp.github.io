import expenseTrackerImg from "./assets/expenseTracker.png";
import polarixImg from "./assets/Polarix.png";
import timemachine from "./assets/timemachine.png";
import bibliai from "./assets/bibliai.png"

export default function Projects() {
  const projectDetails = [
    {
      id: 1,
      icon: <br size={80} className="text-red-500" />,
      title: "BIBLIAI",
      desc: "An AI powered book search, recommendation and analysis application.",
      style: "shadow-red-900",
      repoLink: "https://github.com/divyaprakashdp/divyaprakashdp.github.io",
      link: "https://bibliai.netlify.app/",
      imgSrc: bibliai,
    },
    {
      id: 2,
      icon: <br size={80} className="text-blue-500" />,
      title: "TIME-MACHINE",
      desc: "",
      style: "shadow-[#AAC9AF]",
      repoLink: "https://github.com/divyaprakashdp/time-machine",
      link: "",
      imgSrc: timemachine,
    },
    {
      id: 3,
      icon: <br size={80} className="text-yellow-500" />,
      title: "EXPENSE-TRACKER",
      desc: "",
      style: "shadow-[#8D60FB]",
      repoLink: "https://github.com/divyaprakashdp/expense-tracker-app",
      link: "",
      imgSrc: expenseTrackerImg,
    },
    {
      id: 4,
      icon: <br size={80} className="text-blue-500" />,
      title: "POLARIX",
      desc: "",
      style: "shadow-[#C8434A]",
      repoLink: "",
      link: "",
      imgSrc: polarixImg,
    },
  ];

  const projectDetailsDiv = projectDetails.map(
    ({ id, title, desc, style, repoLink, link, imgSrc }) => (
      <div
        key={id}
        className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
      >
        <div>
          <p className="mt-2">{title}</p>
        </div>
        <div>
          <p className="mt-2 font-thin text-sm">{desc}</p>
        </div>

        <div className="w-100 mx-4 my-4 ">
          <img src={imgSrc} className="rounded:lg" />
        </div>
        <div className="text-sm">
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:text-blue-500 cursor-pointer"
          >
            CODE
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            Demo
          </a>
        </div>
      </div>
    )
  );
  return (
    <div
      id="Projects"
      className="w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
            Projects
          </p>
          <p className="py-6">Here are few of my side projects</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-12">
          {projectDetailsDiv}
        </div>
      </div>
    </div>
  );
}
