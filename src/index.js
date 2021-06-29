import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="28259dc3-8835-41cb-aaca-3a3f3612b89a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
