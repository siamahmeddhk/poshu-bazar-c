import {
  createBrowserRouter,

} from "react-router";
import Root from "../root/Root";
import Signup from "../page/Signup";
import Login from "../page/Login";
import All from "../page/All";
import Poshudtl from "../page/Poshudtl";
import Privaterouter from "./Privaterouter";
import Booking from "../page/Booking";
import Form from "../page/Form";
import Data from "../page/Data";
import Update from "../page/Update";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/all',
        Component: All,

      },
      {
        path: '/all/:id',
        loader: ({params}) => fetch(`http://localhost:3000/all/${params.id}`),
        Component: Poshudtl,

      },
      {
        path: '/signup',
        Component: Signup,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/booking/:id',
        element:<Booking></Booking>
      },
      {
        path: '/form',
        Component: Form,
      },
      {
        path: '/data',
        Component: Data,
      }, 
      {
        path: '/update/:id',
        loader: ({params}) => fetch(`http://localhost:3000/form/${params.id}`),
        Component: Update,
      }
    ]
  },
]);