import {
  createBrowserRouter,

} from "react-router";
import Root from "../root/Root";
import Signup from "../page/Signup";
import Login from "../page/Login";
import All from "../page/All";
import Poshudtl from "../page/Poshudtl";


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
      }
    ]
  },
]);