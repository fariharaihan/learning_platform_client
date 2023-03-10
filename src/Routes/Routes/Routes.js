import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import LoginOption from "../../Pages/LoginOption/LoginOption";
import Register from "../../Pages/Register/Register";
import Vlog from "../../Pages/Vlog/Vlog";

import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-fariharaihan.vercel.app/subjects/${params.id}`)

            },
            {
                path: '/coursedetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-fariharaihan.vercel.app/subjects/${params.id}`)
            },
            {
                path: '/loginoption',
                element: <LoginOption></LoginOption>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/vlog',
                element: <Vlog></Vlog>
            }
        ],
    },
    {
        path: '*',
        element: <div className='text-white font-semibold text-5xl'>This page is not found</div>
    }
]);