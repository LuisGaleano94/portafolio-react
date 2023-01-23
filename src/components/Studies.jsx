import React from "react";
import StudiesItem from "./StudiesItem";

const data = [
  {
    año: 2022,
    titulo: "Master en CSS",
    escuela: "Udemy",
    detalles: "Responsive, SASS, Flexbox, Grid y Bootstrap",
  },
  {
    año: 2022,
    titulo: "Master en JavaScript",
    escuela: "Udemy",
    detalles: "JS, jQuery, Angular, NodeJS",
  },
  {
    año: 2022,
    titulo: "EF SET English Certificatet",
    escuela: "EF Standard English Test",
    detalles: "B2 Upper Intermediate",
  },
];
const Studies = () => {
  return (
    <div id="studies" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Estudios
      </h1>
      {data.map((item, idx) => (
        <StudiesItem
          key={idx}
          año={item.año}
          titulo={item.titulo}
          escuela={item.escuela}
          detalles={item.detalles}
        />
      ))}
    </div>
  );
};

export default Studies;
