import Image from "next/image";
import { forwardRef } from "react";
import { Text } from "@nextui-org/react";

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
      <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $gray900 -20%, $gray400 100%",
        }}
        className="inline text-center font-bold"
      >
        {"Let's talk!"}
      </Text>
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
              draggable="false"
            />
          </a>
          <p
            className="w-full text-center text-xs hover:cursor-pointer"
            onClick={() => copyToClipboard("mateopineiro2001@gmail.com")}
          >
            Copy to Clipboard
            <span className="material-symbols-outlined scale-75 text-xs">
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
