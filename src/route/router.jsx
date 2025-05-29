import {
  createBrowserRouter,

} from "react-router";
import Root from "../root/Root";
import Signup from "../page/Signup";
import Login from "../page/Login";
import All from "../page/All";


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