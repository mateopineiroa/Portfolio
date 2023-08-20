import Image from "next/image";
import linkedin from "../public/contact/linkedin.png";
import github from "../public/contact/github.png";
import mail from "../public/contact/mail.png";
import { forwardRef } from "react";

const SUBJECT = "Meeting proposal";
const BODY = "Hi Mateo, I want to meet you!";

const Contact = forwardRef((_, ref) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col w-screen min-h-screen justify-center"
    >
      <h3 className="self-center text-4xl mt-44">Contact</h3>
      <div className="self-center grid grid-cols-2 md:grid-cols-3 w-full p-4 lg:w-1/2  mt-8 mb-24 gap-9">
        <div className="flex flex-col justify-center align-middle cursor-pointer">
          <a
            className="self-center"
            href="https://linkedin.com/in/mateopineiro"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="link linkedin"
              src={linkedin}
              width={300}
              height={300}
            />
          </a>
        </div>
        <div className="flex flex-col justify-center align-middle cursor-pointer">
          <a
            className="self-center"
            href={"https://github.com/mateopineiroa"}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="link github"
              src={github}
              width={300}
              height={300}
            />
          </a>
        </div>

        <div className="flex flex-col justify-center align-middle">
          <a
            className="cursor-pointer self-center"
            href={`mailto:mateopineiro2001@gmail.com?subject=${SUBJECT}&body=${BODY}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="link mail"
              src={mail}
              width={300}
              height={300}
            />
          </a>
          <p
            className="hover:cursor-pointer text-center w-full text-xs"
            onClick={() => copyToClipboard("mateopineiro2001@gmail.com")}
          >
            Copy to Clipboard
            <span className="material-symbols-outlined text-xs scale-75">
              content_copy
            </span>
          </p>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
