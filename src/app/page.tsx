"use client";
import React, { useState } from "react";
import { Layout } from "../layout/Layout";
import Button from "@/components/Button/Button";
import CardsProjects from "@/components/Cards/CardsProjects";
import { TitleSection } from "@/components/Common/TitleSection";
import Section from "@/components/Section/Section";
import Description from "@/components/Common/Description";
import CardsSkills from "@/components/Cards/CardsSkills";
import { MySkills } from "@/constants/constants";

export default function Home() {
  const [activeSkills, setActiveSkills] = useState<string>("all");
  const filteredSkills =
    activeSkills === "all"
      ? MySkills
      : MySkills.filter((skill) => skill.tag === activeSkills);
  return (
    <Layout>
      <Section id="home" className="justify-between ">
        <div className="left max-w-[600px] p-5 ">
          <TitleSection SectionTitle="Welcome to Cokde Putra Profile" />
          <Description description="Hello, I am Cokde Putra, a passionate web developer with a keen interest in creating dynamic and responsive web applications. I specialize in both frontend and backend development, ensuring a seamless user experience across all devices." />
          <Button href="#" text="Download CV" />
        </div>
        <div className="right hidden md:block">
          <img
            src="images/profile-pic.jpg"
            alt=""
            className="max-w-[385px] h-auto rounded-tr-[165px] rounded-bl-[165px] shadow-lg px-5"
          />
        </div>
      </Section>

      {/* Project Section */}
      <Section id="projects">
        <div className="p-5 w-full">
          <TitleSection SectionTitle="Projects" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center p-3 w-full max-w-6xl mx-auto my-10">
            <CardsProjects />
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="Skills">
        <div className="p-5 w-full">
          <TitleSection SectionTitle="My Skills" />
          <div>
            <ul className="flex flex-row gap-5 justify-center items-center p-3 w-full max-w-6xl mx-auto my-10 text-xl ">
              <li
                id="all"
                className={`cursor-pointer   ${
                  activeSkills === "all"
                    ? "font-bold dark:text-primary dark:bg-white bg-primary text-white px-3 py-2 rounded-lg"
                    : "transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
                }`}
                onClick={() => setActiveSkills("all")}>
                All
              </li>
              <li
                id="frontend"
                className={`cursor-pointer ${
                  activeSkills === "frontend"
                    ? "font-bold dark:text-primary dark:bg-white bg-primary text-white px-3 py-2 rounded-lg"
                    : "transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
                }`}
                onClick={() => setActiveSkills("frontend")}>
                Frontend
              </li>
              <li
                id="backend"
                className={`cursor-pointer ${
                  activeSkills === "backend"
                    ? "font-bold dark:text-primary dark:bg-white bg-primary text-white px-3 py-2 rounded-lg"
                    : "transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out"
                }`}
                onClick={() => setActiveSkills("backend")}>
                Backend
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-5 justify-center items-center p-3 w-full max-w-6xl mx-auto my-10 duration-500">
            {filteredSkills.map((skill) => (
              <CardsSkills
                key={skill.skill}
                skill={skill.skill}
                level={skill.level}
                img={skill.img}
              />
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
