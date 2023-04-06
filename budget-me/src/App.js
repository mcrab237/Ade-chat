import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';
import Home from './Pages/Home';
import Menu from './Components/Menu';
import Footer from './Pages/Sections/Footer';
import Gallery from './Pages/Gallery';
import About from './Pages/About';

function App() {
  const[clicked,isClicked] = useState(false)
  return (

    <Router>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/>:null}
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="gallery" element={<Gallery />} />
      <Route exact path="about-us" element={<About />} />

    </Routes>
    <Footer/>

    </Router>

  );
}

export default App;
