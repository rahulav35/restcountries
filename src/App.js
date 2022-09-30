import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Box from "./Box";

function App() {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((responce) => responce.json())
      .then((data) => setArray(data));
  }, []);

  const [array, setArray] = useState([]);

  return (
    <div className="maindiv">
      <Header />

      <div className="searchbar">
        <Search />
      </div>

      <div className="boxdiv">
        {array.map((singledata) => {
          console.log(singledata);
          return (
            <Box
              name={singledata.name.common}
              population={singledata.population}
              region={singledata.region}
              capital={singledata.capital}
              flag={singledata.flags.png}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
