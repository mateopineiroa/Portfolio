import html from "../public/skills/html.png";
import js from "../public/skills/js.png";
import react from "../public/skills/react.png";
import c from "../public/skills/c++.png";
import nextjs from "../public/skills/nextjs.png";
import css from "../public/skills/css.png";
import bootstrap from "../public/skills/bootstrap.png";
import tailwind from "../public/skills/tailwind.png";
import Image from "next/image";
import SeeMore from "./SeeMore";
import { forwardRef } from "react";

const IMAGES = [
  html,
css,
js,
tailwind,
bootstrap,
react,
nextjs,
c,
]

const Skills = forwardRef(({ scrollProjects }, ref) => {
  return (
    <section className="flex flex-col">
      <div
        ref={ref}
        id="skills"
        className="flex flex-col w-screen min-h-screen justify-center "
      >
        <h3 className="text-4xl self-center">Skills</h3>
        <div className="grid grid-cols-3 mx-9 md:grid-cols-4 md:grid-rows-2 gap-9 mt-8 md:w-1/2 xl:w-1/3 self-center">
          {IMAGES.map((src) => 
            <Image
              key={src}
              alt="skill"
              src={src}
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
