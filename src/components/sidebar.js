import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBoxes,
  FaHamburger,
  FaShoppingCart,
  FaUserShield,
  FaUserAlt,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [catOpen, setCatOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  return (
    <aside className="sidebar">
      {/* Logo Section */}
      <div className="logo">
        {/* Replace React Logo with New Logo */}
        <img
          src="/logo.png" // Updated to the new logo
          alt="Cafe Amor"
          style={{ width: 80, height: "auto", marginRight: 10 }} // Increased the width
        />

        <span className="logo-title">Cafe Broski</span>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul>
          {/* Dashboard Link */}
          <li>
            <NavLink
              exact="true"
              to="/"
              className="sidebar-link"
              activeclassname="active"
            >
              <FaTachometerAlt style={{ marginRight: 7 }} /> Dashboard
            </NavLink>
          </li>

          {/* Divider after Dashboard */}
          <div className="section-divider"></div>

          {/* Categories Dropdown */}
          <li>
            <div
              onClick={() => setCatOpen(!catOpen)}
              className="sidebar-section-title"
            >
              <FaBoxes style={{ marginRight: 7 }} /> Manage Categories
              <FaChevronDown className={catOpen ? "chevron open" : "chevron"} />
            </div>
            {catOpen && (
              <ul className="sidebar-dropdown">
                <li>
                  <NavLink
                    to="/categories/add"
                    className="sidebar-subitem"
                    activeclassname="active"
                  >
                    Add Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories"
                    className="sidebar-subitem"
                    activeclassname="active"
                  >
                    All Categories
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Divider after Manage Categories */}
          <div className="section-divider"></div>

          {/* Products Dropdown */}
          <li>
            <div
              onClick={() => setProdOpen(!prodOpen)}
              className="sidebar-section-title"
            >
              <FaHamburger style={{ marginRight: 7 }} /> Manage Products
              <FaChevronDown
                className={prodOpen ? "chevron open" : "chevron"}
              />
            </div>
            {prodOpen && (
              <ul className="sidebar-dropdown">
                <li>
                  <NavLink
                    to="/products/add"
                    className="sidebar-subitem"
                    activeclassname="active"
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className="sidebar-subitem"
                    activeclassname="active"
                  >
                    All Products
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Divider after Manage Products */}
          <div className="section-divider"></div>

          {/* Orders Link */}
          <li>
            <NavLink
              to="/orders"
              className="sidebar-link"
              activeclassname="active"
            >
              <FaShoppingCart style={{ marginRight: 7 }} /> Orders
            </NavLink>
          </li>

          {/* Divider after Orders */}
          <div className="section-divider"></div>

          {/* Permissions Link */}
          <li>
            <NavLink
              to="/permissions"
              className="sidebar-link"
              activeclassname="active"
            >
              <FaUserShield style={{ marginRight: 7 }} /> Permissions
            </NavLink>
          </li>

          {/* Divider after Permissions */}
          <div className="section-divider"></div>

          {/* User Info Link */}
          <li>
            <NavLink
              to="/user"
              className="sidebar-link"
              activeclassname="active"
            >
              <FaUserAlt style={{ marginRight: 7 }} /> User Info
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
