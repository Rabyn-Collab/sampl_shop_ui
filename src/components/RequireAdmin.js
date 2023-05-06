import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAdmin = () => {
  const { user } = useSelector((store) => store.userInfo);
  const location = useLocation();

  return (
    user !== null ? user.isAdmin ? <Outlet /> : <h1>You are not authorised to this page</h1> : <Navigate to="/user_login" state={{ from: location }} replace />

  );
}

export default RequireAdmin;