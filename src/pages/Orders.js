import React, { useState } from "react";

// Dummy data with 10 orders
const orderData = [
  {
    id: "0100928",
    customer: "Abdullah Mustafa",
    email: "sheharyarmustafa3@gmail.com",
    amount: 78,
    status: "completed",
    payment: "paid",
    date: "6/14/2025",
    products: [
      { name: "Product 1", qty: 2, price: 30 },
      { name: "Product 2", qty: 1, price: 18 },
    ],
  },
  {
    id: "0100929",
    customer: "John Miller",
    email: "john.miller12@email.com",
    amount: 57.25,
    status: "pending",
    payment: "paid",
    date: "6/14/2025",
    products: [{ name: "Product A", qty: 1, price: 57.25 }],
  },
  {
    id: "0100930",
    customer: "Alia Sheikh",
    email: "aliam.sheikh@email.com",
    amount: 61.5,
    status: "completed",
    payment: "unpaid",
    date: "6/16/2025",
    products: [{ name: "Product B", qty: 2, price: 30.75 }],
  },
  {
    id: "0100931",
    customer: "David Kim",
    email: "david.kim@email.com",
    amount: 42,
    status: "pending",
    payment: "paid",
    date: "6/17/2025",
    products: [{ name: "Product C", qty: 1, price: 42 }],
  },
  {
    id: "0100932",
    customer: "Maria Lopez",
    email: "maria.lopez@email.com",
    amount: 90.75,
    status: "completed",
    payment: "paid",
    date: "6/18/2025",
    products: [
      { name: "Product D", qty: 3, price: 30.25 },
      { name: "Product E", qty: 1, price: 0.25 },
    ],
  },
  {
    id: "0100933",
    customer: "Sara Khan",
    email: "sarakhanyt@email.com",
    amount: 84,
    status: "completed",
    payment: "paid",
    date: "6/19/2025",
    products: [{ name: "Product F", qty: 4, price: 21 }],
  },
  {
    id: "0100934",
    customer: "Mike Patel",
    email: "mike.patel@email.com",
    amount: 58,
    status: "cancelled",
    payment: "unpaid",
    date: "6/20/2025",
    products: [{ name: "Product G", qty: 2, price: 29 }],
  },
  {
    id: "0100935",
    customer: "Anna Bell",
    email: "anna.bell@email.com",
    amount: 120,
    status: "completed",
    payment: "paid",
    date: "6/22/2025",
    products: [{ name: "Product H", qty: 4, price: 30 }],
  },
  {
    id: "0100936",
    customer: "Henry James",
    email: "henry.james@email.com",
    amount: 76,
    status: "pending",
    payment: "paid",
    date: "6/23/2025",
    products: [{ name: "Product I", qty: 2, price: 38 }],
  },
  {
    id: "0100937",
    customer: "Tina Green",
    email: "tina.green@email.com",
    amount: 135,
    status: "completed",
    payment: "paid",
    date: "6/24/2025",
    products: [
      { name: "Product J", qty: 5, price: 27 },
      { name: "Product K", qty: 1, price: 10 },
    ],
  },
];

const statusColors = {
  completed: "#2ecc40",
  pending: "#ffae00",
  cancelled: "#e74c3c",
};

const paymentColors = {
  paid: "#2ecc40",
  unpaid: "#e74c3c",
};

