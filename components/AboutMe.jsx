import Image from "next/image";
import { forwardRef } from "react";
//

import me from "../public/me.png";

const AboutMe = forwardRef(({ scrollSkills }, ref) => {
  return (
    <>
      <section className="flex flex-col">
        <div
          ref={ref}
          id="aboutme"
          className="flex min-h-screen w-screen flex-col justify-center text-center align-middle md:flex-row"
        >
          <div className="flex flex-col gap-3 p-10 dark:text-gray-200 md:max-w-lg md:self-center">
            <h2 className=" bg-gradient-to-r from-zinc-800 to-zinc-300 bg-clip-text text-3xl font-extrabold text-transparent selection:text-zinc-800">
              About Me
            </h2>
            <p>I am a Software Engineer student and a Web Developer.</p>
            <p>
              I have experience as a developer on multiple international
              projects, always worked very closely with other engineers,
              designers and clients to ensure the quality of the product.
            </p>
            <p>
              I identify myself as a problem-solver kind of person and I am
              always attempting to propose effective solutions.
            </p>
            <p>
              {"I'm"} passionate about what I do and I dedicate my effort on
              deliver high quality work that meet client needs while also
              expanding my skillset.
            </p>
          </div>
          <div className="self-center p-10">
            <Image
              src={me}
              alt="My picture"
              width={300}
              priority
              draggable="false"
            />
          </div>
        </div>
      </section>
    </>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
