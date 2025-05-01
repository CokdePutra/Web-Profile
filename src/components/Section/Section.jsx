import React from "react";

const Section = ({ children, className = "", id }) => {
  return (
    <section
      id={id}
      className={`h-auto my-10 md:p-5 lg:p-10 md:mx-10 flex items-center  ${className}`}>
      {children}
    </section>
  );
};

export default Section;
// Compare this snippet from src/components/Section/Section.jsx:
