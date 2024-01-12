import deloitteLogo from "./assets/deloitte.svg";
import metricstreamLogo from "./assets/metricstream.svg";
import emidsLogo from "./assets/emids.svg";

export default function Expirience() {
  const companies = [
    {
      id: 1,
      icon: <img size={200} src={deloitteLogo} className="h-48 w-96" />,
      period: "2020-present",
      details:
        "Enhancing one of the largest retail client's authentication page with scalable ReactJS solutions. Built innovative tools, and frameworks, achieving 25% user engagement increase and 30% manual intervention reduction.",
      style: "shadow-[#86BC24]",
    },
    {
      id: 2,
      icon: <img size={80} src={metricstreamLogo} className="h-48 w-96" />,
      period: "2019-2020",
      details:
        "Upgraded R&D testing tool with object-oriented design and SOLID principles. Collaborated on API automation framework using JavaScript and node.js.",
      style: "shadow-[#00E9B7]",
    },
    {
      id: 3,
      icon: <img size={80} src={emidsLogo} className="h-48 w-96" />,
      period: "2017-2019",
      details:
        "Built an award-winning US health tech vendor's electronic healthcare records website. Ensured quality with top defect detection in sprints, focusing on REST API, test automation, and debugging.",
      style: "shadow-[#0FE2BB]",
    },
  ];

  const expDiv = companies.map(({ id, icon, period, details, style }) => (
    <div
      key={id}
      className={`lg:flex lg:flex-start py-2 shadow-md text-center justify-center md:hover:scale-110 duration-500 rounded-xl hover:rounded-lg ${style}`}
    >
      <div className="md:w-1/4 mx-4 ">{icon}</div>
      <div className="md:w-2/3 mx-12 ">
        <h2 className="text-2xl font-heading mt-2">{period}</h2>
        <hr className="" />
        <br />
        <p className="pb-2 text-base text-green-50 text-left">{details}</p>
      </div>
    </div>
  ));
  return (
    <div
      id="Experience"
      className="md:h-screen w-full text-xl uppercase bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
            Experience
          </p>
          <p className="py-6">A Snapshot of My Professional Journey</p>
        </div>
        <div className="w-full grid gap-8 py-2 ">{expDiv}</div>
      </div>
    </div>
  );
}
