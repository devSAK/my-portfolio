import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div className="w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-4xl font-bold">Achievement</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech - CSE"
            subTitle="Aliah University"
            result="7.02/10"
            des="The training provided by university in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary Education - Science"
            subTitle="Manikore High School (2013 - 2015)"
            result="81.8 %"
            des="Higher Secondary Education is tertiary education leading to award of an academic degree. Higher Secondary Education, also called Post-secondary Education."
          />
          <ResumeCard
            title="Secondary Education"
            subTitle="Hariharpara High School (2012 - 2013)"
            result="78.4 %"
            des="Secondary Education or Post-primary Education covers two phases on the West Bengal Board of Secondary Education scale."
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="System Engineer"
            subTitle="TATA Consultancy Servises (2024 - Present)"
            result="India"
            des="The training provided by university in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Assistance System Engineer"
            subTitle="TATA Consultancy Servises (2023 - 2024)"
            result="India"
            des="Higher Secondary Education is tertiary education leading to award of an academic degree. Higher Secondary Education, also called Post-secondary Education."
          />
          <ResumeCard
            title="Assistance System Engineer - Trainee"
            subTitle="TATA Consultancy Servises (2022 - 2023)"
            result="India"
            des="Secondary Education or Post-primary Education covers two phases on the West Bengal Board of Secondary Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
