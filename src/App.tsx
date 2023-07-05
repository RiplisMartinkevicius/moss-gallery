import React from "react";
import HomePage from "./homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "./gallery/GalleryPage";
import AboutMoss from "./infopage/AboutMoss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about-moss" element={<AboutMoss />} />
    </Routes>
  );
};

export default App;
