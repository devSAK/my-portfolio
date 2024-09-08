import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          src={projectOne}
        />
        <ProjectsCard
          title="E-COMMERCE WEBSITE"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          src={projectTwo}
        />
        <ProjectsCard
          title="CHATTING APP"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          src={projectThree}
        />
        <ProjectsCard
          title="E-COMMERCE WEBSITE"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          src={projectTwo}
        />
        <ProjectsCard
          title="CHATTING APP"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Projects;
