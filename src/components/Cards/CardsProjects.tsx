import React from "react";
import { projects } from "../../constants/constants";
import ButtonProjects from "../Button/ButtonProjects";
import Description from "../Common/Description";
import { SubTitle } from "../Common/TitleSection";

const CardsProjects = () => {
  return (
    <>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <div
            key={id}
            style={{ boxShadow: "var(--shadow-cards)" }}
            className="bg-primary rounded-xl hover:shadow-m transition-shadow duration-300 w-[320px] md:w-[420px] m-5 flex flex-col justify-between">
            <div className="flex flex-col justify-between">
              <img
                className="w-full h-80 object-cover md:h-80"
                src={image}
                alt=""
              />
              <SubTitle SubTitle={title} />
              <Description className="text-xl px-8" description={description} />
            </div>
            <div className="p-8">
              <div className="my-7 text-center">
                <h3 className="text-white my-5">Stack</h3>
                <ul className="w-full flex gap-2 justify-center m-auto md:justify-around p-3 flex-wrap">
                  {tags.map((tag, index) => (
                    <li
                      key={index}
                      className="text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-sm my-2">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between mt-4">
                <ButtonProjects href={source} target="_blank" text="Source" />
                <ButtonProjects href={visit} target="_blank" text="Visit" />
                {/* <a href={visit} className="text-blue-500 mt-4 block">
                  Visit
                </a> */}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default CardsProjects;
