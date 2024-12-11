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
                    element: <AddJob></AddJob>
               },
               {
                    path: '/my-posted-jobs',
                    element: <MyPostedJobs></MyPostedJobs>
               },
               {
                    path: '/my-bids',
                    element: <MyBids></MyBids>
               },
               {
                    path: '/bid-requests',
                    element: <BidRequests></BidRequests>
               }
          ]
     }
]);



export default router;