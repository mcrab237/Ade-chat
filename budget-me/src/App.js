import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';
import Home from './Pages/Home';
import Menu from './Components/Menu';

function App() {
  const[clicked,isClicked] = useState(false)
  return (

    <Router>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/>:null}
    <Routes>
      <Route exact path="" element={<Home />} />
    </Routes>
    </Router>

  );
}

export default App;
