import React, { useState } from "react";
import RatingButton from "./RatingButton";
import SubmitButton from "./SubmitButton";

export default function RatingForm() {
  const [state, setState] = useState(0);
  function selectRating(event){
    console.log(event.target.value);
    setState(event.target.value);
  }
  function handleEvent(event){
    event.preventDefault();
    console.log(event.target);
  }
  return (
    <form onSubmit={handleEvent} className="rating-form">
      <RatingButton met={selectRating} />
      <SubmitButton />
    </form>
  );
}
