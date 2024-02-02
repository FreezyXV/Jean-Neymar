import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Sidebar from "./sidebar/Sidebar";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Oeuvres from "./pages/Oeuvres";
import BookOne from "./pages/BookOne"; // Import the BookOne component
import BookTwo from "./pages/BookTwo"; // Import the BookTwo component
import BookThree from "./pages/BookThree"; // Import the BookThree component

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Oeuvres />} /> {/* Update this route */}
        <Route path="/book/0" element={<BookOne />} /> {/* Add route for BookOne */}
        <Route path="/book/1" element={<BookTwo />} /> {/* Add route for BookTwo */}
        <Route path="/book/2" element={<BookThree />} /> {/* Add route for BookThree */}
      </Routes>
    </div>
  );
}

export default App;



