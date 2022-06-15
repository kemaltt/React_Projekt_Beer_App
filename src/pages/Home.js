import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="beer_container">
        <h2>Welcome to my Beer Garden</h2>

        <Link className="beer_link" to={`/beer`}>
          <div className="beer_card">
            <img src="beers.png" alt="" />
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus inventore qui cumque voluptates? Quis, placeat.
            </p>
          </div>
        </Link>

        <Link className="beer_link" to={`/random`}>
          <div className="beer_card">
            <img src="random.png" alt="" />
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus inventore qui cumque voluptates? Quis, placeat.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
