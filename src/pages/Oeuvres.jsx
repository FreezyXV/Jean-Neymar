import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/oeuvres.css";
import Book1 from "../assets/cover0.240e1126.jpg";
import Book2 from "../assets/cover1.9f367c22.jpg";
import Book3 from "../assets/cover2.55ab26d3.jpg";

function Oeuvres() {
  const [hoveredBook, setHoveredBook] = useState(null);

  const loremText =
    "« Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia non ex sequi itaque delectus quibusdam natus nihil tempore ipsam incidunt magni provident consequatur, repudiandae corporis porro nobis quidem dolores? »";

  return (
    <div className="oeuvres">
      <h1 className="oeuvresTitle">Ma vie, mon oeuvre</h1>
      <div className="booksDiv">
        <div
          className="bookDiv"
          onMouseEnter={() => setHoveredBook(1)}
          onMouseLeave={() => setHoveredBook(null)}
        >
          <Link to="/book/0">
            <img src={Book1} alt="Book 1" className="bookImg" />
          </Link>
        </div>
        <div
          className="bookDiv"
          onMouseEnter={() => setHoveredBook(2)}
          onMouseLeave={() => setHoveredBook(null)}
        >
          <Link to="/book/1">
            <img src={Book2} alt="Book 2" className="bookImg" />
          </Link>
        </div>
        <div
          className="bookDiv"
          onMouseEnter={() => setHoveredBook(3)}
          onMouseLeave={() => setHoveredBook(null)}
        >
          <Link to="/book/2">
            <img src={Book3} alt="Book 3" className="bookImg" />
          </Link>
        </div>
      </div>
      <div className="hoverTextDiv">{hoveredBook && <p>{loremText}</p>}</div>
      <Outlet />
    </div>
  );
}

export default Oeuvres;
