"use client";
import React from "react";
import { Layout } from "../layout/Layout";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <Layout>
      <div>
        <section
          id="hero"
          className="h-auto my-10 md:p-5 lg:p-10 md:mx-10 flex items-center justify-between ">
          <div className="left max-w-[600px] p-5 ">
            <h1 className="text-3xl md:text-6xl font-bold my-5">
              Welcome to Cokde Putra Profile{" "}
            </h1>
            <p className="text-lg mt-4 text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              reiciendis deleniti voluptatibus aperiam recusandae earum
              inventore veniam, ducimus laudantium porro eveniet ipsam eum,
              alias, officiis nisi aliquam eligendi excepturi tenetur!.
            </p>
            <Button href="#contact" text="Download CV" />
          </div>
          <div className="right hidden md:block">
            <img
              src="images/profile-pic.jpg"
              alt=""
              className="max-w-[355px] h-auto rounded-tr-[165px] rounded-bl-[165px] shadow-lg px-5"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
