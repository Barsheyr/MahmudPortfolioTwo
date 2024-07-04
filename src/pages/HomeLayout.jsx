import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Footer } from "../components";

const HomeLayout = () => {
  return (
    <div className="">
      <Navbar />
      {/* <Loading /> */}
      <section className="">
        <Outlet />
      </section>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
