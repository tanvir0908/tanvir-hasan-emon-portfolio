import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

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
        <form ref={form} className="space-y-5" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <br />
          <label>Email</label>
          <input type="email" name="user_email" />
          <br />
          <label>Message</label>
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" className="cursor-pointer bg-primary rounded-xl w-20 font-semibold"/>
        </form>
      </div>
    </div>
  );
}
