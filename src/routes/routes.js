import { React } from "react";
import { Routes, Route } from "react-router-dom";
import ComponentOne from "../components/componentOne";
import ComponentTwo from "../components/componentTwo";
import Home from "../components/home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
      <Route element={<ComponentOne />} path="/componentOne"></Route>
      <Route element={<ComponentTwo />} path="/componentTwo"></Route>
    </Routes>
  );
};

export default RoutesComponent;
