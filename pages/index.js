import Head from 'next/head'
import Intro from '../components/Introduction'
import Nav from '../components/Nav'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  const scrollIntro = () => {
    const e = document.getElementById("intro")
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    })
  }
  const scrollAboutMe = () => {
    let e = document.getElementById("aboutme");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }
  const scrollSkills = () => {
    let e = document.getElementById("skills");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }
  const scrollProjects = () => {
    const e = document.getElementById("projects")
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    })
  }
  const scrollContact = () => {
    const e = document.getElementById("contact")
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    })
  }
  return (
    <div>
      <Head>
        <title>{"Mateo's Portfolio"}</title>
        <meta name="description" content="Portfolio de Mateo Piñeiro" />
        <link rel="icon" href="/me.png" />
      </Head>

      
      <Nav 
        scrollAboutMe={scrollAboutMe} 
        scrollIntro={scrollIntro} 
        scrollSkills={scrollSkills} 
        scrollProjects={scrollProjects} 
        scrollContact={scrollContact} 
        />

      <main className='bg-[#F2F2F2]'>
        <Intro scrollAboutMe={scrollAboutMe} />
        <AboutMe scrollSkills={scrollSkills} />
        <Skills scrollProjects={scrollProjects}/>
        <Projects scrollContact={scrollContact} />
        <Contact scrollIntro={scrollIntro} />
      </main>
      
      <footer>
        
      </footer>
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
