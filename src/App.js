import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleDog from "./components/SingleDog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<SingleDog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
