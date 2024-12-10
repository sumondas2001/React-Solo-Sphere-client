import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
     return (
          <div>
               <Navbar></Navbar>
               <div className="min-h-[calc(100vh-306px)]">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
               <Toaster></Toaster>
          </div>
     );
};

export default Main;