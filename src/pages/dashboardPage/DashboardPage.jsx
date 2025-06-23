import React from "react";
import styles from "./DashboardPage.module.css";

const DashboardPage = ({ onLogout }) => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>Hoşgeldiniz</h1>
      <button className={styles.logoutBtn} onClick={onLogout}>
        Çıkış Yap
      </button>
    </div>
  );
};

export default DashboardPage;
