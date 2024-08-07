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
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import AdminRoute from "./AdminRoute";
import Form from "../components/Form";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
      
        children:[
            {
                path:'/',
                element:<Home></Home>,
               
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
            // //////////extra form fillup
            
            {
                path: '/form',
                element: <Form></Form>
            },
            // ////////////////
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/order',
                element: <PrivateRoute><Order></Order></PrivateRoute>,
                // element: <Order></Order>,
                // loader: () => fetch('https://women-e-commerce-server.vercel.app/menu')
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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                // element: <AllUsers></AllUsers>
            },
            
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <UpdateItem></UpdateItem>,
                loader: ({ params }) => fetch(`https://women-e-commerce-server.vercel.app/menu/${params.id}`)
            },

        ]
    }
]);

export default router;