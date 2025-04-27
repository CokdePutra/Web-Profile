"use client";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  font-family: "Space Grotesk", sans-serif;
`;
