export default function Projects() {
  const techStack = [
    {
      id: 1,
      icon: <br size={80} className="text-red-500" />,
      title: "HTML",
      style: "shadow-red-900",
    },
    {
      id: 2,
      icon: <br size={80} className="text-blue-500" />,
      title: "CSS",
      style: "shadow-blue-900",
    },
    {
      id: 3,
      icon: <br size={80} className="text-yellow-500" />,
      title: "JS",
      style: "shadow-yellow-900",
    },
    {
      id: 4,
      icon: <br size={80} className="text-blue-500" />,
      title: "REACT",
      style: "shadow-blue-800",
    },
  ];

  const techStackDiv = techStack.map(({ id, icon, title, style }) => (
    <div
      key={id}
      className={`py-2 shadow-md text-center justify-center hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
    >
      <div className="w-20 mx-auto ">{icon}</div>
      <p className="mt-2">{title}</p>
    </div>
  ));
  return (
    <div
      id="Projects"
      className="h-screen w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-gray-700 to-gray-500 text-white"
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
