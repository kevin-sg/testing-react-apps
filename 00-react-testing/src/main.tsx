import React from "react";
import ReactDOM from "react-dom/client";

import { FirstApp, CounterApp } from "./components";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title="Hello. I'm Apolo!" /> */}
  </React.StrictMode>,
);
