import React from "react";
import "./app.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BeAHost from "./Components/pages/beAHost";
import Home from "./Components/pages/home";
import Online from "./Components/pages/online";
import Footer from "./Components/footer";
import "./GlobalStyles.css";
import NotFound from "./Components/pages/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/online" element={<Online />} />
          <Route path="/be-a-host" element={<BeAHost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
