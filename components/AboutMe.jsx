import Image from "next/image";
import { forwardRef } from "react";

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
          <div className="p-10 dark:text-gray-200 md:max-w-lg md:self-center">
            <h2 className=" mb-4 mt-32 text-4xl">About Me</h2>

            <p className=" text-lg">
              {"I'm a Software Engineer student and a Web Developer."}
              <br />
              Currently interested in being part of a team of developers and
              make challenging proyects.
              <br />I consider myself as a problem-solver kind of person,
              proactive and a fast learner. I also think i am a really good
              teammate.
            </p>
          </div>
          <div className="self-center p-10">
            <Image src={me} alt="My picture" width={300} height={300} />
          </div>
        </div>
      </section>
    </>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
