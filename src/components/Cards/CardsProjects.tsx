import React from "react";
import { projects } from "../../constants/constants";

const CardsProjects = () => {
  return (
    <>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <div
            key={id}
            style={{ boxShadow: "var(--shadow-cards)" }}
            className="bg-primary rounded-xl hover:shadow-m transition-shadow duration-300 w-[320px] md:w-[400px] m-5 ">
            <img
              className="w-full h-80 object-cover md:h-80 m-auto"
              src={image}
              alt=""
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold my-5 text-center">{title}</h2>
              <p className="text-gray-400 mt-2 text-xl text-justify my-5 w-full">
                {description}
              </p>
              <div className="my-5 text-center">
                <h3 className="text-white my-5">Tech Stack</h3>
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
                <a href={source} className="text-blue-500 mt-4 block">
                  Source
                </a>
                <a href={visit} className="text-blue-500 mt-4 block">
                  Visit
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default CardsProjects;
