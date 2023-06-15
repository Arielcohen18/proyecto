import logo from './logo.svg';
import './App.css';
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/home";
import Login from "./component/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
