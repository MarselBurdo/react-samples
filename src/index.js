import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
