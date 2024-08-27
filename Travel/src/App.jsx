import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import Register from './components/Register/Register'
import CarRental from "./components/CarRental/CarRental";
import Carbook from "./components/CarRental/Carbook";
// import Supscription from './components/Supscription/Supscription'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="Register" element={<Register/>}></Route>
            <Route path="Car-Rental" element={<CarRental/>}></Route>
            <Route path="/Carbook/:id" element={<Carbook/>}></Route>
            {/* <Route path="Supscription" element={<Supscription/>}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
