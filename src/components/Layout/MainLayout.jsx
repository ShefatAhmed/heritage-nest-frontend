import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-50">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
