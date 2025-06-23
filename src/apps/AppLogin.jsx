import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginRegisterPage from "../pages/loginRegister/LoginRegisterPage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import { selectIsLoggedIn, selectIsRefreshing } from "../slice/auth/selectors";
import { refreshUser, logOut } from "../slice/auth/operations";

const AppLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
      // İstersen buradaki navigate açılabilir, ama useEffect zaten yapıyor
      // navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout başarısız:", error);
    }
  };

  if (isRefreshing) {
    return <div>Sayfa Yükleniyor...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <DashboardPage onLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
};

export default AppLogin;
