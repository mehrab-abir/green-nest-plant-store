import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Auth from "../Layouts/AuthLayout.jsx/Auth";
import Signin from "../Layouts/AuthLayout.jsx/Signin";
import Signup from "../Layouts/AuthLayout.jsx/Signup";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import PlantDetails from "../Components/PlantDetails";
import Loader from "../Components/Loader";
import PrivateRoute from "../Components/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/plants",
        element:<PrivateRoute>
          <Plants></Plants>
        </PrivateRoute>,
        loader: () => fetch("/plants.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/plantdetails/:id",
    Component: PlantDetails,
    loader: () => fetch("/plants.json"),
    hydrateFallbackElement: <Loader></Loader>,
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        index: true,
        Component: Signin,
      },
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
  {
    path: "profile",
    element : <PrivateRoute>
      <Profile></Profile>
    </PrivateRoute>
  },
  {
    path : '*',
    Component : ErrorPage
  }
]);

export default router;