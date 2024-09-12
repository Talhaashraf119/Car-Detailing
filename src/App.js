import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Services from './Pages/Services';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
    <Navbar />
    {/* <div className="content"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    {/* </div> */}
    <Footer />
  </div>
  );
}

export default App;
