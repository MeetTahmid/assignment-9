import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../pages/Error";
import Gallary from "../pages/Gallary";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp/SignUp";
import SingleEstate from "../pages/SingleEstate";
import PrivateRoute from './PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('estate.json')
      },
      {
        path: '/estate/:id',
        element: <PrivateRoute><SingleEstate></SingleEstate></PrivateRoute>,
        loader: ({params}) => fetch(`estate.json/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/gallery",
        element: <Gallary></Gallary>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
     


    ],
  },
]);

export default router;
