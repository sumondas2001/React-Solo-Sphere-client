import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
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