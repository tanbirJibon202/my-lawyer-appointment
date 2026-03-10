// import React from "react";
// import Navbar from "../../components/Header/Navbar";
// import { Outlet } from "react-router";
// import Footer from "../../components/Footer/Footer";
// import { ToastContainer } from "react-toastify";

// const Root = () => {
//   return (
//     <div>
//       <div className="max-w-6xl mx-auto">
//         <Navbar></Navbar>
//         <div className="min-h-[calc(100vh-116px)]">
//           <Outlet></Outlet>
//         </div>
//       </div>
//       <Footer></Footer>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Root;

import React, { useEffect } from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet, useLocation, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-0 ">
        <Navbar />

        <div className="min-h-[calc(100vh-200px)] relative">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-bars loading-xl text-black"></span>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
