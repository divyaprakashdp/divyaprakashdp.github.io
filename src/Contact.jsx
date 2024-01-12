import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="md:h-screen w-full  bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-4">
        <div>
          <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
            Contact Me
          </p>
          <p className="py-6">
            Please fill this form for connecting or any feedback
          </p>
        </div>
        <div
          className={`lg:flex lg:flex-start py-2 w-full h-[360px] shadow-md text-center justify-center md:hover:scale-110 duration-500 rounded-xl hover:rounded-lg shadow-[#0FE2BB]`}
        >
          <form
            action=""
            className="flex flex-col gap-4 items-center w-[100%] text-black rounded-lg "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-[40%] rounded-lg h-8 hover:scale-110 duration-200"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-[40%] rounded-lg h-8 hover:scale-110 duration-200"
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              className="w-[40%] min-h-8 h-[50%] rounded-lg hover:scale-110 duration-200"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="bg-lime-300 text-slate-700 w-[30%] px-8 py-2 mb-2 rounded-lg hover:scale-110 hover:bg-lime-600 duration-200 "
            />
          </form>
        </div>
      </div>
    </div>
  );
}
