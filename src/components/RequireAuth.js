import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const { user } = useSelector((store) => store.userInfo);
  const location = useLocation();

  return (
    user !== null ? <Outlet /> : <Navigate to="/user_login" state={{ from: location }} replace />

  );
}

export default RequireAuth;