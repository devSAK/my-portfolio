import React from "react";
import Title from "../layouts/Title";
import Card from "../features/Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-auto py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Stratagy"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="To add lorem ipsum in Visual Studio Code, you can open the command palette by pressing F1"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
