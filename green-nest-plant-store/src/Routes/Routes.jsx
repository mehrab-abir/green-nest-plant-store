import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Auth from "../Layouts/AuthLayout.jsx/Auth";
import Signin from "../Layouts/AuthLayout.jsx/Signin";
import Signup from "../Layouts/AuthLayout.jsx/Signup";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import PlantDetails from "../Components/PlantDetails";

const router = createBrowserRouter([
    {
        path : '/',
        Component : MainLayout,
        children : [
            {
                index : true,
                Component : Home,
                loader : ()=>fetch('/plants.json'),
                hydrateFallbackElement : <p>Loading...</p>
            },
            {
                path : '/plants',
                Component: Plants,
                loader : ()=>fetch('/plants.json'),
                hydrateFallbackElement : <p>Loading...</p>
            }
        ]
    },
    {
        path : '/plantdetails/:id',
        Component : PlantDetails
    },
    {
        path : '/auth',
        Component : Auth,
        children : [
            {
                index : true,
                Component : Signin
            },
            {
                path : 'signin',
                Component : Signin
            },
            {
                path : 'signup',
                Component : Signup
            }
        ]
    },
    {
        path : 'profile',
        Component : Profile
    }
])

export default router;