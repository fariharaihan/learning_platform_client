import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

import Subjects from "../../Pages/Subjects/Subjects";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/subjects/${params.id}`)

            },
            {
                path: '/subjects/:id',
                element: <Subjects></Subjects>,

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
                path: '/faq',
                element: <Faq></Faq>
            }
        ],

    },
    {
        path: '*',
        element: <div className='text-white font-semibold text-5xl'>This page is not found</div>
    }
]);