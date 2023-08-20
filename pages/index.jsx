import Head from "next/head";
import { createRef, useEffect, useRef, useState } from "react";

import Intro from "/components/Introduction";
import Nav from "/components/Nav";
import AboutMe from "/components/AboutMe";
import Skills from "/components/Skills";
import Projects from "/components/Projects";
import Contact from "/components/Contact";

const ComponentsArray = [Intro, AboutMe, Skills, Projects, Contact];

export default function Home() {
  const Refs = useRef(ComponentsArray.map(() => createRef()));

  const scrollIntro = () => {
    Refs.current[0].current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollAboutMe = () => {
    Refs.current[1].current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollSkills = () => {
    Refs.current[2].current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollProjects = () => {
    Refs.current[3].current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollContact = () => {
    Refs.current[4].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Head>
        <title>{"Mateo's Portfolio"}</title>
        <meta name="description" content="Portfolio of Mateo Piñeiro" />
        <link rel="icon" href="/me.png" />
      </Head>

      <Nav
        scrollAboutMe={scrollAboutMe}
        scrollIntro={scrollIntro}
        scrollSkills={scrollSkills}
        scrollProjects={scrollProjects}
        scrollContact={scrollContact}
      />
      <main className="z-10 bg-[#F2F2F2] text-[#11181C] dark:bg-[#111827] dark:text-white">
        {ComponentsArray.map((Comp, idx) => (
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
