import React from "react";

export default function RatingButton(props) {
  
  const values = [1, 2, 3, 4, 5];

  
  return (
    <div className="rating-buttons">
      {values.map((value, index) => (
        <input onClick={props.met} key={index} type="button" value={value} className="btn" />
      ))}
    </div>
  );
}
