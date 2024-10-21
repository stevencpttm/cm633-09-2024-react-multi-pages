import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Page1() {
  return (
    <div>
      <Header />

      {/* Display Component depends on the path */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Page1;
