import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Orders from "./pages/Orders";
import Permissions from "./pages/Permissions";
import UserInfo from "./pages/UserInfo";
import "./App.css";

function App() {
  // Dark mode state (with localStorage support)
  const [dark, setDark] = useState(
    () => window.localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    window.localStorage.setItem("darkMode", dark);
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <Router>
      <div className={dark ? "app-layout dark" : "app-layout"}>
        {/* Dark mode toggle button */}
        <button
          className="dark-toggle"
          onClick={() => setDark((d) => !d)}
          style={{
            position: "fixed",
            top: 18,
            right: 24,
            zIndex: 1000,
            padding: "5px 18px",
            background: dark ? "#444" : "#fff",
            color: dark ? "#ffe163" : "#222",
            border: "1.5px solid #ff3030",
            borderRadius: 9,
            fontWeight: 600,
            fontSize: "0.97rem",
            cursor: "pointer",
            boxShadow: "0 0 7px #e8eaef",
            transition: "all 0.18s",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/add" element={<AddCategory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/user" element={<UserInfo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
