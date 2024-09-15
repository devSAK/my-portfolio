import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div className="w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2022 - 2024
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="System Engineer"
            subTitle="TATA Consultancy Servises (2024 - Present)"
            result="India"
            des="Played a key role in establishing a robust design system, a library for common
components across applications, leveraging Storybook for isolated development
and streamlined collaboration among teams."
          />
          <ResumeCard
            title="Assistance System Engineer"
            subTitle="TATA Consultancy Servises (2023 - 2024)"
            result="India"
            des="Actively contributed to the development of the front-end application utilizing a
micro-frontends architecture, ensuring modular design and seamless integration
of components."
          />
          <ResumeCard
            title="Assistance System Engineer - Trainee"
            subTitle="TATA Consultancy Servises (2022 - 2023)"
            result="India"
            des="Contributed as a UI Developer in an Ember to React migration project for an auto
insurance firm, collaborating closely with senior developers to ensure a smooth
transition."
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2022 - 2024
          </p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="System Engineer"
            subTitle="TATA Consultancy Servises (2024 - Present)"
            result="India"
            des="Participated in code reviews and adhered to best practices to enhance code
quality, security, and maintainability, resulting in a notable reduction in postrelease issues."
          />
          <ResumeCard
            title="Assistance System Engineer"
            subTitle="TATA Consultancy Servises (2023 - 2024)"
            result="India"
            des="Supported backend integration by working with the backend team to integrate
RESTful APIs into front-end capabilities."
          />
          <ResumeCard
            title="Assistance System Engineer - Trainee"
            subTitle="TATA Consultancy Servises (2022 - 2023)"
            result="India"
            des="Engaged with product owners, UI/UX designers, and QA engineers to gather
requirements, define project scope, and deliver solutions aligned with client needs."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
