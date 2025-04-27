import React from "react";
import Navbar from "@/components/Navbar";

const HomePage = () => {
    return (
      <div>
        <Navbar />
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        </section>
        {/* Tambahkan konten lain di sini */}
      </div>
    );
  };

  export default HomePage;