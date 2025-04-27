import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
