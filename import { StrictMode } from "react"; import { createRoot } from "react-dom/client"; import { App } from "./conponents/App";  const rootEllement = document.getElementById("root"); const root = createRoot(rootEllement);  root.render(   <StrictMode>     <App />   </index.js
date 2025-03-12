import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./conponents/App";

const rootEllement = document.getElementById("root");
const root = createRoot(rootEllement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
