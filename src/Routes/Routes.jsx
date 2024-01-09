import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import About from "../components/About";
import Home from "../components/Home";
import Order from "../components/Order";
import Contact from "../components/Contact";
import SignUp from "../components/SignUp"
import Dashboard from "../Layout/Dashboard"
import PrivateRoute from "../Routes/PrivateRoute";
import Cart from "../components/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";

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




    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        // element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // admin routes
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            
            {
                path: 'addItems',
                element: <AddItems></AddItems>
            },

        ]
    }
]);

export default router;