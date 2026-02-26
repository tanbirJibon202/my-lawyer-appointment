import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LawyerDetails from "../pages/LawyerDetails/LawyerDetails";
import Bookings from "../pages/Bookings/Bookings";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("./lawyersData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/lawyerDetails/:id",
        loader: () => fetch("./lawyersData.json"),
        Component: LawyerDetails,
      },
      {
        path: "/bookings/",
        Component: Bookings,
      },
    ],
  },
]);
