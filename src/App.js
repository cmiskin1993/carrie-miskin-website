import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Resume from "./Pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
