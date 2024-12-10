import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home />
               },
               {
                    path: '/login',
                    element: <Login />
               },
               {
                    path: '/registration',
                    element: <Registration />
               },
          ]
     }
]);



export default router;