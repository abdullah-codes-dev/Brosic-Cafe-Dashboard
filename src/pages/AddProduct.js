import React, { useState } from "react";

// Emoji background generator (20 random icons)
const cafeIcons = ["☕", "🍰", "🍩", "🍵", "🍔", "🫘", "🧁", "🍟", "🥪", "🥯"];
const backgroundIcons = Array.from({ length: 20 }).map((_, i) => ({
  emoji: cafeIcons[Math.floor(Math.random() * cafeIcons.length)],
  top: `${Math.random() * 80 + 5}%`,
  left: `${Math.random() * 90 + 3}%`,
  size: Math.floor(Math.random() * 28) + 34,
  opacity: 0.09 + Math.random() * 0.08,
  rotate: `${Math.floor(Math.random() * 30 - 15)}deg`,
}));

export default function AddProduct() {
  const [fields, setFields] = useState({
    name: "",
    category: "",
    price: "",
    featured: false,
    stock: "",
    discount: "",
  });
  const [message, setMessage] = useState("");
  const [btnLeft, setBtnLeft] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const required =
    fields.name.trim() &&
    fields.category.trim() &&
    fields.price.trim() &&
    fields.stock.trim();

  // Move button on hover
  const handleBtnMouseEnter = () => setBtnLeft((left) => !left);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!required) {
      setMessage("Fill all required fields: Name, Category, Price, Stock.");
      return;
    }
    setMessage(
      `Product "${fields.name}" added! (Demo only, does not save to backend)`
    );
    setFields({
      name: "",
      category: "",
      price: "",
      featured: false,
      stock: "",
      discount: "",
    });
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "transparent",
      }}
    >
      {/* Scattered food icons */}
      {backgroundIcons.map((icon, idx) => (
        <span
          key={idx}
          style={{
            position: "fixed",
            top: icon.top,
            left: icon.left,
            fontSize: icon.size,
            opacity: icon.opacity,
            pointerEvents: "none",
            zIndex: 0,
            userSelect: "none",
            transform: `rotate(${icon.rotate})`,
          }}
        >
          {icon.emoji}
        </span>
      ))}

      {/* Main Neon Card */}
      <div className="neon-card">
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "26px",
            fontSize: "2rem",
          }}
        >
          Add Product
        </h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          {/* Product Name */}
          <label style={labelStyle}>
            Product Name: <span style={{ color: "#ff3030" }}>*</span>
            <input
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="e.g. Belgian Waffle Supreme"
              style={inputStyle}
              autoFocus
            />
          </label>
          {/* Category */}
          <label style={labelStyle}>
            Category: <span style={{ color: "#ff3030" }}>*</span>
            <input
              type="text"
              name="category"
              value={fields.category}
              onChange={handleChange}
              placeholder="e.g. Breakfast"
              style={inputStyle}
            />
          </label>
          {/* Price */}
          <label style={labelStyle}>
            Price ($): <span style={{ color: "#ff3030" }}>*</span>
            <input
              type="number"
              name="price"
              min="0"
              step="0.01"
              value={fields.price}
              onChange={handleChange}
              placeholder="e.g. 7.99"
              style={inputStyle}
            />
          </label>
          {/* Stock */}
          <label style={labelStyle}>
            Stock: <span style={{ color: "#ff3030" }}>*</span>
            <input
              type="number"
              name="stock"
              min="0"
              value={fields.stock}
              onChange={handleChange}
              placeholder="e.g. 18"
              style={inputStyle}
            />
          </label>
          {/* Discount */}
          <label style={labelStyle}>
            Discount (%):
            <input
              type="number"
              name="discount"
              min="0"
              max="100"
              value={fields.discount}
              onChange={handleChange}
              placeholder="e.g. 10"
              style={inputStyle}
            />
          </label>
          {/* Featured */}
          <label
            style={{
              fontSize: "1.08rem",
              display: "block",
              margin: "10px 0 20px 0",
              fontWeight: 500,
              color: "#444",
            }}
          >
            <input
              type="checkbox"
              name="featured"
              checked={fields.featured}
              onChange={handleChange}
              style={{
                accentColor: "#ff3030",
                width: 19,
                height: 19,
                marginRight: 10,
                verticalAlign: "middle",
              }}
            />
            Featured Product
          </label>
          {/* Add Button */}
          <button
            type="submit"
            style={{
              background: "#ff3030",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              padding: "13px 34px",
              fontWeight: "bold",
              fontSize: "1.15rem",
              cursor: "pointer",
              boxShadow: "0 1px 5px #f7d2d2",
              marginBottom: 8,
              marginLeft: !required && btnLeft ? "-120px" : "0px",
              transition: "margin-left 0.36s cubic-bezier(.7,.03,.42,.92)",
              position: "relative",
            }}
            onMouseEnter={!required ? handleBtnMouseEnter : undefined}
            disabled={false}
          >
            Add
          </button>
          {/* Message */}
          {message && (
            <div
              style={{
                marginTop: 20,
                color: "#008a0e",
                background: "#ecffed",
                padding: "10px 14px",
                borderRadius: "9px",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "1.08rem",
              }}
            >
              {message}
            </div>
          )}
        </form>
      </div>
      {/* NEON GLOW CSS */}
      <style>{`
        .neon-card {
          position: relative;
          background: #fff;
          padding: 46px 44px 38px 44px;
          border-radius: 28px;
          box-shadow:
            0 0 18px 2px #ff00cc,
            0 0 48px 6px #00fff3,
            0 0 24px 8px #fff200;
          border: 3px solid #ff00cc;
          max-width: 480px;
          width: 100%;
          margin-top: 60px;
          z-index: 1;
          animation: neon-glow 2.7s infinite linear;
        }
        @keyframes neon-glow {
          0% {
            border-color: #ff00cc;
            box-shadow:
              0 0 18px 2px #ff00cc,
              0 0 48px 6px #00fff3,
              0 0 24px 8px #fff200;
          }
          25% {
            border-color: #00fff3;
            box-shadow:
              0 0 18px 2px #00fff3,
              0 0 48px 6px #fff200,
              0 0 24px 8px #ff00cc;
          }
          50% {
            border-color: #fff200;
            box-shadow:
              0 0 18px 2px #fff200,
              0 0 48px 6px #ff00cc,
              0 0 24px 8px #00fff3;
          }
          75% {
            border-color: #39ff14;
            box-shadow:
              0 0 18px 2px #39ff14,
              0 0 48px 6px #ff00cc,
              0 0 24px 8px #00fff3;
          }
          100% {
            border-color: #ff00cc;
            box-shadow:
              0 0 18px 2px #ff00cc,
              0 0 48px 6px #00fff3,
              0 0 24px 8px #fff200;
          }
        }
      `}</style>
    </div>
  );
}

// Styles
const inputStyle = {
  display: "block",
  width: "100%",
  marginTop: "10px",
  padding: "13px",
  borderRadius: "12px",
  border: "1.5px solid #f2f2f2",
  fontSize: "1.08rem",
  outline: "none",
  marginBottom: "17px",
  background: "#fafbff",
  transition: "border 0.3s",
};
const labelStyle = {
  fontSize: "1.09rem",
  fontWeight: 500,
  color: "#222",
  marginBottom: 3,
  display: "block",
};
