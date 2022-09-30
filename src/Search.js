import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="secondheader">
      <h1 className="searchcountry">
        <input type="text" value={"search for a country...."} />
        <button> '^'Filter by Region </button>
      </h1>
    </div>
  );
}
export default Search;
