import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../pages/AllJobs";

const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: '/',
                    element: <Home />,

               },
               {
                    path: '/login',
                    element: <Login />
               },
               {
                    path: '/registration',
                    element: <Registration />
               },
               {
                    path: '/job/:id',
                    element: <JobDetails></JobDetails>
               },
               {
                    path: '/add-job',
                    element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
               },
               {
                    path: '/my-posted-jobs',
                    element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
               },
               {
                    path: '/my-bids',
                    element: <PrivateRoute><MyBids></MyBids> </PrivateRoute>
               },
               {
                    path: '/update/:id',
                    element: <PrivateRoute> <UpdateJob></UpdateJob></PrivateRoute>
               },
               {
                    path: '/bid-requests',
                    element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
               },
               {
                    path: '/allJobs',
                    element: <AllJobs></AllJobs>
               }
          ]
     }
]);



export default router;