import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Country = ({ country }) => {
  //   const navigate = useNavigate();
  const { name, flags, capital } = country;
  return (
    <Link
      to={`/country-details/${name.common}`}
      className="text-decoration-none text-dark"
    >
      <Card className="h-100 shadow-lg">
        <Card.Img
          className="w-75 h-100 p-4 mx-auto"
          variant="top"
          src={flags.png}
        />
        <Card.Body>
          <Card.Title>{name.common}</Card.Title>
          <Card.Text>Capital: {capital}</Card.Text>
          {/*  <button
            onClick={() => navigate(`/country-details/${cca3}`)}
            className="btn w-50 mx-auto btn-primary"
          >
            Details
          </button> */}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Country;
