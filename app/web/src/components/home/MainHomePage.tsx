import React from "react";
import Bio from "./Bio.home";
import Project from "./Project.home";

const MainHomePage = () => {
  return (
    <>
      <main id="main-content" className="max-w-2xl px-5 sm:px-12 md:px-2 mx-auto">
        <Bio />
        <Project />
      </main>
    </>
  );
};

export default MainHomePage;
