import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLanding from "./routes/home/HomeLanding";
import HakeLanding from "./routes/hake/HakeLanding";
import TibberLanding from "./routes/tibber/TibberLanding";
import LyricsLanding from "./routes/lyrics/LyricsLanding";
import NotFound from "./routes/*/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/hake" element={<HakeLanding />} />
        <Route path="/tibber" element={<TibberLanding />} />
        <Route path="/lyrics" element={<LyricsLanding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
