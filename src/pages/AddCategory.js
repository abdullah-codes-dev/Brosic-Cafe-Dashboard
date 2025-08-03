import React, { useState, useEffect } from "react";

// Cafe icons background setup (keep only ONE copy)
const cafeIcons = ["☕", "🍰", "🍩", "🍵", "🍔", "🫘", "🧁", "🍟", "🥪", "🥯"];
const backgroundIcons = Array.from({ length: 20 }).map((_, i) => ({
  emoji: cafeIcons[Math.floor(Math.random() * cafeIcons.length)],
  top: `${Math.random() * 80 + 5}%`,
  left: `${Math.random() * 90 + 3}%`,
  size: Math.floor(Math.random() * 28) + 34,
  opacity: 0.09 + Math.random() * 0.08,
  rotate: `${Math.floor(Math.random() * 30 - 15)}deg`,
}));

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const [btnLeft, setBtnLeft] = useState(false);
  const [cardPulled, setCardPulled] = useState(false);

  // Animate card on mount
  useEffect(() => {
    setTimeout(() => setCardPulled(true), 500);
  }, []);

  // Button dance effect
  const handleBtnMouseEnter = () => setBtnLeft((left) => !left);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      setMessage("Category name is required.");
      return;
    }
    setMessage(`Category "${categoryName}" added!`);
    setCategoryName("");
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
        overflow: "hidden",
      }}
    >
      {/* Animated cafe icons */}
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

      {/* Main Card with animated pull-up */}
      <div
        className="neon-card"
        style={{
          marginTop: cardPulled ? "120px" : "340px",
          opacity: cardPulled ? 1 : 0,
          transition: "margin-top 1.2s cubic-bezier(.6,.03,.4,1), opacity 0.7s",
          zIndex: 11,
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "26px",
            fontSize: "2rem",
          }}
        >
          Add Category
        </h2>
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: "1.1rem", fontWeight: 500 }}>
            Category Name:
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="e.g. Breakfast"
              style={{
                display: "block",
                width: "100%",
                marginTop: "12px",
                padding: "15px",
                borderRadius: "12px",
                border: "1.5px solid #f2f2f2",
                fontSize: "1.08rem",
                outline: "none",
                marginBottom: "22px",
                background: "#fafbff",
                transition: "border 0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1.5px solid #ff3030")}
              onBlur={(e) => (e.target.style.border = "1.5px solid #f2f2f2")}
            />
          </label>
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
              marginLeft: btnLeft ? "-100px" : "0px",
              transition: "margin-left 0.34s cubic-bezier(.7,.03,.42,.92)",
              position: "relative",
            }}
            onMouseEnter={handleBtnMouseEnter}
          >
            Add
          </button>
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
