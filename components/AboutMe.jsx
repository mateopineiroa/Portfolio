import Image from "next/image";
import { forwardRef } from "react";
import { Text } from "@nextui-org/react";

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
            <Text
              h1
              size={40}
              css={{
                textGradient: "45deg, $gray900 -20%, $gray400 100%",
              }}
              className=" inline font-bold"
            >
              About Me
            </Text>
            <p style={{ textWrap: "balance" }} className="text-xl">
              I am a Software Engineer student and a Web Developer.
              <br /> I have experience as a developer on multiple international
              projects, always worked very closely with other engineers,
              designers and clients to ensure the quality of the product.
              <br />
              I identify myself as a problem-solver kind of person and I am
              always attempting to propose effective solutions.
              <br />
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
