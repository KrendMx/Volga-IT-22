import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <App url={document.getElementById("glasses-quiz-widget").dataset.source} />,
  document.getElementById("glasses-quiz-widget")
);
