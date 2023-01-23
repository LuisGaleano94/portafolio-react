import React from "react";
import ProjectItem from "./ProjectItem";
import banco from "../assets/banco.jpg";
import calculadora from "../assets/calculadora.jpg";
import clicks from "../assets/clicks.jpg";
import viajes from "../assets/viajes.jpg";
import comida from "../assets/comida.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Proyectos
      </h1>
      <p className="text-center py-8">
        Los proyectos que se presentan a continuacion fueron elaborados
        principalmente con React, una de las tecnologias más competitivas y de
        mayor crecimiento en los ultimos años. Los proyectos aquí presentes son
        una muestra de mi aprendizaje y desarrollo en el mundo del desarrollo
        web
      </p>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <a
          href="https://luisgaleano94.github.io/comida-react/"
          target={"_blank"}
        >
          <ProjectItem img={comida} title="Food Page" />
        </a>
        <a href="https://luisgaleano94.github.io/bank-react/" target={"_blank"}>
          <ProjectItem img={banco} title="Modern Bank Page" />
        </a>
        <a href="https://luisgaleano94.github.io/viajes/" target={"_blank"}>
          <ProjectItem img={viajes} title="Travels Page" />
        </a>
        <a
          href="https://luisgaleano94.github.io/calculadora-interactiva/"
          target={"_blank"}
        >
          <ProjectItem img={calculadora} title="Calculator App" />
        </a>
        <a
          href="https://luisgaleano94.github.io/contador-clicks/"
          target={"_blank"}
        >
          <ProjectItem img={clicks} title="Click counter App" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
