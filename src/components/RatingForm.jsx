import React, { useState } from "react";
import RatingButton from "./RatingButton";
import SubmitButton from "./SubmitButton";

export default function RatingForm(props) {
  const [rating, setRating] = useState(0);

  function submitRating(event) {
    event.preventDefault();
    console.log(rating);
    if (rating === 0) alert("Please select rating.");
    else props.showThankyou(rating);
  }

  function selectRating(event) {
    setRating(event.target.value);
  }

  return (
    <form onSubmit={submitRating} className="rating-form">
      <RatingButton selectRating={selectRating} />
      <SubmitButton />
    </form>
  );
}
