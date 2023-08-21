import html from "../public/skills/html.png";
import js from "../public/skills/js.png";
import react from "../public/skills/react.png";
import nextjs from "../public/skills/nextjs.png";
import css from "../public/skills/css.png";
import c from "../public/skills/c++.png";
import tailwind from "../public/skills/tailwind.png";
import node from "../public/skills/node.png";
import typescript from "../public/skills/typescript.png";

import Image from "next/image";
import { forwardRef } from "react";

const IMAGES = [html, css, js, typescript, tailwind, react, nextjs, node];

const Skills = forwardRef(({ scrollProjects }, ref) => {
  return (
    <section className="flex flex-col">
      <div
        ref={ref}
        id="skills"
        className="flex min-h-screen w-screen flex-col justify-center "
      >
        <h2
          style={{ textWrap: "balance" }}
          className="inline self-center bg-gradient-to-bl from-zinc-800 to-zinc-300 bg-clip-text text-3xl font-bold  text-transparent selection:text-zinc-800"
        >
          Favorite Technologies
        </h2>
        <div className="mx-9 mt-8 grid grid-cols-2 items-center justify-items-center gap-9 self-center sm:grid-cols-3 md:w-1/2 md:grid-cols-4 md:grid-rows-2 xl:w-1/3">
          {IMAGES.map((src) => (
            <Image
              key={JSON.stringify(src)}
              alt="skill"
              src={src}
              width={100}
              height={100}
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
