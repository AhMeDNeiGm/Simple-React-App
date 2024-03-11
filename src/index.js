import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
