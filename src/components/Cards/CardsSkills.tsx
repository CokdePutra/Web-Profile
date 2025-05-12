import React from "react";
import Image from "next/image";

interface SkillCardProps {
  skill: string;
  level: string;
  img: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ img, skill, level }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 w-64 text-center flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
      <Image
        src={img}
        alt={skill}
        className="h-16 w-16 aspect-square flex items-center justify-center mb-4"
        width={500}
        height={300}
      />
      {/* <img src={img} alt={skill} className="h-16 mx-auto mb-4" /> */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        {skill}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{level}</p>
    </div>
  );
};

export default SkillCard;
