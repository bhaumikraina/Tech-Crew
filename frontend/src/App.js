import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Reviews from "./pages/Reviews";

import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {

  const { user } = useAuthContext();
  return (
    <BrowserRouter>
   
    <Routes>
     
    <Route
						path="/login"
						element={!user ? <Login /> : <Navigate to="/" />}
					/>
					<Route
						path="/signup"
						element={!user ? <Signup /> : <Navigate to="/" />}
					/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menu" element={<Menu/>}/>
   
							
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Reviews" element={<Reviews/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
