import React, { useState } from "react";
import FeedbackPage from "./FeedbackPage"; 
import Thankyou from "./Thankyou";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="container-fluid">
      <div className="container">
        {state ? <FeedbackPage showThankyou={setState} /> : <Thankyou />}
      </div>
    </div>
  );
}

export default App;
