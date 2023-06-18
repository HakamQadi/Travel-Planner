import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Hotels from "./components/hotels/Hotels";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resturants from "./components/resturants/Resturants";
import Tours from "./components/tours/Tours";
import Transfers from "./components/transfers/Transfers";

function App() {
  return (
    // call the components here
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resturants" element={<Resturants />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/transfers" element={<Transfers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
