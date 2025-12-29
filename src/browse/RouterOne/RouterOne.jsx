import React from "react";
import { Routes, Route } from "react-router-dom";
import Layouts from "./Layout/Layouts";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Skill from "./Pages/Skill";
import Contact from "./Pages/Contact";

const RouterOne = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterOne;
