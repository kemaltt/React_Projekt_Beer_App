import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function BeerRandomDetail() {
  const [beers, setBeers] = useState([]);
  let test;

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((json) => setBeers(json));
  }, [test]);

  console.log(beers);

  return (
    <div>
      <div className="beer_detail">
        <img src={beers.image_url} alt="" />
        <div className="detail_body">
          <h1>{beers.name} </h1>
          <h2>{beers.tagline}</h2>
          <div>
            <h4>First brewed:</h4>
            <h4>{beers.first_brewed} </h4>
          </div>
          <div>
            <h4>Attenuation level: </h4>
            <h4>{beers.attenuation_level} </h4>
          </div>

          <p> {beers.description} </p>

          <Link className="detail_btn" to="/beer">
            <i class="las la-arrow-left"></i>
          </Link>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
