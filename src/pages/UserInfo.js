import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy user data
const users = [
  {
    name: "Alma Hudson",
    email: "felix@mailinator.com",
    phone: "N/A",
    created: "09/10/2024",
  },
  {
    name: "Barclay Franklin",
    email: "dovavizhym@mailinator.com",
    phone: "N/A",
    created: "06/25/2025",
  },
  {
    name: "Holmes Goodwin",
    email: "cuho@mailinator.com",
    phone: "N/A",
    created: "01/09/2025",
  },
  {
    name: "Erin Hobbs",
    email: "zudizura@mailinator.com",
    phone: "N/A",
    created: "07/13/2024",
  },
  {
    name: "Aaron Burris",
    email: "jihuhitob@mailinator.com",
    phone: "N/A",
    created: "02/13/2025",
  },
  {
    name: "Galvin Pope",
    email: "dydawy@mailinator.com",
    phone: "N/A",
    created: "09/06/2024",
  },
  {
    name: "Quemby Ratliff",
    email: "cumutyrot@mailinator.com",
    phone: "N/A",
    created: "03/10/2025",
  },
  {
    name: "Kirsten Gutierrez",
    email: "lyqiwymu@mailinator.com",
    phone: "N/A",
    created: "06/25/2025",
  },
  {
    name: "Abdullah Mustafa",
    email: "abdullah.mustafa@email.com",
    phone: "N/A",
    created: "10/10/2025",
  },
  {
    name: "Sheharyar Mustafa",
    email: "sheharyar.mustafa@email.com",
    phone: "N/A",
    created: "01/25/2025",
  },
];

// Dummy orders linked to emails
const orders = [
  {
    id: "684c7b9c1e24764384ac71ed",
    customer: "Alma Hudson",
    email: "felix@mailinator.com",
    amount: 78,
    status: "completed",
    payment: "paid",
    date: "6/14/2025",
    products: [
      { name: "Bacon Ranch Wrap", qty: 2, price: 9 },
      { name: "Stuffed Meatball Subs", qty: 1, price: 11.25 },
      { name: "Breakfast Burrito", qty: 1, price: 8 },
    ],
  },
  {
    id: "684d2187a66af90127a3bbc8",
    customer: "Barclay Franklin",
    email: "dovavizhym@mailinator.com",
    amount: 57.25,
    status: "pending",
    payment: "paid",
    date: "2/13/2024",
    products: [
      { name: "Creamy Alfredo Pasta", qty: 1, price: 11 },
      { name: "Honey Mustard Chicken Melt", qty: 1, price: 9 },
    ],
  },
  {
    id: "684d2187a123456789abcd01",
    customer: "Holmes Goodwin",
    email: "cuho@mailinator.com",
    amount: 38.5,
    status: "completed",
    payment: "unpaid",
    date: "7/25/2025",
    products: [
      { name: "Chocolate Croissant", qty: 4, price: 4.5 },
      { name: "Latte", qty: 2, price: 3.75 },
    ],
  },
  {
    id: "687g6fdd8f01e2a5bb0cc001",
    customer: "Erin Hobbs",
    email: "zudizura@mailinator.com",
    amount: 64,
    status: "pending",
    payment: "paid",
    date: "9/10/2024",
    products: [
      { name: "Eggs Benedict", qty: 2, price: 12 },
      { name: "Espresso", qty: 2, price: 4 },
      { name: "Fruit Bowl", qty: 2, price: 10 },
    ],
  },
  {
    id: "6e0g8f5d7c9b2e4ab1230002",
    customer: "Aaron Burris",
    email: "jihuhitob@mailinator.com",
    amount: 41,
    status: "completed",
    payment: "paid",
    date: "1/13/2025",
    products: [
      { name: "Classic Pancakes", qty: 3, price: 5 },
      { name: "Berry Smoothie", qty: 2, price: 8 },
      { name: "Ham Sandwich", qty: 1, price: 10 },
    ],
  },
  {
    id: "7h8i9j0k1l2m3n4o5p6q7r8s",
    customer: "Galvin Pope",
    email: "dydawy@mailinator.com",
    amount: 29.9,
    status: "pending",
    payment: "unpaid",
    date: "6/09/2025",
    products: [
      { name: "Avocado Toast", qty: 2, price: 7.5 },
      { name: "Orange Juice", qty: 1, price: 4.9 },
      { name: "Scone", qty: 2, price: 5 },
    ],
  },
  {
    id: "9t0u1v2w3x4y5z6a7b8c9d0e",
    customer: "Quemby Ratliff",
    email: "cumutyrot@mailinator.com",
    amount: 32.75,
    status: "completed",
    payment: "paid",
    date: "2/25/2024",
    products: [
      { name: "Mocha", qty: 2, price: 6 },
      { name: "Turkey Bagel", qty: 1, price: 8.75 },
      { name: "Apple Pie", qty: 1, price: 12 },
    ],
  },
  {
    id: "2r3s4t5u6v7w8x9y0z1a2b3c",
    customer: "Kirsten Gutierrez",
    email: "lyqiwymu@mailinator.com",
    amount: 23,
    status: "cancelled",
    payment: "unpaid",
    date: "3/10/2025",
    products: [
      { name: "Chai Latte", qty: 2, price: 6 },
      { name: "Vegan Muffin", qty: 2, price: 5.5 },
    ],
  },
  {
    id: "5g6h7j8k9l0m1n2o3p4q5r6s",
    customer: "Abdullah Mustafa",
    email: "abdullah.mustafa@email.com",
    amount: 71.5,
    status: "pending",
    payment: "paid",
    date: "7/13/2025",
    products: [
      { name: "Fried Chicken", qty: 4, price: 10 },
      { name: "Cola", qty: 3, price: 4.5 },
      { name: "Chocolate Cake", qty: 2, price: 7 },
    ],
  },
  {
    id: "7h8i9j0k1l2m3n4o5p6q7r8t",
    customer: "Sheharyar Mustafa",
    email: "sheharyar.mustafa@email.com",
    amount: 54.75,
    status: "completed",
    payment: "paid",
    date: "10/10/2025",
    products: [
      { name: "Pizza", qty: 2, price: 12.5 },
      { name: "Garlic Bread", qty: 3, price: 5.25 },
      { name: "Iced Tea", qty: 1, price: 7 },
    ],
  },
];

