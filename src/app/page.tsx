"use client";
import React, { useState } from "react";
import { Layout } from "../layout/Layout";
import Button from "@/components/Button/Button";
import CardsProjects from "@/components/Cards/CardsProjects";
import { TitleSection } from "@/components/Common/TitleSection";
import Section from "@/components/Section/Section";
import Description from "@/components/Common/Description";
import CardsSkills from "@/components/Cards/CardsSkills";
import { MySkills, ExperienceData } from "@/constants/constants";
import Image from "next/image";

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
          <Description description="Hello, I am Cokde Putra, a passionate Web Developer, Data Analyst, and Revenue Executive with a keen interest in creating dynamic, data-driven applications. I specialize in building responsive web solutions, analyzing hospitality metrics, and optimizing revenue strategies to ensure a seamless and impactful user experience." />
          <Button
            href="/CV_Cokde_Putra.pdf"
            download="CV_Cokde_Putra.pdf"
            text="Download CV"
          />
        </div>
        <div className="right hidden md:block">
          <Image
            src="/images/profile-pic.jpg"
            alt="Profile Picture"
            className="max-w-[385px] h-auto rounded-tr-[165px] rounded-bl-[165px] shadow-lg px-5"
            width={385}
            height={385}
          />
        </div>
      </Section>

      {/* Prestasi Section */}
      <Section id="achievements">
        <div className="p-5 w-full mx-auto">
          <TitleSection SectionTitle="Experience & Achievements" />

          <div className="mt-8 flex flex-col gap-6">
            {ExperienceData.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-6 border-l-2 border-blue-500 dark:border-blue-400">
                {/* Lingkaran kecil pada garis timeline */}
                <div className="absolute w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full -left-[7px] top-1.5"></div>

                {/* Teks Tahun */}
                <span className="text-sm font-semibold text-blue-500 dark:text-blue-400 mb-1 block">
                  {exp.period}
                </span>

                {/* Teks Jabatan & Tempat */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {exp.role}{" "}
                  <span className="text-gray-500 font-normal">
                    @ {exp.company}
                  </span>
                </h3>

                {/* Deskripsi list (bullet points) */}
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm md:text-base leading-relaxed">
                      {point.includes("Key Project:") ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: point
                              .replace(
                                "Key Project:",
                                "<strong>Key Project:</strong>",
                              )
                              .replace(
                                "Unitu Visual",
                                "<strong>Unitu Visual</strong>",
                              ),
                          }}
                        />
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
      <Section id="skills">
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
