import heroImage from "./assets/dp.jpg";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-1">
        <div>
          <img
            src={heroImage}
            alt="My profile"
            className="w-2/3 md:w-3/4 rounded-full"
          />
        </div>

        <div className="flex flex-col h-full justify-center">
          <h2 className="font-heading font-bold text-5xl uppercase">
            Hi! I'm Divya Prakash <br />
            web developer
          </h2>
          <p className="text-gray-500 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos
            recusandae, pariatur nostrum consequatur et corrupti odio distinctio
            praesentium repellat impedit nobis rem velit cum, repellendus veniam
            sapiente, exercitationem nemo?
          </p>
        </div>
      </div>
    </div>
  );
}
