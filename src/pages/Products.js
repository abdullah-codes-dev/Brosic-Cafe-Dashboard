import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Dummy data
const initialProducts = [
  {
    id: 1,
    name: "Belgian Waffle Supreme",
    category: "Breakfast",
    price: 7.13,
    featured: false,
    stock: 18,
    discount: 5,
    rating: 5,
  },
  {
    id: 2,
    name: "Spinach & Feta Omelette",
    category: "Breakfast",
    price: 8.0,
    featured: false,
    stock: 16,
    discount: 3,
    rating: 0,
  },
  {
    id: 3,
    name: "Breakfast Burrito",
    category: "Breakfast",
    price: 7.6,
    featured: false,
    stock: 20,
    discount: 5,
    rating: 0,
  },
  {
    id: 4,
    name: "Classic Eggs Benedict",
    category: "Breakfast",
    price: 8.24,
    featured: true,
    stock: 32,
    discount: 3,
    rating: 0,
  },
  {
    id: 5,
    name: "Avocado Toast Deluxe",
    category: "Breakfast",
    price: 5.0,
    featured: true,
    stock: 28,
    discount: 0,
    rating: 0,
  },
  {
    id: 6,
    name: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 6.37,
    featured: false,
    stock: 30,
    discount: 2,
    rating: 0,
  },
];

const allCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Filter + Search + Sort logic
  let displayed = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );
  if (sortOrder === "low")
    displayed = [...displayed].sort((a, b) => a.price - b.price);
  if (sortOrder === "high")
    displayed = [...displayed].sort((a, b) => b.price - a.price);

  // Actions
  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));
  const handleEdit = (id) =>
    alert(`Edit product ${id} (implement modal if needed)`);

  return (
    <div style={{ padding: 24, width: "100%" }}>
      <div
        style={{
          background: "#f9fafc",
          borderRadius: 20,
          padding: "30px 26px 18px 26px",
          marginTop: 18,
          marginBottom: 20,
          boxShadow: "0 1px 12px #f2f3fa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 22,
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: 0, fontWeight: 700 }}>All Products</h2>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                padding: "7px 17px",
                borderRadius: 12,
                border: "1.5px solid #eee",
                fontSize: 16,
                outline: "none",
                background: "#fff",
                fontWeight: 500,
              }}
            >
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {/* Search */}
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "8px 16px",
                borderRadius: 12,
                border: "2px solid #ffd23b",
                fontSize: 16,
                background: "#fff",
                minWidth: 180,
                outline: "none",
              }}
            />
            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{
                padding: "7px 17px",
                borderRadius: 12,
                border: "1.5px solid #eee",
                fontSize: 16,
                background: "#fff",
                fontWeight: 500,
              }}
            >
              <option value="">Sort by Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>
        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 1px 7px #f2f2f6",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr style={{ background: "#fff5e6" }}>
                <th style={th}>No</th>
                <th style={th}>Name</th>
                <th style={th}>Category</th>
                <th style={th}>Price</th>
                <th style={th}>Featured</th>
                <th style={th}>Stock</th>
                <th style={th}>Discount</th>
                <th style={th}>Rating</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayed.map((p, idx) => (
                <tr
                  key={p.id}
                  style={{
                    borderBottom: "1.5px solid #faf2e7",
                    background: idx % 2 === 0 ? "#fff" : "#fffcf3",
                  }}
                >
                  <td style={td}>{idx + 1}</td>
                  <td style={td}>{p.name}</td>
                  <td style={td}>{p.category}</td>
                  <td style={td}>${p.price.toFixed(2)}</td>
                  <td style={td}>{p.featured ? "Yes" : "No"}</td>
                  <td style={td}>{p.stock}</td>
                  <td style={td}>{p.discount}%</td>
                  <td style={td}>{p.rating}</td>
                  <td style={td}>
                    <button
                      onClick={() => handleEdit(p.id)}
                      style={editBtn}
                      title="Edit"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      style={deleteBtn}
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {displayed.length === 0 && (
                <tr>
                  <td style={td} colSpan={9}>
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Styles
const th = {
  padding: "13px 12px",
  fontWeight: 700,
  fontSize: "1rem",
  color: "#444",
  textAlign: "left",
  borderBottom: "3px solid #ffe7b7",
};
const td = {
  padding: "12px 10px",
  fontWeight: 500,
  fontSize: "1rem",
  color: "#555",
};
const editBtn = {
  background: "#fff8f0",
  border: "1.5px solid #ffd23b",
  borderRadius: "9px",
  color: "#ff9900",
  padding: "4px 8px",
  marginRight: 8,
  fontSize: 18,
  cursor: "pointer",
};
const deleteBtn = {
  background: "#fff",
  border: "1.5px solid #ff3030",
  borderRadius: "9px",
  color: "#ff3030",
  padding: "4px 8px",
  fontSize: 18,
  cursor: "pointer",
};
