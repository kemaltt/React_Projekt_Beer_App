import React from "react";
import Navbar from "./Navbar";
import { Link, useParams, useLocation } from "react-router-dom";

export default function BeerDetail() {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;

  let filteredData = data.filter((el) => el._id === id);
  let newData = filteredData[0];
  // console.log(newData);
  return (
    <div>
      <div className="beer_detail">
        <img src={newData.image_url} alt="" />
        <div className="detail_body">
          <h1>{newData.name} </h1>
          <h2>{newData.tagline}</h2>
          <div>
            <h4>First brewed:</h4>
            <h4>{newData.first_brewed} </h4>
          </div>
          <div>
            <h4>Attenuation level: </h4>
            <h4>{newData.attenuation_level} </h4>
          </div>

          <p> {newData.description} </p>

          <Link className="detail_btn" to="/beer">
            <i class="las la-arrow-left"></i>
          </Link>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
