import React from "react";

export const TitleSection = ({ SectionTitle, className = "" }) => {
  return (
    <h1
      className={`text-4xl md:text-7xl font-bold my-5 bg-gradient-to-r text-black from-white to-gray-500 bg-clip-text dark:text-transparent ${className}`}>
      {SectionTitle}
    </h1>
  );
};

export const SubTitle = ({ SubTitle, className = "" }) => {
  return (
    <h2
      className={`text-3xl font-bold my-5 text-center mt-15 px-8 dark:text-white text-black ${className}`}>
      {SubTitle}
    </h2>
  );
};