// Status & Payment color mapping
const statusColors = {
  completed: "#2ecc40",
  pending: "#ffae00",
  cancelled: "#e74c3c",
};
const paymentColors = {
  paid: "#2ecc40",
  unpaid: "#e74c3c",
};

export default function UserInfo() {
  const navigate = useNavigate();
  const [selectedOrders, setSelectedOrders] = useState(null);

  return (
    <div style={{ padding: 32, minHeight: "90vh", background: "#f8fafc" }}>
      <div
        style={{
          background: "#fff",
          padding: 28,
          borderRadius: 22,
          boxShadow: "0 2px 24px #e8eaef",
          position: "relative",
        }}
      >
        {/* Go Back Button */}
        <button
          style={{
            position: "absolute",
            left: 32,
            top: 32,
            background: "#fff",
            border: "1.5px solid #ff3030",
            borderRadius: 12,
            padding: "10px 26px",
            fontWeight: 600,
            fontSize: 15,
            color: "#ff3030",
            cursor: "pointer",
            boxShadow: "0 0 12px #ffeaea",
            letterSpacing: 1,
          }}
          onClick={() => navigate("/")}
        >
          ← Go Back To Dashboard
        </button>
        <h2
          style={{
            fontWeight: 600,
            fontSize: "1.4rem",
            margin: "24px 0 24px 0",
            textAlign: "center",
          }}
        >
          All Users
        </h2>
        {/* Users Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "1rem",
              background: "#fff",
            }}
          >
            <thead>
              <tr style={{ background: "#f5f5fc" }}>
                <th style={tdHead}>No</th>
                <th style={tdHead}>Name</th>
                <th style={tdHead}>Email</th>
                <th style={tdHead}>Phone</th>
                <th style={tdHead}>Created</th>
                <th style={tdHead}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr key={idx}>
                  <td style={tdCell}>{idx + 1}</td>
                  <td style={tdCell}>{u.name}</td>
                  <td style={tdCell}>{u.email}</td>
                  <td style={tdCell}>{u.phone}</td>
                  <td style={tdCell}>{u.created}</td>
                  <td style={tdCell}>
                    <button
                      style={orderBtn}
                      onClick={() =>
                        setSelectedOrders(
                          orders.filter((o) => o.email === u.email)
                        )
                      }
                    >
                      Order History
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Order History Modal */}
      {selectedOrders !== null && (
        <OrderHistoryModal
          orders={selectedOrders}
          onClose={() => setSelectedOrders(null)}
        />
      )}
    </div>
  );
}

