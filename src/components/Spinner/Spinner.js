import React from "react";

const Spinner = () => {
  return (
    <div className="">
      <Spinner animation="border" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Spinner;
