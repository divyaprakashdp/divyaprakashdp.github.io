import { useRef, useState } from "react";
import { sendEmailForm } from "../../../services/emailService";
import { useForm } from "../../../hooks/useForm";

export default function Contact() {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState(null);

    const { handleSubmit: formHandleSubmit, values, handleChange } = useForm(
        {
            user_name: "",
            user_email: "",
            message: "",
        },
        async () => {
            const result = await sendEmailForm(form.current);
            setSubmitStatus(result);

            // Clear status after 3 seconds
            if (result.success) {
                form.current?.reset();
                setTimeout(() => setSubmitStatus(null), 3000);
            }
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        formHandleSubmit(e);
    };

    return (
        <div
            id="Contact"
            className="pt-16 md:h-screen w-full bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white text-xl"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-4">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-lime-200 p-2 inline">
                        Contact Me
                    </p>
                    <p className="py-6">Please fill this form for connecting or any feedback</p>
                </div>
                <div className="lg:flex lg:flex-start py-2 w-full h-[360px] shadow-md text-center justify-center duration-500 rounded-xl hover:rounded-lg shadow-[#0FE2BB]">
                    <form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 items-center w-[100%] text-black rounded-lg"
                    >
                        <input
                            required
                            type="text"
                            placeholder="Your Name"
                            name="user_name"
                            value={values.user_name}
                            onChange={handleChange}
                            className="w-[90%] md:w-[60%] rounded-lg h-8 bg-slate-300 md:hover:scale-110 duration-200 p-2"
                        />
                        <input
                            required
                            type="email"
                            placeholder="Email"
                            name="user_email"
                            value={values.user_email}
                            onChange={handleChange}
                            className="w-[90%] md:w-[60%] rounded-lg h-8 bg-slate-300 md:hover:scale-110 duration-200 p-2"
                        />
                        <textarea
                            required
                            name="message"
                            placeholder="Type your message here..."
                            value={values.message}
                            onChange={handleChange}
                            className="w-[90%] md:w-[60%] min-h-8 md:h-[50%] rounded-lg bg-slate-300 md:hover:scale-110 transition-all ease-in duration-200 p-2"
                        ></textarea>
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-lime-300 text-slate-700 w-[90%] md:w-[50%] px-8 py-2 mb-2 rounded-lg md:hover:scale-110 hover:bg-lime-600 duration-200 cursor-pointer"
                        />
                        {submitStatus && (
                            <p
                                className={`mt-2 text-sm ${submitStatus.success ? "text-green-400" : "text-red-400"
                                    }`}
                            >
                                {submitStatus.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
