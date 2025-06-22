import Reactfr from "react";
import { Route, Routes } from "react-router-dom";
import LoginRegisterPage from "../pages/loginRegister/LoginRegisterPage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";

const AppLogin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginRegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};
export default AppLogin;
