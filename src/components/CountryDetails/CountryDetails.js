import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});

  console.log(country);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      });
  }, [countryName]);
  return (
    <div className="mt-5 ">
      <Card className="w-75 h-100 mx-auto text-center">
        <Card.Img
          className="w-50 mx-auto p-4"
          variant="top"
          src={country?.flags?.png}
        />
        <Card.Body>
          <Card.Title>Name: {country?.name?.common}</Card.Title>
          <Card.Text>Population: {country.population}</Card.Text>
          <Card.Text>Area: {country.area}</Card.Text>
          <Card.Text>Capital: {country.capital}</Card.Text>
          <Card.Text>Region: {country.region}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Link to="/countries">Back</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryDetails;
