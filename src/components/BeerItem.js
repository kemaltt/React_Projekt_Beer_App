import React from "react";
import { Link } from "react-router-dom";

export default function BeerItem({ id, img, name, tagline, beers }) {
  return (
    <div className="beer_item">
      <div className="beer_item_card">
        <img src={img} alt="" />
        <div className="card_body">
          <h2>{name}</h2>
          <h4>{tagline}</h4>
          <p>Created by :{name}</p>
          <Link className="datail_btn" to={`/detail/${id}`} state={beers}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
