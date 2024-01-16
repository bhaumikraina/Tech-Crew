import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar1 from "./components/Navbar/Navbar1";
import Menu from "./pages/Menu";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews";

import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
   <Navbar1/>
    <Routes>
     
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Reviews" element={<Reviews/>}/>
      
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
