import React from "react";
import { useParams } from "react-router-dom";

const SingleEstate = () => {
  const { id} = useParams;
  return (
    <div>
      Estate: {id}
    </div>
  );
};

export default SingleEstate;
