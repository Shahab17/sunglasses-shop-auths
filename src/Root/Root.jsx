import { Outlet } from "react-router-dom";

import Navbar from "../Components/Headers/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
 

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="container mx-auto my-12 px-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