export default function Orders() {
  const [orders, setOrders] = useState(orderData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const ordersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter logic
  const filteredOrders = currentOrders.filter((o) => {
    return (
      (search === "" || o.id.includes(search)) &&
      (statusFilter === "all" || o.status === statusFilter) &&
      (paymentFilter === "all" || o.payment === paymentFilter)
    );
  });

  // Function to open the modal with the order details
  const handleViewOrder = (order) => {
    setSelectedOrder(order); // Set the selected order to show in the modal
  };

  // Function to handle editing an order (could be a redirection to an edit page or inline editing)
  const handleEditOrder = (orderId) => {
    alert("Editing order: " + orderId); // For now, just an alert for edit functionality
  };

  return (
    <div style={{ padding: 24, minHeight: "90vh", background: "#f8fafc" }}>
      <div
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 22,
          boxShadow: "0 2px 24px #e8eaef",
        }}
      >
        <h2 style={{ fontWeight: 600, fontSize: "1.4rem", marginBottom: 24 }}>
          All Orders
        </h2>
        {/* FILTERS */}
        <div
          style={{
            display: "flex",
            gap: 14,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            style={{ padding: 8, borderRadius: 8, border: "1px solid #eee" }}
          >
            <option value="all">Payment</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ padding: 8, borderRadius: 8, border: "1px solid #eee" }}
          >
            <option value="all">Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input
            type="text"
            placeholder="Search by Order ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              minWidth: 200,
              padding: 8,
              borderRadius: 8,
              border: "1px solid #ffc850",
              background: "#fcfbf4",
            }}
          />
        </div>

        {/* ORDERS TABLE */}
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
                <th style={tdHead}>Order ID</th>
                <th style={tdHead}>Customer Name</th>
                <th style={tdHead}>Email</th>
                <th style={tdHead}>Amount</th>
                <th style={tdHead}>Status</th>
                <th style={tdHead}>Payment</th>
                <th style={tdHead}>Date</th>
                <th style={tdHead}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center", padding: 28 }}>
                    No orders found.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((o) => (
                  <tr key={o.id}>
                    <td style={tdCell}>{o.id}</td>
                    <td style={tdCell}>{o.customer}</td>
                    <td style={tdCell}>{o.email}</td>
                    <td style={tdCell}>${o.amount}</td>
                    <td style={tdCell}>
                      <span
                        style={{
                          background: statusColors[o.status] || "#ddd",
                          color: "#fff",
                          padding: "5px 14px",
                          borderRadius: 10,
                          fontWeight: 600,
                          textTransform: "capitalize",
                          fontSize: 13,
                        }}
                      >
                        {o.status}
                      </span>
                    </td>
                    <td style={tdCell}>
                      <span
                        style={{
                          background: paymentColors[o.payment] || "#eee",
                          color: "#fff",
                          padding: "5px 14px",
                          borderRadius: 10,
                          fontWeight: 600,
                          fontSize: 13,
                        }}
                      >
                        {o.payment}
                      </span>
                    </td>
                    <td style={tdCell}>{o.date}</td>
                    <td style={tdCell}>
                      <button
                        style={viewBtn}
                        onClick={() => handleViewOrder(o)}
                      >
                        View
                      </button>
                      <button
                        style={editBtn}
                        onClick={() => handleEditOrder(o.id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            gap: 10,
          }}
        >
          {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                style={{
                  padding: "6px 12px",
                  background: "#ff3030",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
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
              maxWidth: 520,
              width: "100%",
            }}
          >
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: 18,
                textAlign: "center",
              }}
            >
              Order Details
            </h2>
            <div
              style={{
                marginBottom: 22,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{selectedOrder.customer}</div>
                <div style={{ fontSize: 15, color: "#888", marginBottom: 2 }}>
                  {selectedOrder.email}
                </div>
                <div style={{ fontSize: 15 }}>
                  {selectedOrder.status} - {selectedOrder.payment}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 600, fontSize: 18 }}>
                  ${selectedOrder.amount}
                </div>
                <div style={{ color: "#444", fontSize: 15 }}>
                  {selectedOrder.date}
                </div>
              </div>
            </div>
            <div
              style={{
                marginBottom: 14,
                fontWeight: 600,
                fontSize: "1.16rem",
              }}
            >
              Products
            </div>
            <div>
              {selectedOrder.products.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fafbfc",
                    borderRadius: 14,
                    padding: "16px 24px",
                    marginBottom: 11,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 16,
                  }}
                >
                  <span>{p.name}</span>
                  <span style={{ color: "#888", fontWeight: 500 }}>
                    Qty: {p.qty}
                    <span
                      style={{ marginLeft: 16, color: "#444", fontWeight: 600 }}
                    >
                      ${p.price}
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 24 }}>
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
                onClick={() => setSelectedOrder(null)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// TABLE STYLES
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

const viewBtn = {
  background: "#fffbe0",
  border: "1.5px solid #ffcb38",
  borderRadius: "7px",
  color: "#e6aa00",
  padding: "5px 19px",
  marginRight: 7,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 14,
  transition: "all 0.17s",
};

const editBtn = {
  background: "#fff",
  border: "1.5px solid #ff7878",
  borderRadius: "7px",
  color: "#ff3030",
  padding: "5px 19px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 14,
  transition: "all 0.17s",
};