// Table Styles
const tdHead = {
  fontWeight: 600,
  padding: "12px 10px",
  background: "#f5f5fc",
  borderBottom: "2px solid #f2f3f6",
};
const tdCell = {
  padding: "12px 8px",
  borderBottom: "1.5px solid #f3f4f7",
  textAlign: "center",
};
const orderBtn = {
  background: "#fffbe0",
  border: "1.5px solid #ffcb38",
  borderRadius: "7px",
  color: "#e6aa00",
  padding: "5px 19px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 14,
  transition: "all 0.17s",
};

// Modal for user's order history
function OrderHistoryModal({ orders, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99,
        background: "rgba(50,54,59,0.16)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 36,
          minWidth: 400,
          borderRadius: 22,
          boxShadow: "0 10px 40px #e5e9f7",
          maxWidth: 540,
          width: "100%",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: "1.3rem",
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          Order History
        </h2>
        {orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: 24, color: "#888" }}>
            No orders found for this user.
          </div>
        ) : (
          orders.map((order, idx) => (
            <div
              key={order.id}
              style={{
                border: "1.5px solid #f4f4f7",
                borderRadius: 11,
                padding: "14px 18px",
                marginBottom: 18,
                background: "#fcfcff",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "1.09rem",
                  marginBottom: 6,
                  color: "#222",
                }}
              >
                Order ID: <span style={{ fontWeight: 400 }}>{order.id}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 15,
                  marginBottom: 7,
                }}
              >
                <span>
                  <span style={{ fontWeight: 600 }}>Amount: </span>$
                  {order.amount}
                </span>
                <span>
                  <span style={{ fontWeight: 600 }}>Date: </span>
                  {order.date}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  fontSize: 15,
                  marginBottom: 7,
                }}
              >
                <span>
                  <span style={{ fontWeight: 600 }}>Status: </span>
                  <span
                    style={{
                      background: statusColors[order.status] || "#ddd",
                      color: "#fff",
                      padding: "3px 11px",
                      borderRadius: 9,
                      fontSize: 14,
                    }}
                  >
                    {order.status}
                  </span>
                </span>
                <span>
                  <span style={{ fontWeight: 600 }}>Payment: </span>
                  <span
                    style={{
                      background: paymentColors[order.payment] || "#eee",
                      color: "#fff",
                      padding: "3px 11px",
                      borderRadius: 9,
                      fontSize: 14,
                    }}
                  >
                    {order.payment}
                  </span>
                </span>
              </div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 5 }}>
                Products:
              </div>
              {order.products.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fafbfc",
                    borderRadius: 8,
                    padding: "7px 16px",
                    marginBottom: 5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 15,
                  }}
                >
                  <span>{p.name}</span>
                  <span>
                    Qty: {p.qty}
                    <span
                      style={{ marginLeft: 13, color: "#444", fontWeight: 600 }}
                    >
                      ${p.price}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button
            style={{
              background: "#ff3030",
              color: "#fff",
              border: "none",
              borderRadius: "11px",
              padding: "11px 44px",
              fontWeight: 700,
              fontSize: 16,
              marginTop: 6,
              cursor: "pointer",
              boxShadow: "0 2px 18px #ffe1e1",
            }}
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
