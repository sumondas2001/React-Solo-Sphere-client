import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const location = useLocation();
     if (loading) {
          return <p className="text-center text-xl font-medium ">Loading.......</p>
     }
     if (user) {
          return children
     }
     return (
          <Navigate to={"/login"} state={location.pathname}></Navigate>
     );
};

export default PrivateRoute;