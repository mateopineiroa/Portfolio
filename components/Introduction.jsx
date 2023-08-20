import { forwardRef, useEffect, useState } from "react";
import SeeMore from "./SeeMore";
import { Text } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Intro = forwardRef(({ scrollAboutMe }, ref) => {
  return (
    <section className="flex flex-col">
      <div
        ref={ref}
        id="intro"
        className="-top-30 relative flex min-h-screen w-screen flex-col justify-center px-10 align-middle  "
      >
        <div className="self-center">
          <Text
            b
            size={40}
            css={{ display: "inline" }}
            className="dark:text-gray-200"
          >
            {"Hi! I'm "}
          </Text>
          <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $blue800 -20%, $blue400 100%",
            }}
            className="inline "
            weight="bold"
          >
            Mateo
          </Text>
        </div>

        <Text
          style={{ textWrap: "balance" }}
          h4
          className="self-center text-center dark:text-gray-200"
        >
          {
            "I'm a Software Developer currently focused on building web applications."
          }
        </Text>
      </div>
    </section>
  );
});

Intro.displayName = "Intro";

export default Intro;
