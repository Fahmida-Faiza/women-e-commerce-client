import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import About from "../components/About";
import Home from "../components/Home";
import Order from "../components/Order";
import Contact from "../components/Contact";
import SignUp from "../components/SignUp"

import PrivateRoute from "../Routes/PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            // {
            //     path:'/order',
            //     element:<Order></Order>
            // },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/order',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },



        {
            path:'signup',
            element:<SignUp></SignUp>
        },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
]);

export default router;