import Head from "next/head";
import { createRef, useEffect, useRef, useState } from "react";

import Intro from "../components/Introduction";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AiHelper from "../components/AiHelper";

const Sections = [
  { title: "Intro", Comp: Intro },
  { title: "About Me", Comp: AboutMe },
  { title: "Skills", Comp: Skills },
  { title: "Projects", Comp: Projects },
  { title: "Ask Ai", Comp: AiHelper },
  { title: "Contact", Comp: Contact },
];

export default function Home() {
  const Refs = useRef(Sections.map(() => createRef()));

  return (
    <div>
      <Head>
        <title>{"Mateo's Portfolio"}</title>
        <meta name="description" content="Portfolio of Mateo Piñeiro" />
        <link rel="icon" href="/me.png" />
      </Head>

      <Nav
        Sections={Sections.map((section, idx) => ({
          ...section,
          onClick: () =>
            Refs.current[idx].current.scrollIntoView({ behavior: "smooth" }),
        }))}
      />

      <main className="z-10 bg-[#F2F2F2] text-[#11181C] dark:bg-[#111827] dark:text-white">
        {Sections.map(({ Comp }, idx) => (
          <Comp key={idx} ref={Refs.current[idx]} />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
