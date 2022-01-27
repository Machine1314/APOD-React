import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nasaphoto" element={<NasaPhoto />}></Route>
      </Routes>     
      </div>
    </BrowserRouter>
  );
}