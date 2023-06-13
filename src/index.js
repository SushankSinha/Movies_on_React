import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1 className="title">My Favourite Movies of All Time!</h1>
    <App />
  </StrictMode>
);
