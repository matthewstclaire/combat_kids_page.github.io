import React from "react";
import FirstWeeks from "./FirstWeeks";
import WhiteCurriculum from "./WhiteCurriculum";
import Home from "./Home";
import HelpfulLinks from "./HelpfulLinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/first-weeks" element={<FirstWeeks />} />
        <Route path="white-to-gray-curriculum" element={<WhiteCurriculum />} />
        <Route path="helpful-links" element={<HelpfulLinks />} />
      </Routes>
    </BrowserRouter>
  );
}
