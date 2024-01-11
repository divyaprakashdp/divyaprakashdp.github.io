import expenseTrackerImg from "./assets/expenseTracker.png";
import polarixImg from "./assets/Polarix.png";
import timemachine from "./assets/timemachine.png";

export default function Projects() {
  const techStack = [
    {
      id: 1,
      icon: <br size={80} className="text-red-500" />,
      title: "BOOKQUEST",
      style: "shadow-red-900",
      link: "https://github.com/divyaprakashdp/bookquest",
      imgSrc: expenseTrackerImg,
    },
    {
      id: 2,
      icon: <br size={80} className="text-blue-500" />,
      title: "TIME-MACHINE",
      style: "shadow-[#AAC9AF]",
      link: "https://github.com/divyaprakashdp/time-machine",
      imgSrc: timemachine,
    },
    {
      id: 3,
      icon: <br size={80} className="text-yellow-500" />,
      title: "EXPENSE-TRACKER",
      style: "shadow-[#8D60FB]",
      link: "https://github.com/divyaprakashdp/expense-tracker-app",
      imgSrc: expenseTrackerImg,
    },
    {
      id: 4,
      icon: <br size={80} className="text-blue-500" />,
      title: "POLARIX",
      style: "shadow-[#C8434A]",
      link: "",
      imgSrc: polarixImg,
    },
  ];

  const techStackDiv = techStack.map(({ id, title, style, link, imgSrc }) => (
    <div
      key={id}
      className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
    >
      <div>
        <p className="mt-2">{title}</p>
      </div>

      <div className="w-100 mx-4 my-4 ">
        <img src={imgSrc} className="rounded:lg" />
      </div>
      <div className="text-sm">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mr-4 hover:text-blue-500"
        >
          CODE
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          Demo
        </a>
      </div>
    </div>
  ));
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
          {techStackDiv}
        </div>
      </div>
    </div>
  );
}
