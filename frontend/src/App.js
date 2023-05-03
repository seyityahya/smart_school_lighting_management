import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin/index";
import Signup from "./pages/Auth/Signup/index";
import DersProgramı from "./pages/DersProgramı/index";
import HomePage from "./pages/HomePage";
import ProductedProfile from "./pages/ProductedRoute/ProductProfile";
import ProductedSiniflar from "./pages/ProductedRoute/ProductSiniflar";
import DersProgramiDuzenleme from "./pages/DersProgramı/DersProgramıDuzenleme";

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
          <Route path="/dersprogramı">
            <Route index element={<DersProgramı />} />
            <Route path=":ders_id" element={<DersProgramiDuzenleme />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
