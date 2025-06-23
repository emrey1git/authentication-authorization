import React, { useState } from "react";
import Styles from "./LoginRegisterPage.module.css";
import { useDispatch } from "react-redux";
import { login, register } from "../../slice/auth/operations";

const LoginRegisterPage = () => {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    if (showLogin) {
      dispatch(login({ email: formData.email, password: formData.password }));
    } else {
      dispatch(register(formData));
    }

    // Formu gönderim sonrası temizle
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginBox}>
        <button
          type="button" // submit değil toggle olduğu için type button
          className={Styles.toggleBtn}
          onClick={() => setShowLogin((prev) => !prev)}
        >
          {showLogin ? "Kayıt ekranına git" : "Giriş ekranına git"}
        </button>

        <form className={Styles.loginForm} onSubmit={handleSubmit}>
          {!showLogin && (
            <div className={Styles.formGroup}>
              <label htmlFor="name">İsim</label>
              <input
                id="name"
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email adresinizi girin"
              required
            />
          </div>

          <div className={Styles.formGroup} style={{ position: "relative" }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Şifrenizi girin"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: 0,
                top: "72%", // Burayı 60% yaptım, 50%'den daha aşağıda olur
                transform: "translateY(-40%)",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#007bff",
              }}
            >
              {showPassword ? "Gizle" : "Göster"}
            </button>
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
