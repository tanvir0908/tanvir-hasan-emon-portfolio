import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0tibrhz",
        "template_91kusko",
        form.current,
        "KwXujHQmZjZWyarCA"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("Message sended successfully");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="w-full px-5 xl:px-0 bg-secondary py-20 text-gray"
    >
      <Toaster />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-20 text-center font-semibold text-primary">
          Contact
        </h2>
        <div className="flex flex-col lg:flex-row w-full items-center gap-10 lg:gap-20">
          <div className="flex-1">
            <Lottie animationData={animation} />
          </div>
          <div className="flex-1">
            <form
              ref={form}
              className="border-2 w-full border-primary p-10 rounded-xl shadow-md shadow-primary"
              onSubmit={sendEmail}
            >
              <p className="font-medium">Name</p>
              <input
                type="text"
                name="user_name"
                className="w-full px-3 py-2 rounded-lg outline-none bg-gray text-secondary text-medium"
              />
              <p className="mt-10 font-medium">Email</p>
              <input
                type="email"
                name="user_email"
                className="mb-10 w-full px-3 py-2 rounded-lg outline-none bg-gray text-secondary text-medium"
              />
              <p className="font-medium">Message</p>
              <textarea
                name="message"
                className="h-[10rem] w-full px-3 py-2 rounded-lg outline-none bg-gray text-secondary text-medium"
              />
              <br />
              <input
                type="submit"
                value="Send Message"
                className="cursor-pointer w-full bg-primary mt-10 rounded-lg py-3 font-semibold"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
