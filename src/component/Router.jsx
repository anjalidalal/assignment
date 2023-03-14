import React from "react";
import { Route, Routes } from "react-router";
import Authentication from "./Authentication";
import Home from "./home/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Authentication />} />
      </Routes>
    </>
  );
};

export default Routers;
