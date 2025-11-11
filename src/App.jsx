import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import Hero from "./landingPage/Hero/Hero";
import Services from './landingPage/Services/Services';
import NotFound from "./landingPage/NotFound";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
