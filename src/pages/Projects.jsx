import React from "react";
import movie from "../../public/projects/movies.png";
import { ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react";
const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Movie Search App",
      description: "Find all the latest and oldest movies.",
      image: movie,
      tags: ["React", "TailwindCss", "Appwrite"],
      demoURL: "https://movie-seven-eta.vercel.app/",
      githubURL: "https://github.com/SujibShrestha/Movie",
    },
  ];
  return (
    <section className="px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mv-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-background text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              
              <h3 className="text-lg text-primary font-semibold mb-1">
                {project.title}
              </h3>
              <p className=" text-sm mb-4">{project.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary
                  transition-colors duration-300
                  ">
                    <ExternalLinkIcon size={20} className="" />
                  </a>
                  <a href={project.githubURL}><GithubIcon className="text-foreground/80 hover:text-primary
                  transition-colors duration-300" size={20}/></a></div>
                </div>
              </div>
            </div>
          ))}
        </div>

<div className="text-center mt-12">
  <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/SujibShrestha">Check My Github <GithubIcon/> <ArrowRight size={16}/> </a>
</div>

      </div>
    </section>
  );
};

export default Projects;
