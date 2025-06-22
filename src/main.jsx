import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLogin from "./apps/AppLogin.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./reduxStore/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppLogin />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
