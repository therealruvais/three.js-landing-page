import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import "./home.css";
import ComputerCanvas from "./ComputerCanvas";

const slide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

const Home = () => {
  useEffect(() => {
    slide();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="head">
          <h1>Crafting Your Digital Vision</h1>
          <p>
            Elevate your online presence with our expert web development
            services.
            <br /> From responsive designs to powerful web applications,
            <br /> we transform your ideas into engaging online experiences
          </p>
        </div>
        <div className="three">
          <ComputerCanvas />
        </div>
      </div>
    </div>
  );
};

export default Home;
