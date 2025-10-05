import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <>
      {/* Menu Bar or Navbar */}
      <Navbar />

      <Outlet />
    </>
  );
};

export default MainLayout;
