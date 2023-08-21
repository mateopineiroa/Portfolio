import { forwardRef, useEffect, useState } from "react";
import SeeMore from "./SeeMore";

import { useRouter } from "next/navigation";

const Intro = forwardRef(({ scrollAboutMe }, ref) => {
  return (
    <section className="flex flex-col">
      <div
        ref={ref}
        id="intro"
        className="-top-30 relative flex min-h-screen w-screen flex-col justify-center gap-2 px-10 align-middle  "
      >
        <h1 className="self-center ">
          <span className=" bg-clip-text text-5xl text-inherit">
            {"Hi! I'm "}
          </span>
          <span
            className="bg-gradient-to-br from-blue-700 to-blue-200 bg-clip-text text-5xl font-extrabold text-transparent selection:text-gray-800"
            weight="bold"
          >
            Mateo
          </span>
        </h1>

        <h4
          style={{ textWrap: "balance" }}
          className="self-center text-center text-xl dark:text-gray-200"
        >
          {"I'm"} a Software Developer currently focused on building{" "}
          <span className=" underline decoration-zinc-400 underline-offset-4 selection:underline">
            web applications.
          </span>
        </h4>
      </div>
    </section>
  );
});

Intro.displayName = "Intro";

export default Intro;
