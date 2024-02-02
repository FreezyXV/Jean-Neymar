import React from "react";
import Book3 from "../assets/cover2.55ab26d3.jpg";
import "../assets/Accueil.css";
import "../assets/sidebar.css"
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="accueil">
      <h1 className="accueilTitle">Prochainement en librairie!</h1>
      <main className="accueilMain">

      <Link to="/book/2">
            <img src={Book3} alt="Book 3" className="bookImg"/>
          </Link>


        <h2>
          Il me reste encore <br /> un œil
        </h2>
        <p className="accueilTexte">
          « Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          molestias dolorum expedita necessitatibus rem ullam vel consectetur
          sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo
          dolore libero consectetur consequuntur! »
        </p>
      </main>
    </div>
  );
}

export default Accueil;
