import { BrowserRouter } from "react-router";
import App from "./App";
import { hydrateRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <App someProps="Hello Client-Side" />
    </BrowserRouter>
  </StrictMode>
);