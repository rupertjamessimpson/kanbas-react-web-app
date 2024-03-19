import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";


function Labs() {
  return (
      <div>
        <a href="/labs/a1/index.html">Lab 1</a> | <a href="/labs/a2/index.html">Lab 2</a> | <Link to="/Labs/a3">Lab 3</Link> | <Link to="/Labs/a4">Lab 4</Link>
        <Routes>
          <Route path="/a3/*" element={<Assignment3 />} />
          <Route path="/a4/*" element={<Assignment4 />} />
        </Routes>
      </div>
  );
}
export default Labs;