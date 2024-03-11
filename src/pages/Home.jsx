import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import { FaRegCircle } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import Animation from "../components/Animation";

const Home = () => {
  return (
    <Wrapper>
      <Animation />
      <section className="min-h-[60vh] w-full mt-16">
        <div className="h-full grid grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-4 col-span-1 ">
            <div className=" h-full bg-gradient-to-t from-purple-400 w-1"></div>
            <FaRegCircle className="text-purple-400" size={20} />
            <div className=" h-full bg-gradient-to-b from-purple-400 w-1"></div>
          </div>
          <div className="col-span-11">
            <div className="md:max-w-[70%]">
              <h1 className="hidden lg:block text-7xl font-semibold text-text_color">
                Hi there, I am Kelechi
              </h1>
              <div className="text-5xl lg:hidden font-semibold text-text_color">
                <p>Hi there,</p>
                <p>I am Kelechi</p>
              </div>
              <p className="text-sm md:text-lg text-text_transparent mt-4">
                I am a Fullstack Web Developer. I have a passion for creating
                beautiful, efficient, accessible, responsive and user-centric
                web projects. My blend of front-end and back-end expertise makes
                me a valuable addition to any team.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-4 mt-8">
              <form className="flex items-center">
                <input
                  type="text"
                  className="py-3 px-2 w-64 rounded-l-lg outline-purple-500"
                  placeholder="Your email Address"
                />
                <button className="bg-purple-700 hover:bg-purple-600 transition duration-300 rounded-r-lg font-semibold text-text_color py-3 px-6">
                  Send me an email
                </button>
              </form>
              

              <button className="border border-purple-400 py-3 px-6 text-text_color font-semibold rounded flex items-center gap-4 hover:hover:border-text_color transition duration-300">
                <p>Click to see my projects</p>
                <IoChevronForward className="mt-[2px]" />
              </button>
            </div>


            <div className="flex flex-col md:hidden items-center gap-4 mt-8">
            <form className=" md:hidden w-full items-center">
                <input
                  type="text"
                  className="py-3 px-2 w-full rounded outline-purple-500 mb-4"
                  placeholder="Your email Address"
                />
                <button className="bg-purple-700 w-full hover:bg-purple-600 transition duration-300 rounded font-semibold text-text_color py-3 px-6">
                  Send me an email
                </button>
              </form>
              
              <div className="w-full h-[0.007rem] bg-neutral-700"></div>

              <button className="w-full border border-purple-400 py-3 px-6 text-text_color font-semibold rounded flex items-center justify-center gap-4 hover:hover:border-text_color transition duration-300 mt-2">
                <p>Click to see my projects</p>
                <IoChevronForward className="mt-[2px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[60vh] w-full mt-6 md:mt-0">
        <div className="h-full grid grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-4 col-span-1 ">
            <div className=" h-full bg-gradient-to-t from-purple-500 w-1"></div>
            <FaRegCircle className="text-purple-500" size={20} />
            <div className=" h-full bg-gradient-to-b from-purple-500 w-1"></div>
          </div>
          <div className="col-span-11 w-full">
            <Card title="My Skills" />
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full"></section>
    </Wrapper>
  );
};

export default Home;
