import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin/index";
import Signup from "./pages/Auth/Signup/index";
import HomePage from "./pages/HomePage";
import ProductedProfile from "./pages/ProductedRoute/ProductProfile";
import ProductedSiniflar from "./pages/ProductedRoute/ProductSiniflar";
import ProductedDersProgrami from "./pages/ProductedRoute/ProductDersProgrami";
import ErkenIsik from "./pages/5dk";

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" exect index element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/siniflar" element={<ProductedSiniflar />} />
          <Route path="/profile" element={<ProductedProfile />} />
          <Route path="/dersprogramı" element={<ProductedDersProgrami />} />
          <Route path="/5dk" element={<ErkenIsik />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
