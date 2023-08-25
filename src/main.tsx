import ReactDOM from "react-dom/client";
import Index from "./pages/Index/Index";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/portafolio/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </NextUIProvider>
);
