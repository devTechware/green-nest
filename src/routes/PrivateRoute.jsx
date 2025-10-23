import { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRoute;
