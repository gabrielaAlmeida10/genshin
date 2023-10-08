import React from "react";
import { Routes, Route } from "react-router-dom";

import PityCounter from "./components/pityCounter/pityCounter";

function routes() {
  return (
    <Routes>
      <Route path="/pityCounter" element={<PityCounter />} />
    </Routes>
  );
}

export default routes;
