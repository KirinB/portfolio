import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiFillFacebook,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBackground, setNavBackground] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  useEffect(() => {
    if (
      router.asPath === "/ethan" ||
      router.asPath === "/travel" ||
      router.asPath === "/netflix" ||
      router.asPath === "/youtube"
    ) {
      setNavBackground("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNavBackground("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBackground}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={"/"}>
          <Image
            src="/../public/assets/logo.png"
            alt=""
            width={80}
            height={50}
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/#about"} className="md:scroll-smooth">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href={"/#projects"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} style={{ color: `${linkColor}` }} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex  w-full items-center justify-between">
              <Image
                src={"/../public/assets/logo.png"}
                alt=""
                width={87}
                height={35}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href={"/"}>
                <li className="py-4 text-sm hover:text-[#5651e5]">Home</li>
              </Link>
              <Link href={"/#about"}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5]"
                >
                  About
                </li>
              </Link>
              <Link href={"/#skills"}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5]"
                >
                  Skills
                </li>
              </Link>
              <Link href={"/#projects"}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5]"
                >
                  Projects
                </li>
              </Link>
              <Link href={"#contact"} scroll={true}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#5651e5]"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.facebook.com/ebs.bi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillFacebook />
                  </div>
                </a>
                <a
                  href="https://github.com/KirinB"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleNav} className="w-full h-full"></div>
      </div>
    </div>
  );
}

export default Navbar;
