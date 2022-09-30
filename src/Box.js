import React from "react";
import "./Box.css";
import photo from "./germany.png";

function Box(props) {
  console.log(props.capital);
  return (
    <div className="mainbox">
      <div className="image">
        <img src={props.flag} alt="" />
      </div>

      <div className="details">
        <h1 className="countryname"> {props.name}</h1>
        <h2 className="others"> Population - : {props.population}</h2>
        <h2 className="others"> Region - : {props.region}</h2>
        <h2 className="others"> Capital - : {props.capital}</h2>
      </div>
    </div>
  );
}
export default Box;
