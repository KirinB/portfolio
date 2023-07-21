import About from "@/components/About";
import Contact from "@/components/Contact";
import Main from "@/components/Main";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kirin | Front-End Developer</title>
        <meta name="desription" content="Kirin | Front-End Developer" />
        <link rel="icon" href="./logo.ico" />
      </Head>

      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
