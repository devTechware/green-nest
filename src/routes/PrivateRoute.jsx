import { use, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const [showLoading, setShowLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 500);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading || showLoading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRoute;
