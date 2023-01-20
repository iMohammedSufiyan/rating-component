import React from "react";
import StarLogo from "./StarLogo";

import RatingForm from "./RatingForm";

export default function FeedbackPage(props) {
  return (
    <div className="content">
      <StarLogo />
      <div className="feedback">
        <h1>How did we do?</h1>
        <p>
          Please let us know we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
      </div>
      <RatingForm showThankyou={props.showThankyou} />
    </div>
  );
}
