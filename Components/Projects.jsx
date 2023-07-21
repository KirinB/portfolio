import ProjectItem from "./ProjectItem";
import ethanImg from "../public/assets/projects/ethan.jpg";
import travelImg from "../public/assets/projects/travel.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import youtubeImg from "../public/assets/projects/youtube.jpg";
function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ethan Portfolio Clone"
            backgroundImg={ethanImg}
            projectUrl="/ethan"
            library="NextJS"
          />
          <ProjectItem
            title="TravelPu"
            backgroundImg={travelImg}
            projectUrl="/travel"
            library={"React"}
          />
          <ProjectItem
            title="Netflix UI"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Youtube UI"
            backgroundImg={youtubeImg}
            projectUrl="/youtube"
            library={"React"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
