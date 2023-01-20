import React from "react";

export default function Thankyou(props) {
  return (
    <div>
      <div className="thankyou-logo">
        <img
          src={require("../assets/images/illustration-thank-you.svg").default}
        />
      </div>
      <div className="selected-rating">
        <p>You selected {props.rating} out of 5</p>
      </div>
      <div className="thankyou">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. if you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
