import React from "react";

// const StyledLinkButton = styled.a`
//   color: #fff;
//   border: 1px solid rgba(255, 255, 255, 0.33);
//   box-sizing: border-box;
//   border-radius: 999px;
//   padding: 16px 24px;
//   font-weight: 600;
//   font-size: 20px;
//   line-height: 16px;
//   width: fit-content;
//   margin-top: 32px;
//   margin-bottom: 50px;
//   cursor: pointer;
//   transition: 0.4s ease;
//   display: flex;
//   justify-content: center;
//   background: linear-gradient(270deg, #ff622e 0%, #b133ff 100%);

//   &:focus {
//     outline: none;
//   }

//   &:hover {
//     color: #0f1624;
//     background: #fff;
//     border: 1px solid #fff;
//     transition: all 0.4s ease-in-out;
//     box-shadow: 0px 4px 8px rgba(46, 49, 55, 0.15),
//       0px 0px 4px rgba(20, 20, 55, 0.3);
//     transform: translateY(-1px);
//   }

//   &:active {
//     background: #e0e4eb;
//     border: 1px solid #304169;
//     box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
//       inset 0px 0px 4px rgba(20, 20, 55, 0.3);
//   }

//   @media (max-width: 768px) {
//     margin-top: 24px;
//     margin-bottom: 64px;
//     padding: 16px 24px;
//     width: fit-content;
//     font-size: 20px;
//     line-height: 20px;
//   }

//   @media (max-width: 640px) {
//     margin-top: 16px;
//     margin-bottom: 40px;
//     padding: 8px 16px;
//     width: 100%;
//     font-size: 14px;
//     line-height: 16px;
//   }
// `;

const Button = ({ href, text }) => {
  return (
    <a href={href} className="styled-link-button">
      {text}
    </a>
  );
};

export default Button;
