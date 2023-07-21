import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Main from "@/Components/Main";

import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
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
