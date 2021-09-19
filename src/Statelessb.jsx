import React from "react";

const Statelessb = (props) => {
  return (
    <button onClick={props.handler} className="btn btn-info">
      Click Meee!!
    </button>
  );
};

export default Statelessb;
