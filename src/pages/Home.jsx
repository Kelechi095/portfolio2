/* eslint-disable react/prop-types */
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import { FaGithub, FaRegCircle } from "react-icons/fa";
import { HiMiniChevronDoubleDown } from "react-icons/hi2";

import Animation from "../components/Animation";
import Booktekka from "/images/booktekka.png";
import Project from "../components/Project";

const Home = ({ skillsRef, projectsRef }) => {
  return (
    <Wrapper>
      <Animation />

      <section className=" w-full" id="home">
        <div className="md:max-w-[70%]  mt-24">
          <h1 className="hidden lg:block text-7xl font-semibold text-text_color">
            Hi there, I am Kelechi
          </h1>
          <div className="text-5xl lg:hidden font-semibold text-text_color mt-24">
            <p>Hi there,</p>
            <p>I am Kelechi</p>
          </div>
          <p className="text-base md:text-xl text-text_transparent mt-4">
            I am a Fullstack Web Developer. I have a passion for creating
            beautiful, efficient, accessible, responsive and user-centric web
            projects. My blend of front-end and back-end expertise makes me a
            valuable addition to any team.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-4 mt-8">
          <form className="flex items-center">
            <input
              type="text"
              className="py-3 px-2 w-64 rounded-l-lg outline-violet-700"
              placeholder="Email Address"
            />
            <button className="bg-violet-700 hover:bg-violet-600 transition duration-300 rounded-r-lg font-semibold text-text_color py-3 px-6">
              Send me an email
            </button>
          </form>

          <a
            className="border border-violet-700 py-3 px-6 text-text_color font-semibold rounded flex items-center gap-4 hover:hover:border-text_color transition duration-300"
            href="https://github.com/Kelechi095"
          >
            <FaGithub className="mt-[2px]" size={30} />
            <p className="text-lg">Check out my Github</p>
          </a>
        </div>

        <div className="flex flex-col md:hidden items-center gap-4 mt-8">
          <form className=" md:hidden w-full items-center">
            <input
              type="text"
              className="py-3 px-2 w-full rounded outline-violet-700 mb-4"
              placeholder="Email Address"
            />
            <button className="bg-violet-700 w-full hover:bg-violet-600 transition duration-300 rounded font-semibold text-text_color py-3 px-6">
              Send me an email
            </button>
          </form>

          <div className="w-full h-[0.007rem] bg-neutral-700"></div>

          <a
            className="w-full border border-violet-700 py-3 px-6 text-text_color font-semibold rounded flex items-center justify-center gap-4 hover:hover:border-text_color transition duration-300 mt-2"
            href="https://github.com/Kelechi095"
          >
            <FaGithub className="mt-[2px]" size={25} />
            <p>Check out my Github</p>
          </a>
        </div>
      </section>

      {/* SKILLS SECTION */}

      <section className=" w-full" ref={skillsRef}>
        <div>
          <div className="flex items-center gap-2 mb-4 mt-44 md:justify-center">
            <h2 className="text-text_color font-semibold text-2xl md:text-4xl font-mono">
              Skills
            </h2>
            {/* <HiMiniChevronDoubleDown className="text-white" size={30}/> */}
          </div>
          <Card title="My Skills" />
        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section className=" w-full mt-6 md:mt-0" ref={projectsRef}>
        <div>
          <div className="flex items-center gap-2 mb-4 mt-44 md:justify-center">
            <h2 className="text-text_color font-semibold text-2xl md:text-4xl font-mono">
              Projects
            </h2>
            {/* <HiMiniChevronDoubleDown className="text-white" size={30}/> */}
          </div>
          <div className="flex md:justify-center">
            <p className="text-base md:text-xl text-text_transparent md:max-w-[80%] md:text-center mb-8 font-mono">
            I have gained experience creating all sorts of websites; from single page websites to fullstack applications. Check out some of my projects below to see what I have been to.
            </p>
          </div>

          <Project
            title="BookTekka"
            tech="Next.js, TypeScript, Tailwind CSS, MongoDB, Prisma, Zustand, React hook form"
            description1="Booktekka is a web application I created to allow book readers to
            recommend books to other readers, keep track of the books in their
            library and update the reading progress of the books they are currently
            reading."
            description2="I made the website interactive as users can like and unlike recommended
            books, view profile of other users and add reviews to recommended books"
            src={Booktekka}
            siteLink="https://booktekka.vercel.app"
            gitLink="https://github.com/Kelechi095/BookTekka-Nextjs"
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
