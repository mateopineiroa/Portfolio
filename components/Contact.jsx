import Image from "next/image";
import { forwardRef } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-hot-toast";

import linkedin from "../public/contact/linkedin.png";
import github from "../public/contact/github.png";
import mail from "../public/contact/mail.png";

const SUBJECT = "Meeting proposal";
const BODY = "Hi Mateo, I want to meet you!";

const Contact = forwardRef((_, ref) => {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      if (err instanceof Error) {
        console.log({ error: err.message });
      }
    }
  };
  return (
    <section
      ref={ref}
      id="contact"
      className="flex min-h-screen w-screen flex-col justify-center"
    >
      <h2 className="inline self-center bg-gradient-to-bl from-gray-800 to-gray-400 bg-clip-text text-3xl font-bold  text-transparent selection:text-gray-800">
        {"Let's talk!"}
      </h2>
      <div className="mb-24 mt-8 grid w-full grid-cols-2 gap-9 self-center  p-4 md:grid-cols-3 lg:w-1/2">
        <div className="flex cursor-pointer flex-col justify-center align-middle">
          <a
            className="self-center"
            href="https://linkedin.com/in/mateopineiro"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="link linkedin"
              draggable="false"
              src={linkedin}
              width={300}
              height={300}
            />
          </a>
        </div>
        <div className="flex cursor-pointer flex-col justify-center align-middle">
          <a
            className="self-center"
            href={"https://github.com/mateopineiroa"}
            target="_blank"
            rel="noreferrer"
          >
            <Image alt="link github" src={github} width={300} height={300} />
          </a>
        </div>

        <div className="flex flex-col justify-center gap-2 align-middle">
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
              draggable="false"
            />
          </a>
          <div className="flex items-start justify-center">
            <p
              className="w-fit text-center text-xs hover:cursor-pointer"
              onClick={() => {
                copyToClipboard("mateopineiro2001@gmail.com");
                toast.success("Copied to clipboard!");
              }}
            >
              Copy to Clipboard
            </p>
            <AiOutlineCopy size={10} />
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
