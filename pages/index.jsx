import Head from "next/head";
import { createRef, useRef } from "react";

import Intro from "../components/Introduction";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AiHelper from "../components/AiHelper";
import Form from "../components/Form";

const Sections = [
  { title: "Intro", Comp: Intro },
  { title: "About Me", Comp: AboutMe },
  { title: "Ask Ai", Comp: AiHelper },
  { title: "Skills", Comp: Skills },
  { title: "Projects", Comp: Projects },
  { title: "Get in touch", Comp: Form },
  { title: "Contact", Comp: Contact },
];

export default function Home() {
  const Refs = useRef(Sections.map(() => createRef()));
  const sections = Sections.map((section, idx) => ({
    ...section,
    onClick: () =>
      Refs.current[idx].current.scrollIntoView({ behavior: "smooth" }),
  }));
  const ref = useRef();

  return (
    <div>
      <Head>
        <title>{"Mateo's Portfolio"}</title>
        <meta name="description" content="Portfolio of Mateo Piñeiro" />
        <link rel="icon" href="/me.png" />
      </Head>

      <Nav Sections={sections} clientHeight={ref?.current?.clientHeight} />

      <main
        ref={ref}
        className="z-10 bg-[#F2F2F2] text-[#11181C] dark:bg-[#111827] dark:text-white"
      >
        {Sections.map(({ Comp, title }, idx) => (
          <Comp key={title} ref={Refs.current[idx]} />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
