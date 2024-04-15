import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import App from "./App";
import StarRating from "./starRating";
// import TextExpanderMain from "./textExpanderMain";
// import BallFill from "./starRating";
// function Test() {
//   let [movieRating, setMovieRating] = useState(0);
//   let [movieTempRating, setMovieTempRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetTempRating={setMovieTempRating}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie was rated {movieRating || movieTempRating}</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* *{" "} */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
    /> */}
    {/* <Test /> */}
    {/* <StarRating size={24} color="red" className="test" defaultRating={3} /> */}
    {/* <BallFill maxFill={5} /> */}
    {/* < */}
    {/* <TextExpanderMain /> */}
  </React.StrictMode>
);
