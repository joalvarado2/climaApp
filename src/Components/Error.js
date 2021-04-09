import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="red darken-4 error">{mensaje}</p>
    </div>
  );
};


export default Error;
