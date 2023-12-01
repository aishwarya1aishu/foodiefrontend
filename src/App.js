import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Components/Home'
import Work from './Components/Work'
import Testimonial from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from './Components/NavBar';
import Signup from './Components/Signup';
import Login from "./Components/Login";
// import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          {/* Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/Login" element={<Login/>} /> */}
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/signup" element={<Booking/>}/> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;