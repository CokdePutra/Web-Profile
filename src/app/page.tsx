"use client";
import React from "react";
import { Layout } from "../layout/Layout";
import Button from "@/components/Button/Button";
import CardsProjects from "@/components/Cards/CardsProjects";
import { TitleSection } from "@/components/Common/TitleSection";
import Section from "@/components/Section/Section";
import Description from "@/components/Common/Description";
import { MdDescription } from "react-icons/md";

export default function Home() {
  return (
    <Layout>
      <Section id="home" className="justify-between ">
        <div className="left max-w-[600px] p-5 ">
          <TitleSection SectionTitle="Welcome to Cokde Putra Profile" />
          <Description
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            reiciendis deleniti voluptatibus aperiam recusandae earum inventore
            veniam, ducimus laudantium porro eveniet ipsam eum, alias, officiis
            nisi aliquam eligendi excepturi tenetur!."
          />
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

      {/* Project  Section */}
      <Section id="projects">
        <div className="p-5 w-full">
          <TitleSection SectionTitle="Projects" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center p-3 w-full max-w-6xl mx-auto my-10">
            <CardsProjects />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
