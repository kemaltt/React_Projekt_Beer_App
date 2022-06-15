import React, { useState, useEffect } from "react";
import BeerItem from "../components/BeerItem";
import Navbar from "./Navbar";

export default function BeerList() {
  const [beers, setBeers] = useState([]);
  let test;
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((json) => setBeers(json));
  }, [test]);

  // console.log(beers);

  return (
    <div className="beer_list">
      {beers.map((el) => (
        <BeerItem
          key={el.id}
          id={el._id}
          img={el.image_url}
          name={el.name}
          tagline={el.tagline}
          beers={beers}
        />
      ))}

      <Navbar />
    </div>
  );
}
