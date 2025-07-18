import React from "react";

const Description = ({ className = "", description }) => {
  return (
    <p
      className={`text-lg my-4 dark:text-gray-400 text-gray-700 text-justify ${className}`}>
      {description}
    </p>
  );
};

export default Description;
// Compare this snippet from src/components/Common/Description.jsx:
