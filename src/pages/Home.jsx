/* eslint-disable react/prop-types */
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import { FaGithub } from "react-icons/fa";

import Animation from "../components/Animation";
import Booktekka from "/images/booktekka.png";
import Project from "../components/Project";
import Kelstores from "/images/kelstores.png";
import KelQuiz from "/images/kelquiz.png";
import { useState } from "react";

const Home = ({ skillsRef, projectsRef }) => {
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const email = "awomskelechi@gmail.com";
  const body = "";

  return (
    <Wrapper>
      <Animation />

      <section className=" w-full min-h-[70vh] flex items-center" id="home">
        <div>
          <div className="md:max-w-[70%]">
            <h1 className="hidden lg:block text-7xl font-semibold text-text_color">
              Hi there, I am Kelechi
            </h1>
            <div className="text-5xl lg:hidden font-semibold text-text_color mt-24">
              <p className="noSelect">Hi there,</p>
              <p className="noSelect">I am Kelechi</p>
            </div>
            <p className="text-base md:text-xl text-text_transparent mt-4">
              I am a Fullstack Web Developer from Nigeria. I have a passion for
              creating beautiful, efficient, accessible, responsive and
              user-centric web projects. My blend of front-end and back-end
              expertise makes me a valuable addition to any team.
              <br />
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4 mt-8">
            <form className="flex items-center">
              <input
                type="text"
                value={subject1}
                onChange={(e) => setSubject1(e.target.value)}
                className="py-3 px-2 lg:w-64 md:w-[50%] rounded-l-lg outline-violet-600"
                placeholder="Email subject"
              />
              <a
                href={`mailto:${email}?subject=${
                  encodeURIComponent(subject1) || ""
                }&body=${encodeURIComponent(body) || ""}`}
                className="bg-violet-600 hover:bg-violet-500 transition duration-300 rounded-r-lg font-semibold text-text_color py-3 px-6"
              >
                Send me an email
              </a>
            </form>

            <a
              className="border border-violet-600 py-2 px-6 text-text_color font-semibold rounded flex items-center gap-2 hover:hover:border-text_color transition duration-300"
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
                onChange={(e) => setSubject2(e.target.value)}
                className="py-3 px-2 w-full rounded outline-violet-600 mb-4"
                placeholder="Email subject"
              />
              <a
                href={`mailto:${email}?subject=${
                  encodeURIComponent(subject2) || ""
                }&body=${encodeURIComponent(body) || ""}`}
                className="bg-violet-600 hover:bg-violet-500 transition duration-300 rounded font-semibold text-text_color py-3 px-6 w-full block text-center"
              >
                Send me an email
              </a>
            </form>

            <div className="w-full h-[0.007rem] bg-neutral-700"></div>

            <a
              className="w-full border border-violet-600 py-3 px-6 text-text_color font-semibold rounded flex items-center justify-center gap-2 hover:hover:border-text_color transition duration-300 mt-2"
              href="https://github.com/Kelechi095"
            >
              <FaGithub className="mt-[2px]" size={25} />
              <p>Check out my Github</p>
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}

      <section
        className=" w-full min-h-[60%] flex items-center"
        ref={skillsRef}
      >
        <div className="w-full">
          <div className="flex items-center gap-2 mb-4 mt-44 md:justify-center">
            <h2 className="text-text_color font-semibold text-xl md:text-4xl font-mono noSelect">
              Skills
            </h2>
          </div>
          <Card title="My Skills" />
        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section
        className=" w-full min-h-[60vh] flex items-center"
        ref={projectsRef}
      >
        <div>
          <div className="flex items-center gap-2 mb-4 mt-44 md:justify-center">
            <h2 className="text-text_color font-semibold text-xl md:text-4xl font-mono noSelect">
              Projects
            </h2>
          </div>
          <div className="flex md:justify-center">
            <p className="text-base md:text-xl text-text_transparent md:max-w-[80%] md:text-center mb-8">
              I have gained experience creating all sorts of websites; from
              single page websites to fullstack applications. Check out some of
              my projects below to see what I have been to up to.
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
            books, view profile of other users and add reviews to recommended books. The website includes features such as authentication, an admin dashboard, server side pagination, search feature with debounce, sort and filter feature, image upload and more."
            src={Booktekka}
            siteLink="https://booktekka.vercel.app"
            gitLink="https://github.com/Kelechi095/BookTekka-Nextjs"
          />

          <Project
            title="KelQuiz"
            tech="React, Typescript, Redux tool kit, React Query, Tailwind, Open Trivia Api"
            description1="KelQuiz is a frontend trivia game I built. It has 16 different categories of questions to choose from; each having ten different questions, as well as a countdown timer that increases the intensity of the game"
            description2="I used React query for server side state management and Redux tool kit for client side state management. The trivia data was fetched from the Open  trivia api"
            src={KelQuiz}
            siteLink="https://kelquiz.netlify.app"
            gitLink="https://github.com/Kelechi095/KelQuiz"
          />

          <Project
            title="Kelstores"
            tech="Next.js, TypeScript, Tailwind CSS, MongoDB, Prisma, Zustand, React Context Api"
            description1="Kelstores is an eccommerce application with user authentication, user authorization and an admin dashboard for managing products. "
            description2="I included rating and review functionality to improve user and customer experience. Customers can also keep track of the status of the orders"
            src={Kelstores}
            siteLink="https://kelstores.vercel.app"
            gitLink="https://github.com/Kelechi095/Kelstores"
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
