import React from "react";
import useCountries from "../../hooks/useCountries";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries] = useCountries();

  return (
    <>
      {countries.length ? (
        <div>
          <h1 className="mt-4 text-center">Available Countries...</h1>
          <p className="text-center">Total: {countries.length}</p>
          <div className="container countries-container text-center">
            {countries.map((country) => (
              <Country key={country.cca3} country={country} />
            ))}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Countries;
