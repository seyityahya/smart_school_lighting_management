import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin/index";
import Signup from "./pages/Auth/Signup/index";
import DersProgramı from "./pages/DersProgramı/index";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" exect index element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dersprogramı" element={<DersProgramı />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
