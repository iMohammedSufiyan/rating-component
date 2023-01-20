import React, { useState } from "react";
import FeedbackPage from "./FeedbackPage";
import Thankyou from "./Thankyou";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="container-fluid">
      <div className="container">
        {state === 0 ? <FeedbackPage showThankyou={setState} /> : <Thankyou rating={state} />}
      </div>
    </div>
  );
}

export default App;
