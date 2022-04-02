import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="center">
      <h2>Welcome to REST Countries</h2>
      <button onClick={() => navigate("/countries")} className="btn btn-info">
        Explore
      </button>
    </div>
  );
};

export default Home;
