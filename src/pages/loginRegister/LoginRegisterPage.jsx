import React, { useState } from "react";
import Styles from "./LoginRegisterPage.module.css";

const LoginRegisterPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submit oldu:", formData, "Login mi?:", showLogin); "çalışıyor"
    if (showLogin) {
      console.log("Giriş verileri:", formData);
    } else {
      console.log("Kayıt verileri:", formData);
    }
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginBox}>
        <button
          className={Styles.toggleBtn}
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Kayıt ekranına git" : "Giriş ekranına git"}
        </button>

        <form className={Styles.loginForm} onSubmit={handleSubmit}>
          {!showLogin && (
            <div className={Styles.formGroup}>
              <label>İsim</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınızı girin"
                required
              />
            </div>
          )}

          <div className={Styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email adresinizi girin"
              required
            />
          </div>

          <div className={Styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Şifrenizi girin"
              required
            />
          </div>

          <button type="submit" className={Styles.submitBtn}>
            {showLogin ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
