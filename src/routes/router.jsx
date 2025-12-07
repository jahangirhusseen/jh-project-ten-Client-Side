import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Services from "../pages/Services";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import UpdateService from "../pages/UpdateService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/Profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-service",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-service/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forget/:userEmail",
        element: <ForgetPassword />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
