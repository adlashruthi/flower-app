import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Pricing from "./routes/Pricing";
import Contact from "./routes/Contact";
import Gallery from "./routes/Gallery";
import Bouquets from "./routes/Bouquets";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bouquets" element={<Bouquets />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
