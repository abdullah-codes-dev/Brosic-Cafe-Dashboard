import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const initialCategories = [
  { id: 1, name: "Breakfast" },
  { id: 2, name: "Lunch" },
  { id: 3, name: "Meat" },
  { id: 4, name: "Vegan" },
  { id: 5, name: "Dessert" },
  { id: 6, name: "Chocolate" },
];

export default function Categories() {
  const [categories, setCategories] = useState(initialCategories);

  const handleEdit = (id) => {
    const newName = prompt("Edit category name:");
    if (newName) {
      setCategories(
        categories.map((c) => (c.id === id ? { ...c, name: newName } : c))
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this category?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "36px auto",
        background: "#fff",
        borderRadius: "28px",
        padding: "32px 32px 18px 32px",
        boxShadow: "0 2px 24px #f3f4f7",
        position: "relative",
      }}
    >
      {/* Cancel Button */}
      <button
        style={{
          position: "absolute",
          top: 22,
          left: 32,
          background: "#ff3030",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "9px 32px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 1px 4px #f2caca",
        }}
        onClick={() => window.history.back()}
      >
        Cancel
      </button>
      {/* Table */}
      <div style={{ paddingTop: 48 }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "18px 12px",
                  fontSize: 18,
                  color: "#222",
                }}
              >
                No
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "18px 12px",
                  fontSize: 18,
                  color: "#222",
                }}
              >
                Category Name
              </th>
              <th style={{ padding: "18px 12px", fontSize: 18, color: "#222" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={cat.id} style={{ borderBottom: "1px solid #f6f6f6" }}>
                <td style={{ padding: "18px 12px", fontWeight: 600 }}>
                  {idx + 1}
                </td>
                <td style={{ padding: "18px 12px", fontSize: 17 }}>
                  {cat.name}
                </td>
                <td style={{ padding: "18px 12px" }}>
                  <button
                    style={{
                      background: "#fff7d6",
                      border: "2px solid #ffc300",
                      color: "#cc9700",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "7px 20px",
                      marginRight: 10,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onClick={() => handleEdit(cat.id)}
                  >
                    <FaEdit size={16} /> Edit
                  </button>
                  <button
                    style={{
                      background: "#ffe2e2",
                      border: "2px solid #ff3030",
                      color: "#ff3030",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "7px 20px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onClick={() => handleDelete(cat.id)}
                  >
                    <FaTrash size={15} /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    textAlign: "center",
                    color: "#aaa",
                    padding: "28px 0",
                  }}
                >
                  No categories
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: 26 }}>
        <span
          style={{
            background: "#ffc300",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "50%",
            display: "inline-block",
            width: 38,
            height: 38,
            lineHeight: "38px",
            fontSize: 18,
            boxShadow: "0 1px 6px #eee",
          }}
        >
          1
        </span>
      </div>
    </div>
  );
}
