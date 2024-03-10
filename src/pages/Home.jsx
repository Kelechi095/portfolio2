import Card from "../components/Card";
import HomeContent from "../components/HomeContent";
import Wrapper from "../components/Wrapper";
import { FaRegUser } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { BsSuitcaseLg } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import Animation from "../components/Animation";



const Home = () => {
  return (
    <Wrapper>
        <Animation />
      <section className="min-h-screen w-full mt-16">
        <div className="h-full grid grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-4 col-span-1 ">
            <div className=" h-full bg-gradient-to-t from-purple-400 w-1"></div>
            <FaRegCircle className="text-purple-400" size={40} />
            <div className=" h-full bg-gradient-to-b from-purple-400 w-1"></div>
          </div>
          <div className="col-span-11">
            <div className="max-w-[80%]">
              <h1 className="text-7xl font-semibold text-text_color">My Name Is Kelechi</h1>
              <p className="text-2xl text-text_transparent mt-4">I am a fullstack web developer from Nigeria</p>
            </div>

            <div className="flex items-center gap-4 mt-6">
                <form className="flex gap-1 items-center">
                    <input type="text" />
                    <button>Send my an email</button>
                </form>

                <button className="border border-purple-400 py-2 px-6 text-text_color font-semibold rounded flex items-center gap-4 hover:hover:border-text_color transition duration-300">
                    <p>Click to see my projects</p>
                    <IoChevronForward className="mt-[2px]"/>
                    </button>
            </div>
            
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full">
        <div className="h-full grid grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-4 col-span-1 ">
            <div className=" h-full bg-gradient-to-t from-text_green w-1"></div>
            <FaRegUser className="text-text_green" size={40} />
            <div className=" h-full bg-gradient-to-b from-text_green w-1"></div>
          </div>
          <div className="col-span-11">
            <div className="max-w-[60%]">
              <HomeContent
                title="About me"
                body="I am a web developer with 1 year experience. I help create features for web apps, fixes and continous support to existing websites and applications."
                color="green"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                title="Frontend development"
                body="I can work as a frontend end developer"
              />
              <Card
                title="Backend development"
                body="I can work as a backend end developer"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full">
        <div className="h-full grid grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-4 col-span-1 ">
            <div className=" h-full bg-gradient-to-t from-cyan-500 w-1"></div>
            <LiaToolsSolid className="text-cyan-500" size={40} />
            <div className=" h-full bg-gradient-to-b from-cyan-500 w-1"></div>
          </div>
          <div className="col-span-11">
            <div className="max-w-[60%]">
              <HomeContent
                title="Skills"
                body="I am a web developer with 1 year experience. I help create features for web apps, fixes and continous support to existing websites and applications."
                color="cyan"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                title="Frontend development"
                body="I can work as a frontend end developer"
              />
              <Card
                title="Backend development"
                body="I can work as a backend end developer"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full">
        <div className="h-full grid grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-4 col-span-1 ">
            <div className=" h-full bg-gradient-to-t from-pink-400 w-1"></div>
            <BsSuitcaseLg className="text-pink-400" size={40} />
            <div className=" h-full bg-gradient-to-b from-pink-400 w-1"></div>
          </div>
          <div className="col-span-11">
            <div className="max-w-[60%]">
              <HomeContent
                title="Projects"
                body="I am a web developer with 1 year experience. I help create features for web apps, fixes and continous support to existing websites and applications."
                color="pink"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                title="Frontend development"
                body="I can work as a frontend end developer"
              />
              <Card
                title="Backend development"
                body="I can work as a backend end developer"
              />
            </div>
          </div>
        </div>
      </section>

      
    </Wrapper>
  );
};

export default Home;
