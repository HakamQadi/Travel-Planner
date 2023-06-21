import './App.css';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Reservation from './components/reservation/Reservation';
import Deals from './components/deals/Deals';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Details from './components/details/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/deals" element={<Deals />} />

      </Routes>
      <Footer />









    </div>
  );
}

export default App;
