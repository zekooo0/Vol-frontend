import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <script
      src="https://storage.googleapis.com/multisync/interworky/production/interworkyassistant.js"
      data-api-key="ZTljOGU5NTAtZDU1ZC00ZjI5LThiNWMtZDYyMDQ3NzI4NjJlOmFzc3RfazZCdXFtdHVvMzhzanZyTkUwY1Rjb3hn"
    ></script>
  </React.StrictMode>
);
