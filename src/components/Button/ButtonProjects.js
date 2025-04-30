import React from "react";

const ButtonProjects = ({ text, ...props }) => {
  return (
    <a
      {...props}
      className="text-gray-200 border border-white/33 box-border rounded-full py-4 px-6 text-[20px] leading-[16px] w-fit mt-8 mb-[50px] cursor-pointer transition-all duration-400 ease-in-out flex justify-center bg-dark-red hover:text-white hover:bg-hover-dark-red hover:border-white hover:shadow-[0px_4px_8px_rgba(46,49,55,0.15),0px_0px_4px_rgba(20,20,55,0.3)] hover:translate-y-[-1px] active:bg-[#e0e4eb] active:border-[#304169] active:shadow-[inset_0px_2px_1px_rgba(46,49,55,0.15),inset_0px_0px_4px_rgba(20,20,55,0.3)]">
      {text}
    </a>
  );
};

export default ButtonProjects;
