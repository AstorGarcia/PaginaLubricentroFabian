import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from "./inicio"
import Productos from "./productos"
import Service from "./service"

const Body = () => {
  return (
    <Routes>
    <Route path="/" element={<Inicio/>} />
    <Route path="/Productos" element={<Productos/>} />
    <Route path="/Service" element={<Service />} />
    </Routes>
  );
};

export default Body;
