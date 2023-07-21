import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Typed from "react-typed";
function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Kirin</span>
          </h1>
          <Typed
            className="text-4xl sm:text-5xl md:text-6xl py-4 text-gray-600 max-w-[70%] m-auto"
            strings={["A Front-End Developer", "A UX/UI Designer"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          {/* <h1 className="py-4 text-gray-700">A Front-End Developer</h1> */}
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specialzing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.facebook.com/ebs.bi/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiFillFacebook />
              </div>
            </a>
            <a
              href="https://github.com/KirinB"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Main;
