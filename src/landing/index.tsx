import { Link } from "react-router-dom";
import Labs from "../labs";

function landing () {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">Rupert Simpson's Homework Page</h1>
      <Link to="/Kanbas/Dashboard" className="mb-3">Kanbas</Link>
      <Labs />
    </div>
  );
}

export default landing;