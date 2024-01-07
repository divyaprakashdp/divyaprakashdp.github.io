export default function Projects() {
  const techStack = [
    {
      id: 1,
      icon: <br size={80} className="text-red-500" />,
      title: "BOOKQUEST",
      style: "shadow-red-900",
      link: "https://github.com/divyaprakashdp/bookquest",
    },
    {
      id: 2,
      icon: <br size={80} className="text-blue-500" />,
      title: "TIME-MACHINE",
      style: "shadow-blue-900",
      link: "https://github.com/divyaprakashdp/time-machine",
    },
    {
      id: 3,
      icon: <br size={80} className="text-yellow-500" />,
      title: "EXPENSE-TRACKER",
      style: "shadow-yellow-900",
      link: "https://github.com/divyaprakashdp/expense-tracker-app",
    },
    {
      id: 4,
      icon: <br size={80} className="text-blue-500" />,
      title: "POLARIX",
      style: "shadow-blue-800",
      link: "",
    },
  ];

  const techStackDiv = techStack.map(({ id, icon, title, style, link }) => (
    <div
      key={id}
      className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
    >
      <p className="mt-2">{title}</p>
      <div className="w-20 mx-auto ">{icon}</div>
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
      className="md:h-screen w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white"
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
